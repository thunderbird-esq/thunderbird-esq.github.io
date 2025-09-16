// Boot-Up Sequence
const bootLines = [
  "Running diagnostics... <span class='ok'>[OK]</span>",
  "Testing memory... <span class='ok'>[OK]</span>",
  "Booting from ROM BIOS... <span class='ok'>[OK]</span>",
  "Checking floppy disk drives... <span class='fail'>[FAIL - No floppy detected]</span>",
  "Probing PCI buses... <span class='ok'>[OK]</span>",
  "Loading quantum cache... <span class='ok'>[OK]</span>",
  "Verifying hexadecimal transport matrix... <span class='ok'>[OK]</span>",
  "Initializing THUNDERBIRD OS... <span class='ok'>[OK]</span>",
  "Syncing with orbital relays... <span class='ok'>[OK]</span>",
  "Finalizing system integrity check... <span class='ok'>[OK]</span>"
];

let bootIndex = 0;
let isChirping = true;

function initBootScreen() {
  const chirpSound = document.getElementById('systemChirp');
  chirpSound.volume = 0.3;
  chirpSound.onerror = () => console.log('System chirp failed to load');

  if (chirpSound.canPlayType('audio/mpeg')) {
    chirpSound.play().catch(err => console.log('Error playing system chirp:', err));
  } else {
    console.log('System chirp audio format not supported or file not found.');
  }

  document.getElementById('boot-icon').addEventListener('click', () => {
    isChirping = false;
    if (chirpSound.canPlayType('audio/mpeg')) {
      chirpSound.pause();
    }
    document.querySelector('.boot-icon-label .question-mark').style.animation = 'none';
    document.querySelector('.boot-icon-label .question-mark').style.opacity = '1';
    startBoot();
  });
}

function startBoot() {
  document.getElementById('boot-dialog').style.display = 'block';

  const fanSound1 = document.getElementById('fanSound1');
  const fanSound2 = document.getElementById('fanSound2');
  const clicksSound = document.getElementById('clicksSound');
  const bootBeep = document.getElementById('bootBeep');

  fanSound1.volume = 0.4;
  fanSound2.volume = 0;
  clicksSound.volume = 0.3;

  fanSound1.onerror = () => console.log('Fan sound 1 failed to load');
  fanSound2.onerror = () => console.log('Fan sound 2 failed to load');
  clicksSound.onerror = () => console.log('Clicks sound failed to load');
  bootBeep.onerror = () => console.log('Boot beep failed to load');

  if (fanSound1.canPlayType('audio/mpeg')) {
    fanSound1.play().catch(err => console.log('Error playing fan sound 1:', err));
  }

  const crossfadeDuration = 2000;
  let isFirstPlaying = true;

  function crossfade() {
    if (isFirstPlaying) {
      fanSound2.currentTime = 0;
      if (fanSound2.canPlayType('audio/mpeg')) {
        fanSound2.play().catch(err => console.log('Error playing fan sound 2:', err));
      }
      fadeOut(fanSound1, crossfadeDuration);
      fadeIn(fanSound2, crossfadeDuration);
    } else {
      fanSound1.currentTime = 0;
      if (fanSound1.canPlayType('audio/mpeg')) {
        fanSound1.play().catch(err => console.log('Error playing fan sound 1:', err));
      }
      fadeOut(fanSound2, crossfadeDuration);
      fadeIn(fanSound1, crossfadeDuration);
    }
    isFirstPlaying = !isFirstPlaying;
  }

  fanSound1.addEventListener('timeupdate', function() {
    if (fanSound1.duration - fanSound1.currentTime <= crossfadeDuration / 1000) {
      crossfade();
    }
  });

  fanSound2.addEventListener('timeupdate', function() {
    if (fanSound2.duration - fanSound2.currentTime <= crossfadeDuration / 1000) {
      crossfade();
    }
  });

  function fadeIn(audio, duration) {
    let volume = 0;
    const increment = 0.4 / (duration / 50);
    const interval = setInterval(() => {
      if (volume >= 0.4) {
        clearInterval(interval);
        audio.volume = 0.4;
      } else {
        volume += increment;
        audio.volume = Math.min(volume, 0.4);
      }
    }, 50);
  }

  function fadeOut(audio, duration) {
    let volume = audio.volume;
    const decrement = volume / (duration / 50);
    const interval = setInterval(() => {
      if (volume <= 0) {
        clearInterval(interval);
        audio.volume = 0;
        audio.pause();
      } else {
        volume -= decrement;
        audio.volume = Math.max(volume, 0);
      }
    }, 50);
  }

  if (clicksSound.canPlayType('audio/mpeg')) {
    clicksSound.play().catch(err => console.log('Error playing clicks sound:', err));
  }
  if (bootBeep.canPlayType('audio/mpeg')) {
    bootBeep.play().catch(err => console.log('Error playing boot beep:', err));
  }

  showNextLine();
}

function showNextLine() {
  const bootText = document.getElementById('bootText');
  if (bootIndex < bootLines.length) {
    bootText.innerHTML += bootLines[bootIndex] + '\n';
    bootText.style.opacity = 1;
    bootText.style.display = 'block';
    bootIndex++;
    setTimeout(showNextLine, 2600);
  } else {
    const progressSection = document.getElementById('progressSection');
    progressSection.style.display = 'block';
    simulateLoading();
  }
}

function simulateLoading() {
  let progress = 0;
  const bar = document.getElementById('progressBar');
  const status = document.getElementById('status');
  const clicks = document.getElementById('clicksSound');
  const stages = [
    'Initializing...',
    'Connecting to THUNDERBIRD Network...',
    'Fetching Messages...',
    'Boot Complete!'
  ];
  let stageIndex = 0;

  const interval = setInterval(() => {
    if (progress >= 100) {
      bar.textContent = '[▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲] 100%';
      clearInterval(interval);
      if (clicks.canPlayType('audio/mpeg')) {
        clicks.pause();
      }
      status.textContent = 'Boot Complete!';
      setTimeout(() => {
        document.getElementById('boot-screen').style.display = 'none';
        document.getElementById('boot-dialog').style.display = 'none';
        document.getElementById('desktop-container').style.display = 'block';
      }, 2000);
    } else {
      progress += 2;
      const triangles = Math.floor(progress / 5);
      const spaces = 20 - triangles;
      bar.textContent = '[' + '▲'.repeat(triangles) + ' '.repeat(spaces) + '] ' + Math.round(progress) + '%';
      if (progress % 25 === 0 && stageIndex < stages.length - 1) {
        stageIndex++;
        status.textContent = stages[stageIndex];
      }
      if (clicks.canPlayType('audio/mpeg')) {
        clicks.volume = 0.2 + Math.random() * 0.1;
      }
    }
  }, 100);
}

// Banner Generator
function createBanner() {
  const asciiArt = `
┌───────────┐
│ THUNDERBIRD │
│    BBS     │
└───────────┘
`.trim();

  return `
    <div class="banner-container">${asciiArt}</div>
    <div class="welcome-box">
      <div class="welcome-box-inner">
        ┌───────────────────────┐<br>
        │   WELCOME TO THE BBS  │<br>
        └───────────────────────┘
      </div>
    </div>
  `;
}

// Modem Connection Sequence
function startModemSequence(callback) {
  const modemText = document.getElementById('modem-text');
  const modemSequence = [
    "ATZ",
    "OK",
    "ATDT555-1234",
    "CONNECT 2400",
    "NEGOTIATING PROTOCOL...",
    "HANSHAKE COMPLETE",
    "LOGGING INTO SYSTEM...",
    "CONNECTION ESTABLISHED"
  ];

  let step = 0;
  function nextStep() {
    if (step < modemSequence.length) {
      modemText.innerHTML += modemSequence[step] + "<br>";
      step++;
      setTimeout(nextStep, 800);
    } else {
      callback();
    }
  }
  nextStep();
}

// BBS Command Handler
function initBBS() {
  document.getElementById('bbs-command').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const command = this.value.toUpperCase();
      const terminal = document.getElementById('message-display');
      
      if (command === 'HELP') {
        terminal.innerHTML += '\n\nCOMMANDS: HELP, LOGIN, LIST, QUIT';
      } else if (command === 'LOGIN') {
        terminal.innerHTML += '\n\nLOGIN FEATURE COMING SOON';
      } else {
        terminal.innerHTML += '\n\nUNKNOWN COMMAND';
      }
      
      this.value = '';
      terminal.scrollTop = terminal.scrollHeight;
    }
  });

  document.querySelector('.btn-default').addEventListener('click', function() {
    const command = document.getElementById('bbs-command').value.toUpperCase();
    const terminal = document.getElementById('message-display');
    
    if (command === 'HELP') {
      terminal.innerHTML += '\n\nCOMMANDS: HELP, LOGIN, LIST, QUIT';
    } else if (command === 'LOGIN') {
      terminal.innerHTML += '\n\nLOGIN FEATURE COMING SOON';
    } else {
      terminal.innerHTML += '\n\nUNKNOWN COMMAND';
    }
    
    document.getElementById('bbs-command').value = '';
    terminal.scrollTop = terminal.scrollHeight;
  });
}

// Menu Functionality
function initMenus() {
  document.querySelectorAll('[aria-haspopup="true"]').forEach(menuItem => {
    menuItem.addEventListener('click', function(e) {
      e.stopPropagation();
      const menu = this.querySelector('ul[role="menu"]');
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        document.querySelectorAll('ul[role="menu"]').forEach(m => {
          m.style.display = 'none';
        });
        menu.style.display = 'block';
      }
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('ul[role="menu"]').forEach(menu => {
      menu.style.display = 'none';
    });
  });
}

// Desktop Icon Click Handler
function initDesktop() {
  document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const modemWindow = document.getElementById('modem-sequence');
      const bbsWindow = document.getElementById(targetId);

      modemWindow.style.display = 'block';
      startModemSequence(() => {
        modemWindow.style.display = 'none';
        bbsWindow.style.display = 'flex';
        document.getElementById('message-display').innerHTML = createBanner();
      });
    });
  });
}

// Draggable Windows
function initDraggables() {
  const windows = document.querySelectorAll('.window, .modal-dialog');
  windows.forEach(window => {
    const draggie = new Draggabilly(window, {
      handle: '.title-bar',
      containment: 'body'
    });
    window.classList.add('draggable');
  });
}

// Initialize Everything
window.onload = function() {
  initBootScreen();
  initMenus();
  initDesktop();
  initBBS();
  initDraggables();
};
