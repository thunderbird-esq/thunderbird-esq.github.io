# THUNDERBIRD.ESQ – Design Ruleset: Typography & Iconography

---

## 🔡 Typography

The system relies on the `system.css` stylesheet for its primary typeface and styling. Typography should reflect the aesthetics of Apple System 6, ensuring clarity, minimalism, and pixel-perfection across interfaces.

### 🖥 System UI & Menus
- **Typeface**: Inherit from `system.css` (typically mimics System 6’s "Chicago"-style bitmap font)
- **Usage**: Window titles, menus, UI controls
- **Guidelines**: Clear at small sizes, high-contrast, all-caps permissible for titles

### 💬 Dialogue & Body Text
- **Typeface**: `system.css` default sans-serif (Helvetica/Arial fallback)
- **Usage**: Application text, help documentation, user prompts
- **Guidelines**: Medium weight, compact line height, avoid long justified blocks

### 🖥 Code & Terminal Text
- **Typeface**: Monospaced font as defined in `system.css` (Courier fallback if needed)
- **Usage**: Terminal sessions, script previews, technical readouts
- **Guidelines**: Preserve spacing, align vertical rhythm with pixel grid

### ℹ️ Future Integration Note
Once IRIX design elements are introduced, alternate fonts (e.g., IRIX "Screen") may be layered in as **accent typefaces**. These will not override `system.css` but will be scoped to specific modules (e.g., 3D File Navigator).

---

## 🖼 Iconography

All icons are derived from retro Macintosh and IRIX influences but constrained to the THUNDERBIRD aesthetic.

### 📦 Style Guidelines
- **Design**: Pixel art, 1px outlines, dithered shading where appropriate
- **Size**: Standard: 32×32px (desktop), 16×16px (menus)
- **File Format**: PNG or SVG (lossless, transparent backgrounds)
- **Naming**: snake-case, no spaces (e.g., `icon-pixel-painter.png`)

### 🧩 Icon States
| State     | Behavior                                  |
|-----------|-------------------------------------------|
| Default   | Greyscale or chrome                       |
| Hover     | Outline glow or color shift (cyan tint)   |
| Active    | Filled highlight (electric cyan)          |
| Disabled  | Low contrast, desaturated, no hover state |

---

## 🎨 Color Integration

Icons should adhere to the system accent palette:

| Role         | Color        | HEX       |
|--------------|--------------|-----------|
| Accent       | Electric Cyan| `#00FFFF` |
| Error        | IRIX Red     | `#FF3366` |
| Success      | Fern Green   | `#44FFAA` |
| Warning      | Gold Yellow  | `#FFC107` |
| System Edge  | Shadow Purple| `#6E5BAA` |

---

## 🛠 Implementation Notes
- Fonts must inherit from `system.css` unless otherwise scoped in a theme override.
- Icons must be rendered crisply at 1× and 2× scale (no blurry scaling).
- All assets should live in `/assets/icons/`, organized by app/module as needed.

---

## 📦 Next Phase
When IRIX UI influence is introduced, a parallel theme profile (`irix-theme.css`) will layer new fonts, motion rules, and interaction feedback.

