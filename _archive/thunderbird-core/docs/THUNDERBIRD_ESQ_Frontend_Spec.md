# THUNDERBIRD.ESQ – Frontend Architecture Specification

## 🖥 Layout & Display System

- **Design Reference Resolution:**  
  1024×1024 canvas. Reflects the visual format of the boot experience and ensures a predictable, squared layout foundation.

- **Original System 6 Baseline:**  
  512×342, the Macintosh Plus resolution. This informs font sizing, icon proportions, and window density.

- **Responsive Scaling:**  
  The shell UI must fluidly adapt to browser dimensions while preserving internal logic and grid alignment.  
  - Scaling *changes display*, not intent.  
  - All interaction regions remain fully accessible regardless of device.

- **Terminal Compatibility:**  
  Telnet users receive a version of the BBS rendered in ASCII, emulating a full experience consistent with the GUI—purely in terminal logic.

---

## 🪟 Windowing System

- **Movement and Resizing:**  
  Windows are draggable by title bar and resizable from corners/sides.

- **Snap and Tile Logic:**  
  - Snaps to corners or edge-grids  
  - Tiling initiated optionally for power workflows  
  - Layering and Z-index behavior defined by last-focus

- **System Integration:**  
  - Close = hide (not destroy)  
  - Recoverable via system menubar  
  - Animations: Pop close with bounce + click sound

- **Concurrency:**  
  Apps and comms channels (e.g., BBS + BIG GIFS) run side-by-side  
  - Modular architecture prevents collapse  
  - Session state stored temporarily for resume-ability

---

## 🧰 Application Architecture

Each app is a **modular static web app**.  
- Self-contained in `/apps/{slug}/`  
- Built with HTML, CSS, JS  
- Manifest-based registration with the OS shell

**Structure:**

```
/apps/big-gifs/
├── index.html
├── app.js
├── app.css
├── manifest.json
└── assets/
```

**Manifest format:**

```json
{
  "name": "BIG GIFS",
  "slug": "big-gifs",
  "icon": "assets/icons/big-gifs.png",
  "defaultSize": [640, 480],
  "resizable": true,
  "menu": ["File", "Edit", "Export"],
  "description": "Modular GIF animation toolkit."
}
```

Apps must export:

```js
export function render(container) {
  // Render logic injected into the shell window
}
```

---

## 🎨 Styling

- `system.css` is the canonical stylesheet
- All apps must conform to or inherit from this spec  
- Icons, colors, padding, font usage, button states, window frames are defined globally

---

## 🧭 Menubar UX

- Global + persistent  
- Default menus:
  - System Settings
  - App Launcher
  - File > Shutdown/Restart

**Contextual Menus**  
When an app is focused:
- App-specific options appear (e.g., Save, Load, Export)  
- BBS and Chat show:  
  - DM Manager  
  - Export Logs  
  - File Transfer System  
  - Thread Watch + Notification

---

## 📁 File Structure (Frontend Root)

```
/
├── index.html
├── boot.html
├── system.css
├── /apps/
├── /assets/
│   ├── /icons/
│   ├── /audio/
│   ├── /images/
│   └── /fonts/
├── /system/
│   ├── menubar.js
│   ├── window.js
│   ├── notifications.js
│   └── sessionManager.js
├── /themes/
├── /vendor/
└── /docs/
```

---

## 🧠 Interaction Philosophy

> Straightforward. Easy. Fun. Free.

Users should feel like they've discovered something powerful, secret, and timeless.

- No ads  
- No tracking  
- No manipulation

Identity is opt-in:
- Username + password = SHA256 hash  
- Stored as cookie on device  
- Used only to assert authorship across time  
- IPs retained temporarily for moderation

---

