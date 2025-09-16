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
