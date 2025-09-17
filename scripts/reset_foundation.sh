#!/bin/bash
#
# THUNDERBIRD OS - Definitive Foundation Reset
# This script is idempotent and handles the known chaotic state of the repository,
# including a polluted /src directory.
#

echo "--- THUNDERBIRD OS FOUNDATION RESET ---"

# --- Phase 1: Archive ALL potential legacy directories from the root ---
echo "[1/4] Archiving root-level legacy assets..."
mkdir -p _archive
move_if_exists() { [ -e "$1" ] && mv "$1" "_archive/"; }
move_if_exists "apps"
move_if_exists "core"
move_if_exists "dist"
move_if_exists "lib"
move_if_exists "scripts"
move_if_exists "server"
move_if_exists "versions"
move_if_exists "assets" # Archive the entire legacy assets folder

# --- Phase 2: Purge and Rebuild the /src directory ---
echo "[2/4] Purging and rebuilding /src directory..."
# Archive the ENTIRE existing src directory to get rid of the junk inside it.
if [ -d "src" ]; then
    echo "Archiving polluted /src directory..."
    mv src "_archive/src_polluted_$(date +%s)"
fi
# Create a pristine /src structure
mkdir -p src/assets src/components src/styles

# --- Phase 3: Create the /public directory and relocate essential files ---
echo "[3/4] Establishing /public and relocating essential assets..."
mkdir -p public/audio public/fonts public/icons
# Relocate essential files from the newly created archive
relocate_if_exists() {
    [ -e "_archive/$1" ] && mv "_archive/$1" "$2"
}
# There may be no audio files to move, so we check the directory.
if [ -d "_archive/assets/audio" ]; then
    mv _archive/assets/audio/* public/audio/
fi
relocate_if_exists "core/fonts" "public/"
relocate_if_exists "core/icon" "public/icons"
relocate_if_exists "core/system.css" "src/styles/"

# --- Phase 4: Create the SPA entry points ---
echo "[4/4] Scaffolding SPA entry point files..."

# Create index.html
cat > index.html <<- EOM
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/svg+xml" href="/icons/bbs-icon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THUNDERBIRD OS</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.ts"></script>
</body>
</html>
EOM

# Create src/main.ts
cat > src/main.ts <<- EOM
import { createApp } from 'vue';
import App from './App.vue';
import './styles/system.css';

createApp(App).mount('#app');
EOM

# Create src/App.vue
cat > src/App.vue <<- EOM
<template>
  <div id="os-container">
    <h1 class="placeholder-text">THUNDERBIRD OS: Foundation Established</h1>
  </div>
</template>

<script setup lang="ts">
// Application logic will reside here.
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #005854;
  font-family: 'ChicagoFLF', sans-serif;
}
.placeholder-text {
  padding: 2rem;
  color: #000;
}
</style>
EOM

echo "-------------------------------------------"
echo "✅ FOUNDATION ESTABLISHED."
echo "Run 'pnpm install' then 'pnpm dev' to verify."
