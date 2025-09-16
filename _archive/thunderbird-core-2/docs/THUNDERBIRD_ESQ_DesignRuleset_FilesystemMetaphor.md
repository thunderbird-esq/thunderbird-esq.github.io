# THUNDERBIRD.ESQ – Filesystem Metaphor & UX Specification

---

## 🧠 Filesystem Philosophy

> There is no real disk.  
> But the illusion of persistent structure must remain sacred.  
> THUNDERBIRD.ESQ simulates a Finder-style visual directory using local browser storage only.

---

## 🗂️ Simulated Finder Interface

- A **dedicated system window** exists: `FILESYSTEM`
- Modeled visually after **System 6 Finder**
- Lists saved `.tbesq` assets from:
  - Applications (BIG GIFS, COMPOSER, etc.)
  - BBS downloads
  - Chat file transfers
- Items appear with:
  - Name
  - Originating app icon
  - Timestamp
  - "Open in App" or "Export" actions

### File Types

| Extension         | Type                    |
|------------------|-------------------------|
| `.paint.tbesq`   | Pixel Painter image     |
| `.slice.tbesq`   | Sprite Slicer output    |
| `.gifx.tbesq`    | BIG GIFS animation data |
| `.modx.tbesq`    | Chiptune Composer module|
| `.log.tbesq`     | Chat/BBS transcript     |

---

## 💾 Storage Implementation

- All file data stored in `IndexedDB` per browser instance
- Files persist between sessions unless user clears cache
- Each file stored with:
  - `appId`
  - `createdAt`
  - `type`
  - `data` payload (JSON, blob, or URI)
  - `name` (user-defined or auto)

---

## 🔍 Filesystem Window Capabilities

- Classic list view (no icon grid, no folder nesting)
- Column headers: Name · App · Created · Size
- Context actions:
  - Open
  - Export as file
  - Delete from local storage
- Optional: "Inspect" button reveals metadata in modal

---

## 📤 Export & Sharing

- All `.tbesq` files can be:
  - Saved locally as `.json` or `.png`
  - Sent via Chat or attached in BBS posts
- Apps call `context.exportAsset(data, type)` to generate files
- Files appear instantly in Filesystem view after save

---

## 🚫 No True Filesystem

- No multi-user file storage
- No directories, search, or sorting (for v0.x)
- No file "editing" outside of originating app

---

## 📚 Visual & Behavioral References

This simulated environment is modeled after:

- **Apple System 6 Finder**
  - Window style
  - Icon structure
  - Menu placement
- **WacOS Finder Clone** — for layout scaffolding
- **system.css** — governs visual fidelity and spacing

---

## 🛠 Developer Notes

- Filesystem UI is rendered from `filesystem.getAll()` call
- All entries stored in IndexedDB with `fileId`
- Cleanup routine auto-purges older items beyond user quota

---

