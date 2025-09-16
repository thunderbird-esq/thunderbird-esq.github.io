
export function render(container) {
  container.innerHTML = `
    <h2>Chiptune Composer</h2>
    <p>Create and edit chiptunes directly in-browser. No export support yet.</p>
    <textarea rows="10" cols="50" style="width: 100%; font-family: monospace;">C-4 01 .. ..\nE-4 01 .. ..</textarea>
    <button>Play</button>
  `;
}
