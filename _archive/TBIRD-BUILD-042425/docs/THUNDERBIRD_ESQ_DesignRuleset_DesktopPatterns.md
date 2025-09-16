# THUNDERBIRD.ESQ – Design Ruleset: Desktop Pattern System

## 🖼 Desktop Pattern Rendering

THUNDERBIRD.ESQ emulates the Macintosh System 6 desktop environment using tile-based pattern rendering.

---

## 🧠 Behavioral Model

- Backgrounds are not color fills but **repeating bitmap patterns**
- Patterns emulate **8×8 or 16×16 pixel tiles**, rendered as a full-screen background
- Directly inspired by System 6's Control Panel patterns
- Fully persistent via `localStorage`
- Configurable through the THUNDERBIRD Control Panel

---

## 🗃 Pattern File Structure

All system patterns are stored under:

```
/assets/patterns/
├── grid.png
├── checker.png
├── irix-weave.png
├── diagonal-stripes.png
└── custom/
    └── [username-hash]-pattern1.png
```

- Format: PNG
- Dimensions: 8x8 or 16x16 pixels
- Color Mode: 1-bit or binary color
- Naming: lowercase-with-dashes

---

## 🎛 API Reference

### Set a desktop background pattern
```js
desktop.setBackgroundPattern('grid');
```

### List all available background patterns
```js
desktop.getAvailablePatterns();
// => [{ name: "grid", preview: "/assets/patterns/grid.png" }, ...]
```

### Import a new pattern from user upload
```js
desktop.importPattern(name, imageFile);
// Adds new pattern to /assets/patterns/custom/
```

---

## 🎨 User Interface Behavior

- **Desktop Control Panel**
  - Pattern preview grid
  - "Use Pattern" button
  - Optional "Design Your Own Pattern" mode
- Pattern is applied in real time
- Persisted using localStorage or IndexedDB
- "Erase/Repaint" interaction simulates original System 6 UX (optional animation layer)

---

## 🪞 Telnet Rendering (ASCII Fallback)

- Patterns translated to ASCII character fills
- Characters include: `▒`, `░`, `█`, `#`, `:`
- User can toggle pattern style via BBS preferences

---

## 🧬 Notes

- Future patterns may include interactive dithering or IRIX-styled accent patterns
- Patterns used for theming must pass contrast and accessibility standards
- No gradient fills allowed without strict specification

