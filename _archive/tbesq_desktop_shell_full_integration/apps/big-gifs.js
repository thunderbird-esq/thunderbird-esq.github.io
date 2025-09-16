
export function render(container) {
  container.innerHTML = `
    <h1 style="text-align:center;">!!! B I G &nbsp; G I F S !!!</h1>
    <div style="margin-bottom: 1em;">
      <input type="file" id="gifInput" accept="image/*" multiple>
      <button id="prevFrame">Prev</button>
      <button id="nextFrame">Next</button>
      <button id="playGif">Play</button>
      <select id="presetSize">
        <option value="160x144">GB</option>
        <option value="256x240">NES</option>
        <option value="256x224">SNES</option>
        <option value="320x224">Genesis</option>
      </select>
      <select id="scale">
        <option value="1">1x</option>
        <option value="2">2x</option>
        <option value="3">3x</option>
        <option value="4">4x</option>
      </select>
      <label>FPS: <input type="number" id="fps" value="8" min="1" max="60" step="1" style="width: 60px;"></label>
      <label><input type="checkbox" id="transparentBg"> Transparent</label>
      <button id="exportGif">Create GIF</button>
    </div>
    <canvas id="gifCanvas" width="256" height="240" style="border:1px solid #000;"></canvas>
    <div id="frameCounter">Frame 0 / 0</div>
  `;

  const input = container.querySelector('#gifInput');
  const canvas = container.querySelector('#gifCanvas');
  const ctx = canvas.getContext('2d');
  const frameCounter = container.querySelector('#frameCounter');
  let frames = [];
  let currentFrame = 0;
  let playing = false;

  input.addEventListener('change', e => {
    const files = Array.from(e.target.files);
    frames = [];
    currentFrame = 0;
    frameCounter.textContent = 'Loading...';
    let loaded = 0;

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = function(evt) {
        const img = new Image();
        img.onload = () => {
          frames.push(img);
          loaded++;
          if (loaded === files.length) {
            drawFrame(0);
            frameCounter.textContent = `Frame 1 / ${frames.length}`;
          }
        };
        img.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    });
  });

  function drawFrame(index) {
    if (!frames.length) return;
    const img = frames[index];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    frameCounter.textContent = `Frame ${index + 1} / ${frames.length}`;
  }

  container.querySelector('#prevFrame').onclick = () => {
    if (frames.length) {
      currentFrame = (currentFrame - 1 + frames.length) % frames.length;
      drawFrame(currentFrame);
    }
  };

  container.querySelector('#nextFrame').onclick = () => {
    if (frames.length) {
      currentFrame = (currentFrame + 1) % frames.length;
      drawFrame(currentFrame);
    }
  };

  container.querySelector('#playGif').onclick = () => {
    if (!frames.length || playing) return;
    const fps = parseInt(container.querySelector('#fps').value, 10) || 8;
    playing = true;
    const interval = setInterval(() => {
      drawFrame(currentFrame);
      currentFrame = (currentFrame + 1) % frames.length;
      if (!playing) clearInterval(interval);
    }, 1000 / fps);
  };

  container.querySelector('#exportGif').onclick = () => {
    alert('GIF export coming soon.');
  };
}
