#!/bin/bash

# Create directory
mkdir -p system6-irix-emulation
cd system6-irix-emulation

# Download system.css (optional)
curl -o system.css https://raw.githubusercontent.com/sakofchit/system.css/main/system.css || echo "system.css download failed, using inline styles"

# Create index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>System 6 + IRIX Emulation</title>
  <!-- Inline System 6 Styles (Minimal) -->
  <style>
    /* Fallback System 6 styling if system.css fails */
    body {
      font-family: 'Chicago', 'Arial', sans-serif;
      background: #d3d3d3;
      margin: 0;
    }
    .window {
      border: 1px solid #000;
      background: #fff;
      box-shadow: 2px 2px 0 #000;
    }
    .title-bar {
      background: #fff;
      border-bottom: 1px solid #000;
      padding: 2px;
      display: flex;
      align-items: center;
    }
    .title-bar h1 {
      font-size: 12px;
      margin: 0;
      flex-grow: 1;
      text-align: center;
    }
    .close, .minimize, .maximize {
      width: 12px;
      height: 12px;
      border: 1px solid #000;
      margin-right: 4px;
    }
    [role="menu-bar"] {
      background: #fff;
      border-bottom: 1px solid #000;
      padding: 2px;
      margin: 0;
      list-style: none;
      display: flex;
    }
    [role="menu-item"] {
      padding: 2px 8px;
      position: relative;
      cursor: pointer;
    }
    [role="menu"] {
      background: #fff;
      border: 1px solid #000;
      list-style: none;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 100px;
    }
    [role="menu"] li {
      padding: 2px 8px;
    }
    [role="menu"] li:hover {
      background: #000;
      color: #fff;
    }
  </style>
  <!-- Local System.css (Optional) -->
  <link rel="stylesheet" href="system.css" />
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
      <ul role="menu" class="hidden">
        <li role="menu-item"><a href="#info">System Info</a></li>
        <li role="menu-item"><a href="#restart">Restart</a></li>
      </ul>
    </li>
    <li role="menu-item" tabindex="0" aria-haspopup="true">
      Applications
      <ul role="menu" class="hidden">
        <li role="menu-item"><a href="#" class="launch-file-manager">File Manager</a></li>
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

  <!-- Initial Window -->
  <div class="window" style="width: 300px; position: absolute; top: 100px; left: 100px;" data-window-id="1">
    <div class="title-bar">
      <button aria-label="Close" class="close"></button>
      <button aria-label="Minimize" class="minimize"></button>
      <button aria-label="Maximize" class="maximize"></button>
      <h1 class="title">IRIX Desktop</h1>
    </div>
    <div class="window-pane">
      <p>Welcome to the emulation!</p>
    </div>
  </div>

  <!-- Desktop Context Menu -->
  <ul id="context-menu" role="menu" class="hidden">
    <li role="menu-item"><a href="#" class="create-new-window">New Window</a></li>
    <li role="menu-item"><a href="#info">Desktop Info</a></li>
  </ul>

  <!-- JavaScript -->
  <script src="script.js"></script>
</body>
</html>
EOF

# Create styles.css
cat > styles.css << 'EOF'
body {
  background: #d3d3d3;
  margin: 0;
  height: 100vh;
  user-select: none;
}

.window {
  position: absolute;
  z-index: 1;
}

.window.focused {
  z-index: 100;
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

#context-menu.hidden, [role="menu"].hidden {
  display: none;
}

.toolchest {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
EOF

# Create script.js
cat > script.js << 'EOF'
// Debug: Log initialization
console.log('script.js loaded');

// Check Draggabilly
if (typeof Draggabilly === 'undefined') {
  console.error('Draggabilly not loaded. Window dragging will not work.');
}

// Window Management
let windowCounter = 1;
let maxZIndex = 100;

// Bring window to front
function bringToFront(window) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('focused'));
  window.classList.add('focused');
  window.style.zIndex = maxZIndex++;
  console.log('Brought window to front:', window.dataset.windowId);
}

// Window Dragging
document.querySelectorAll('.window').forEach(window => {
  try {
    const draggie = new Draggabilly(window, { handle: '.title-bar' });
    window.addEventListener('click', () => bringToFront(window));
    console.log('Draggabilly initialized for window:', window.dataset.windowId);
  } catch (e) {
    console.error('Draggabilly error for window', window.dataset.windowId, e);
  }
});

// Toolchest Menu Toggle
document.querySelectorAll('[role="menu-item"][aria-haspopup="true"]').forEach(menuItem => {
  menuItem.addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = menuItem.querySelector('[role="menu"]');
    if (!menu) {
      console.error('Menu not found for:', menuItem.textContent);
      return;
    }
    const isOpen = !menu.classList.contains('hidden');
    document.querySelectorAll('[role="menu"]').forEach(m => m.classList.add('hidden'));
    menu.classList.toggle('hidden', isOpen);
    console.log('Toggled menu:', menuItem.textContent, 'Open:', !isOpen);
  });
});

// Close Menus on Click Outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('[role="menu-bar"]') && !e.target.closest('#context-menu')) {
    document.querySelectorAll('[role="menu"]').forEach(m => m.classList.add('hidden'));
    console.log('Closed all menus');
  }
});

// Desktop Context Menu
const contextMenu = document.getElementById('context-menu');
if (!contextMenu) {
  console.error('Context menu not found');
} else {
  document.body.addEventListener('contextmenu', (e) => {
    if (!e.target.closest('.window') && !e.target.closest('.desktop-icon')) {
      e.preventDefault();
      document.querySelectorAll('[role="menu"]').forEach(m => m.classList.add('hidden'));
      contextMenu.classList.remove('hidden');
      contextMenu.style.left = `${e.pageX}px`;
      contextMenu.style.top = `${e.pageY}px`;
      console.log('Opened context menu at:', e.pageX, e.pageY);
    }
  });
}

// Hide Context Menu on Click
document.addEventListener('click', () => {
  if (contextMenu) {
    contextMenu.classList.add('hidden');
    console.log('Closed context menu');
  }
});

// Create New Window
function createWindow(title, content) {
  windowCounter++;
  const window = document.createElement('div');
  window.className = 'window';
  window.dataset.windowId = windowCounter;
  window.style.width = '300px';
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
    <div class="window-pane">${content}</div>
  `;
  document.body.appendChild(window);
  try {
    const draggie = new Draggabilly(window, { handle: '.title-bar' });
    window.addEventListener('click', () => bringToFront(window));
    console.log('Draggabilly initialized for new window:', windowCounter);
  } catch (e) {
    console.error('Draggabilly error for new window', windowCounter, e);
  }
  setupWindowControls(window);
  bringToFront(window);
  console.log('Created window:', windowCounter);
}

// File Manager Window
function createFileManager() {
  const content = `
    <p>File Manager</p>
    <ul>
      <li>📁 Documents</li>
      <li>📄 readme.txt</li>
    </ul>
  `;
  createWindow('File Manager', content);
}

// Window Controls
function setupWindowControls(window) {
  const closeBtn = window.querySelector('.close');
  const minimizeBtn = window.querySelector('.minimize');
  const maximizeBtn = window.querySelector('.maximize');

  if (!closeBtn || !minimizeBtn || !maximizeBtn) {
    console.error('Window controls missing for:', window.dataset.windowId);
    return;
  }

  closeBtn.addEventListener('click', () => {
    window.style.display = 'none';
    console.log('Closed window:', window.dataset.windowId);
  });

  minimizeBtn.addEventListener('click', () => {
    window.style.display = 'none';
    console.log('Minimized window:', window.dataset.windowId);
  });

  maximizeBtn.addEventListener('click', () => {
    if (window.style.width === '90vw') {
      window.style.width = '300px';
      window.style.height = '';
      window.style.top = '100px';
      window.style.left = '100px';
    } else {
      window.style.width = '90vw';
      window.style.height = '80vh';
      window.style.top = '10vh';
      window.style.left = '5vw';
    }
    console.log('Toggled maximize for window:', window.dataset.windowId);
  });
}

// Menu Actions
document.querySelectorAll('.launch-file-manager').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    createFileManager();
    console.log('Launched File Manager from menu');
  });
});

document.querySelectorAll('.create-new-window').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    createWindow(`New Window ${windowCounter}`, '<p>New window content.</p>');
    console.log('Created new window from context menu');
  });
});

// Desktop Icon Actions
document.querySelectorAll('.desktop-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const action = icon.dataset.action;
    if (action === 'launch-file-manager') {
      createFileManager();
      console.log('Launched File Manager from icon');
    }
  });
});

// Initial Window Setup
document.querySelectorAll('.window').forEach(window => {
  setupWindowControls(window);
});
EOF

# Create ZIP
cd ..
zip -r system6-irix-emulation.zip system6-irix-emulation

echo "Setup complete! Directory 'system6-irix-emulation' created and ZIP file 'system6-irix-emulation.zip' generated."
echo "To run, cd into system6-irix-emulation and use 'live-server'."