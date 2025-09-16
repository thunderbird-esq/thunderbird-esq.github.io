import os
import json
import sqlite3
import uuid
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Depends, Request, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.security import APIKeyHeader
from pydantic import BaseModel
from typing import Dict, Set

import asyncio

API_KEYS = {"key1", "key2"}  # replace with your actual keys

DB_PATH = "chat_history.db"
STATIC_PATH = "static"
os.makedirs(STATIC_PATH, exist_ok=True)

app = FastAPI()
app.mount("/static", StaticFiles(directory=STATIC_PATH), name="static")

api_key_header = APIKeyHeader(name="X-API-Key", auto_error=False)

def get_api_key(api_key: str = Depends(api_key_header)):
    if api_key not in API_KEYS:
        raise HTTPException(status_code=403, detail="Invalid API Key")
    return api_key

# ---- Chat Room Management ----

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, Set[WebSocket]] = {}  # room_id -> set of connections

    async def connect(self, room: str, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.setdefault(room, set()).add(websocket)

    def disconnect(self, room: str, websocket: WebSocket):
        self.active_connections.get(room, set()).discard(websocket)

    async def broadcast(self, room: str, message: dict):
        for connection in list(self.active_connections.get(room, set())):
            try:
                await connection.send_json(message)
            except Exception:
                pass  # Ignore send errors

manager = ConnectionManager()

# ---- SQLite History ----

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS messages (
        id TEXT PRIMARY KEY,
        room TEXT,
        sender TEXT,
        content TEXT,
        type TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )''')
    conn.commit()
    conn.close()

def save_message(room, sender, content, mtype):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("INSERT INTO messages (id, room, sender, content, type) VALUES (?, ?, ?, ?, ?)",
              (str(uuid.uuid4()), room, sender, content, mtype))
    conn.commit()
    conn.close()

def load_history(room, limit=50):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT sender, content, type, timestamp FROM messages WHERE room=? ORDER BY timestamp DESC LIMIT ?",
              (room, limit))
    rows = c.fetchall()
    conn.close()
    return [
        {"sender": row[0], "content": row[1], "type": row[2], "timestamp": row[3]}
        for row in reversed(rows)
    ]

init_db()

# ---- WebSocket Endpoint ----

@app.websocket("/ws/chat")
async def websocket_endpoint(websocket: WebSocket):
    params = websocket.query_params
    room = params.get("room", "General Discussion")

    await manager.connect(room, websocket)
    try:
        # On connect, send history
        history = load_history(room)
        for msg in history:
            await websocket.send_json({
                "type": msg["type"],
                "sender": msg["sender"],
                "content": msg["content"],
                "timestamp": msg["timestamp"]
            })

        while True:
            data = await websocket.receive_text()
            msg = json.loads(data)

            if msg["type"] == "typing":
                await manager.broadcast(room, {
                    "type": "typing",
                    "sender": msg.get("sender", "Unknown")
                })
            elif msg["type"] == "message":
                save_message(room, msg.get("sender", "User"), msg["content"], "message")
                await manager.broadcast(room, {
                    "type": "message",
                    "sender": msg.get("sender", "User"),
                    "content": msg["content"]
                })
                # LLM agent stub: inject here if you want to trigger AI model responses
                # await manager.broadcast(room, {"type": "message", "sender": "llama3", "content": "AI response..."})
            elif msg["type"] == "image":
                save_message(room, msg.get("sender", "User"), msg["url"], "image")
                await manager.broadcast(room, {
                    "type": "image",
                    "sender": msg.get("sender", "User"),
                    "url": msg["url"]
                })
            elif msg["type"] == "code":
                save_message(room, msg.get("sender", "User"), msg["code"], "code")
                await manager.broadcast(room, {
                    "type": "code",
                    "sender": msg.get("sender", "User"),
                    "code": msg["code"],
                    "language": msg.get("language", "python")
                })
    except WebSocketDisconnect:
        manager.disconnect(room, websocket)

# ---- REST Endpoint: Send Message via HTTP ----

@app.post("/api/message")
async def api_message(req: Request, api_key: str = Depends(get_api_key)):
    data = await req.json()
    room = data.get("room", "General Discussion")
    msg_type = data.get("type", "message")
    sender = data.get("sender", "User")
    content = data.get("content", "")
    if msg_type not in {"message", "image", "code"}:
        return {"status": "error", "error": "Invalid type"}

    save_message(room, sender, content, msg_type)
    await manager.broadcast(room, {
        "type": msg_type,
        "sender": sender,
        "content": content
    })
    return {"status": "ok"}

# ---- (Optional) Static Homepage ----

@app.get("/", response_class=HTMLResponse)
def index():
    with open(os.path.join(STATIC_PATH, "index.html")) as f:
        return f.read()

