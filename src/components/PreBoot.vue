<template>
  <div class="boot-screen" @click="startBoot">
    <div style="position: relative; display: inline-block;">
      <img id="boot-icon" class="boot-icon" src="/icons/eye-icon.svg" alt="THUNDERBIRD OS Icon">
      <div class="boot-icon-label">
        <span class="question-mark">?</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['startBoot']);

function startBoot() {
  emit('startBoot');
}
</script>

<style scoped>
.boot-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  cursor: pointer;
}
.boot-icon {
  width: 128px;
  height: 128px;
}
.boot-icon-label {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-family: 'ChicagoFLF', sans-serif;
  font-size: 24px;
}
.question-mark {
  animation: blink 1s infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
</style>
