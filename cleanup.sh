#!/bin/bash
#
# THUNDERBIRD OS - Repository Cleanup Script
# Archives legacy/experimental code and deletes junk files to establish
# a clean baseline for the Vue.js refactor.

echo "Beginning repository cleanup for THUNDERBIRD OS..."

# --- Step 1: Create the archive directory. Fail safely if it exists. ---
if [ -d "_archive" ]; then
    echo "[INFO] '_archive' directory already exists. Proceeding."
else
    echo "[ACTION] Creating '_archive' directory..."
    mkdir _archive
fi

# --- Step 2: Archive all legacy, experimental, and non-essential directories/files ---
# Define a function to move items if they exist to prevent errors.
move_if_exists() {
    if [ -e "$1" ]; then
        echo "[ACTION] Archiving $1..."
        mv "$1" "_archive/"
    else
        echo "[INFO] $1 does not exist. Skipping."
    fi
}

echo "Archiving directories and legacy code..."
move_if_exists "apps"
move_if_exists "versions"
move_if_exists "server"
move_if_exists "scripts"
move_if_exists "lib"
move_if_exists "core/systemcss"
move_if_exists "core/app-registry.js"
move_if_exists "core/ui"

# --- Step 3: Delete junk, build artifacts, and redundant files ---
# Define a function to remove items if they exist.
remove_if_exists() {
    if [ -e "$1" ]; then
        echo "[ACTION] Deleting $1..."
        rm -rf "$1"
    else
        echo "[INFO] $1 does not exist. Skipping."
    fi
}

echo "Deleting redundant files and build artifacts..."
remove_if_exists "dist"
remove_if_exists "index.html"
remove_if_exists "core/global.css"
remove_if_exists "core/retro.css"
remove_if_exists "core/style.css"
remove_if_exists "core/styles.css"
# This command is more robust for finding and deleting macOS junk files.
if find . -name ".DS_Store" -print -delete | grep -q '.'; then
    echo "[ACTION] Deleted .DS_Store files."
fi


echo "-------------------------------------------"
echo "✅ Cleanup complete."
echo "Your repository is now prepared for the refactor."
