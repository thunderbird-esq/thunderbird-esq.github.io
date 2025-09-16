import { createWindow } from './core/window.js';
import { WindowManager } from './core/window-manager.js';
import { setupMenubar } from './system/menubar.js';

window.addEventListener('DOMContentLoaded', () => {
  const desktop = document.getElementById('desktop');
  const menubar = document.getElementById('menubar');
  const manager = new WindowManager(desktop);

  setupMenubar(menubar);

  // Demo window
  const win = manager.create({
    title: "Welcome",
    content: "<p>Welcome to THUNDERBIRD.ESQ</p>",
    width: 400,
    height: 300
  });
});
