document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.window').forEach(win => {
    const titleBar = win.querySelector('.title-bar');
    let offsetX, offsetY, isDragging = false;

    titleBar.addEventListener('mousedown', e => {
      isDragging = true;
      offsetX = e.clientX - win.offsetLeft;
      offsetY = e.clientY - win.offsetTop;
    });

    document.addEventListener('mousemove', e => {
      if (isDragging) {
        win.style.left = (e.clientX - offsetX) + 'px';
        win.style.top = (e.clientY - offsetY) + 'px';
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });
});
