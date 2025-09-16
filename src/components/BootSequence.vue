<template>
  <div class="boot-dialog">
    <div class="title-bar">
      <h1 class="title">THUNDERBIRD OS Boot</h1>
    </div>
    <pre class="boot-text" v-html="displayedText"></pre>
    <div v-if="showProgressBar" class="progress-section">
      <pre id="progressHeader">THUNDERBIRD OS v1.0.0 Booting...</pre>
      <pre id="progressBar" v-text="progressBarText"></pre>
      <pre id="status" v-text="statusText"></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useSound } from '../composables/useSound';

const emit = defineEmits(['bootComplete']);
const { playSound, stopSound } = useSound();

const displayedText = ref('');
const showProgressBar = ref(false);
const progressBarText = ref('');
const statusText = ref('Initializing...');

const bootLines = [
  "Running diagnostics... <span class='ok'>[OK]</span>",
  "Testing memory... <span class='ok'>[OK]</span>",
  "Booting from ROM BIOS... <span class='ok'>[OK]</span>",
  "Checking floppy disk drives... <span class='fail'>[FAIL - No floppy detected]</span>",
  "Probing PCI buses... <span class='ok'>[OK]</span>",
  "Loading quantum cache... <span class='ok'>[OK]</span>",
  "Verifying hexadecimal transport matrix... <span class='ok'>[OK]</span>",
  "Initializing THUNDERBIRD OS... <span class='ok'>[OK]</span>",
  "Syncing with orbital relays... <span class='ok'>[OK]</span>",
  "Finalizing system integrity check... <span class='ok'>[OK]</span>"
];

async function runBootSequence() {
  playSound('startupBeep', { volume: 0.3 });
  playSound('fanHum1', { loop: true, volume: 0.4 });
  playSound('floppyClicks', { loop: true, volume: 0.3 });

  for (const line of bootLines) {
    displayedText.value += line + '\n';
    await new Promise(resolve => setTimeout(resolve, 2600));
  }

  showProgressBar.value = true;
  await runLoadingBar();

  stopSound('fanHum1');
  stopSound('floppyClicks');
  playSound('bootChime', { volume: 0.3 });
  
  // Wait for the chime to finish before completing the boot
  await new Promise(resolve => setTimeout(resolve, 1500));
  emit('bootComplete');
}

async function runLoadingBar() {
  let progress = 0;
  const stages = [
    'Connecting to THUNDERBIRD Network...',
    'Fetching Messages...',
    'Boot Complete!'
  ];
  let stageIndex = 0;

  while (progress <= 100) {
    const triangles = '▲'.repeat(Math.floor(progress / 5));
    const spaces = ' '.repeat(20 - triangles.length);
    progressBarText.value = `[${triangles}${spaces}] ${progress}%`;

    if (progress % 25 === 0 && stageIndex < stages.length) {
      statusText.value = stages[stageIndex];
      stageIndex++;
    }
    
    progress += 2;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

onMounted(() => {
  runBootSequence();
});

// Ensure sounds are stopped if the component is ever unmounted prematurely.
onUnmounted(() => {
  stopSound('fanHum1');
  stopSound('floppyClicks');
});
</script>

<style scoped>
.boot-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 640px;
  background-color: #ccc;
  border: 2px solid #000;
  box-shadow: 5px 5px 0px rgba(0,0,0,0.75);
  padding: 0;
}
.boot-text, .progress-section pre {
  font-family: 'Monaco', monospace;
  white-space: pre-wrap;
  margin: 0;
  padding: 10px;
  font-size: 14px;
  line-height: 1.4;
  color: #000;
}
.progress-section {
  padding-top: 10px;
  border-top: 2px solid #000;
}
:deep(.ok) {
  color: green;
}
:deep(.fail) {
  color: orange;
}
.title-bar {
  background-color: #fff;
  border-bottom: 2px solid #000;
  padding: 4px;
  text-align: center;
}
.title {
  margin: 0;
  font-family: 'ChicagoFLF', sans-serif;
  font-size: 16px;
  font-weight: normal;
}
</style>
