import { World, AsciiRenderer } from './ascii-ocean.js';

const canvas = document.querySelector('#research-ocean');
const toggle = document.querySelector('#ocean-toggle');
if (canvas instanceof HTMLCanvasElement && toggle instanceof HTMLButtonElement) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const sizes = innerWidth < 640 ? [0.9, 0.65, 0.5] : [1.05, 0.85, 0.7, 0.58, 0.48];
  const world = new World(sizes.map(size => ({ kind: 'shark', size })));
  const renderer = new AsciiRenderer(canvas);
  renderer.updateSettings({ background: '#ffffff', sharkColor: '#247bbd',
    dotPrimary: '#75add5', dotSecondary: '#a7cce6', accent: '#308cc8',
    grid: 0, dotDensity: 0.055, cellSize: 9 });
  let paused = reduced.matches;
  let frame = 0;
  let last = 0;
  let disposed = false;
  const paint = (dt) => { renderer.world = world; renderer.render(world, dt); };
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    renderer.resize(rect.width, rect.height, Math.min(devicePixelRatio || 1, 1.5));
    world.resize(rect.width, rect.height, renderer.cellWidth, renderer.cellHeight);
    paint(1 / 60);
  };
  const tick = (now) => {
    if (disposed || paused || document.hidden) return;
    if (now - last >= 1000 / 24) {
      const dt = Math.min((now - last) / 1000, 0.075) * 1.2;
      last = now;
      // Small fixed substeps keep schooling stable at a modest render rate.
      world.step(dt / 3); world.step(dt / 3); world.step(dt / 3);
      paint(dt);
    }
    frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    cancelAnimationFrame(frame);
    toggle.setAttribute('aria-pressed', String(!paused));
    toggle.textContent = paused ? 'Play ocean' : 'Pause ocean';
    if (!paused && !document.hidden && !disposed) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }
  };
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  const onPreference = () => { paused = reduced.matches; sync(); };
  reduced.addEventListener('change', onPreference);
  document.addEventListener('visibilitychange', sync);
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();
  // Populate the initial frame, including when reduced motion is preferred.
  for (let i = 0; i < 60; i++) world.step(1 / 60);
  paint(1 / 60);
  sync();
  addEventListener('pagehide', (event) => {
    cancelAnimationFrame(frame);
    if (!event.persisted) {
      disposed = true;
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reduced.removeEventListener('change', onPreference);
    }
  });
  addEventListener('pageshow', () => { if (!disposed) sync(); });
}
