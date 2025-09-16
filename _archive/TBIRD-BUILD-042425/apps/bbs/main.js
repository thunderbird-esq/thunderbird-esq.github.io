export function render(container) {
  context.importAsset('text', 'default.bbs').then(data => {
    const terminal = document.createElement('div');
    terminal.style.whiteSpace = 'pre';
    terminal.style.fontFamily = 'monospace';
    terminal.style.height = '400px';
    terminal.style.overflowY = 'auto';
    terminal.textContent = data;
    container.appendChild(terminal);

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type command...';
    input.style.width = '100%';
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim().toUpperCase();
        const response = document.createElement('div');
        response.textContent = `Command received: ${cmd}`;
        terminal.appendChild(response);
        terminal.scrollTop = terminal.scrollHeight;
        input.value = '';
      }
    });
    container.appendChild(input);
  });
}