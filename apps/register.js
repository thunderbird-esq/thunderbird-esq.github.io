/* BIG GIFS */
TB.register({
  id:   'big-gifs',
  name: 'BIG GIFS',
  icon: 'core/icon/big-gifs.svg',
  mount() {
    TB.openWindow('big-gifs', {
      iframe: '/apps/big-gifs/index.html'
    });
  }
});

/* SPRITE SLICER */
TB.register({
  id:   'sprite-slicer',
  name: 'SPRITE SLICER',
  icon: 'core/icon/sprite-slicer.svg',
  mount() {
    TB.openWindow('sprite-slicer', {
      iframe: '/apps/sprite-slicer/index.html'
    });
  }
});

