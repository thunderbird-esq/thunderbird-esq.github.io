# THUNDERBIRD.ESQ – Application Architecture Specification

---

## 📦 Architecture Philosophy

> Every application is a **self-contained ritual space**,  
> but tools designed for creative chaining must be allowed to **interlock by design**.

Applications run in isolated environments, with no implicit access to each other's data.  
Structured interoperability is available through the OS interface only.

---

## 🧱 Application Model

- Each app is contained in its own directory under `/apps/`
  ```
  /apps/
  ├── big-gifs/
  ├── sprite-slicer/
  ├── chiptune-composer/
  └── pixel-painter/
  ```
- Each app directory contains:
  - `main.js` – application logic
  - `ui.html` – optional interface template
  - `manifest.json` – metadata (window size, icon, title)
  - `data/` – static resources or templates

- The OS bootloader calls each app via:
  ```js
  render(container, context)
  ```

---

## 🧩 Context Object API

Each app receives a scoped `context` object:

```js
{
  emit(eventType, payload),
  saveState(data),
  loadState(): object,
  importAsset(type): Promise<File>,
  exportAsset(data, type): void,
  registerHotkeys(map),
  notify(message, type)
}
```

Apps **never communicate directly** with other apps—only through OS-mediated actions.

---

## 🔒 Sandboxing & Scope

| Resource     | Access                  |
|--------------|--------------------------|
| Filesystem   | None (except user-initiated import) |
| Other Apps   | No direct communication |
| Network      | No internet access      |
| App Data     | Scoped localStorage / IndexedDB |

- All windows and state are scoped by `appId`
- DOM mutations outside app container are blocked

---

## 🔗 Trusted Application Chain

The following tools share intentional interop pathways:

### PIXEL PAINTER → SPRITE SLICER → BIG GIFS → PIXEL PAINTER (Finishing)

| Source        | Target           | Format             |
|---------------|------------------|---------------------|
| PIXEL PAINTER | SPRITE SLICER    | PNG or `.paint.tbesq` |
| SPRITE SLICER | BIG GIFS         | `.slice.tbesq`     |
| BIG GIFS      | PIXEL PAINTER    | `.frame.png`       |

- All transitions require user to **manually export and open**
- OS handles file context and import confirmation

---

## 📨 App Output Sharing via BBS / Chat

- Apps may export `.tbesq` packages via `exportAsset()`
- These can be:
  - Shared via direct chat
  - Attached to threads/posts
  - Previewed with metadata (filename, origin, type)

---

## 🛠 Implementation Notes

- All exports:
  - Stored in IndexedDB temporarily
  - May be downloaded via Blob for backup
  - Use `.tbesq` suffix for compatibility

- File format includes:
  - App ID
  - Version
  - Encoded JSON payload or binary blob
  - Optional screenshot thumbnail

---

