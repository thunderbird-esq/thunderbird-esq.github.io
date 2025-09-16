import { setupGifCreator, processGIF } from './gif.js';

export function render(container) {
  // Initialize the GIF creator UI
  setupGifCreator(container);

  // Listen for image selection messages
  window.addEventListener('message', event => {
    if (event.data.type === 'SELECT_IMAGE') {
      const imgFile = event.data.file;
      processGIF(imgFile, { palette: 'retro', frameDelay: 200 });
    }
  });
}