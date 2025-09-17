#!/bin/bash

set -e

echo "🔧 Creating project root..."
mkdir -p project-root/frontend/styles
mkdir -p project-root/frontend/assets/fonts
mkdir -p project-root/frontend/assets/icons
mkdir -p project-root/emulator/qemu-irix
mkdir -p project-root/emulator/helpers/qemu-irix-helpers
mkdir -p project-root/basys/src
mkdir -p project-root/basys/docs

echo "⬇️ Cloning system.css..."
git clone --depth=1 https://github.com/sakofchit/system.css tmp-systemcss

echo "📁 Integrating system.css..."
cp tmp-systemcss/css/system.css project-root/frontend/styles/

# Copy fonts and icons if available
[ -d tmp-systemcss/fonts ] && cp -r tmp-systemcss/fonts/* project-root/frontend/assets/fonts/ || true
[ -d tmp-systemcss/icons ] && cp -r tmp-systemcss/icons/* project-root/frontend/assets/icons/ || true

rm -rf tmp-systemcss

echo "⬇️ Cloning qemu-irix..."
git clone --depth=1 https://github.com/n64decomp/qemu-irix.git project-root/emulator/qemu-irix

echo "⬇️ Cloning WacOS (Basys/6)..."
git clone --depth=1 --branch WacOS-dev https://github.com/seanpm2001/WacOS.git tmp-wacos

echo "📁 Integrating BaSYS/6..."
cp -r tmp-wacos/Basys/6/* project-root/basys/
rm -rf tmp-wacos

echo "📦 Generating package.json..."
cat <<EOF > project-root/package.json
{
  "name": "unified-system-emulator",
  "version": "1.0.0",
  "description": "System.css + QEMU IRIX + BaSYS 6 unified project",
  "scripts": {
    "start": "live-server frontend"
  },
  "devDependencies": {
    "live-server": "^1.2.2"
  }
}
EOF

echo "📝 Creating README.md..."
cat <<EOF > project-root/README.md
# Unified System Emulator Project

This project integrates:

- [system.css](https://github.com/sakofchit/system.css): Apple System 6 UI aesthetic
- [qemu-irix](https://github.com/n64decomp/qemu-irix): IRIX userland QEMU fork
- [WacOS (Basys/6)](https://github.com/seanpm2001/WacOS): Apple System 6 recreation

## Setup

\`\`\`bash
cd project-root
npm install
npm run start
\`\`\`

## Notes

- Frontend uses \`system.css\` for styling.
- IRIX emulation handled via \`qemu-irix\`.
- \`basys/\` contains the BaSYS 6 source files.
EOF

echo "✅ All systems go."
echo "👉 Navigate to ./project-root and run:"
echo "   npm install"
echo "   npm run start"
