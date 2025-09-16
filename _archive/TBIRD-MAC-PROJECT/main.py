from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Depends, Request, HTTPException
app = FastAPI()
import asyncio
from ollama import AsyncClient
from fastapi.responses import HTMLResponse
import os

@app.get("/", response_class=HTMLResponse)
def index():
    with open(os.path.join("static", "index.html")) as f:
        return f.read()
    
OLLAMA_BASE_URL = "http://localhost:11434"  # or your running Ollama endpoint

async def get_llm_response(model_name: str, prompt: str) -> str:
    """
    Calls the Ollama API asynchronously for a given model and prompt.
    Returns the LLM's response as a string.
    """
    client = AsyncClient(base_url=OLLAMA_BASE_URL)
    async with client:
        completion = await client.chat(model=model_name, messages=[{"role": "user", "content": prompt}])
        return completion['message']['content']

# ---- Integrate with WebSocket message handler ----

@app.websocket("/ws/chat")
async def websocket_endpoint(websocket: WebSocket):
    params = websocket.query_params
    room = params.get("room", "General Discussion")
    await manager.connect(room, websocket)
    try:
        # Send recent history as before...
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
                sender = msg.get("sender", "User")
                user_message = msg["content"]
                save_message(room, sender, user_message, "message")
                await manager.broadcast(room, {
                    "type": "message",
                    "sender": sender,
                    "content": user_message
                })

                # ----- LLM Agent Async Reply -----
                async def llm_reply():
                    # Choose your agent logic here; round-robin or based on sender/input
                    model = "llama3"  # or "mistral", "phi3", etc
                    prompt = user_message
                    try:
                        # Trigger "typing" indicator
                        await manager.broadcast(room, {
                            "type": "typing",
                            "sender": model
                        })
                        # Query Ollama
                        response = await get_llm_response(model, prompt)
                        save_message(room, model, response, "message")
                        await manager.broadcast(room, {
                            "type": "message",
                            "sender": model,
                            "content": response
                        })
                    except Exception as e:
                        await manager.broadcast(room, {
                            "type": "message",
                            "sender": model,
                            "content": f"[Error: {str(e)}]"
                        })
                asyncio.create_task(llm_reply())

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

