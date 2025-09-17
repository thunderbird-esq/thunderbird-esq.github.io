(Files content cropped to 300k characters, download full ingest to see more)
================================================
FILE: CNAME
================================================
www.thunderbird.esq


================================================
FILE: index.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/svg+xml" href="/icons/bbs-icon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THUNDERBIRD OS</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.ts"></script>
</body>
</html>



================================================
FILE: package.json
================================================
{
  "name": "thunderbird-esq-system6",
  "version": "0.1.0",
  "private": true,
  "packageManager": "pnpm@8.15.3",
  "type": "module",
  "scripts": {
    "dev": "vite --mode development",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint \"src/**/*.{ts,vue}\" --max-warnings 0"
  },
  "dependencies": {
    "vue": "3.5.21"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "8.44.0",
    "@typescript-eslint/parser": "8.44.0",
    "@vitejs/plugin-vue": "6.0.1",
    "autoprefixer": "10.4.21",
    "cssnano": "7.1.1",
    "eslint": "9.35.0",
    "postcss": "8.5.6",
    "tailwindcss": "4.1.13",
    "typescript": "5.9.2",
    "vite": "7.1.5"
  }
}



================================================
FILE: vite.config.ts
================================================
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})



================================================
FILE: _archive/more-system-6-docs/Addendum to SCSI Driver ERS.doc
================================================
[Binary file]


================================================
FILE: _archive/more-system-6-docs/ADU Mac Driver Spec 1.0.doc
================================================
[Binary file]


================================================
FILE: _archive/more-system-6-docs/CDSC+ Mod to SCSI Driver ERS.doc
================================================
[Binary file]


================================================
FILE: _archive/more-system-6-docs/LastMinuteStuff.doc
================================================
[Binary file]


================================================
FILE: _archive/more-system-6-docs/Pascal FST ERS v1.00 a03.doc
================================================
[Binary file]


================================================
FILE: _archive/more-system-6-docs/SetStart.ERS.doc
================================================
[Binary file]


================================================
FILE: _archive/more-system-6-docs/Shortcuts.txt
================================================
Error reading file with 'utf-8': 'utf-8' codec can't decode byte 0xa5 in position 1673: invalid start byte


================================================
FILE: _archive/more-system-6-docs/Software License.doc
================================================
[Binary file]


================================================
FILE: _archive/more-system-6-docs/Sound CP ERS 1.1.doc
================================================
[Binary file]


================================================
FILE: _archive/new-new-irix-emulation/system6-irix-emulation/index.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>System 6 + IRIX Emulation</title>
  <!-- Local System.css -->
  <link rel="stylesheet" href="system.css" />
  <!-- Three.js for GL Demo -->
  <script src="https://unpkg.com/three@0.149.0/build/three.min.js"></script>
  <!-- Draggabilly for window dragging -->
  <script src="https://unpkg.com/draggabilly@3.0.0/dist/draggabilly.pkgd.min.js"></script>
  <!-- Custom styles -->
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <!-- Toolchest Menu Bar -->
  <ul role="menu-bar" class="toolchest">
    <li role="menu-item" tabindex="0" aria-haspopup="true">
      System
      <ul role="menu">
        <li role="menu-item"><a href="#info">System Info</a></li>
        <li role="menu-item"><a href="#restart">Restart</a></li>
        <li role="menu-item" class="divider"><a href="#shutdown">Shutdown</a></li>
      </ul>
    </li>
    <li role="menu-item" tabindex="0" aria-haspopup="true">
      Applications
      <ul role="menu">
        <li role="menu-item"><a href="#" class="launch-file-manager">File Manager</a></li>
        <li role="menu-item"><a href="#terminal">Terminal</a></li>
      </ul>
    </li>
    <li role="menu-item" tabindex="0" aria-haspopup="true">
      Demos
      <ul role="menu">
        <li role="menu-item"><a href="#" class="launch-gl-demo">GL Demo</a></li>
        <li role="menu-item"><a href="#cube">3D Cube</a></li>
      </ul>
    </li>
  </ul>

  <!-- Desktop Icons -->
  <div class="desktop-icon" style="top: 50px; left: 20px;" data-action="launch-file-manager">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
      <rect x="4" y="4" width="16" height="16" />
      <path d="M4 8h16" />
    </svg>
    <span>File Manager</span>
  </div>
  <div class="desktop-icon" style="top: 100px; left: 20px;" data-action="launch-gl-demo">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2">
      <rect x="6" y="6" width="12" height="12" />
      <path d="M6 12h12M12 6v12" />
    </svg>
    <span>GL Demo</span>
  </div>

  <!-- Initial Window -->
  <div class="window" style="width: 30rem; position: absolute; top: 100px; left: 100px;" data-window-id="1">
    <div class="title-bar">
      <button aria-label="Close" class="close"></button>
      <button aria-label="Minimize" class="minimize"></button>
      <button aria-label="Maximize" class="maximize"></button>
      <h1 class="title">IRIX Interactive Desktop</h1>
    </div>
    <div class="separator"></div>
    <div class="window-pane">
      <p>Welcome to the System 6 + IRIX emulation!</p>
      <button class="btn">Launch Demo</button>
    </div>
  </div>

  <!-- Desktop Context Menu -->
  <ul id="context-menu" role="menu" class="hidden">
    <li role="menu-item"><a href="#" class="create-new-window">New Window</a></li>
    <li role="menu-item"><a href="#background">Change Background</a></li>
    <li role="menu-item"><a href="#info">Desktop Info</a></li>
  </ul>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>



================================================
FILE: _archive/new-new-irix-emulation/system6-irix-emulation/script.js
================================================
// Debug: Log initialization
console.log('script.js loaded');

// Window Management
let windowCounter = 1; // Track window IDs
let maxZIndex = 100; // Track highest z-index

// Bring window to front
function bringToFront(window) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('focused'));
  window.classList.add('focused');
  window.style.zIndex = maxZIndex++;
}

// Window Dragging
document.querySelectorAll('.window').forEach(window => {
  console.log('Initializing Draggabilly for window', window.dataset.windowId);
  const draggie = new Draggabilly(window, { handle: '.title-bar' });
  window.addEventListener('click', () => bringToFront(window));
});

// Toolchest Menu Toggle
document.querySelectorAll('[role="menu-item"][aria-haspopup="true"]').forEach(menuItem => {
  menuItem.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Toggling menu for', menuItem.textContent);
    const menu = menuItem.querySelector('[role="menu"]');
    const isOpen = menu.style.display === 'block';
    document.querySelectorAll('[role="menu"]').forEach(m => (m.style.display = 'none'));
    menu.style.display = isOpen ? 'none' : 'block';
  });
});

// Close Menus on Click Outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('[role="menu-bar"]') && !e.target.closest('#context-menu')) {
    document.querySelectorAll('[role="menu"]').forEach(m => (m.style.display = 'none'));
  }
});

// Desktop Context Menu
const contextMenu = document.getElementById('context-menu');
document.body.addEventListener('contextmenu', (e) => {
  if (!e.target.closest('.window') && !e.target.closest('.desktop-icon')) {
    e.preventDefault();
    console.log('Showing context menu at', e.pageX, e.pageY);
    document.querySelectorAll('[role="menu"]').forEach(m => (m.style.display = 'none'));
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
  }
});

// Hide Context Menu on Click
document.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});

// Create New Window
function createWindow(title, content) {
  window MilaCounter++;
  const window = document.createElement('div');
  window.className = 'window';
  window.dataset.windowId = windowCounter;
  window.style.width = '30rem';
  window.style.position = 'absolute';
  window.style.top = `${100 + windowCounter * 20}px`;
  window.style.left = `${100 + windowCounter * 20}px`;
  window.innerHTML = `
    <div class="title-bar">
      <button aria-label="Close" class="close"></button>
      <button aria-label="Minimize" class="minimize"></button>
      <button aria-label="Maximize" class="maximize"></button>
      <h1 class="title">${title}</h1>
    </div>
    <div class="separator"></div>
    <div class="window-pane">${content}</div>
  `;
  document.body.appendChild(window);
  const draggie = new Draggabilly(window, { handle: '.title-bar' });
  window.addEventListener('click', () => bringToFront(window));
  setupWindowControls(window);
  bringToFront(window);
  console.log('Created window', windowCounter);
}

// File Manager Window
function createFileManager() {
  const content = `
    <p>File Manager</p>
    <ul>
      <li>📁 Documents</li>
      <li>📁 Downloads</li>
      <li>📄 readme.txt</li>
    </ul>
  `;
  createWindow('File Manager', content);
}

// GL Demo Window
function createGLDemo() {
  const windowId = `gl-demo-${windowCounter}`;
  const content = `<div id="${windowId}" style="width: 100%; height: 300px;"></div>`;
  createWindow('GL Demo', content);
  // Initialize Three.js
  const container = document.getElementById(windowId);
  if (!container) {
    console.error('GL Demo container not found');
    return;
  }
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / 300, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, 300);
  container.appendChild(renderer.domElement);
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
  console.log('GL Demo initialized');
}

// Window Controls
function setupWindowControls(window) {
  const closeBtn = window.querySelector('.close');
  const minimizeBtn = window.querySelector('.minimize');
  const maximizeBtn = window.querySelector('.maximize');

  closeBtn.addEventListener('click', () => {
    window.style.display = 'none';
    console.log('Closed window', window.dataset.windowId);
  });

  minimizeBtn.addEventListener('click', () => {
    window.style.transform = 'scale(0.1)';
    window.style.opacity = '0.3';
    setTimeout(() => {
      window.style.display = 'none';
    }, 200);
    console.log('Minimized window', window.dataset.windowId);
  });

  maximizeBtn.addEventListener('click', () => {
    if (window.style.width === '90vw') {
      window.style.width = '30rem';
      window.style.height = 'auto';
      window.style.top = '100px';
      window.style.left = '100px';
    } else {
      window.style.width = '90vw';
      window.style.height = '80vh';
      window.style.top = '10vh';
      window.style.left = '5vw';
    }
    console.log('Toggled maximize for window', window.dataset.windowId);
  });
}

// Menu Actions
document.querySelectorAll('.launch-file-manager').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    createFileManager();
  });
});

document.querySelectorAll('.launch-gl-demo').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    createGLDemo();
  });
});

document.querySelectorAll('.create-new-window').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    createWindow(`New Window ${windowCounter}`, '<p>This is a new window.</p>');
  });
});

// Desktop Icon Actions
document.querySelectorAll('.desktop-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const action = icon.dataset.action;
    console.log('Clicked icon with action', action);
    if (action === 'launch-file-manager') {
      createFileManager();
    } else if (action === 'launch-gl-demo') {
      createGLDemo();
    }
  });
});

// Initial Window Setup
document.querySelectorAll('.window').forEach(window => {
  setupWindowControls(window);
});

// Debug: Log Three.js and Draggabilly availability
console.log('Three.js available:', typeof THREE !== 'undefined');
console.log('Draggabilly available:', typeof Draggabilly !== 'undefined');



================================================
FILE: _archive/new-new-irix-emulation/system6-irix-emulation/styles.css
================================================
body {
  background-color: #d3d3d3; /* System 6 gray */
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAABBJREFUGFdjZGBg+A8EAAAA//8DAC4dBEMOAAAAAElFTkSuQmCC');
  background-repeat: repeat;
  margin: 0;
  height: 100vh;
  font-family: 'Chicago', sans-serif;
  user-select: none;
}

.window {
  position: absolute;
  box-shadow: 2px 2px 0px #000;
  border: 2px solid #000; /* mwm-like border */
  z-index: 1;
}

.window.focused {
  z-index: 100; /* Bring to front */
  border-color: #000;
  box-shadow: 3px 3px 0px #000;
}

.title-bar {
  display: flex;
  align-items: center;
  padding: 2px;
}

.title-bar button {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  background-size: contain;
}

.close, .minimize, .maximize {
  background: #fff;
  border: 1px solid #000;
}

.desktop-icon {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 60px;
  text-align: center;
}

.desktop-icon svg {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.desktop-icon span {
  font-size: 12px;
  color: #000;
  background: #fff;
  padding: 2px;
  border: 1px solid #000;
}

#context-menu {
  position: absolute;
  z-index: 1000;
}

#context-menu.hidden {
  display: none;
}

.toolchest {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

[role="menu"] {
  display: none;
  position: absolute;
  background: #fff;
  border: 1px solid #000;
}

[role="menu"][style*="display: block"] {
  display: block !important;
}



================================================
FILE: _archive/new-new-irix-emulation/system6-irix-emulation/system.css
================================================
404: Not Found


================================================
FILE: _archive/new-unified-project/project-root/index.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>THUNDERBIRD BBS</title>
  <meta name="GENERATOR" content="THUNDERBIRD BBS (C) 1989">
  <style>
    /* Font Definitions */
    @font-face {
      font-family: Chicago;
      src: url("fonts/ChicagoFLF.woff") format("woff"),
           url("fonts/ChicagoFLF.woff2") format("woff2");
    }
    @font-face {
      font-family: Chicago_12;
      src: url("fonts/ChiKareGo2.woff") format("woff"),
           url("fonts/ChiKareGo2.woff2") format("woff2");
    }
    @font-face {
      font-family: Geneva_9;
      src: url("fonts/FindersKeepers.woff") format("woff"),
           url("fonts/FindersKeepers.woff2") format("woff2");
    }
    @font-face {
      font-family: Monaco;
      src: url("fonts/monaco.woff") format("woff"),
           url("fonts/monaco.woff2") format("woff2");
    }

    /* CSS Variables */
    :root {
      --box-shadow: 2px 2px;
      --element-spacing: 8px;
      --grouped-element-spacing: 6px;
      --radio-width: 12px;
      --checkbox-width: 13px;
      --radio-label-spacing: 6px;
      --radio-total-width-precalc: calc(var(--radio-width) + var(--radio-label-spacing));
      --radio-total-width: calc(var(--radio-total-width-precalc));
      --radio-left: calc(-1 * var(--radio-total-width-precalc));
      --radio-dot-width: 6px;
      --radio-dot-top: calc(var(--radio-width) / 2 - var(--radio-dot-width) / 2);
      --radio-dot-left: calc(-1 * var(--radio-total-width-precalc) + var(--radio-width) / 2 - var(--radio-dot-width) / 2);
      --checkbox-total-width-precalc: calc(var(--checkbox-width) + var(--radio-label-spacing));
      --checkbox-total-width: calc(var(--checkbox-total-width-precalc));
      --checkbox-left: calc(-1 * var(--checkbox-total-width-precalc));
      --checkmark-width: 12px;
      --checkmark-top: 2px;
      --checkmark-left: 2px;
      --sys-color-white: #FFFFFF;
      --sys-color-black: #000000;
      --sys-color-grey: #A5A5A5;
      --sys-color-darkgrey: #B6B7B8;
      --primary: var(--sys-color-white);
      --secondary: var(--sys-color-black);
      --tertiary: var(--sys-color-grey);
      --disabled: var(--sys-color-darkgrey);
    }

    /* Body */
    body {
      background: var(--sys-color-black);
      margin: 0;
      min-height: 100vh;
      font-family: "Inconsolata", Menlo, Chicago, Geneva;
      font-size: 18px;
      letter-spacing: -0.025em;
      overflow: hidden;
    }

    /* Boot Screen */
    .boot-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #F2F2F7;
      z-index: 2000;
    }
    .boot-icon {
      width: 64px;
      height: 64px;
      cursor: pointer;
      filter: drop-shadow(0 0 8px rgba(147, 112, 219, 0.5));
      transition: filter 0.3s ease;
    }
    .boot-icon:hover {
      filter: drop-shadow(0 0 12px rgba(147, 112, 219, 0.8));
    }
    .boot-icon-label {
      margin-top: 8px;
      font-family: Chicago_12;
      font-size: 12px;
      color: var(--secondary);
      text-align: center;
    }
    .boot-icon-label .question-mark {
      display: inline-block;
      animation: blink 1s infinite;
    }
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }

    /* Desktop (Hidden Initially) */
    .desktop-container {
      display: none;
      background: linear-gradient(90deg, var(--primary) 21px, transparent 1%) center,
                  linear-gradient(var(--primary) 21px, transparent 1%) center,
                  var(--secondary);
      background-size: 22px 22px;
      background-attachment: fixed;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }
    .desktop-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(147, 112, 219, 0.1), rgba(0, 191, 255, 0.1), rgba(147, 112, 219, 0.1));
      background-size: 200% 200%;
      animation: gradientShift 15s ease infinite;
      z-index: 0;
      pointer-events: none;
    }
    .desktop-container > * {
      position: relative;
      z-index: 1;
    }
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Desktop Menu Bar */
    .desktop-menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: var(--primary);
      border-bottom: 0.1rem solid var(--secondary);
      z-index: 1000;
    }

    /* Desktop Icons */
    .desktop {
      position: fixed;
      top: 2rem;
      left: 1rem;
      right: 1rem;
      bottom: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 1;
    }
    .desktop-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 64px;
      margin: 1rem;
      cursor: pointer;
      font-family: Chicago_12;
      font-size: 12px;
      color: var(--secondary);
      text-align: center;
    }
    .desktop-icon img {
      width: 32px;
      height: 32px;
      margin-bottom: 4px;
      border: 1px solid var(--secondary);
      background: var(--primary);
    }
    .desktop-icon:hover {
      background: var(--secondary);
      color: var(--primary);
    }

    /* Boot Dialog */
    .boot-dialog {
      position: absolute;
      width: 600px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--primary);
      z-index: 2001;
      display: none;
      border: 0.1em solid var(--secondary);
      box-shadow: var(--box-shadow);
    }
    .boot-dialog .title-bar {
      display: flex;
      align-items: center;
      height: 1.5rem;
      margin: 0.1rem 0;
      padding: 0.2rem 0.1rem;
      background: linear-gradient(var(--secondary) 50%, transparent 50%);
      background-size: 6.6666666667% 13.3333333333%;
      background-clip: content-box;
    }
    .boot-dialog .title-bar .title {
      padding: 0 0.5em;
      margin: 0 auto;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.1;
      text-align: center;
      background: var(--primary);
      cursor: default;
      font-family: Chicago_12;
    }
    .boot-text {
      white-space: pre-wrap;
      line-height: 1.5em;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      display: none;
      text-align: left;
      color: var(--tertiary);
      font-family: Monaco, monospace;
      font-size: 14px;
      max-height: 300px;
      overflow: hidden;
      padding: 1rem 2rem;
    }
    .boot-text .ok { color: #0f0; }
    .boot-text .fail { color: #f00; }
    .progress-section {
      text-align: left;
      color: #0ff;
      font-family: Monaco, monospace;
      font-size: 14px;
      margin-top: 10px;
      padding: 0 2rem 1rem 2rem;
    }
    #progressBar {
      color: #FFC107;
    }

    /* Scrollbar */
    ::-webkit-scrollbar {
      width: 22px;
      background-color: var(--primary);
    }
    ::-webkit-scrollbar-track {
      background: linear-gradient(45deg, var(--secondary) 25%, transparent 25%, transparent 75%, var(--secondary) 75%),
                  linear-gradient(45deg, var(--secondary) 25%, transparent 25%, transparent 75%, var(--secondary) 75%);
      background-color: var(--primary);
      background-size: 4px 4px;
      background-position: 0 0, 2px 2px;
      width: 10px;
      border-left: 3px solid var(--secondary);
    }
    ::-webkit-scrollbar-thumb {
      width: 20px;
      box-sizing: content-box;
      background-color: var(--primary);
      border: 2px solid var(--secondary);
      border-right: none;
    }
    ::-webkit-scrollbar-button:vertical:start {
      background: url("icon/scrollbar-up.svg") no-repeat;
      height: 23.38px;
    }
    ::-webkit-scrollbar-button:vertical:start:active {
      background: url("icon/scrollbar-up-active.svg") no-repeat;
    }
    ::-webkit-scrollbar-button:vertical:end {
      background: url("icon/scrollbar-down.svg") no-repeat;
      height: 23.38px;
    }
    ::-webkit-scrollbar-button:vertical:end:active {
      background: url("icon/scrollbar-down-active.svg") no-repeat;
    }

    /* Window */
    .window {
      flex-direction: column;
      position: absolute;
      min-width: 320px;
      max-width: 640px;
      background-color: var(--primary);
      border: 0.1em solid var(--secondary);
      font-family: "Inconsolata", Menlo, Chicago, Geneva;
      box-shadow: var(--box-shadow), 0 0 10px rgba(147, 112, 219, 0.3);
      z-index: 100;
      display: none;
      resize: both;
      overflow: auto;
    }
    .window.draggable {
      cursor: move;
    }

    /* Modem Dialog */
    .modal-dialog {
      position: absolute;
      width: 400px;
      background: var(--primary);
      z-index: 200;
      display: none;
    }

    /* Title Bar */
    .title-bar {
      display: flex;
      align-items: center;
      height: 1.5rem;
      margin: 0.1rem 0;
      padding: 0.2rem 0.1rem;
      background: linear-gradient(var(--secondary) 50%, transparent 50%);
      background-size: 6.6666666667% 13.3333333333%;
      background-clip: content-box;
    }
    .title-bar .title {
      padding: 0 0.5em;
      margin: 0 auto;
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.1;
      text-align: center;
      background: var(--primary);
      cursor: default;
      font-family: Chicago_12;
    }
    .title-bar button {
      position: relative;
      display: block;
      width: 40px;
      height: 40px;
      margin: 0 0.2rem;
      border: 4px solid var(--secondary);
      background-color: var(--primary);
      cursor: pointer;
      transform: scale(0.5);
    }
    .title-bar button.close::before, .title-bar button.close::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
    }
    .title-bar button.close::before {
      background: linear-gradient(var(--secondary) 0%, var(--secondary) 100%) left center,
                  linear-gradient(var(--secondary) 0%, var(--secondary) 100%) right center,
                  linear-gradient(var(--secondary) 0%, var(--secondary) 100%) center top,
                  linear-gradient(var(--secondary) 0%, var(--secondary) 100%) center bottom;
      background-size: 30% 4px, 30% 4px, 4px 30%, 4px 30%;
      background-repeat: no-repeat;
    }
    .title-bar button.close::after {
      background: linear-gradient(var(--secondary) 0%, var(--secondary) 100%) left center,
                  linear-gradient(var(--secondary) 0%, var(--secondary) 100%) right center,
                  linear-gradient(var(--secondary) 0%, var(--secondary) 100%) center top,
                  linear-gradient(var(--secondary) 0%, var(--secondary) 100%) center bottom;
      background-size: 22.5% 3.6363636364px, 22.5% 3.6363636364px, 3.6363636364px 22.5%, 3.6363636364px 22.5%;
      background-repeat: no-repeat;
      transform: rotate(45deg) scale(1.1);
    }
    .title-bar button.close:active::before, .title-bar button.close:active::after {
      opacity: 1;
    }
    .title-bar button.resize {
      background: linear-gradient(var(--secondary) 0%, var(--secondary) 100%) left 58%,
                 linear-gradient(to bottom, var(--secondary) 0%, var(--secondary) 100%) 58% top;
      background-size: 60% 4px, 4px 60%;
      background-repeat: no-repeat;
      background-color: var(--primary);
    }
    .title-bar button.resize:active {
      background: var(--primary);
    }

    /* Separator */
    .separator {
      flex: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: 0.1rem solid var(--secondary);
      border-width: 0.1rem 0;
    }

    /* Window Pane */
    .window-pane {
      overflow-y: auto;
      padding: 1rem 2rem;
      font-size: 18px;
      letter-spacing: -0.025em;
    }
    .window-pane::-webkit-scrollbar {
      width: 22px;
      background-color: var(--primary);
    }
    .window-pane::-webkit-scrollbar-track {
      background: linear-gradient(45deg, var(--secondary) 25%, transparent 25%, transparent 75%, var(--secondary) 75%),
                  linear-gradient(45deg, var(--secondary) 25%, transparent 25%, transparent 75%, var(--secondary) 75%);
      background-color: var(--primary);
      background-size: 4px 4px;
      background-position: 0 0, 2px 2px;
      width: 10px;
      border-left: 4px solid var(--secondary);
    }
    .window-pane::-webkit-scrollbar-thumb {
      width: 20px;
      box-sizing: content-box;
      background-color: var(--primary);
      border: 2px solid var(--secondary);
      border-right: none;
    }

    /* Buttons */
    .btn, .btn-default {
      min-height: 20px;
      min-width: 59px;
      padding: 0 20px;
      background: var(--primary);
      border-style: solid;
      border-width: 5.5px;
      border-image: url("icon/button.svg") 30 stretch;
      color: var(--secondary);
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      font-family: Chicago_12;
      cursor: pointer;
    }
    .btn:active {
      background: var(--secondary);
      border-radius: 6px;
      color: var(--primary);
    }
    .btn:disabled {
      color: var(--disabled);
    }
    .btn-default {
      border-image: url("icon/button-default.svg") 60 stretch;
      border-width: 0.5em;
    }
    .btn-default:active {
      border-radius: 12px;
    }

    /* Input */
    input[type="text"] {
      border: 1.5px solid var(--secondary);
      font-family: Chicago_12;
      font-size: 18px;
      padding-left: 5px;
    }
    input[type="text"]:focus-visible {
      background: var(--secondary);
      color: var(--primary);
      outline: none;
    }

    /* Menu Bar */
    ul[role="menu-bar"] {
      display: flex;
      background: var(--primary);
      margin: 0;
      padding: 0;
      list-style: none;
      cursor: pointer;
      font-family: Chicago_12;
      font-size: 1em;
    }
    ul[role="menu-bar"] > [role="menu-item"] {
      position: relative;
      padding: 6px 10px;
    }
    ul[role="menu-bar"] > [role="menu-item"]:hover,
    ul[role="menu-bar"] > [role="menu-item"]:focus {
      background: var(--secondary);
      color: var(--primary);
      outline: none;
    }
    ul[role="menu"] {
      display: none;
      position: absolute;
      min-width: 200px;
      background: var(--primary);
      color: var(--secondary);
      border: 1px solid var(--secondary);
      box-shadow: var(--box-shadow);
      padding: 0;
      margin: 0;
      z-index: 100;
    }
    ul[role="menu"]::before {
      content: "";
      pointer-events: none;
      position: absolute;
      left: 28px;
      width: 2px;
      box-shadow: inset 1px 0 rgba(0, 0, 0, 0.15), inset -1px 0 var(--primary);
    }
    ul[role="menu"] > [role="menu-item"] > a {
      all: unset;
      position: relative;
      padding: 5px 20px;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
    ul[role="menu"] > [role="menu-item"] > a:hover,
    ul[role="menu"] > [role="menu-item"] > a:focus {
      background: var(--secondary);
      color: var(--primary);
    }
    ul[role="menu-item"].divider::after {
      content: "";
      pointer-events: none;
      display: block;
      padding: 0;
      border-top: 1.5px dotted var(--secondary);
    }

    /* Field Row */
    .field-row {
      display: flex;
      align-items: center;
      font-family: Chicago_12;
      font-size: 1em;
    }
    .field-row > * + * {
      margin-left: var(--grouped-element-spacing);
    }
    .modeless-text {
      font-family: Chicago_12;
      font-size: 1em;
      font-weight: normal;
    }

    /* BBS-Specific Styles */
    #modem-sequence .window-pane {
      color: #00FF00;
      font-family: Monaco, monospace;
      white-space: pre-wrap;
      height: 200px;
      text-align: center;
    }
    .message-area {
      height: 300px;
      overflow-y: auto;
      font-family: Monaco, monospace;
      white-space: pre-wrap;
      line-height: 1.2;
    }
    .banner-container {
      display: flex;
      justify-content: center;
      margin: 10px 0;
      font-family: Monaco, monospace;
      white-space: pre;
      overflow-x: auto;
      font-size: 12px;
    }
    .welcome-box {
      text-align: center;
      margin: 20px auto;
    }
    .welcome-box-inner {
      display: inline-block;
      padding: 10px;
      background: var(--primary);
      border: 2px solid var(--secondary);
      font-family: Monaco, monospace;
      font-size: 14px;
      line-height: 1.3;
    }

    /* Responsive Adjustments */
    @media (max-width: 600px) {
      .banner-container {
        font-size: 10px;
      }
      .window, .modal-dialog, .boot-dialog {
        margin: 0.5rem;
        min-width: 280px;
        max-width: 100%;
      }
      .desktop-icon {
        width: 48px;
        font-size: 10px;
      }
      .desktop-icon img {
        width: 24px;
        height: 24px;
      }
      .boot-icon {
        width: 48px;
        height: 48px;
      }
      .boot-icon-label {
        font-size: 10px;
      }
    }

    /* CRT Flicker Animation */
    @keyframes crt-flicker {
      0% { opacity: 0.9; }
      100% { opacity: 1; }
    }
    .message-area, .boot-text, .progress-section {
      animation: crt-flicker 0.1s infinite alternate;
    }
  </style>
</head>
<body>
  <!-- Boot Screen -->
  <div id="boot-screen" class="boot-screen">
    <img id="boot-icon" class="boot-icon" src="assets/images/eye-icon.png" alt="THUNDERBIRD OS Icon">
    <div class="boot-icon-label">
      <span class="question-mark">?</span>
    </div>
  </div>

  <!-- Boot Dialog -->
  <div id="boot-dialog" class="boot-dialog">
    <div class="title-bar">
      <button aria-label="Close" class="close" disabled></button>
      <h1 class="title">THUNDERBIRD OS Boot</h1>
      <button aria-label="Resize" class="resize" disabled></button>
    </div>
    <pre class="boot-text" id="bootText"></pre>
    <div class="progress-section" id="progressSection" style="display: none;">
      <pre id="progressHeader">THUNDERBIRD OS v1.0.0 Booting...</pre>
      <pre id="progressBar"></pre>
      <pre id="status">Initializing...</pre>
    </div>
  </div>

  <!-- Desktop Container -->
  <div id="desktop-container" class="desktop-container">
    <!-- Desktop Menu Bar -->
    <div class="desktop-menu">
      <ul role="menu-bar">
        <li role="menu-item" tabindex="0" aria-haspopup="true">
          <span class="apple" aria-label="Apple"></span>
          <ul role="menu">
            <li role="menu-item"><a href="#about" style="text-decoration:none; color:inherit;">About THUNDERBIRD BBS</a></li>
            <li role="menu-item" class="divider"></li>
            <li role="menu-item"><a href="#prefs" style="text-decoration:none; color:inherit;">Preferences</a></li>
          </ul>
        </li>
        <li role="menu-item" tabindex="0" aria-haspopup="true">
          File
          <ul role="menu">
            <li role="menu-item"><a href="#open" style="text-decoration:none; color:inherit;">Open</a></li>
            <li role="menu-item"><a href="#close" style="text-decoration:none; color:inherit;">Close</a></li>
            <li role="menu-item" class="divider"></li>
            <li role="menu-item"><a href="#quit" style="text-decoration:none; color:inherit;">Quit</a></li>
          </ul>
        </li>
        <li role="menu-item" tabindex="0" aria-haspopup="true">
          Edit
          <ul role="menu">
            <li role="menu-item"><a href="#copy" style="text-decoration:none; color:inherit;">Copy</a></li>
            <li role="menu-item"><a href="#paste" style="text-decoration:none; color:inherit;">Paste</a></li>
          </ul>
        </li>
        <li role="menu-item" tabindex="0" aria-haspopup="true" style="margin-left:auto;">
          Special
          <ul role="menu" style="right:0;">
            <li role="menu-item"><a href="#settings" style="text-decoration:none; color:inherit;">Settings</a></li>
            <li role="menu-item"><a href="#about" style="text-decoration:none; color:inherit;">About</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Desktop Icons -->
    <div class="desktop">
      <div class="desktop-icon" data-target="bbs-window">
        <img src="icon/bbs-icon.svg" alt="THUNDERBIRD BBS Icon">
        <span>THUNDERBIRD BBS</span>
      </div>
    </div>

    <!-- Modem Sequence Window -->
    <div id="modem-sequence" class="modal-dialog" style="top: 20%; left: 50%; transform: translateX(-50%);">
      <div class="title-bar">
        <button aria-label="Close" class="close"></button>
        <h1 class="title">Connecting...</h1>
        <button aria-label="Resize" class="resize" disabled></button>
      </div>
      <div class="window-pane" id="modem-text"></div>
    </div>

    <!-- BBS Interface Window -->
    <div id="bbs-window" class="window" style="top: 10%; left: 50%; transform: translateX(-50%);">
      <div class="title-bar">
        <button aria-label="Close" class="close"></button>
        <h1 class="title">THUNDERBIRD BBS</h1>
        <button aria-label="Resize" class="resize"></button>
      </div>
      <div class="separator"></div>

      <ul role="menu-bar">
        <li role="menu-item" tabindex="0" aria-haspopup="true">
          File
          <ul role="menu">
            <li role="menu-item"><a href="#login" style="text-decoration:none; color:inherit;">Login</a></li>
            <li role="menu-item"><a href="#register" style="text-decoration:none; color:inherit;">Register</a></li>
            <li role="menu-item" class="divider"></li>
            <li role="menu-item"><a href="#exit" style="text-decoration:none; color:inherit;">Exit</a></li>
          </ul>
        </li>
        <li role="menu-item" tabindex="0" aria-haspopup="true">
          Messages
          <ul role="menu">
            <li role="menu-item"><a href="#new" style="text-decoration:none; color:inherit;">New Post</a></li>
            <li role="menu-item"><a href="#inbox" style="text-decoration:none; color:inherit;">Inbox</a></li>
          </ul>
        </li>
        <li role="menu-item" tabindex="0" aria-haspopup="true" style="margin-left:auto;">
          Special
          <ul role="menu" style="right:0;">
            <li role="menu-item"><a href="#settings" style="text-decoration:none; color:inherit;">Settings</a></li>
            <li role="menu-item"><a href="#about" style="text-decoration:none; color:inherit;">About</a></li>
          </ul>
        </li>
      </ul>

      <div class="window-pane message-area" id="message-display">
        <!-- Banner will be inserted here by JavaScript -->
      </div>

      <div class="separator"></div>
      <div class="window-pane">
        <div class="field-row">
          <label for="bbs-command" class="modeless-text">COMMAND:</label>
          <input id="bbs-command" type="text" placeholder="Type HELP">
        </div>
        <div class="field-row" style="justify-content: flex-end;">
          <button class="btn">CLEAR</button>
          <button class="btn btn-default">SEND</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Audio -->
  <audio id="systemChirp" src="assets/audio/system-chirp.mp3" loop></audio>
  <audio id="fanSound1" src="assets/audio/fan-hum.mp3"></audio>
  <audio id="fanSound2" src="assets/audio/fan-hum-2.mp3"></audio>
  <audio id="clicksSound" src="assets/audio/floppy-clicks.mp3" loop></audio>
  <audio id="bootBeep" src="assets/audio/startup-beep.mp3"></audio>

  <!-- Draggabilly -->
  <script src="https://unpkg.com/draggabilly@3.0.0/dist/draggabilly.pkgd.min.js"></script>

  <script>
    // Boot-Up Sequence
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

    let bootIndex = 0;
    let isChirping = true;

    function initBootScreen() {
      const chirpSound = document.getElementById('systemChirp');
      chirpSound.volume = 0.3;
      chirpSound.onerror = () => console.log('System chirp failed to load');
      chirpSound.play();

      document.getElementById('boot-icon').addEventListener('click', () => {
        isChirping = false;
        chirpSound.pause();
        document.querySelector('.boot-icon-label .question-mark').style.animation = 'none';
        document.querySelector('.boot-icon-label .question-mark').style.opacity = '1';
        startBoot();
      });
    }

    function startBoot() {
      document.getElementById('boot-dialog').style.display = 'block';

      const fanSound1 = document.getElementById('fanSound1');
      const fanSound2 = document.getElementById('fanSound2');
      const clicksSound = document.getElementById('clicksSound');
      const bootBeep = document.getElementById('bootBeep');

      fanSound1.volume = 0.4;
      fanSound2.volume = 0;
      clicksSound.volume = 0.3;

      fanSound1.onerror = () => console.log('Fan sound 1 failed to load');
      fanSound2.onerror = () => console.log('Fan sound 2 failed to load');
      clicksSound.onerror = () => console.log('Clicks sound failed to load');
      bootBeep.onerror = () => console.log('Boot beep failed to load');

      fanSound1.play();

      const crossfadeDuration = 2000;
      let isFirstPlaying = true;

      function crossfade() {
        if (isFirstPlaying) {
          fanSound2.currentTime = 0;
          fanSound2.play();
          fadeOut(fanSound1, crossfadeDuration);
          fadeIn(fanSound2, crossfadeDuration);
        } else {
          fanSound1.currentTime = 0;
          fanSound1.play();
          fadeOut(fanSound2, crossfadeDuration);
          fadeIn(fanSound1, crossfadeDuration);
        }
        isFirstPlaying = !isFirstPlaying;
      }

      fanSound1.addEventListener('timeupdate', function() {
        if (fanSound1.duration - fanSound1.currentTime <= crossfadeDuration / 1000) {
          crossfade();
        }
      });

      fanSound2.addEventListener('timeupdate', function() {
        if (fanSound2.duration - fanSound2.currentTime <= crossfadeDuration / 1000) {
          crossfade();
        }
      });

      function fadeIn(audio, duration) {
        let volume = 0;
        const increment = 0.4 / (duration / 50);
        const interval = setInterval(() => {
          if (volume >= 0.4) {
            clearInterval(interval);
            audio.volume = 0.4;
          } else {
            volume += increment;
            audio.volume = Math.min(volume, 0.4);
          }
        }, 50);
      }

      function fadeOut(audio, duration) {
        let volume = audio.volume;
        const decrement = volume / (duration / 50);
        const interval = setInterval(() => {
          if (volume <= 0) {
            clearInterval(interval);
            audio.volume = 0;
            audio.pause();
          } else {
            volume -= decrement;
            audio.volume = Math.max(volume, 0);
          }
        }, 50);
      }

      clicksSound.play();
      bootBeep.play();

      showNextLine();
    }

    function showNextLine() {
      const bootText = document.getElementById('bootText');
      if (bootIndex < bootLines.length) {
        bootText.innerHTML += bootLines[bootIndex] + '\n';
        bootText.style.opacity = 1;
        bootText.style.display = 'block';
        bootIndex++;
        setTimeout(showNextLine, 2600);
      } else {
        const bootTextHeight = bootText.offsetHeight;
        const progressSection = document.getElementById('progressSection');
        progressSection.style.marginTop = `${bootTextHeight + 10}px`;
        progressSection.style.display = 'block';
        simulateLoading();
      }
    }

    function simulateLoading() {
      let progress = 0;
      const bar = document.getElementById('progressBar');
      const status = document.getElementById('status');
      const clicks = document.getElementById('clicksSound');
      const stages = [
        'Initializing...',
        'Connecting to THUNDERBIRD Network...',
        'Fetching Messages...',
        'Boot Complete!'
      ];
      let stageIndex = 0;

      const interval = setInterval(() => {
        if (progress >= 100) {
          bar.textContent = '[△△△△△△△△△△△△△△△△△△△△] 100%';
          clearInterval(interval);
          clicks.pause();
          status.textContent = 'Boot Complete!';
          setTimeout(() => {
            document.getElementById('boot-screen').style.display = 'none';
            document.getElementById('boot-dialog').style.display = 'none';
            document.getElementById('desktop-container').style.display = 'block';
          }, 2000);
        } else {
          progress += 2;
          const triangles = Math.floor(progress / 5);
          const spaces = 20 - triangles;
          bar.textContent = '[' + '△'.repeat(triangles) + ' '.repeat(spaces) + '] ' + Math.round(progress) + '%';
          if (progress % 25 === 0 && stageIndex < stages.length - 1) {
            stageIndex++;
            status.textContent = stages[stageIndex];
          }
          clicks.volume = 0.2 + Math.random() * 0.1;
        }
      }, 100);
    }

    // Banner Generator
    function createBanner() {
      const asciiArt = `
┌───────────┐
│ THUNDERBIRD │
│    BBS     │
└───────────┘
`.trim();

      return `
        <div class="banner-container">${asciiArt}</div>
        <div class="welcome-box">
          <div class="welcome-box-inner">
            ┌───────────────────────┐<br>
            │   WELCOME TO THE BBS  │<br>
            └───────────────────────┘
          </div>
        </div>
      `;
    }

    // Modem Connection Sequence
    function startModemSequence(callback) {
      const modemText = document.getElementById('modem-text');
      const modemSequence = [
        "ATZ",
        "OK",
        "ATDT555-1234",
        "CONNECT 2400",
        "NEGOTIATING PROTOCOL...",
        "HANDSHAKE COMPLETE",
        "LOGGING INTO SYSTEM...",
        "CONNECTION ESTABLISHED"
      ];

      let step = 0;
      function nextStep() {
        if (step < modemSequence.length) {
          modemText.innerHTML += modemSequence[step] + "<br>";
          step++;
          setTimeout(nextStep, 800);
        } else {
          callback();
        }
      }
      nextStep();
    }

    // BBS Command Handler
    function initBBS() {
      document.getElementById('bbs-command').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          const command = this.value.toUpperCase();
          const terminal = document.getElementById('message-display');
          
          if (command === 'HELP') {
            terminal.innerHTML += '\n\nCOMMANDS: HELP, LOGIN, LIST, QUIT';
          } else if (command === 'LOGIN') {
            terminal.innerHTML += '\n\nLOGIN FEATURE COMING SOON';
          } else {
            terminal.innerHTML += '\n\nUNKNOWN COMMAND';
          }
          
          this.value = '';
          terminal.scrollTop = terminal.scrollHeight;
        }
      });

      document.querySelector('.btn:not(.btn-default)').addEventListener('click', function() {
        document.getElementById('message-display').innerHTML = createBanner();
      });
    }

    // Menu Functionality
    function initMenus() {
      document.querySelectorAll('[aria-haspopup="true"]').forEach(menuItem => {
        menuItem.addEventListener('click', function(e) {
          e.stopPropagation();
          const menu = this.querySelector('ul[role="menu"]');
          if (menu.style.display === 'block') {
            menu.style.display = 'none';
          } else {
            document.querySelectorAll('ul[role="menu"]').forEach(m => {
              m.style.display = 'none';
            });
            menu.style.display = 'block';
          }
        });
      });

      document.addEventListener('click', function() {
        document.querySelectorAll('ul[role="menu"]').forEach(menu => {
          menu.style.display = 'none';
        });
      });
    }

    // Desktop Icon Click Handler
    function initDesktop() {
      document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('click', function() {
          const targetId = this.getAttribute('data-target');
          const modemWindow = document.getElementById('modem-sequence');
          const bbsWindow = document.getElementById(targetId);

          modemWindow.style.display = 'block';
          startModemSequence(() => {
            modemWindow.style.display = 'none';
            bbsWindow.style.display = 'block';
            document.getElementById('message-display').innerHTML = createBanner();
          });
        });
      });
    }

    // Draggable Windows
    function initDraggables() {
      const windows = document.querySelectorAll('.window');
      windows.forEach(window => {
        const draggie = new Draggabilly(window, {
          handle: '.title-bar',
          containment: 'body'
        });
        window.classList.add('draggable');
      });
    }

    // Initialize Everything
    window.onload = function() {
      initBootScreen();
      initMenus();
      initDesktop();
      initBBS();
      initDraggables();
    };
  </script>
</body>
</html>


================================================
FILE: _archive/new-unified-project/project-root/package.json
================================================
{
  "name": "unified-system-emulator",
  "version": "1.0.0",
  "scripts": {
    "start": "live-server ./frontend --entry-file=index.html"
  },
  "devDependencies": {
    "live-server": "^1.2.2"
  }
}



================================================
FILE: _archive/new-unified-project/project-root/tbesq-shell-5-boot.html
================================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THUNDERBIRD.ESQ</title>
  <link rel="stylesheet" href="./system.css">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      background: #1e1e1e;
      overflow: hidden;
      font-family: system-ui, sans-serif;
    }
    #boot {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: black;
      color: lime;
      font-family: monospace;
      padding: 1em;
      white-space: pre-wrap;
    }
    #desktop {
      display: none;
      width: 100vw;
      height: 100vh;
      background: #3a3a3a;
      position: relative;
    }
    #taskbar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40px;
      background: #2e2e2e;
      border-top: 1px solid #000;
      display: flex;
      align-items: center;
      padding: 0 5px;
      color: white;
      font-size: 0.9em;
    }
    .window {
      position: absolute;
      border: 2px solid #000;
      background: #fff;
      width: 400px;
      height: 300px;
      box-shadow: 4px 4px 0 #000;
      resize: both;
      overflow: auto;
    }
    .window-header {
      height: 25px;
      background: #c0c0c0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5px;
      cursor: move;
    }
    .window-content {
      padding: 10px;
    }
    .taskbar-button {
      margin-right: 5px;
      background: #555;
      border: none;
      color: white;
      padding: 5px 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="boot">
    THUNDERBIRD.ESQ v0.2

    Initializing virtual stack...
    Loading system.css...
    Spawning desktop nodes...
    
    [Press Enter to Continue]
  </div>

  <div id="desktop">
    <div id="taskbar">
      <button class="taskbar-button" onclick="spawnWindow('Welcome')">Welcome</button>
    </div>
  </div>

  <script>
    // Boot sequence
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('boot').style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
      }
    });

    // Basic window manager
    let zIndexCounter = 10;

    function spawnWindow(title) {
      const win = document.createElement('div');
      win.className = 'window';
      win.style.top = '100px';
      win.style.left = '100px';
      win.style.zIndex = zIndexCounter++;

      const header = document.createElement('div');
      header.className = 'window-header';
      header.innerHTML = `<span>${title}</span><button onclick="this.closest('.window').remove()">X</button>`;

      const content = document.createElement('div');
      content.className = 'window-content';
      content.innerText = `This is a window titled: ${title}`;

      win.appendChild(header);
      win.appendChild(content);
      document.getElementById('desktop').appendChild(win);

      makeDraggable(win, header);
    }

    function makeDraggable(win, header) {
      let offsetX = 0, offsetY = 0, dragging = false;

      header.addEventListener('mousedown', e => {
        dragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
        win.style.zIndex = zIndexCounter++;
      });

      document.addEventListener('mousemove', e => {
        if (dragging) {
          win.style.left = (e.clientX - offsetX) + 'px';
          win.style.top = (e.clientY - offsetY) + 'px';
        }
      });

      document.addEventListener('mouseup', () => dragging = false);
    }
  </script>
</body>
</html>


================================================
FILE: _archive/new-unified-project/project-root/apps/big-gifs.js
================================================
export function render(container) { container.innerHTML = '<h1>BIG GIFS Tool Loaded</h1>'; }



================================================
FILE: _archive/new-unified-project/project-root/apps/chiptune-composer.js
================================================
export function render(container) { container.innerHTML = '<h1>Chiptune Composer Loaded</h1>'; }



================================================
FILE: _archive/new-unified-project/project-root/apps/sprite-slicer.js
================================================
export function render(container) { container.innerHTML = '<h1>Sprite Slicer Tool Loaded</h1>'; }



================================================
FILE: _archive/new-unified-project/project-root/basys/README.md
================================================

***

# BaSYS 6

An open source recreation of Apple System 6, part of the WacOS operating system project. Written in C, Pascal, and Assembly.

This project is currently very early in development, and is not yet functional.

## Home repositories

[Guesthouse repository](https://github.com/seanpm2001/WacOS_BaSYS_6/)

This is a guesthouse repository, and not a home repository, as development mainly stays on the main WacOS side. This is just the guesthouse that the project retreats to at times. If you are already in this repository, the link is likely recursive, and will reload the page.

[Home repository](https://github.com/seanpm2001/WacOS/tree/WacOS-dev/Basys/6/)

This is the home repository. If you are already in this repository, the link is likely recursive, and will reload the page.

***

**File version:** `1 (2022, Saturday, May 7th at 9:37 pm PST)`

***



================================================
FILE: _archive/new-unified-project/project-root/basys/ASM.asm
================================================
; Start of script
; Assembly runtime script for BaSYStem 6
; Note: I do not know the Assembly language very well. For now, this is just pseudocode and is NOT functional

; Memory tests
memTotal = 4194304 ; Total storage on the main volume (4 MiB, or 4.194 MB)
memExter = 8388608 ; Total storage on the external volume (8 MiB, or 8.338 MB)
memEXFL1 = 360000 ; Total storage on the virtual floppy volume A (360K)
memEXFL2 = 720000 ; Total storage on the virtual floppy volume B (720K)
memEXFL3 = 1048576 ; Total storage on the virtual floppy volume C (1 MiB, or 1.048 MB)
memEXFL4 = 1440000 ; Total storage on the virtual floppy volume D (1.37 MiB, or 1.44 MB)
check 00001111 ; Checks the system identifier (old)
check 00000001 ; Checks the system identifier (new)
; System identifier guide
; System 1 (old/still in use) 000011111
; System 1 (new/cur) 000000001
; System 2 (cur) 00000011
; System 3 (cur) 00000111
; System 4 (cur) 00001111
; System 5 (cur) 00011111
; System 6 (cur) 00111111
; System 7 (cur) 01111111
; Cur = Current
; Random syntax test
mov AL, 8h ; Load AL with ? decimal (8 hex)
mov HEX, 16h ; Load AL with ? decimal (16 hex)
asm;asm

; File info
; File type: Assembly source file (*.asm)
; File version: 1 (2021, Wednesday, December 22nd at 6:26 pm)
; Line count (including blank lines and compiler line): 34
; End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/AUTHORS
================================================
=== Authors ====
1. @seanpm2001
2. No other authors as of 2021, August 24th at 3:36 pm

---
The authors file is for everyone who has contributed to this project directly. The credits file is for all credits and authors, along with other projects used in this project.
---



================================================
FILE: _archive/new-unified-project/project-root/basys/AUTOMATE2001.yml
================================================
# A set of tasks for the Automate2001 bot to perform here
automate2001_tasks:
isAlldone: "False"

-
Automate-All-ContributorSrc:
-
Automate-Pull-Requests-archival
isAdone: "False"
Automate-Index-file
isBdone: "False"
Automate-Issue-archival
isCdone: "False"

-
Automate-RepoData:
-
Automate-RepoData-Description
isDDone: "False"
Automate-RepoData-GitHubLink
isEDone: "False"
Automate-RepoData-GitHubGitLink
isFDone: "False"
Automate-RepoData-Linked
isGDone: "False"
Automate-RepoData-Topics
isHDone: "False"

# File version: 1 (2022, Tuesday, February 22nd at 8:07 pm)



================================================
FILE: _archive/new-unified-project/project-root/basys/COPYINGL
================================================

# LICENSE UNDER DEVELOPMENT

Copying this Miscellenaneous project (from @Seanpm2001)

You are free to copy and distribute my software anywhere, as long as you abide by the rules of the LICENSE (GNU General Public License V3) and follow these 4 rules:

1. Plagiarism - Plagiarism is never allowed for any of my projects. It is my #1 rule. If you are to use this project, you cannot plagiarize it (claim that you made it and that I didn't)

2. Embedding - If you are to embed this projects files or its source code into another project, you must keep this file, the license file, and the README file with credit to Sean Patrick Myrick (@Seanpm2001)
 
3. Ethics - You must use this project for good and not evil. Unethical purposes such as ransomware, programs with anti-virtual machine/anti-emulator source code, and privacy invasive spyware and data collection are not allowed.

4. Credit - Please give credit when using my software. See §Plagiarism

Additionally

<!-- A. NSFW - You can use my software on any project deemed vulgar or repulsive (such as Internet Pornography, Erotica) as long as it isn't illegal usage. !-->

Copyleft (🄯) Seanpm2001 (2021-2021)

File version: 1 (2021, Monday August 23rd at 6:27 pm)

Original file name: COPYING (changed to COPYINGL so that GitHub wouldn't overwrite the GPL3 as the main license, renaming this file is safe)



================================================
FILE: _archive/new-unified-project/project-root/basys/CREDITS
================================================

---

{{int:version-credits-summary}}
This Miscellaneous project by Seanpm2001 is a collaborative project released under the GNU General Public License v3. We would like to recognize the following names for their contribution to the product.

This comment block and this file (excluding author names) was modified from MediaWiki/CREDITS -->

== Maintainers ==
<!-- BEGIN MAINTAINERS LIST !-->

1. @seanpm2001 - Creator and primary maintainer of this project
2. No other contributors as of Monday, August 23rd 2021

== Contributors ==
<!-- BEGIN CONTRIBUTOR LIST -->
1. @seanpm2001
2. @GitHub (For being the first host of this project)
3. No other contributors as of Monday, August 23rd 2021

---



================================================
FILE: _archive/new-unified-project/project-root/basys/INITIAL_COMMIT.txt
================================================
{/*{:>(<

INITIAL COMMIT

This repository was generated from seanpm2001/Git-Template_V8
This file aims to serve as a reminder to this projects first commit.
This file should NOT be modified in production EVER
Preserve it!

>)<:}*/}
File version: 1 (2022, Monday, January 3rd at 1:54 pm)



================================================
FILE: _archive/new-unified-project/project-root/basys/INSTALL
================================================
---
Installing this Miscellaneous project by @seanpm2001
---

<!--

This project currently doesn't have to be installed to be viewed, and currently doesn't require installation, it is a basic website project that is compliant with web standards, so it should work in any web browser that respects WHATWG.

If you want to load the web pages, you will need to have an HTML5 framework installed (version 5.0 or higher) and the packages for any programming languages included.

The current included languages include:

None (v1)

If you want to view the image files, the majority of files are in JPG format. Make sure your computer can handle images of 2560x1440/2560x1080 resolution well, and that your computer can handle JPG files.

Some image files are in other formats, such as SVG, and PNG. You will need support for viewing these files to view these files.

Some included files are in Markdown format (*.md) for best viewing, you should use a markdown viewer/markdown editor.

Some included files are in PDF format. They should be opened with a document viewer capable of handling PDF documents.
!-->

Install instructions need to be added manually.

---
Install instructions file version: 1 (Monday, August 23rd 2021 at 6:31 pm)
---



================================================
FILE: _archive/new-unified-project/project-root/basys/K.desktop
================================================
# Start of script
# Sample KDE desktop entry
[Desktop Entry]
Type=Application
Exec=your-app %u
MimeType=application/x-your-mime-type;
Icon=some-icon
X-DocPath=yourapp/index.html
Terminal=false
Name=Your App
GenericName=Some Generic Name
Comment=Short Description Of Your App
Categories=Qt;KDE;
# File info
# File type: KDE desktop file (*.desktop)
# File version: 1 (2021, Tuesday, December 14th at 4:05 pm)
# Line count (including blank lines and compiler line): 19
# End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/LICENSE-GPL.c
================================================
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program>  Copyright (C) <year>  <name of author>
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.



================================================
FILE: _archive/new-unified-project/project-root/basys/LICENSE-GPL.txt
================================================
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program>  Copyright (C) <year>  <name of author>
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.



================================================
FILE: _archive/new-unified-project/project-root/basys/LICENSE-GPL3.c
================================================
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program>  Copyright (C) <year>  <name of author>
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.



================================================
FILE: _archive/new-unified-project/project-root/basys/LICENSE-GPL3.txt
================================================
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program>  Copyright (C) <year>  <name of author>
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.



================================================
FILE: _archive/new-unified-project/project-root/basys/LICENSE.c
================================================
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program>  Copyright (C) <year>  <name of author>
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.



================================================
FILE: _archive/new-unified-project/project-root/basys/LICENSE.txt
================================================
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS

            How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    <one line to give the program's name and a brief idea of what it does.>
    Copyright (C) <year>  <name of author>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

  If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:

    <program>  Copyright (C) <year>  <name of author>
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

The hypothetical commands `show w' and `show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".

  You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
<https://www.gnu.org/licenses/>.

  The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
<https://www.gnu.org/licenses/why-not-lgpl.html>.



================================================
FILE: _archive/new-unified-project/project-root/basys/MAIN.c
================================================
#include <stdio.h>
#include <string.h>
// Start of script
// BaSYSTEM 6 - A compatibility layer for Apple System 6
// Note: I am inexperienced with the C language, so this is not functional yet, and serves as pseudocode
int assembly() {
	// Coming soon
	asm 00111111;
	break;
}
int system() {
	// System functions
	int on.shutdown() {
		return shutdownPrompt();
		break;
	}
	int shutdownPrompt() {
		printf("Are you sure you want to shut down?\nY/N");
		if continue {
			goto system.trash { return empty(); }
			exit;
		} else {
			goto 6;
			break;
		}
		break;
	}
	int system.trash() {
		int empty() {
			// Trash can emptying function
			// Coming soon
			break;
		}
		int on.shutdown()
		break;
	}
	break;
	int fontSet() {
		#include </FONT/MONACO.TTF>
		#include </FONT/CHICAGO.TTF>
		break;
	}
	return fontSet();
	break;
}
int wacSystemSoftware() {
	continue {
		char winTitle = "BaSYS 6 Disk";
		double freeMEM = 8388608;
		double usedMEM = 0;
		break;
	}
}
int programs() {
	int alarmClock() {
		int startAClock() {
			// Coming soon
			break;
		}	
		return startAClock();
		break;
	}
	int controlPanel() {
		int startCPanel() {
			// Coming soon
			break;
		}
		int sysInfo() {
			printf("System info");
			int credits() {
				printf("Credits");
				printf("Developers");
				printf("@seanpm2001 - C programming, foundation, and concept");
				break;
			}
			int aboutBASYSSix() {
				printf("About BaSYS/6");
				printf("WacOS operating system/BASYS/6");
				printf("Version 0.01 Alpha");
				printf("2021-2021");
				return credits();
				break;
			}
			return aboutBASYSSix();
			break;
		}
		return startCPanel();
		break;
	}
	int keyCaps() {
		int startKCaps() {
			// Coming soon
			break;
		}
		return startKCaps();
		break;
	}
	int notepad() {
		int startNotepad() {
			// Coming soon
			break;
		}
		return startNotepad();
		break;
	}
	int puzzle() {
		int startPuzzle() {
			// Coming soon
			break;
		}
		return startPuzzle();
		break;
	}
	int scrapBook() {
		int startSBook() {
			// Coming soon
			break;
		}
		return startSBook();
		break;
	}
	return alarmClock();
	return controlPanel();
	return keyCaps();
	return notepad();
	return puzzle();
	return scrapBook();
	break;
}
int startup() {
	// Coming soon
	break;
}
int findr() {
	int navbar(); {
		int menuItems() {
			int mainMenu() {
				char logo = "";
				// Dropdown menu items
				int alarmClockML() {
					char alarmClockCHR = "Alarm clock";
					// Functional data goes here
					break;
				}
				int controlPanelML() {
					char controlPanelCHR = "Control Panel";
					// Functional data goes here
					break;
				}
				int findFileML() {
					char findFileCHR = "Find file";
					// Functional data goes here
					break;
				}
				int keyCapsML() {
					char keyCapsCHR = "Key Caps";
					// Functional data goes here
					break;
				}
				int notepadML() {
					char notePadCHR = "Note Pad";
					// Functional data goes here
					break;
				}
				int puzzleML() {
					char puzzleCHR = "Puzzle";
					// Functional data goes here
					break;
				}
				int scrapbookML() {
					char scrapbookCHR = "Scrapbook";
					// Functional data goes here
					break;
				}
				return alarmClockML();
				return controlPanelML();
				return findFileML();
				return keyCapsML();
				return notepadML();
				return puzzleML();
				return scrapbookML();
				break;
				}
			int fileMenu() {
				char lg2 = "File";
				// Dropdown menu items
				int putBackML() {
					char putBackCHR =" Put Back";
					// Functional data goes here
					break;
				}
				int closeML() {
					char closeCHR = "Close";
					// Functional data goes here
					break;
				}
				int closeAllML() {
					char closeAllCHR = "Close All";
					// Functional data goes here
					break;
				}
				int printML() {
					char printCHR = "Print";
					// Functional data goes here
					break;
				}
				return putBackML();
				return closeML();
				return closeAllML();
				return printML();
				break;
			}
			int editMenu() {
				char lg3 = "Edit";
				// Dropdown menu items
				int undoML() {
					char undoCHR = "Undo";
					// Functional data goes here
					break;		
				}
				int cutML() {
					char cutCHR = "Cut";
					// Functional data goes here
					break;
				}
				int copyML() {
					char copyCHR = "Copy";
					// Functional data goes here
					break;
				}
				int pasteML() {
					char pasteCHR = "Paste";
					// Functional data goes here
					break;
				}
				int clearML() {
					char clearCHR = "Clear";
					// Functional data goes here
					break;
				}
				int selectAllML() {
					char selectAllCHR = "Select All";
					// Functional data goes here
					break;
				}
				return undoML();
				return cutML();
				return copyML();
				return pasteML();
				return clearML();
				return selectAllML();
				break;
			}
			int viewMenu() {
				char lg4 = "View";
				// Dropdown menu items
				int viewBy_IconML() {
					char viewByIconCHR = "by Icon";
					// Functional data goes here
					break;	
				}
				int viewBy_NameML() {
					char viewByNameCHR = "by Name";
					// Functional data goes here
					break;	
				}
				int viewBy_DateML() {
					char viewByDateCHR = "by Date";
					// Functional data goes here
					break;	
				}
				int viewBy_SizeML() {
					char viewBySizeCHR = "by Size";
					// Functional data goes here
					break;	
				}
				int viewBy_KindML() {
					char viewByKindCHR = "by Kind";
					// Functional data goes here
					break;	
				}
				return viewBy_IconML();
				return viewBy_NameML();
				return viewBy_DateML();
				return viewBy_SizeML();
				return viewBy_KindML();
				break;
			}
			int specialMenu() {
				char lg5 = "Special";
				// Dropdown menu items
				int cleanUpML() {
					char cleanUpCHR = "Clean Up";
					// Functional data goes here
					break;
				}
				int emptyTrashML() {
					char emptyTrashCHR = "Empty Trash";
					// Functional data goes here
					break;
				}
				int eraseDiskML() {
					char eraseDiskCHR = "Erase Disk";
					// Functional data goes here
					break;
				}
				int setStartupML() {
					char setStartupCHR = "Set Startup";
					// Functional data goes here
					break;
				}
				return cleanupML();
				return emptyTrashML();
				return eraseDiskML();
				return setStartupML();
				break;
			}
		}
		break;
	}
	int functions() {
		// System functions
		// Coming soon
		break;
	}
}
int desktop() {
	int wallpaper() {
		int defaultWP() {
			default = "Gray";
			break;
		}
	}
	int grid() {
	
	}
	int icons() {
		int trash() {
			double capacity = "8388608"; // Capacity in bytes (2^20*8, 8.388 MB)
			continue {
				// Open trash can
				return system.trash();
			}
			int empty() {
				// Empty the trash can
				// Coming soon
				break;	
			}
		}
	}
}
int fileSystem() {
	char fsystype = "HFS";
	double volumeSize = "8388608"; // Capacity in bytes (2^20*8, 8.388 MB)
	int systemFolder() {
		int sysDirContents() {
			// Fonts
			#include </FONT/MONACO.TTF>
			#include </FONT/CHICAGO.TTF>
			// System files
			#include </MAIN.C>
			#include </MAIN.H>
			// Graphics
			#include </trash_empty.png">
			#include </systemdisk.png>
			#include </roundtopleft.png>
			#include </roundtopright.png>
			break;
		}
	}
	break;
}
int runTime() {
	int cRun() {
		#include </c.c>
		#include </c.h>
		break;
	}
	int pascalRun() {
		#include </PAS.pas>
		break;
	}
	int asmRun() {
		#include </ASM.asm>
		break;
	}
	return cRun();
	return pascalRun();
	return asmRun();
	break;
}
int main() {
	// Main method, calls all other methods
	return assembly();
	return system();
	return wacSystemSoftware();
	return programs();
	return startup();
	return findr();
	return desktop();
	return fileSystem();
	return runTime();
	break;
}
/* File info
* File version: 1 (2021, Wednesday, December 22nd at 4:07 pm)
* File type: C Source file (*.c *.h)
* Line count (including blank lines and compiler line): 412
*/
// This script is incomplete, and needs lots of work
// End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/MAIN.H
================================================
// Start of script
// BaSYS System 6 headers

// Fonts
#include </FONT/MONACO.TTF>
#include </FONT/CHICAGO.TTF>

// System files
#include </MAIN.C>
#include </MAIN.H>

// Graphics
#include </trash_empty.png">
#include </systemdisk.png>
#include </roundtopleft.png>
#include </roundtopright.png>

// Runtime
#include </c.c>
#include </c.h>
#include </PAS.pas>
#include </ASM.asm>

/* File info
* File type: C header file (*.h)
* File version: 1 (2021, December 22nd at 3:43 pm)
* Line count (including blank lines and compiler line): 30
*/
// End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/makefile.mk
================================================
# Start of script
# The Makefile for this project
# Rename the secondary copying license
# Since I don't know how to just rename a file, I will copy it and delete the original, that is as close as I can get with GNU Make right now
copy /COPYINGL to /COPYING
rm -f /COPYINGL
echo "COPYING license file has been corrected."
# This syntax isn't valid yet, I don't know how to write in GNU Make very well
# File info
# File type: Makefile (MAKEFILE, *.mk)
# File version: 1 (Wednesday, August 18th 2021 at 6:41 pm)
# Line count (including blank lines and compiler line): 14
# End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/PAS.pas
================================================
{ Start of script }
// Pascal Runtime script
// Note: I am inexperienced with Pascal, so this is just pseudocode for now
program pascalRuntimeBASYSSIX(output);
begin
	do jobs();
	do compile();
	do other();
	break;
end.
function jobs();
begin
	// Coming soon
	break;
end.
function compile();
	// Coming soon
	break;
end.
function other();
	// Coming soon
	break;
end.
{ File info }
// File version: 1 (Wednesday, 2021 December 22nd at 3:52 pm)
// File type: Pascal source file (*.pas)
// Line count (including blank lines and compiler line): 30

{ End of script }



================================================
FILE: _archive/new-unified-project/project-root/basys/PROJECT_LANG_1.c
================================================
// Start of script
// I decided to make the main project language for this project (WacOS/BaSYS 6) be the C programming language, as C is a stable system language that is preferred for the core of this project, as the system it is based on is mainly written in this language. It will be supplemented with 2 other languages (Pascal and Assembly) but I am unsure on a 4th, 5th, etc.
#include <stdio.h>
union projectLanguageFileOne() {
int main(void) {
    printf("Project language file 1: C\n");
    printf("For: WacOS/BaSYS 6 (subsystem for Apple System 6)\n");
    printf("I decided to make the main project language for this project (WacOS/BaSYS 6) be the C programming language, as C is a stable system language that is preferred for the core of this project, as the system it is based on is mainly written in this language. It will be supplemented with 2 other languages (Pascal and Assembly) but I am unsure on a 4th, 5th, etc... language.\n");
    break;
  }
}
return main();
return 0;
break;
exit;
// File info
// File version: 1 (2022, Sunday, May 8th at 6:20 pm PST)
// File type: C Source file (*.c)
// Line count (including blank lines and compiler line): 21
// End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/PROJECT_LANG_2.pas
================================================
// Start of script
program LanguageFileFileTwo(output);
begin
    Write('I have decided to have the second project language file for this project (WacOS/BaSYS 6) to be Pascal, as Pascal is one of the languages the system this project is based on is written in. It comes second, after C, as it is an application level, and not a system level language. Assembly will come 3rd, as it is not used as often as the other 2.')
    {No ";" is required after the last statement of a block -
        adding one adds a "null statement" to the program, which is ignored by the compiler.}
end.
// I have decided to have the second project language file for this project (WacOS/BaSYS 6) to be Pascal, as Pascal is one of the languages the system this project is based on is written in. It comes second, after C, as it is an application level, and not a system level language. Assembly will come 3rd, as it is not used as often as the other 2.
// File version: 1 (2022, Sunday, May 8th at 6:48 pm PST)
// File type: Pascal source file (*.pas)
// Line count (including blank lines and compiler line): 13
// End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/PROJECT_LANG_3.asm
================================================
; Start of script

; Project language file 3
; For: WacOS/BaSYS 6
; About:
; I have decided to make Assembly the third project language for this project (WacOS/BaSYS 6) because Assembly is the best language for hardware interactions, alongside C, and is one of the top languages used on this project. It comes after C and Pascal, due to lesser usage.

; File info
; File version: 1 (2022, Sunday, May 8th at 7:20 pm PST)
; File type: Assembly source file (*.asm)
; Line count (including blank lines and compiler line): 14

; End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/!OldVersions/Header/MAIN_V1.H
================================================
// Start of script
// BaSYS System 6 headers

// Fonts
#include </FONT/MONACO.TTF>
#include </FONT/CHICAGO.TTF>

// System files
#include </MAIN.C>
#include </MAIN.H>

// Graphics
#include </trash_empty.png">
#include </systemdisk.png>
#include </roundtopleft.png>
#include </roundtopright.png>

// Runtime
#include </c.c>
#include </c.h>
#include </PAS.pas>
#include </ASM.asm>

/* File info
* File type: C header file (*.h)
* File version: 1 (2021, December 22nd at 3:43 pm)
* Line count (including blank lines and compiler line): 30
*/
// End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/!OldVersions/Main/MAIN_V1.c
================================================
#include <stdio.h>
#include <string.h>
// Start of script
// BaSYSTEM 6 - A compatibility layer for Apple System 6
// Note: I am inexperienced with the C language, so this is not functional yet, and serves as pseudocode
int assembly() {
	// Coming soon
	asm 00111111;
	break;
}
int system() {
	// System functions
	int on.shutdown() {
		return shutdownPrompt();
		break;
	}
	int shutdownPrompt() {
		printf("Are you sure you want to shut down?\nY/N");
		if continue {
			goto system.trash { return empty(); }
			exit;
		} else {
			goto 6;
			break;
		}
		break;
	}
	int system.trash() {
		int empty() {
			// Trash can emptying function
			// Coming soon
			break;
		}
		int on.shutdown()
		break;
	}
	break;
	int fontSet() {
		#include </FONT/MONACO.TTF>
		#include </FONT/CHICAGO.TTF>
		break;
	}
	return fontSet();
	break;
}
int wacSystemSoftware() {
	continue {
		char winTitle = "BaSYS 6 Disk";
		double freeMEM = 8388608;
		double usedMEM = 0;
		break;
	}
}
int programs() {
	int alarmClock() {
		int startAClock() {
			// Coming soon
			break;
		}	
		return startAClock();
		break;
	}
	int controlPanel() {
		int startCPanel() {
			// Coming soon
			break;
		}
		int sysInfo() {
			printf("System info");
			int credits() {
				printf("Credits");
				printf("Developers");
				printf("@seanpm2001 - C programming, foundation, and concept");
				break;
			}
			int aboutBASYSSix() {
				printf("About BaSYS/6");
				printf("WacOS operating system/BASYS/6");
				printf("Version 0.01 Alpha");
				printf("2021-2021");
				return credits();
				break;
			}
			return aboutBASYSSix();
			break;
		}
		return startCPanel();
		break;
	}
	int keyCaps() {
		int startKCaps() {
			// Coming soon
			break;
		}
		return startKCaps();
		break;
	}
	int notepad() {
		int startNotepad() {
			// Coming soon
			break;
		}
		return startNotepad();
		break;
	}
	int puzzle() {
		int startPuzzle() {
			// Coming soon
			break;
		}
		return startPuzzle();
		break;
	}
	int scrapBook() {
		int startSBook() {
			// Coming soon
			break;
		}
		return startSBook();
		break;
	}
	return alarmClock();
	return controlPanel();
	return keyCaps();
	return notepad();
	return puzzle();
	return scrapBook();
	break;
}
int startup() {
	// Coming soon
	break;
}
int findr() {
	int navbar(); {
		int menuItems() {
			int mainMenu() {
				char logo = "";
				// Dropdown menu items
				int alarmClockML() {
					char alarmClockCHR = "Alarm clock";
					// Functional data goes here
					break;
				}
				int controlPanelML() {
					char controlPanelCHR = "Control Panel";
					// Functional data goes here
					break;
				}
				int findFileML() {
					char findFileCHR = "Find file";
					// Functional data goes here
					break;
				}
				int keyCapsML() {
					char keyCapsCHR = "Key Caps";
					// Functional data goes here
					break;
				}
				int notepadML() {
					char notePadCHR = "Note Pad";
					// Functional data goes here
					break;
				}
				int puzzleML() {
					char puzzleCHR = "Puzzle";
					// Functional data goes here
					break;
				}
				int scrapbookML() {
					char scrapbookCHR = "Scrapbook";
					// Functional data goes here
					break;
				}
				return alarmClockML();
				return controlPanelML();
				return findFileML();
				return keyCapsML();
				return notepadML();
				return puzzleML();
				return scrapbookML();
				break;
				}
			int fileMenu() {
				char lg2 = "File";
				// Dropdown menu items
				int putBackML() {
					char putBackCHR =" Put Back";
					// Functional data goes here
					break;
				}
				int closeML() {
					char closeCHR = "Close";
					// Functional data goes here
					break;
				}
				int closeAllML() {
					char closeAllCHR = "Close All";
					// Functional data goes here
					break;
				}
				int printML() {
					char printCHR = "Print";
					// Functional data goes here
					break;
				}
				return putBackML();
				return closeML();
				return closeAllML();
				return printML();
				break;
			}
			int editMenu() {
				char lg3 = "Edit";
				// Dropdown menu items
				int undoML() {
					char undoCHR = "Undo";
					// Functional data goes here
					break;		
				}
				int cutML() {
					char cutCHR = "Cut";
					// Functional data goes here
					break;
				}
				int copyML() {
					char copyCHR = "Copy";
					// Functional data goes here
					break;
				}
				int pasteML() {
					char pasteCHR = "Paste";
					// Functional data goes here
					break;
				}
				int clearML() {
					char clearCHR = "Clear";
					// Functional data goes here
					break;
				}
				int selectAllML() {
					char selectAllCHR = "Select All";
					// Functional data goes here
					break;
				}
				return undoML();
				return cutML();
				return copyML();
				return pasteML();
				return clearML();
				return selectAllML();
				break;
			}
			int viewMenu() {
				char lg4 = "View";
				// Dropdown menu items
				int viewBy_IconML() {
					char viewByIconCHR = "by Icon";
					// Functional data goes here
					break;	
				}
				int viewBy_NameML() {
					char viewByNameCHR = "by Name";
					// Functional data goes here
					break;	
				}
				int viewBy_DateML() {
					char viewByDateCHR = "by Date";
					// Functional data goes here
					break;	
				}
				int viewBy_SizeML() {
					char viewBySizeCHR = "by Size";
					// Functional data goes here
					break;	
				}
				int viewBy_KindML() {
					char viewByKindCHR = "by Kind";
					// Functional data goes here
					break;	
				}
				return viewBy_IconML();
				return viewBy_NameML();
				return viewBy_DateML();
				return viewBy_SizeML();
				return viewBy_KindML();
				break;
			}
			int specialMenu() {
				char lg5 = "Special";
				// Dropdown menu items
				int cleanUpML() {
					char cleanUpCHR = "Clean Up";
					// Functional data goes here
					break;
				}
				int emptyTrashML() {
					char emptyTrashCHR = "Empty Trash";
					// Functional data goes here
					break;
				}
				int eraseDiskML() {
					char eraseDiskCHR = "Erase Disk";
					// Functional data goes here
					break;
				}
				int setStartupML() {
					char setStartupCHR = "Set Startup";
					// Functional data goes here
					break;
				}
				return cleanupML();
				return emptyTrashML();
				return eraseDiskML();
				return setStartupML();
				break;
			}
		}
		break;
	}
	int functions() {
		// System functions
		// Coming soon
		break;
	}
}
int desktop() {
	int wallpaper() {
		int defaultWP() {
			default = "Gray";
			break;
		}
	}
	int grid() {
	
	}
	int icons() {
		int trash() {
			double capacity = "8388608"; // Capacity in bytes (2^20*8, 8.388 MB)
			continue {
				// Open trash can
				return system.trash();
			}
			int empty() {
				// Empty the trash can
				// Coming soon
				break;	
			}
		}
	}
}
int fileSystem() {
	char fsystype = "HFS";
	double volumeSize = "8388608"; // Capacity in bytes (2^20*8, 8.388 MB)
	int systemFolder() {
		int sysDirContents() {
			// Fonts
			#include </FONT/MONACO.TTF>
			#include </FONT/CHICAGO.TTF>
			// System files
			#include </MAIN.C>
			#include </MAIN.H>
			// Graphics
			#include </trash_empty.png">
			#include </systemdisk.png>
			#include </roundtopleft.png>
			#include </roundtopright.png>
			break;
		}
	}
	break;
}
int runTime() {
	int cRun() {
		#include </c.c>
		#include </c.h>
		break;
	}
	int pascalRun() {
		#include </PAS.pas>
		break;
	}
	int asmRun() {
		#include </ASM.asm>
		break;
	}
	return cRun();
	return pascalRun();
	return asmRun();
	break;
}
int main() {
	// Main method, calls all other methods
	return assembly();
	return system();
	return wacSystemSoftware();
	return programs();
	return startup();
	return findr();
	return desktop();
	return fileSystem();
	return runTime();
	break;
}
/* File info
* File version: 1 (2021, Wednesday, December 22nd at 4:07 pm)
* File type: C Source file (*.c *.h)
* Line count (including blank lines and compiler line): 412
*/
// This script is incomplete, and needs lots of work
// End of script



================================================
FILE: _archive/new-unified-project/project-root/basys/!OldVersions/README/English/US/1/1-100/README_V1.md
================================================

***

# BaSYS 6

An open source recreation of Apple System 6, part of the WacOS operating system project. Written in C, Pascal, and Assembly.

This project is currently very early in development, and is not yet functional.

## Home repositories

[Guesthouse repository](https://github.com/seanpm2001/WacOS_BaSYS_6/)

This is a guesthouse repository, and not a home repository, as development mainly stays on the main WacOS side. This is just the guesthouse that the project retreats to at times. If you are already in this repository, the link is likely recursive, and will reload the page.

[Home repository](https://github.com/seanpm2001/WacOS/tree/WacOS-dev/Basys/6/)

This is the home repository. If you are already in this repository, the link is likely recursive, and will reload the page.

***

**File version:** `1 (2022, Saturday, May 7th at 9:37 pm PST)`

***



================================================
FILE: _archive/new-unified-project/project-root/basys/!OldVersions/Runtime/Assembly/ASM_V1.asm
================================================
  ; Start of script
; Assembly runtime script for BaSYStem 6
; Note: I do not know the Assembly language very well. For now, this is just pseudocode and is NOT functional

; Memory tests
memTotal = 4194304 ; Total storage on the main volume (4 MiB, or 4.194 MB)
memExter = 8388608 ; Total storage on the external volume (8 MiB, or 8.338 MB)
memEXFL1 = 360000 ; Total storage on the virtual floppy volume A (360K)
memEXFL2 = 720000 ; Total storage on the virtual floppy volume B (720K)
memEXFL3 = 1048576 ; Total storage on the virtual floppy volume C (1 MiB, or 1.048 MB)
memEXFL4 = 1440000 ; Total storage on the virtual floppy volume D (1.37 MiB, or 1.44 MB)
check 00001111 ; Checks the system identifier (old)
check 00000001 ; Checks the system identifier (new)
; System identifier guide
; System 1 (old/still in use) 000011111
; System 1 (new/cur) 000000001
; System 2 (cur) 00000011
; System 3 (cur) 00000111
; 
