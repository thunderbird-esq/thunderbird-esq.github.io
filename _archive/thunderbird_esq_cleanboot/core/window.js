export function createWindow({ title, content, width = 320, height = 240 }) {
  const el = document.createElement('div');
  el.className = 'window';
  el.style.width = width + 'px';
  el.style.height = height + 'px';
  el.style.left = '100px';
  el.style.top = '100px';

  const header = document.createElement('div');
  header.className = 'window-header';
  header.textContent = title;

  const body = document.createElement('div');
  body.className = 'window-body';
  body.innerHTML = content;

  el.appendChild(header);
  el.appendChild(body);

  header.onmousedown = (e) => {
    e.preventDefault();
    const offsetX = e.clientX - el.offsetLeft;
    const offsetY = e.clientY - el.offsetTop;
    function move(e) {
      el.style.left = (e.clientX - offsetX) + 'px';
      el.style.top = (e.clientY - offsetY) + 'px';
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move);
    }, { once: true });
  };

  return { el };
}
