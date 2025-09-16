export function setupMenubar(target) {
  const menu = document.createElement('div');
  menu.className = 'system-menu';
  menu.style.display = 'flex';
  menu.style.gap = '16px';

  const items = ['File', 'Apps', 'Settings', 'Help'];
  items.forEach(label => {
    const el = document.createElement('span');
    el.textContent = label;
    el.style.cursor = 'pointer';
    el.style.userSelect = 'none';
    el.onclick = () => alert(`Menu '${label}' clicked`);
    menu.appendChild(el);
  });

  target.appendChild(menu);
}
