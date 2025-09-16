export function render(container) {
  const onBtnClick = () => {
    window.location.href = '/tools/bbs/index.html';
  };
  const btn = document.createElement('button');
  btn.textContent = 'Power On';
  btn.addEventListener('click', onBtnClick);
  container.appendChild(btn);
}