/*  core/app-registry.js  ----------------------------------------------- */
window.TB  = window.TB || {};
TB.apps    = TB.apps    || [];
TB._z      = TB._z      || 20;   // global z-index counter (above menu bar)

/**
 * TB.openWindow(id, opts)
 * opts: { iframe:'/apps/tool/index.html', w:640, h:480 }
 */
TB.openWindow = function openWindow(id, opts = {}) {
  /* ── focus existing ──────────────────────────────────────────────── */
  const existing = document.querySelector(`[data-tb-window="${id}"]`);
  if (existing) {
    existing.style.display = 'block';
    existing.style.zIndex  = ++TB._z;
    existing.focus();
    return existing;
  }

  /* ── defaults ────────────────────────────────────────────────────── */
  const w = opts.w || 640;
  const h = opts.h || 480;

  /* ── shell ───────────────────────────────────────────────────────── */
  const win = document.createElement('div');
  win.dataset.tbWindow = id;
  win.className        = 'window';
  win.style.cssText    = `
    position:absolute;
    top:15%; left:50%; transform:translateX(-50%);
    width:${w}px; height:${h}px;
    min-width:320px; min-height:200px;
    resize:both; overflow:hidden;
    z-index:${++TB._z};
  `;

  win.innerHTML = `
    <div class="title-bar handle">
      <button aria-label="Close" class="close"
              onclick="this.closest('.window').style.display='none'"></button>
      <h1 class="title">${id.replace(/-/g,' ').toUpperCase()}</h1>
      <button aria-label="Resize" class="resize"></button>
    </div>
    <div class="window-pane">
      ${opts.iframe
? `<iframe src="${opts.iframe}"
           style="border:0;width:100%;height:100%;display:block;"></iframe>`
                : ''}
    </div>
  `;
  document.body.appendChild(win);

  /* ── raise & focus on click ──────────────────────────────────────── */
  win.addEventListener('mousedown', () => {
    win.style.zIndex = ++TB._z;
  });

  /* ── enable dragging ─────────────────────────────────────────────── */
  if (window.Draggabilly) {
    new Draggabilly(win, { handle: '.handle' });
  }

  /* ── keep pane stretched, allow scrollbars inside ────────────────── */
  const pane = win.querySelector('.window-pane');
  pane.style.cssText = 'width:100%;height:calc(100% - 22px);overflow:auto;';

  const observer = new ResizeObserver(() => {
    pane.style.height = `${win.clientHeight - 22}px`;
    pane.style.width  = `${win.clientWidth}px`;
  });
  observer.observe(win);

  return win;
};

/* simple registry */
TB.register = app => TB.apps.push(app);

