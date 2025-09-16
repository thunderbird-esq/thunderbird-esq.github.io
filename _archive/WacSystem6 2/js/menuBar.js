document.addEventListener('DOMContentLoaded', () => {
  const menuBar = document.getElementById('menu-bar');
  menuBar.innerHTML = `
    <ul class="menu">
      <li class="menu-item">File</li>
      <li class="menu-item">Edit</li>
      <li class="menu-item">Special</li>
    </ul>
  `;
});
