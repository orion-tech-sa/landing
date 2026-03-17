import React, { useEffect, useRef } from 'react';

interface Particle {
  angle:  number;
  radius: number;
  speed:  number;
  sink:   number;
  size:   number;
  alpha:  number;
}

const DISK_Y  = 0.24;
const GROW_MS = 2400;

const BlackHole: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    let animId: number;
    let t         = 0;
    let gp        = 0;
    let growStart: number | null = null;
    let isVisible = false;

    // ── Viewport dimensions (cached) — scale off VIEWPORT, not section ──
    // This prevents the BH from becoming huge when the section is very tall.
    let _vw = window.innerWidth;
    let _vh = window.innerHeight;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      _vw = window.innerWidth;
      _vh = window.innerHeight;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(
      ([e]) => { isVisible = e.isIntersecting; },
      { threshold: 0.06 }
    );
    io.observe(canvas);

    // ── Particles ──────────────────────────────────────────────────────
    const makeP = (): Particle => ({
      angle:  Math.random() * Math.PI * 2,
      radius: Math.random() * 310 + 120,
      speed:  (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.008 + 0.0015),
      sink:   Math.random() * 0.13 + 0.025,
      size:   Math.random() * 1.7 + 0.2,
      alpha:  Math.random() * 0.62 + 0.15,
    });

    const particles: Particle[] = Array.from({ length: 240 }, makeP);

    // ── Draw accretion disk rings (half or full arc) ───────────────────
    const drawRings = (
      cx: number, cy: number,
      PR: number, s: number,
      startA: number, endA: number,
    ) => {
      const rings = [
        { r: PR * 1.01, w: 7.5 * s, a: 0.88, b: 32 * s },
        { r: PR * 1.09, w: 4.2 * s, a: 0.58, b: 20 * s },
        { r: PR * 1.22, w: 2.6 * s, a: 0.37, b: 12 * s },
        { r: PR * 1.40, w: 1.9 * s, a: 0.24, b:  7 * s },
        { r: PR * 1.64, w: 1.3 * s, a: 0.15, b:  4 * s },
        { r: PR * 1.94, w: 1.0 * s, a: 0.09, b:  2 * s },
        { r: PR * 2.32, w: 0.75* s, a: 0.055,b:  0 },
        { r: PR * 2.82, w: 0.5 * s, a: 0.03, b:  0 },
        { r: PR * 3.48, w: 0.35* s, a: 0.015,b:  0 },
        { r: PR * 4.30, w: 0.25* s, a: 0.007,b:  0 },
      ];
      for (const rg of rings) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, DISK_Y);
        ctx.shadowBlur  = rg.b * gp;
        ctx.shadowColor = `rgba(180, 225, 255, ${rg.a * gp})`;
        ctx.strokeStyle = `rgba(194, 232, 255, ${rg.a * gp})`;
        ctx.lineWidth   = rg.w;
        ctx.beginPath();
        ctx.arc(0, 0, rg.r, startA, endA);
        ctx.stroke();
        ctx.restore();
      }
    };

    // ── Frame loop ─────────────────────────────────────────────────────
    const frame = (ts: number) => {
      animId = requestAnimationFrame(frame);
      if (!isVisible) return;

      if (growStart === null) growStart = ts;
      const raw = Math.min((ts - growStart) / GROW_MS, 1);
      gp = 1 - Math.pow(1 - raw, 3);   // ease-out cubic

      const w  = canvas.width;
      const h  = canvas.height;
      if (w === 0 || h === 0) return;

      // Scale off VIEWPORT min dimension so section height never inflates BH
      const baseS = Math.min(_vw, _vh) / 490;
      const s     = baseS * gp;
      if (s < 0.005) { ctx.clearRect(0, 0, w, h); return; }

      // On wide screens shift BH right so content has room on the left
      const cx = _vw < 769 ? w * 0.50
               : _vw < 1100 ? w * 0.58
               : w * 0.67;
      const cy = h * 0.5;

      const R  = 105 * s;   // event horizon
      const PR = 118 * s;   // photon ring

      // Jets are capped to 80% of canvas height so they never tile oddly
      const jetLen = Math.min(PR * 8.5, h * 0.80 / s) * s;

      ctx.clearRect(0, 0, w, h);
      t += 0.006;

      // 1. Deep gravitational halo
      const halo = ctx.createRadialGradient(cx, cy, R * 0.4, cx, cy, PR * 6.5);
      halo.addColorStop(0,    `rgba(38,  90, 245, ${0.22 * gp})`);
      halo.addColorStop(0.20, `rgba(24,  62, 205, ${0.10 * gp})`);
      halo.addColorStop(0.50, `rgba(10,  32, 160, ${0.04 * gp})`);
      halo.addColorStop(1,    'rgba(0, 0, 0, 0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, PR * 6.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. Relativistic jets (drawn early so disk/horizon paint over the base)
      for (const dir of [-1, 1]) {
        const jg = ctx.createLinearGradient(cx, cy, cx, cy + dir * jetLen);
        jg.addColorStop(0,    `rgba(145, 198, 255, ${0.38 * gp})`);
        jg.addColorStop(0.12, `rgba(112, 170, 255, ${0.18 * gp})`);
        jg.addColorStop(0.42, `rgba(62,  130, 255, ${0.06 * gp})`);
        jg.addColorStop(1,    'rgba(0, 0, 0, 0)');
        const w0 = PR * 0.08 * s;
        const w1 = PR * 1.50 * s;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx - w0, cy);
        ctx.lineTo(cx - w1, cy + dir * jetLen);
        ctx.lineTo(cx + w1, cy + dir * jetLen);
        ctx.lineTo(cx + w0, cy);
        ctx.closePath();
        ctx.fillStyle = jg;
        ctx.fill();
        ctx.restore();
      }

      // 3. Back half of disk (π → 2π = top/far side, behind horizon)
      drawRings(cx, cy, PR, s, Math.PI, Math.PI * 2);

      // 4. Doppler brightening — bottom arc (approaching, near side)
      for (let d = 0; d < 3; d++) {
        const bright = [0.90, 0.48, 0.22][d];
        const rr     = [PR * 1.01, PR * 1.11, PR * 1.24][d];
        const lw     = [9.5, 5.5, 3][d];
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, DISK_Y);
        ctx.beginPath();
        ctx.arc(0, 0, rr, Math.PI * 0.10, Math.PI * 0.90);
        ctx.strokeStyle = `rgba(248, 253, 255, ${bright * 0.88 * gp})`;
        ctx.lineWidth   = lw * s;
        ctx.shadowBlur  = 50 * s * bright;
        ctx.shadowColor = `rgba(222, 246, 255, ${bright * gp})`;
        ctx.stroke();
        ctx.restore();
      }

      // 5. Rotating hot-spot arcs
      for (let i = 0; i < 2; i++) {
        const base = t * 0.44 + i * (Math.PI + 0.30);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, DISK_Y);
        ctx.beginPath();
        ctx.arc(0, 0, PR * 1.01, base, base + Math.PI * 0.38);
        ctx.strokeStyle = `rgba(252, 255, 255, ${0.94 * gp})`;
        ctx.lineWidth   = 8 * s;
        ctx.shadowBlur  = 44 * s;
        ctx.shadowColor = `rgba(222, 246, 255, ${0.97 * gp})`;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, PR * 1.01, base + Math.PI * 0.38, base + Math.PI * 1.05);
        ctx.strokeStyle = `rgba(128, 195, 255, ${0.12 * gp})`;
        ctx.lineWidth   = 2 * s;
        ctx.shadowBlur  = 10 * s;
        ctx.stroke();
        ctx.restore();
      }

      // 6. Particles (spiraling in)
      for (const p of particles) {
        p.angle  += p.speed;
        p.radius -= p.sink;
        if (p.radius < R / s * 0.88) {
          const n  = makeP();
          p.angle  = n.angle;  p.radius = n.radius;
          p.speed  = n.speed;  p.sink   = n.sink;
          p.size   = n.size;   p.alpha  = n.alpha;
        }
        const px   = cx + Math.cos(p.angle) * p.radius * s;
        const py   = cy + Math.sin(p.angle) * p.radius * s * DISK_Y;
        const fade = Math.min(1, (p.radius - R / s) / 60) * gp;
        if (fade <= 0) continue;
        ctx.beginPath();
        ctx.arc(px, py, p.size * s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 237, 255, ${p.alpha * fade})`;
        ctx.fill();
      }

      // 7. Photon ring glow (circular, not flattened)
      const photon = ctx.createRadialGradient(cx, cy, R * 0.68, cx, cy, PR * 1.42);
      photon.addColorStop(0,    'rgba(0,0,0,0)');
      photon.addColorStop(0.48, `rgba(44, 135, 255, ${0.09 * gp})`);
      photon.addColorStop(0.84, `rgba(194, 232, 255, ${0.44 * gp})`);
      photon.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = photon;
      ctx.beginPath();
      ctx.arc(cx, cy, PR * 1.42, 0, Math.PI * 2);
      ctx.fill();

      // 8. Event horizon — feathered shadow then solid black
      const ehGrad = ctx.createRadialGradient(cx, cy, R * 0.76, cx, cy, R * 1.14);
      ehGrad.addColorStop(0,    '#000');
      ehGrad.addColorStop(0.85, '#000');
      ehGrad.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = ehGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // 9. Front half of disk (0 → π = bottom/near side, wraps in front)
      drawRings(cx, cy, PR, s, 0, Math.PI);

      // Inner white-hot rim on the front half
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, DISK_Y);
      ctx.beginPath();
      ctx.arc(0, 0, PR * 1.01, 0, Math.PI);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.16 * gp})`;
      ctx.lineWidth   = 4.5 * s;
      ctx.shadowBlur  = 16 * s;
      ctx.shadowColor = `rgba(235, 250, 255, ${0.35 * gp})`;
      ctx.stroke();
      ctx.restore();
    };

    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      'absolute',
        inset:         0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        zIndex:        0,
        opacity:       0.68,
      }}
    />
  );
};

export default BlackHole;
