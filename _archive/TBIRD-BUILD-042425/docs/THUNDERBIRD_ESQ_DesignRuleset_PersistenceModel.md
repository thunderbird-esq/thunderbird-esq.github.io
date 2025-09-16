# THUNDERBIRD.ESQ – Persistence Model Specification

---

## 💾 Memory Philosophy

> **Nothing is saved unless the user chooses to save it.**  
> Memory is a deliberate act. Applications do not auto-save or auto-recover.  
> This design preserves performance, privacy, and system clarity.

---

## 🔒 Persistence Policy

- Apps must not auto-save state on close or crash
- Only **explicit save/export** events store data persistently
- The OS is not responsible for restoring unsaved work

---

## 🧠 Data Storage Medium

| Medium        | Use Case                          |
|---------------|-----------------------------------|
| `IndexedDB`   | All persistent saved assets       |
| `localStorage`| Theme, user preferences, state flags |
| `Cookies`     | Encrypted session state (optional) |
| `Blob` links  | Exported files to local disk      |

---

## 💡 Save / Load UX

- Apps expose `Save` / `Export` options:
  - Save to Filesystem (creates `.tbesq`)
  - Export for download or sharing
- Apps expose `Load` / `Import` to open existing `.tbesq` from filesystem view
- No app may write to another app’s state

---

## 🧩 Example: BIG GIFS

- User works on an animation
- Quits app without exporting: **data is lost**
- User exports `.gifx.tbesq`: stored in IndexedDB and appears in Finder
- Later: User opens Finder > Opens saved file > BIG GIFS rehydrates session

---

## 🧷 Retention Limits

- IndexedDB will track:
  - Max 100 files per app (eviction policy FIFO)
  - Max total size (e.g. 10MB) per origin
- Files older than 30 days may be flagged for deletion unless pinned
- No centralized server = **user must back up** their `.tbesq` files manually

---

## 🔢 Versioning Logic

All saved files contain embedded version metadata:
```json
{
  "app": "big-gifs",
  "version": "v0.4.1",
  "created": "2025-04-23T03:23:00Z",
  "data": { ... }
}
```

- Apps must validate version on load
- OS rejects malformed or incompatible `.tbesq` files
- Optional: app can offer upgrade logic per version diff

---

## 🚫 What is *Not* Persisted

- In-progress states
- Chat logs (unless explicitly exported)
- BBS drafts (manual save only)
- Theme toggles without confirmation

---

## 🛠 Dev Interface

Apps must handle persistence via:

```js
context.saveState(data)
context.loadState()
context.exportAsset(data, type)
```

- All persistence is scoped to app ID and type
- IndexedDB key: `${appId}:${fileId}`

---

