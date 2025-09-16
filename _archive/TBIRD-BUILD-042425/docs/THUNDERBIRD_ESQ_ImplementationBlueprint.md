# THUNDERBIRD.ESQ – Implementation Blueprint

This document defines the project structure, build logic, contributor workflows, and styling conventions for THUNDERBIRD.ESQ. It is the operational standard for all collaborators.

---

## 📁 Repository Structure

```
/
├── index.html               # Boot/desktop interface
├── system.css               # Global styling rules from system.css
├── main.js                  # Window manager + app shell
├── .nojekyll                # GitHub Pages support file
├── README.md                # Project overview
├── /apps/                   # Individual applications
├── /assets/                 # Shared images, audio, icons
├── /fonts/                  # Self-hosted fonts
├── /core/                   # Shared runtime logic
├── /system/                 # Menus, settings, global handlers
├── /docs/                   # Design + spec markdowns
└── /.github/workflows/      # GitHub Actions config
```

---

## 🔧 Application Modules (`/apps/`)

Each tool exists as a self-contained PWA-ready folder:

```
/apps/
├── big-gifs/
├── sprite-slicer/
├── chiptune-composer/
└── pixel-painter/
```

Each contains:
- `index.html` – interface
- `main.js` – logic
- `styles.css` – app-specific styles
- Optional assets, configs, or helpers

---

## 🧠 Core System Logic (`/core/`)

Shared JS modules and CSS:
- DOM helpers
- Canvas utilities
- Audio rendering
- UI component library
- Font and color scheme base

Used by all apps and the system shell.

---

## 🖥️ System Layer (`/system/`)

Orchestrates:
- App launch and termination
- Desktop interactions
- Global menubar
- Notifications
- Settings persistence

---

## 🎨 Baseline Design System

All interfaces must conform to [`system.css`](https://github.com/sakofchit/system.css).

Rules:
- Use provided class names
- Additions must not override base styles
- Custom styles must be modular and scoped
- UI patterns should honor Apple System 6 HIGs

---

## 📥 Static Assets (`/assets/` and `/fonts/`)

Organized into:
- `/assets/images/`, `/audio/`, `/icons/`
- `/fonts/`: Only locally hosted `.woff2`, `.ttf`, etc.

No CDNs. No dynamic fetches. Fully offline-safe.

---

## 🚀 Continuous Deployment

Uses GitHub Actions:
- Trigger: Push to `main`
- Steps: lint → test (optional) → deploy via `actions/deploy-pages`

Site lives at `https://<username>.github.io/<repo>/` or custom domain.

---

## 🔁 Contributor Workflow

- Fork or branch off `main`
- Pull requests only (no direct pushes)
- Required:
  - Descriptive commit messages
  - Screenshot/GIF if UI
  - Docs update if structural

CI must pass before merge.

---

## ⚖️ Collaborator Integrity Protocols

- 🔒 **No destructive changes without discussion**
- 🧠 **Major feature changes must justify themselves**
  - Open issue
  - Provide examples
  - Confirm zero regressions
- 🪶 **Backwards compatibility enforced**
- 📊 **UI redesigns require multi-party review**

---

## 🔐 Ethics, Privacy & Transparency

- No telemetry
- No cookies except session state
- No tracking
- No outside analytics

Only user-facing assets are stored. No private data collection or transmission.

---

