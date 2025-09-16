
function loadAppContent(title, container) {
  const slug = title.toLowerCase().replace(/\s/g, '-');
  switch (title) {
    case 'Welcome':
      container.innerHTML = '<h2>Welcome to THUNDERBIRD.ESQ</h2><p>Select a tool from the taskbar below.</p>';
      break;
    case 'Chiptune Composer':
    case 'BIG GIFS':
    case 'SPRITE SLICER':
      import(`./apps/${slug}.js`)
        .then(module => {
          module.render(container);
        })
        .catch(err => {
          container.innerHTML = `<p>Failed to load ${title}: ${err.message}</p>`;
        });
      break;
    default:
      container.innerHTML = '<p>Unknown application.</p>';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('boot').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
    initializeTaskbar();
  }
});

const windowRegistry = {};
let zIndexCounter = 10;

function initializeTaskbar() {
  const apps = ['Welcome', 'Chiptune Composer', 'BIG GIFS', 'SPRITE SLICER'];
  apps.forEach(title => createTaskbarButton(title));
}

function createTaskbarButton(title) {
  const taskbar = document.getElementById('taskbar');
  const button = document.createElement('button');
  button.className = 'taskbar-button';
  button.textContent = title;
  button.onclick = () => toggleWindow(title);
  taskbar.appendChild(button);
}

function spawnWindow(title) {
  if (windowRegistry[title]) {
    focusWindow(title);
    return;
  }

  const win = document.createElement('div');
  win.className = 'window';
  win.style.top = '100px';
  win.style.left = '100px';
  win.style.zIndex = zIndexCounter++;
  win.dataset.state = 'open';
  win.id = `window-${title}`;

  const header = document.createElement('div');
  header.className = 'window-header';
  const controls = document.createElement('span');
  controls.innerHTML = `
    <button onclick="minimizeWindow('${title}')">_</button>
    <button onclick="maximizeWindow('${title}')">[ ]</button>
    <button onclick="closeWindow('${title}')">X</button>`;
  header.innerHTML = `<span>${title}</span>`;
  header.appendChild(controls);

  const content = document.createElement('div');
  content.className = 'window-content';
  loadAppContent(title, content);

  win.appendChild(header);
  win.appendChild(content);
  document.getElementById('desktop').appendChild(win);

  windowRegistry[title] = win;
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

function focusWindow(title) {
  const win = windowRegistry[title];
  if (win) {
    win.style.zIndex = zIndexCounter++;
  }
}

function toggleWindow(title) {
  const win = windowRegistry[title];
  if (!win) return spawnWindow(title);

  if (win.dataset.state === 'minimized') {
    win.style.display = 'block';
    win.dataset.state = 'open';
  } else {
    win.style.display = 'none';
    win.dataset.state = 'minimized';
  }
}

function minimizeWindow(title) {
  const win = windowRegistry[title];
  if (win) {
    win.style.display = 'none';
    win.dataset.state = 'minimized';
  }
}

function maximizeWindow(title) {
  const win = windowRegistry[title];
  if (win) {
    const isMaximized = win.dataset.state === 'maximized';
    if (isMaximized) {
      win.style.width = '400px';
      win.style.height = '300px';
      win.style.top = '100px';
      win.style.left = '100px';
      win.dataset.state = 'open';
    } else {
      win.style.top = '0';
      win.style.left = '0';
      win.style.width = '100vw';
      win.style.height = 'calc(100vh - 40px)';
      win.dataset.state = 'maximized';
    }
    win.style.zIndex = zIndexCounter++;
  }
}

function closeWindow(title) {
  const win = windowRegistry[title];
  if (win) {
    win.remove();
    delete windowRegistry[title];
  }
}
