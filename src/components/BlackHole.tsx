import React, { useEffect, useRef } from 'react';

interface Particle {
  angle:  number;
  radius: number;
  speed:  number;
  sink:   number;
  size:   number;
  alpha:  number;
}

const DISK_Y    = 0.24;   // perspective flatten ratio
const GROW_MS   = 2600;   // grow-in duration (ms)

const BlackHole: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animId: number;
    let t        = 0;
    let gp       = 0;          // grow progress 0 → 1
    let growStart: number | null = null;
    let isVisible = false;

    // ── Sizing ────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // ── Visibility (pause when off-screen, trigger grow) ─────────
    const io = new IntersectionObserver(([e]) => {
      isVisible = e.isIntersecting;
    }, { threshold: 0.06 });
    io.observe(canvas);

    // ── Particles ────────────────────────────────────────────────
    const makeP = (): Particle => ({
      angle:  Math.random() * Math.PI * 2,
      radius: Math.random() * 340 + 130,
      speed:  (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.009 + 0.0015),
      sink:   Math.random() * 0.14 + 0.025,
      size:   Math.random() * 1.8 + 0.2,
      alpha:  Math.random() * 0.65 + 0.15,
    });

    // Adaptive count: fewer on small screens for perf
    const pCount = () => Math.min(260, Math.floor(Math.min(canvas.width, canvas.height) * 0.34));
    let particles: Particle[] = Array.from({ length: 260 }, makeP);

    // ── Draw the accretion disk rings (half or full arc) ─────────
    const drawRings = (
      cx: number, cy: number,
      PR: number, s: number,
      startA: number, endA: number,
    ) => {
      const rings = [
        { r: PR * 1.01, w: 8   * s, a: 0.90, b: 36 * s },
        { r: PR * 1.09, w: 4.5 * s, a: 0.60, b: 22 * s },
        { r: PR * 1.22, w: 2.8 * s, a: 0.38, b: 13 * s },
        { r: PR * 1.40, w: 2.0 * s, a: 0.25, b:  8 * s },
        { r: PR * 1.65, w: 1.4 * s, a: 0.16, b:  4 * s },
        { r: PR * 1.96, w: 1.1 * s, a: 0.10, b:  2 * s },
        { r: PR * 2.36, w: 0.8 * s, a: 0.06, b:  0     },
        { r: PR * 2.88, w: 0.5 * s, a: 0.035,b:  0     },
        { r: PR * 3.55, w: 0.38* s, a: 0.018,b:  0     },
        { r: PR * 4.40, w: 0.26* s, a: 0.008,b:  0     },
      ];
      for (const rg of rings) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, DISK_Y);
        ctx.shadowBlur  = rg.b * gp;
        ctx.shadowColor = `rgba(178, 224, 255, ${rg.a * gp})`;
        ctx.strokeStyle = `rgba(192, 230, 255, ${rg.a * gp})`;
        ctx.lineWidth   = rg.w;
        ctx.beginPath();
        ctx.arc(0, 0, rg.r, startA, endA);
        ctx.stroke();
        ctx.restore();
      }
    };

    // ── Main render loop ─────────────────────────────────────────
    const frame = (ts: number) => {
      animId = requestAnimationFrame(frame);
      if (!isVisible) return;

      // Grow-in
      if (growStart === null) growStart = ts;
      const raw = Math.min((ts - growStart) / GROW_MS, 1);
      gp = 1 - Math.pow(1 - raw, 3);   // ease-out cubic

      const w  = canvas.width;
      const h  = canvas.height;
      if (w === 0 || h === 0) return;

      const cx = w * 0.5;
      const cy = h * 0.5;

      // Scale: grows from 0 to full, responsive to screen size
      const baseS = Math.min(w, h) / 460;
      const s     = baseS * gp;
      if (s < 0.004) { ctx.clearRect(0, 0, w, h); return; }

      const R  = 106 * s;   // event horizon radius
      const PR = 119 * s;   // photon ring radius

      ctx.clearRect(0, 0, w, h);
      t += 0.006;

      // ── 1. Deep gravitational field halo ─────────────────────
      const halo = ctx.createRadialGradient(cx, cy, R * 0.4, cx, cy, PR * 7.5);
      halo.addColorStop(0,    `rgba(40,  95, 255, ${0.24 * gp})`);
      halo.addColorStop(0.18, `rgba(25,  68, 210, ${0.11 * gp})`);
      halo.addColorStop(0.45, `rgba(10,  35, 165, ${0.04 * gp})`);
      halo.addColorStop(1,    'rgba(0, 0, 0, 0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, PR * 7.5, 0, Math.PI * 2);
      ctx.fill();

      // ── 2. Back half of disk (angles π → 2π, goes behind horizon)
      //    In canvas coords, π→2π sweeps through the top (far side)
      drawRings(cx, cy, PR, s, Math.PI, Math.PI * 2);

      // ── 3. Doppler brightening — bottom-center bright lobe ────
      //    Approaching material on the near (bottom) side appears
      //    far brighter due to relativistic beaming
      for (let d = 0; d < 3; d++) {
        const bright = [0.92, 0.50, 0.24][d];
        const rr     = [PR * 1.01, PR * 1.12, PR * 1.26][d];
        const lw     = [10, 6, 3.5][d];
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, DISK_Y);
        // Arc centered on the bottom (angle π/2 in canvas = bottom)
        const a0 = Math.PI * 0.08;
        const a1 = Math.PI * 0.92;
        ctx.beginPath();
        ctx.arc(0, 0, rr, a0, a1);
        ctx.strokeStyle = `rgba(245, 252, 255, ${bright * 0.90 * gp})`;
        ctx.lineWidth   = lw * s;
        ctx.shadowBlur  = 52 * s * bright;
        ctx.shadowColor = `rgba(220, 245, 255, ${bright * gp})`;
        ctx.stroke();
        ctx.restore();
      }

      // ── 4. Rotating hot-spot arcs ─────────────────────────────
      for (let i = 0; i < 2; i++) {
        const base = t * 0.45 + i * (Math.PI + 0.28);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, DISK_Y);

        // Bright leading edge
        ctx.beginPath();
        ctx.arc(0, 0, PR * 1.01, base, base + Math.PI * 0.40);
        ctx.strokeStyle = `rgba(250, 254, 255, ${0.95 * gp})`;
        ctx.lineWidth   = 8.5 * s;
        ctx.shadowBlur  = 46 * s;
        ctx.shadowColor = `rgba(220, 246, 255, ${0.98 * gp})`;
        ctx.stroke();

        // Dim trailing tail
        ctx.beginPath();
        ctx.arc(0, 0, PR * 1.01, base + Math.PI * 0.40, base + Math.PI * 1.05);
        ctx.strokeStyle = `rgba(130, 198, 255, ${0.13 * gp})`;
        ctx.lineWidth   = 2.5 * s;
        ctx.shadowBlur  = 12 * s;
        ctx.shadowColor = `rgba(110, 178, 255, ${0.26 * gp})`;
        ctx.stroke();

        ctx.restore();
      }

      // ── 5. Particles (all drawn here, clipped by horizon below) ─
      const pc = pCount();
      for (let i = 0; i < Math.min(pc, particles.length); i++) {
        const p = particles[i];
        p.angle  += p.speed;
        p.radius -= p.sink;
        if (p.radius < R / s * 0.88) {
          const n   = makeP();
          p.angle   = n.angle;  p.radius = n.radius;
          p.speed   = n.speed;  p.sink   = n.sink;
          p.size    = n.size;   p.alpha  = n.alpha;
        }
        const px   = cx + Math.cos(p.angle) * p.radius * s;
        const py   = cy + Math.sin(p.angle) * p.radius * s * DISK_Y;
        const fade = Math.min(1, (p.radius - R / s) / 65) * gp;
        if (fade <= 0) continue;
        ctx.beginPath();
        ctx.arc(px, py, p.size * s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(208, 236, 255, ${p.alpha * fade})`;
        ctx.fill();
      }

      // ── 6. Photon ring glow (circular — not flattened) ────────
      const photon = ctx.createRadialGradient(cx, cy, R * 0.68, cx, cy, PR * 1.44);
      photon.addColorStop(0,    'rgba(0,0,0,0)');
      photon.addColorStop(0.48, `rgba(45, 138, 255, ${0.10 * gp})`);
      photon.addColorStop(0.84, `rgba(192, 230, 255, ${0.46 * gp})`);
      photon.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = photon;
      ctx.beginPath();
      ctx.arc(cx, cy, PR * 1.44, 0, Math.PI * 2);
      ctx.fill();

      // ── 7. Event horizon — shadow gradient + solid black ──────
      const ehGrad = ctx.createRadialGradient(cx, cy, R * 0.75, cx, cy, R * 1.16);
      ehGrad.addColorStop(0,    '#000');
      ehGrad.addColorStop(0.84, '#000');
      ehGrad.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = ehGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // ── 8. Front half of disk (angles 0 → π, wraps in front) ──
      //    Drawn after the black event horizon so it overlaps it,
      //    creating the classic 3-D ring-around-the-shadow effect
      drawRings(cx, cy, PR, s, 0, Math.PI);

      // Extra front-half inner highlight (white-hot rim at bottom)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, DISK_Y);
      ctx.beginPath();
      ctx.arc(0, 0, PR * 1.01, 0, Math.PI);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.18 * gp})`;
      ctx.lineWidth   = 5 * s;
      ctx.shadowBlur  = 18 * s;
      ctx.shadowColor = `rgba(230, 248, 255, ${0.38 * gp})`;
      ctx.stroke();
      ctx.restore();

      // ── 9. Relativistic polar jets ─────────────────────────────
      for (const dir of [-1, 1]) {
        const len = PR * 9 * s;
        const jg  = ctx.createLinearGradient(cx, cy, cx, cy + dir * len);
        jg.addColorStop(0,    `rgba(150, 202, 255, ${0.42 * gp})`);
        jg.addColorStop(0.10, `rgba(118, 176, 255, ${0.22 * gp})`);
        jg.addColorStop(0.38, `rgba(68,  136, 255, ${0.08 * gp})`);
        jg.addColorStop(1,    'rgba(0, 0, 0, 0)');
        const w0 = PR * 0.09 * s;   // narrow at base
        const w1 = PR * 1.65 * s;   // wide at tip
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx - w0, cy);
        ctx.lineTo(cx - w1, cy + dir * len);
        ctx.lineTo(cx + w1, cy + dir * len);
        ctx.lineTo(cx + w0, cy);
        ctx.closePath();
        ctx.fillStyle = jg;
        ctx.fill();
        ctx.restore();
      }
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
        opacity:       0.72,
      }}
    />
  );
};

export default BlackHole;
