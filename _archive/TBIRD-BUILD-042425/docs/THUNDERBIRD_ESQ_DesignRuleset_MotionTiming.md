# THUNDERBIRD.ESQ – Motion Language & Interaction Timing (System 6 Base)

---

## 🕰️ Motion Philosophy

> Motion in THUNDERBIRD.ESQ exists to communicate action, not to decorate it.  
> Inspired by System 6: all interface elements appear and respond with precision, immediacy, and purpose.

All timing adheres to a low-latency interaction loop suitable for limited hardware emulation, with optional future evolution toward IRIX-style depth and transition richness.

---

## 🔄 System-Wide Timing Rules (System 6 Model)

| Action                 | Behavior         | Timing            | Notes                                    |
|------------------------|------------------|--------------------|------------------------------------------|
| Window Open           | Instant          | 0–50ms             | Simulates QuickDraw rendering snap       |
| Window Close          | Instant          | 0–50ms             | Optional “pop” sound cue only            |
| Menu Open             | Instant          | 0ms                | No fade or slide, appears on click       |
| Menu Close            | Instant          | 0ms                | Click-away or select-to-dismiss          |
| Cursor Change         | Instant swap     | 0ms                | No delay on wristwatch ↔ pointer         |
| Button Click Feedback | Downstate pop    | <80ms              | Visual depression + optional sound       |
| Icon Select           | Snap highlight   | <50ms              | Highlight pixel grid alignment           |
| Alert Dialog Open     | Instant + Beep   | 0–100ms            | No fade, centered with modal frame       |
| Boot Sequence Lines   | Timed sequence   | 2.5–3s per line    | Matches existing boot terminal behavior  |
| Scroll (manual)       | Direct movement  | 0ms per action     | No easing or scroll inertia              |

---

## 🎛 UX Constraints

- No motion easing (`ease-in`, `ease-out`, etc.) during standard system tasks
- All transitions are either `none` or `step-start`
- Feedback is **binary**: present or not. No animation fuzziness.
- Elements snap to grid-aligned positions
- Use CSS transitions only where **undetectable** at runtime

---

## 🧪 Optional IRIX-Inspired Layers (Future Phase)

Once baseline is complete, IRIX-style motion may be introduced via optional theme layer:

- Window glides
- Fades on close
- Shadow pulse on icon hover
- Dim + zoom modal windows

These features will be **scoped to `irix-theme.css`** and disabled by default in the system kernel.

---

## 📂 Implementation Targets

- `/system/window.js`  
  - Add open/close pop behavior
- `/system/menu.js`  
  - Add show/hide logic with snap placement
- `/system/cursor.js`  
  - Inject cursor transitions using `document.body.style.cursor`

---

## 🛠 Testing Tools

- `test-motion.html` visualizes all standard transitions and confirms zero-latency alignment
- Use screen recording at 60fps to validate “snap” appearance in UI

---

