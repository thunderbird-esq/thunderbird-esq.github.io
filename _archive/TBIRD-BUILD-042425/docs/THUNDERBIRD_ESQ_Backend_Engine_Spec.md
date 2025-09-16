# THUNDERBIRD.ESQ – Backend / Engine Design Specification

---

## 🧠 State Management Philosophy

THUNDERBIRD.ESQ operates without a traditional server-side database. All session data is handled **client-side** by default, minimizing surface area for abuse and maximizing user control.

### Memory Stack

| Layer         | Technology       | Purpose                                      |
|---------------|------------------|----------------------------------------------|
| 🔒 Identity    | `Cookies` (SHA256) | Usernames and password hashes (stored locally, used for attribution only) |
| 🧠 Preferences | `localStorage`   | Theme, window positions, app state           |
| 📄 Workspace   | `IndexedDB`      | App-specific data (e.g., GIF timelines, music patterns) |
| 📦 Snapshots   | JSON Export      | Manual save/load per application             |

---

## 🔧 Application-to-Core Communication

Each application is rendered via:

```js
render(container, context)
```

Where `context` contains:

```js
{
  emit(eventType: string, payload?: object),
  notify(message: string, type?: 'info' | 'success' | 'warn' | 'error'),
  requestSave(): void,
  openFileDialog(acceptedTypes: string[], callback: Function),
  getUserHash(): string | null,
  registerHotkeys(hotkeyMap: object)
}
```

All communication is **scoped, injected, and auditable**. No global scope tampering allowed. 

Event bus exists only for OS-level signals (e.g., `user:login`, `theme:change`), with listener limits and name validation.

---

## 🧾 BBS Architecture – Supabase-Powered

THUNDERBIRD.ESQ will use **Supabase** for its thread-based BBS system.

### Implementation:

- `threads`, `replies` tables
- JSON metadata for flags, IP hashes
- Optional auth; anonymous posting with user hash/cookie
- Realtime sync via `supabase.realtime`

### Moderation Tools:

- Mod-only panel for visibility toggles
- Soft deletes
- IP + hash-based rate limiting
- Flagged post queue

**Pros:**  
✅ Fast  
✅ Scalable  
✅ Full control via Row-Level Security  
✅ Easily styled and embedded inside the OS shell

**Telnet:**  
A Node.js bridge will optionally expose BBS interaction via Telnet emulation.

---

## 💬 IRC Integration

### Phase 1: Simulated IRC via Supabase

- Use `channels`, `messages`, `users` tables
- WebSockets via `supabase.realtime`
- Emulates `/join`, `/msg`, `/me` behavior
- Embedded chat UI in OS

### Phase 2 (optional): Full IRC Daemon

- Deploy `ngircd` or `InspIRCd` on micro VPS
- Bot bridges IRC ↔ Supabase  
- In-browser users use styled web client  
- Power users connect via native IRC

**Pros:**  
✅ Total control  
✅ Scalable  
✅ Optional ops complexity

---

## 📁 P2P File Transfer

Using **WebRTC** with a minimalist signaling server:

- Peer connects to peer via browser  
- No central file storage  
- Transfer initiated via **consent modal**  
- File never touches server

### Hardening Measures

- Max file size: 10MB  
- Allowed types: `.zip`, `.txt`, `.tbesq`  
- Sender info (nickname, IP hash) shown before accept  
- Flagged transfers queue for mod review  
- Transfer activity is rate-limited + tracked (not stored)

---

## 🔐 Backend Philosophy

- No unrequested contact  
- No silent sync  
- No implicit retention  
- Consent + context required for all real-time actions  
- Security is built from simplicity, not complexity

---

## 🧬 Future Integration Points

- BBS to Telnet bridge  
- File system virtualization via local IndexedDB  
- AI integration endpoint for autonomous access (identity proxy)  
- Save-state archive manager (`.tbesq` format)

---

