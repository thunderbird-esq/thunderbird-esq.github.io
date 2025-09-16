# 🧰 THUNDERBIRD.ESQ – SETUP.md

Welcome, collaborator. This document outlines how to set up, run, and contribute to the THUNDERBIRD.ESQ system shell. This OS is built entirely with HTML, CSS, and JavaScript—modular, local-first, CDN-free.

---

## 🚀 LOCAL PREVIEW

To run the OS environment:

### Option 1: Python HTTP Server (Zero Install)
```bash
cd /path/to/thunderbird_esq_cleanboot
python3 -m http.server 8000
```

Visit in browser:
```
http://localhost:8000
```

---

## 🧠 SYSTEM STRUCTURE OVERVIEW

```
/
├── index.html         # Bootloader and desktop shell
├── main.js            # Loads window manager and apps
│
├── /core/
│   ├── system.css     # Global styling (System 6 base)
│   ├── window.js      # Draggable window class
│   └── window-manager.js  # Controls all app instances
│
├── /system/
│   └── menubar.js     # Top bar navigation logic (WIP)
```

---

## 📋 REQUIREMENTS

- A modern browser (Firefox, Chrome, Edge, Safari)
- JavaScript enabled
- Serve via `http://localhost` — `file://` will block JS module imports due to CORS

---

## 🧠 CONTRIBUTOR INSTRUCTIONS

- All dev must be done in **branches**, not `main`
- Every change must preserve **existing functionality**
- Follow `/docs/projectrules.md` to the letter
- Every change must be logged in `DEVLOG.md`

---

## 🎨 DESIGN ETHOS

- Style from `/core/system.css` ONLY
- UI elements follow 1987 Apple System 6 design patterns
- All icons, fonts, audio are **self-hosted**
- Absolutely no external calls, telemetry, or analytics

---

## ❌ COMMON ERRORS

**CORS: Cannot load module script**
> You tried opening `index.html` directly from your file system. Use a local server like `python3 -m http.server`.

**Assets not loading**
> Make sure paths are relative and lowercase. All resources live in `/assets/`, `/fonts/`, or subdirectories of `/apps/`.

**Window doesn't drag**
> Check the console. You likely edited or replaced `window.js` or `window-manager.js` improperly.

---

## 🤝 GET INVOLVED

We want this to be yours.  
Respect the construct. Fork it. Share it. Help us resurrect what the web *used to be*.

```
IN DEFENSE OF OUR FUTURE.
```

— TBESQ
