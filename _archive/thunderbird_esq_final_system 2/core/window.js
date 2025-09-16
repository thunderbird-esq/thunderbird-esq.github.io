export function createWindow({ title, content, width = 320, height = 240 }) {
  const el = document.createElement('div');
  el.className = 'window';
  el.style.position = 'absolute';
  el.style.width = width + 'px';
  el.style.height = height + 'px';
  el.style.top = '50px';
  el.style.left = '50px';
  el.style.border = '2px solid black';
  el.style.background = 'white';
  el.style.zIndex = 1000;

  const header = document.createElement('div');
  header.className = 'window-header';
  header.style.height = '24px';
  header.style.background = '#ddd';
  header.style.cursor = 'move';
  header.textContent = title;

  const body = document.createElement('div');
  body.className = 'window-body';
  body.innerHTML = content;
  body.style.padding = '8px';

  el.appendChild(header);
  el.appendChild(body);

  // Drag functionality
  header.onmousedown = function (e) {
    e.preventDefault();
    const offsetX = e.clientX - el.offsetLeft;
    const offsetY = e.clientY - el.offsetTop;
    function onMouseMove(ev) {
      el.style.left = (ev.clientX - offsetX) + 'px';
      el.style.top = (ev.clientY - offsetY) + 'px';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
  };

  return { el };
}
