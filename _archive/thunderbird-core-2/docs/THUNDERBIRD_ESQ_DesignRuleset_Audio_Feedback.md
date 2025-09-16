# THUNDERBIRD.ESQ – Audio + UX Feedback Design

---

## 🔊 Soundprint Philosophy

> Adapt the System 6 soundset as a ritual base. Augment it with IRIX-appropriate accents and new iconic cues that convey depth, playfulness, and techno-mysticism.

Every interaction emits sound—each with purpose and identity.  
Sound confirms action, communicates mood, and roots the user in a sensory interface.

---

## 🧱 Core Interaction Sounds

| Action                     | Sound Style                      | Filename                  |
|---------------------------|-----------------------------------|---------------------------|
| Click (generic)           | Classic System 6 click            | `click.mp3`               |
| Open Window               | Soft whoosh or slide-in blip      | `window-open.mp3`         |
| Close Window              | Pop + click down (System 6 style) | `window-close.mp3`        |
| Error / Alert             | Short System beep                 | `error-beep.mp3`          |
| Success / Save            | Soft sparkle or confirmation chime| `save-success.mp3`        |
| Boot Sequence             | System 6 startup tone             | `boot-beep.mp3`           |
| Launch BBS                | Mutated dial-up handshake tone    | `bbs-handshake.mp3`       |
| DM/File Transfer Receive  | Ascending 2-tone chirp            | `notification-chirp.mp3`  |

---

## 🗂 Sound File Directory

```plaintext
/assets/audio/
├── click.mp3
├── window-open.mp3
├── window-close.mp3
├── error-beep.mp3
├── save-success.mp3
├── boot-beep.mp3
├── bbs-handshake.mp3
└── notification-chirp.mp3
```

Each sound file:
- Format: `.mp3` or `.ogg`
- Volume normalized to ~60%
- Trimmed for responsiveness
- Should not exceed 2s unless intentional

---

## 🎛 Dev Integration

All OS-level sounds are called using:

```js
sound.play('click');
sound.play('window-open');
```

Applications may register custom audio:

```js
sound.register('composer-note', 'apps/composer/sounds/note.mp3');
```

---

## 🧬 User Controls

- Global mute toggle in Control Panel
- Volume slider for individual sound categories
- Visual cues mirror all sound feedback (accessibility standard)

---

## 🎧 Sourcing Plan

- **System 6 sounds**: Ripped via Mini vMac or sourced from classic Mac abandonware apps (e.g. *Finder Sounds*)
- **IRIX sounds**: Captured from emulated IRIX 6.5 desktops or extracted from diskless workstation builds
- All sounds treated as “reconstructed” under THUNDERBIRD.ESQ license until replaced by custom compositions

---

## 🛡 Accessibility & Safety

- No auto-play audio on load
- All sounds user-toggleable
- No sound-only confirmations (always paired with visual)

---

