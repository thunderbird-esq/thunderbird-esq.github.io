// Window Dragging
document.querySelectorAll('.window').forEach(window => {
  const draggie = new Draggabilly(window, {
    handle: '.title-bar' // Drag only by title bar
  });
});

// Menu Toggle
document.querySelectorAll('[role="menu-item"][aria-haspopup="true"]').forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    const menu = menuItem.querySelector('[role="menu"]');
    const isOpen = menu.style.display === 'block';
    document.querySelectorAll('[role="menu"]').forEach(m => (m.style.display = 'none')); // Close all menus
    menu.style.display = isOpen ? 'none' : 'block'; // Toggle current menu
  });
});

// Button Click (Demo)
document.querySelector('.btn').addEventListener('click', () => {
  alert('Button clicked! This could open a dialog or perform an action.');
});

// Close Menu on Click Outside
document.addEventListener('click', e => {
  if (!e.target.closest('[role="menu-bar"]')) {
    document.querySelectorAll('[role="menu"]').forEach(m => (m.style.display = 'none'));
  }
});