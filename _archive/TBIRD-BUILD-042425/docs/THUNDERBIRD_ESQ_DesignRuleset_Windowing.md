# THUNDERBIRD.ESQ – Windowing Behavior Specification

---

## 🧱 Window Philosophy

> Windows in THUNDERBIRD.ESQ are ritual vessels—interactive zones governed by pixel alignment and controlled scope.  
> They should be movable, resizable, and never arbitrary.

This specification defines how windows behave, how they are controlled, and how they interact with the broader construct.

---

## 🔲 Window Structure

Each application window contains:
- A title bar with the app name
- A close box (top-left)
- A draggable area (entire title bar)
- A content frame
- A **bottom-right corner resize handle**

---

## 🎛 Window Behavior

| Action          | Behavior                     |
|----------------|------------------------------|
| Drag           | Click and hold title bar to move |
| Close          | Click red close box (top-left) |
| Focus          | Click window or bring to front via Control Panel |
| Resize         | Drag bottom-right corner handle |
| Snap to grid   | Enabled (8px alignment)      |
| Overlap        | Allowed (z-order managed)    |
| Layering       | Most recently clicked = top  |

---

## ↔️ Resizing Behavior

- **Default Resizing:** Bottom-right corner handle only
- **Aspect Ratio:** Unlocked unless defined by app
- **Minimum Size:** 200x100px unless overridden
- **Snap-to-grid:** Resizing aligns to 8px increment grid
- **Touch Support:** Tap/hold corner and drag (optional, phase two)

---

## 📏 Window Dimensions

- Apps define **preferred default size**, but user can override
- Size state saved between sessions in `localStorage`
- Fullscreen mode is **not supported**—apps are windowed-only

---

## 🖼 Z-Order & Window Layering

- Active window is always topmost
- Click-to-focus behavior governs window order
- `Ctrl + Tab` cycles through open windows (keyboard nav)

---

## 🛠 Implementation Notes

- Resizing handled via:
  ```js
  window.onmousedown = (e) => {
    if (e.target.classList.contains('resizer')) {
      // Begin resize logic
    }
  }
  ```
- Z-order via `z-index`, managed with focus tracking stack
- Each window is created with:
  ```js
  windowManager.createWindow({ title, appId, resizable: true });
  ```

---

## 🧬 Future Enhancements (IRIX Layer)

- Optional resizable edges and smart snap
- Themed border glow during resize
- Tiled layout options for multitasking view

---
