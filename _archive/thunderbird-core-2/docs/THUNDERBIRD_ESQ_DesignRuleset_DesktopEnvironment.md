# THUNDERBIRD.ESQ – Desktop Environment & Application Launcher Spec

---

## 🌐 Desktop Philosophy

> **The desktop is not a dashboard. It is a surface.**  
> Icons are metaphors, not entities. Apps are launched with purpose, not convenience.  
> There is no dock, no persistent overlay, no visual clutter.

---

## 🖼 Default Desktop State

- The desktop displays a **tiled pattern** (as configured in the Control Panel)
- No app windows are open by default
- There is **no dock**, no floating menus
- The user must **click the pyramid icon** (top-left, replaces Apple menu) to launch applications

---

## 🧭 Application Access

- Clicking the **pyramid menu** reveals a drop-down list of installed system tools:
  - BIG GIFS
  - SPRITE SLICER
  - CHIPTUNE COMPOSER
  - PIXEL PAINTER
  - BBS
  - CHAT
  - SETTINGS
  - SHUTDOWN

- Letting go on a menu item launches the application
- Apps appear in floating, draggable windows that:
  - Respect pixel grid alignment
  - Maintain z-order/focus priority
  - Can be minimized or closed using standard window controls

---

## 🖱 Desktop Interactivity

- The desktop background can be clicked to **interact with placed icons**:
  - **App shortcuts**
  - **Admin-posted notes**
  - **Visual affordances like "Trash" or "Log Viewer"**

- Right-click is **disabled system-wide**
- Double-click on a desktop icon opens its associated action (launch, view, etc.)
- Icons do **not** represent live files—they are symbolic launchers or messages

---

## 📱 Touch Interaction Support

- Tap = select
- Long press = hover
- Drag = move window
- Double-tap = close or minimize (depending on control panel settings)
- Landscape mode preferred

---

## 📚 Reference Systems

This desktop interaction model is based on:

- `system.css` (GitHub) — primary UI layout and visual constraints
- [WacOS_BaSYS_6](https://github.com/seanpm2001/WacOS_BaSYS_6/tree/BaSYS-6_Main-dev/6) — structural inspiration
- *The System 6 Book* — legacy behaviors for menus, windows, and UI metaphors
- Apple Human Interface Guidelines (1987) — spacing, pointer roles, z-order logic

---

## 🛠 Implementation Notes

- Icons placed on desktop via:
  ```js
  desktop.addIcon({ name, type, action });
  ```
- Menu structure defined as nested object and rendered with system.css menu UI
- No persistent dock or taskbar
- All elements grid-aligned and managed through window manager state

---
