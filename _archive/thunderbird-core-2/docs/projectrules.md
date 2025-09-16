# THUNDERBIRD.ESQ – `projectrules.md`

This document defines **non-negotiable rules**, technical expectations, and strict protocols that govern contribution and system behavior in THUNDERBIRD.ESQ. All collaborators must comply.

---

## 🔒 SOURCE CONTROL RULES

- All development occurs in feature branches. `main` is protected.
- All changes go through Pull Requests (PRs). No direct pushes to `main`.
- PRs **must** be reviewed by at least one core maintainer before merge.
- All PRs **must pass CI/CD checks** (GitHub Actions) before merging.

---

## 🧰 FILE STRUCTURE & ORGANIZATION

**Top-level directories:**

```
/
├── /apps/                 # Self-contained tools
├── /core/                 # Reusable logic
├── /system/               # OS shell coordination
├── /assets/               # Static files (images/audio/icons)
├── /fonts/                # Local-only webfonts
├── /.github/workflows/   # GitHub Actions
```

**DO NOT:**
- Create new folders at root without approval.
- Nest unrelated assets in app folders.
- Use relative paths that reference outside an app boundary.

---

## 🖼 DESIGN CONSTRAINTS

- All UI styling must use [`system.css`](https://github.com/sakofchit/system.css) as the **primary source**.
- Apps may import **one custom stylesheet** (`styles.css`) scoped to their container.
- Custom styles must never override `.system-*` class behavior.
- UI color, spacing, and layout should mimic **Apple System 6 HIGs** unless explicitly updated.
- Icons must be pixel-accurate, 1x scale by default, stored in `/assets/icons/`.

---

## 🧪 FUNCTIONALITY RULES

- Each app must expose:
  ```js
  export function render(container) {}
  ```
- Each app must contain a `manifest.json` with:
  ```json
  {
    "name": "BIG GIFS",
    "icon": "big-gifs.png",
    "defaultSize": [512, 342],
    "resizable": true
  }
  ```
- Each app must gracefully handle `load`, `resize`, `close` events.
- No app may read another app’s data without OS mediation.

---

## 💾 DATA + STATE

- Apps may only persist data via:
  - `IndexedDB` (scoped to app)
  - `localStorage` (user prefs)
- No external storage.
- No automatic cross-app saves or restores.
- `.tbesq` is the only valid format for internal file exchange.

---

## 🧑‍💻 CONTRIBUTION PROTOCOL

Every PR **must include**:
- Description of change
- Justification for user impact
- Confirmation of visual integrity
- Updated or new `.md` if core behavior altered

For any visual or architectural change:
- Attach side-by-side screenshots
- Link to the issue/justification thread

For any breaking change proposal:
- Must demonstrate 100% compatibility or explain the regression
- Must prove **no functional loss** for any other tool

---

## 🚫 BANNED PRACTICES

- ❌ No external fonts (Google Fonts, etc.)
- ❌ No CDN scripts
- ❌ No runtime script injection
- ❌ No cookies, tracking, analytics
- ❌ No inline `<script>` blocks except for `index.html`

---

## 🛑 FAILURE TO FOLLOW THESE RULES

- PR will be rejected.
- Contributor may lose commit access.
- Core maintainers may revert the PR and notify via public log.

These rules are enforced to **maintain coherence, trust, and functionality** across the THUNDERBIRD.ESQ system.

---



---

## ✅ PRESERVATION OF FUNCTIONALITY

- All development **must preserve full existing functionality**.
- No refactor or redesign may:
  - Remove core features
  - Alter known behaviors without sign-off
  - Impair accessibility, windowing, or UI harmony

If a collaborator proposes a major change or enhancement:

1. **Open a discussion issue** explaining:
   - What they want to change
   - Why the change improves the user/system experience

2. **Include working code snippets** that prove:
   - The feature works
   - The change will not break prior features
   - The visual and structural consistency remains intact

3. **Wait for sign-off** by core maintainers before implementing.

Every collaborator is expected to contribute not just work—but wisdom.  
The construct should evolve, but never degrade.

---



---

## 📝 DEVLOG REQUIREMENT

After **every approved change**, the collaborator must update `DEVLOG.md` with:

- A clear description of what was changed
- The reason for the change
- Any issues it resolved or introduced
- How it was tested and confirmed to work

This ensures full traceability, context, and accountability across the lifespan of the project.

No merge is complete until the DEVLOG is updated.

---
