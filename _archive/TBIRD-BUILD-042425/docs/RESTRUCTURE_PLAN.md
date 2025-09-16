# 📁 THUNDERBIRD.ESQ FOLDER RESTRUCTURING PLAN

This plan migrates legacy HTML, bootup sequences, and BBS prototypes into a modular app-shell system
compliant with the THUNDERBIRD.ESQ `Frontend_Spec`, `AppArchitecture`, and design rules.

---

## ✅ NEW ROOT STRUCTURE

```
/apps/
  /bootup/
    index.html
    main.js                <-- export function render(container, context)
    manifest.json

  /bbs/
    index.html
    main.js
    manifest.json

  /big-gifs/
    index.html
    big-gifs.js
    manifest.json

/core/
  system.css
  retro.css
  fonts/
  audio/
  icons/
  ui/
    windowManager.js
    menubar.js
    filesystem.js
    audio.js
    boot.js

/assets/
  images/
  audio/
```

---

## 🗃️ LEGACY MIGRATION

### Move to `/legacy/`:

- All HTML snapshots:
  - `BIG-GIFS-SPRITE-SLICER-*`
  - `index-999.html`, `index-5-test.html`, etc.
  - `SYSTEM_NOVA_BOOTUP_EXPANDED.html`, etc.
- All non-shell tools
- All ZIP snapshots and interim versions
- Redundant or abandoned builds

---

## 📦 `/apps/` MANIFESTS

Each app needs:

**Example `/apps/bbs/manifest.json`:**
```json
{
  "name": "BBS Terminal",
  "slug": "bbs",
  "icon": "assets/icons/bbs.png",
  "defaultSize": [640, 400],
  "resizable": true
}
```

**Each `main.js`** should expose:
```js
export function render(container, context) {
  // Mounts BBS terminal UI
}
```

---

## 🚀 BOOT HANDOFF

Boot logic must trigger:
```js
context.emit('launch-app', { appId: 'big-gifs' });
```
Instead of hardcoded `window.location`.

---

## 📎 FILESYSTEM + WINDOWING

All apps should render into the window manager:
```js
windowManager.createWindow({
  title: "BIG GIFS",
  appId: "big-gifs",
  resizable: true
});
```

---

## 🧹 CLEANUP

- Remove `.DS_Store`, unversioned zips, unused `index-*` HTMLs
- Archive experimental HTMLs in `/labs/` or `/legacy/`
- Use `README.md` in each app folder to explain UX + state
