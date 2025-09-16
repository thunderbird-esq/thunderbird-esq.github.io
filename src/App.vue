<template>
  <div id="os-container">
    <PreBoot v-if="appState === 'pre-boot'" @start-boot="initializeApp" />
    <BootSequence v-else-if="appState === 'booting'" @boot-complete="handleBootComplete" />
    <div v-else-if="appState === 'desktop'" class="desktop-placeholder">
      <h1 class="placeholder-text">Welcome to the Desktop.</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PreBoot from './components/PreBoot.vue';
import BootSequence from './components/BootSequence.vue';
import { useSound } from './composables/useSound';

type AppState = 'pre-boot' | 'booting' | 'desktop';

const appState = ref<AppState>('pre-boot');
const { playSound } = useSound();

function initializeApp() {
  // Play the initial chirp when the user clicks
  playSound('systemChirp', { loop: true, volume: 0.2 });
  appState.value = 'booting';
}

function handleBootComplete() {
  // The boot chime is played by the BootSequence component,
  // but we can play another sound here to mark the desktop transition.
  playSound('systemChirp', { volume: 0.2 }); // A final chirp for desktop load
  appState.value = 'desktop';
}
</script>

<style>
/* Global styles required by the application */
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-color: #005854; /* System 6 Teal */
  font-family: 'ChicagoFLF', sans-serif;
}
#os-container {
  height: 100%;
  width: 100%;
}
.placeholder-text {
  padding: 2rem;
  color: #000;
  font-family: 'ChicagoFLF', sans-serif;
}
</style>
