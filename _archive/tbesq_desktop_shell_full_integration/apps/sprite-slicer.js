
export function render(container) {
  container.innerHTML = `
    <h2>Sprite Slicer</h2>
    <p>Select a sprite sheet and define slice dimensions.</p>
    <input type="file" accept="image/png" />
    <label>Tile Width: <input type="number" value="32" min="1" /></label>
    <label>Tile Height: <input type="number" value="32" min="1" /></label>
    <button>Slice</button>
    <div id="sliced-output" style="margin-top: 1em;">No output yet.</div>
  `;
}
