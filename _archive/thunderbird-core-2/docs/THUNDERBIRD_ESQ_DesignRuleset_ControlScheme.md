# THUNDERBIRD.ESQ – Control Scheme & Input UX Specification

---

## 🎮 Input Philosophy

> **One button. Two modifiers. Full control.**  
> The user interacts on the system’s terms—keyboard-first, mouse-compatible, and touch-accessible.  
> Inspired by System 6's simplicity and extensibility, refined for Telnet and mobile adaptation.

---

## 🖱 Mouse Behavior

| Input Type        | Behavior                      |
|-------------------|-------------------------------|
| Left Click        | Select, activate              |
| Right Click       | Disabled system-wide          |
| Double Click      | Open apps / files / items     |
| Hover             | Tooltip or visual response    |
| Scroll Wheel      | Vertical scroll               |
| Touch Tap         | Emulates left click           |
| Long Press        | Emulates hover (touch only)   |

### Implementation Notes

- All right-clicks suppressed via:
  ```js
  window.addEventListener('contextmenu', e => e.preventDefault());
  ```

- Long-press maps to hover/select behavior on mobile
- No modern browser context menu usage

---

## ⌨️ Keyboard Behavior

Keyboard is the primary input method. All interface actions must be available by shortcut.

### 🔢 Modifier Key Roles

| Modifier Key      | Usage Context               |
|-------------------|-----------------------------|
| `⌘` / `Ctrl`      | System and file actions     |
| `Alt` / `Option`  | Toggle UI components        |
| `Tab`             | Focus next UI element       |
| `Shift + Tab`     | Focus previous              |
| `Esc`             | Dismiss active element      |

### 🧩 Global Shortcuts

| Keys              | Action                      |
|------------------|-----------------------------|
| `⌘ + N`          | Open new window             |
| `⌘ + W`          | Close current window        |
| `⌘ + S`          | Save current app state      |
| `⌘ + .`          | Cancel current operation    |
| `Ctrl + Tab`     | Cycle through windows       |
| `Ctrl + F`       | Launch app finder           |
| `⌘ + Shift + ?`  | Open help / shortcut list   |

---

## 🧭 Panel & Modal Navigation

- All dropdowns, modals, and system windows:
  - Support keyboard traversal via `Tab`, `Shift + Tab`, `Arrow Keys`
  - Use `Enter` to activate, `Esc` to dismiss

---

## 📱 Mobile Interaction Instructions

When accessed via mobile or tablet:

- **Tap** to click or activate
- **Long press** to access hover-style tooltips
- **Drag** to reposition windows (if unlocked)
- **No swipes or pinches**—use toolbar toggles or on-screen buttons
- **Use landscape mode** for best experience
- **Enable keyboard** for input-heavy features (e.g., BBS or Composer)

Help overlay will display this on first mobile visit unless suppressed.

---

## 🔐 Telnet UX Model (BBS)

- Fully keyboard-navigable ASCII interface
- Arrow keys for navigation
- `Return` to confirm
- `Q`, `X`, or `Esc` to exit
- Numeric hotkeys for menus (`1–9`)
- `:` and `/` for commands
- `Ctrl + L` to refresh screen
- `Shift + H` for help / shortcuts

All interactions optimized for **retro terminal clarity** and **screen reader compatibility**.

---

## 🛠 Implementation Checklist

- Global key listener with context-aware routing
- Focus manager with `tabindex` & `role` definitions
- Right-click suppression + custom hover logic
- Input method detection for touch vs keyboard

---

