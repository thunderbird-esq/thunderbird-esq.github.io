# Frontend Specification – THUNDERBIRD.ESQ

## Libraries
- No third-party libraries beyond optional WebRTC signaling (self-hosted)

## Desktop Shell
- Rendered purely via HTML/CSS
- Windows stack via z-index and grid-snap logic
- Audio cues tied to system events

## Assets
- Icons: Monochrome, SVG/PNG, pixel-perfect
- Fonts: Local WOFF2 versions of Chicago, Geneva

## Boot/Initialization
- Load fonts and default patterns from `/assets`
- Pattern system uses tiled 8×8 bitmaps
- Finder window launches automatically unless interrupted
