import { createWindow } from './core/window.js';
import { WindowManager } from './core/window-manager.js';

window.addEventListener('DOMContentLoaded', () => {
  const desktop = document.getElementById('desktop');
  const manager = new WindowManager(desktop);

  manager.create({
    title: 'Welcome',
    content: '<p>Welcome to THUNDERBIRD.ESQ</p>',
    width: 400,
    height: 300
  });
});
