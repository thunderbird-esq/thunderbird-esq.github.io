import { createWindow } from './window.js';

export class WindowManager {
  constructor(desktop) {
    this.desktop = desktop;
  }

  create(opts) {
    const win = createWindow(opts);
    this.desktop.appendChild(win.el);
    return win;
  }
}
