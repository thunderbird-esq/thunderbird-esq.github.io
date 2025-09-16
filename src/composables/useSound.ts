import { ref } from 'vue';

// This maps sound names to their corresponding Audio objects.
// The paths assume your audio files are in the /public/audio/ directory.
const sounds = {
  systemChirp: new Audio('/audio/system-chirp.mp3'),
  fanHum1: new Audio('/audio/fan-hum.mp3'),
  fanHum2: new Audio('/audio/fan-hum-2.mp3'),
  floppyClicks: new Audio('/audio/floppy-clicks.mp3'),
  startupBeep: new Audio('/audio/startup-beep.mp3'),
  bootChime: new Audio('/audio/boot-chime.mp3'),
};

// This composable provides a clean way to play/stop sounds from any component.
export function useSound() {
  const playSound = (soundName: keyof typeof sounds, options: { loop?: boolean, volume?: number } = {}) => {
    const audio = sounds[soundName];
    if (audio) {
      audio.currentTime = 0;
      audio.loop = options.loop || false;
      audio.volume = options.volume || 1.0;
      audio.play().catch(err => console.error(`Error playing ${soundName}:`, err));
    }
  };

  const stopSound = (soundName: keyof typeof sounds) => {
    const audio = sounds[soundName];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return { playSound, stopSound };
}
