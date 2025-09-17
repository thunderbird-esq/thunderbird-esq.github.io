#!/bin/bash
#
# This script creates the BootSequence component and integrates it
# into the main App.vue component, establishing the state-driven
# rendering pattern for the application.
#

echo "--- Integrating BootSequence Component ---"

# --- Phase 1: Create the self-contained BootSequence component ---
echo "[1/2] Creating src/components/BootSequence.vue..."
cat > src/components/BootSequence.vue <<- EOM
<template>
  <div class="boot-dialog">
    <div class="title-bar">
      <h1 class="title">THUNDERBIRD OS Boot</h1>
    </div>
    <pre class="boot-text" v-html="displayedText"></pre>
    <div v-if="showProgressBar" class="progress-section">
      <pre>THUNDERBIRD OS v1.0.0 Booting...</pre>
      <pre v-text="progressBarText"></pre>
      <pre v-text="statusText"></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const emit = defineEmits(['bootComplete']);

const displayedText = ref('');
const showProgressBar = ref(false);
const progressBarText = ref('');
const statusText = ref('Initializing...');

const bootLines = [
  "Running diagnostics... <span style='color:#0f0;'>[OK]</span>",
  "Testing memory... <span style='color:#0f0;'>[OK]</span>",
  "Booting from ROM BIOS... <span style='color:#0f0;'>[OK]</span>",
  "Checking floppy disk drives... <span style='color:#ff0;'>[FAIL - No floppy detected]</span>",
  "Probing PCI buses... <span style='color:#0f0;'>[OK]</span>",
  "Loading quantum cache... <span style='color:#0f0;'>[OK]</span>",
  "Initializing THUNDERBIRD OS... <span style='color:#0f0;'>[OK]</span>"
];

async function runBootSequence() {
  for (const line of bootLines) {
    displayedText.value += line + '\n';
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  showProgressBar.value = true;
  await runLoadingBar();
  emit('bootComplete');
}

async function runLoadingBar() {
  let progress = 0;
  while (progress <= 100) {
    const triangles = '▲'.repeat(Math.floor(progress / 5));
    const spaces = ' '.repeat(20 - triangles.length);
    progressBarText.value = \`[\${triangles}\${spaces}] \${progress}%\`;
    progress += 2;
    await new Promise(resolve => setTimeout(resolve, 30));
  }
  statusText.value = 'Boot Complete!';
  await new Promise(resolve => setTimeout(resolve, 500));
}

onMounted(() => {
  runBootSequence();
});
</script>

<style scoped>
.boot-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background-color: #ccc;
  border: 2px solid #000;
  box-shadow: 5px 5px 0px rgba(0,0,0,0.75);
}
.boot-text, .progress-section pre {
  font-family: 'Monaco', monospace;
  white-space: pre-wrap;
  margin: 0;
  padding: 0 10px 10px 10px;
  font-size: 14px;
}
.title-bar {
  background-color: #fff;
  border-bottom: 2px solid #000;
  padding: 4px;
  text-align: center;
}
.title {
  margin: 0;
  font-size: 16px;
  font-weight: normal;
}
</style>
EOM

# --- Phase 2: Update App.vue to use the new component ---
echo "[2/2] Updating src/App.vue to manage boot state..."
cat > src/App.vue <<- EOM
<template>
  <div id="os-container">
    <BootSequence v-if="!bootComplete" @boot-complete="handleBootComplete" />
    <div v-else>
      <h1 class="placeholder-text">Welcome to the Desktop.</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BootSequence from './components/BootSequence.vue';

const bootComplete = ref(false);

function handleBootComplete() {
  bootComplete.value = true;
}
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
echo "✅ BootSequence component integrated."
echo "Your development server should have reloaded automatically."
echo "Check your browser at http://localhost:5173 to see the result."
