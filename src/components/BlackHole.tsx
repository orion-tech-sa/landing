import React, { useEffect, useRef } from 'react';

interface Particle {
  angle: number;
  radius: number;
  speed: number;
  sink: number;
  size: number;
  alpha: number;
}

const BlackHole: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let visible = true;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(
      ([e]) => { visible = e.isIntersecting; },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    const PARTICLE_COUNT = 200;

    const makeP = (): Particle => ({
      angle:  Math.random() * Math.PI * 2,
      radius: Math.random() * 290 + 120,
      speed:  (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.007 + 0.002),
      sink:   Math.random() * 0.12 + 0.04,
      size:   Math.random() * 1.4 + 0.25,
      alpha:  Math.random() * 0.55 + 0.15,
    });

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, makeP);

    const frame = () => {
      animId = requestAnimationFrame(frame);
      if (!visible) return;

      const w  = canvas.width;
      const h  = canvas.height;
      if (w === 0 || h === 0) return;

      const cx = w * 0.5;
      const cy = h * 0.5;
      const s  = Math.min(w, h) / 720;   // normalize around 720px base
      const R  = 78  * s;                 // event horizon radius (px)
      const PR = 88  * s;                 // photon ring radius (px)

      ctx.clearRect(0, 0, w, h);
      t += 0.007;

      // ── Outer gravitational lensing halo ──────────────────────
      const halo = ctx.createRadialGradient(cx, cy, PR, cx, cy, PR * 5);
      halo.addColorStop(0,   'rgba(90, 160, 255, 0.14)');
      halo.addColorStop(0.35,'rgba(50, 110, 200, 0.05)');
      halo.addColorStop(1,   'rgba(0,   0,   0,  0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, PR * 5, 0, Math.PI * 2);
      ctx.fill();

      // ── Accretion disk — perspective-flattened rings ──────────
      const rings = [
        { r: PR * 1.03, w: 4.5 * s, a: 0.85, blur: 20 * s },
        { r: PR * 1.16, w: 2.5 * s, a: 0.42, blur: 12 * s },
        { r: PR * 1.38, w: 1.5 * s, a: 0.24, blur:  7 * s },
        { r: PR * 1.72, w: 1.2 * s, a: 0.14, blur:  4 * s },
        { r: PR * 2.15, w: 0.9 * s, a: 0.08, blur:  2 * s },
        { r: PR * 2.7,  w: 0.6 * s, a: 0.05, blur:  1 * s },
        { r: PR * 3.4,  w: 0.4 * s, a: 0.025,blur:  0 },
      ];

      for (const ring of rings) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, 0.28);
        ctx.shadowBlur    = ring.blur;
        ctx.shadowColor   = `rgba(165, 215, 255, ${ring.a})`;
        ctx.strokeStyle   = `rgba(180, 220, 255, ${ring.a})`;
        ctx.lineWidth     = ring.w;
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // ── Bright rotating hot-spot arcs on photon ring ──────────
      for (let i = 0; i < 2; i++) {
        const base  = t * 0.5 + i * (Math.PI + 0.18);
        const span  = Math.PI * 0.48;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, 0.28);

        // Leading bright point
        ctx.beginPath();
        ctx.arc(0, 0, PR * 1.03, base, base + span);
        ctx.strokeStyle = 'rgba(230, 245, 255, 0.9)';
        ctx.lineWidth   = 5.5 * s;
        ctx.shadowBlur  = 32 * s;
        ctx.shadowColor = 'rgba(210, 235, 255, 0.95)';
        ctx.stroke();

        // Trailing dim tail
        ctx.beginPath();
        ctx.arc(0, 0, PR * 1.03, base + span, base + span + Math.PI * 0.6);
        ctx.strokeStyle = `rgba(160, 210, 255, ${0.18 - i * 0.04})`;
        ctx.lineWidth   = 2 * s;
        ctx.shadowBlur  = 10 * s;
        ctx.shadowColor = 'rgba(140, 195, 255, 0.4)';
        ctx.stroke();

        ctx.restore();
      }

      // ── Spiraling particles ───────────────────────────────────
      for (const p of particles) {
        p.angle  += p.speed;
        p.radius -= p.sink;

        if (p.radius < R / s * 0.88) {
          const n   = makeP();
          p.angle   = n.angle;
          p.radius  = n.radius;
          p.speed   = n.speed;
          p.sink    = n.sink;
          p.size    = n.size;
          p.alpha   = n.alpha;
        }

        const px   = cx + Math.cos(p.angle) * p.radius * s;
        const py   = cy + Math.sin(p.angle) * p.radius * s * 0.28;
        const fade = Math.min(1, (p.radius - R / s) / 55);
        if (fade <= 0) continue;

        ctx.beginPath();
        ctx.arc(px, py, p.size * s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${p.alpha * fade})`;
        ctx.fill();
      }

      // ── Photon ring glow (right at the horizon edge) ─────────
      const photon = ctx.createRadialGradient(cx, cy, R * 0.72, cx, cy, PR * 1.28);
      photon.addColorStop(0,    'rgba(0, 0, 0, 0)');
      photon.addColorStop(0.62, 'rgba(70, 150, 255, 0.08)');
      photon.addColorStop(0.88, 'rgba(160, 210, 255, 0.30)');
      photon.addColorStop(1,    'rgba(0, 0, 0, 0)');
      ctx.fillStyle = photon;
      ctx.beginPath();
      ctx.arc(cx, cy, PR * 1.28, 0, Math.PI * 2);
      ctx.fill();

      // ── Event horizon ─────────────────────────────────────────
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();
    };

    frame();

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
        opacity:       0.45,
      }}
    />
  );
};

export default BlackHole;
