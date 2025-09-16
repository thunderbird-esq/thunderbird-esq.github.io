import { WindowManager } from './core/window-manager.js';

window.addEventListener('DOMContentLoaded', () => {
  const desktop = document.getElementById('desktop');
  const manager = new WindowManager(desktop);

  manager.create({
    title: 'Welcome',
    content: '<p>Welcome to THUNDERBIRD.ESQ</p>',
    width: 360,
    height: 220
  });

  const icons = document.querySelectorAll('.desktop-icon');
  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      const appName = icon.dataset.app;
      manager.create({
        title: appName,
        content: `<p>Loaded ${appName} (UI module coming soon)</p>`,
        width: 400,
        height: 300
      });
    });
  });
});
