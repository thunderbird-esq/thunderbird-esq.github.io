// Window Dragging with Draggabilly
document.querySelectorAll('.window').forEach(window => {
  const draggie = new Draggabilly(window, {
    handle: '.title-bar' // Drag only by title bar
  });
});

// Toolchest Menu Toggle
document.querySelectorAll('[role="menu-item"][aria-haspopup="true"]').forEach(menuItem => {
  menuItem.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing other menus
    const menu = menuItem.querySelector('[role="menu"]');
    const isOpen = menu.style.display === 'block';
    // Close all menus
    document.querySelectorAll('[role="menu"]').forEach(m => (m.style.display = 'none'));
    // Toggle current menu
    menu.style.display = isOpen ? 'none' : 'block';
  });
});

// Close Menus on Click Outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('[role="menu-bar"]') && !e.target.closest('#context-menu')) {
    document.querySelectorAll('[role="menu"]').forEach(m => (m.style.display = 'none'));
  }
});

// Desktop Context Menu
const contextMenu = document.getElementById('context-menu');
document.body.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  // Close all menus
  document.querySelectorAll('[role="menu"]').forEach(m => (m.style.display = 'none'));
  // Show context menu at mouse position
  contextMenu.style.display = 'block';
  contextMenu.style.left = `${e.pageX}px`;
  contextMenu.style.top = `${e.pageY}px`;
});

// Hide Context Menu on Click
document.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});

// Button Click (Demo Placeholder)
document.querySelector('.btn').addEventListener('click', () => {
  alert('Launching demo! This could open a GL demo or IRIX app.');
});

// Window Controls (Minimize, Maximize, Close)
document.querySelectorAll('.window').forEach(window => {
  const closeBtn = window.querySelector('.close');
  const minimizeBtn = window.querySelector('.minimize');
  const maximizeBtn = window.querySelector('.maximize');

  closeBtn.addEventListener('click', () => {
    window.style.display = 'none'; // Hide window
  });

  minimizeBtn.addEventListener('click', () => {
    window.style.transform = 'scale(0.1)'; // Simple minimize effect
    window.style.opacity = '0.3';
    setTimeout(() => {
      window.style.display = 'none'; // Hide after animation
    }, 200);
  });

  maximizeBtn.addEventListener('click', () => {
    if (window.style.width === '90vw') {
      // Restore to original size
      window.style.width = '30rem';
      window.style.height = 'auto';
      window.style.top = '100px';
      window.style.left = '100px';
    } else {
      // Maximize
      window.style.width = '90vw';
      window.style.height = '80vh';
      window.style.top = '10vh';
      window.style.left = '5vw';
    }
  });
});