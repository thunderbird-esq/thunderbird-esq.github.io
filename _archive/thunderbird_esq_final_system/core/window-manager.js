import { createWindow } from './window.js';

export class WindowManager {
  constructor(desktop) {
    this.desktop = desktop;
    this.windows = [];
  }

  create({ title, content, width, height }) {
    const win = createWindow({ title, content, width, height });
    this.desktop.appendChild(win.el);
    this.windows.push(win);
    return win;
  }
}
