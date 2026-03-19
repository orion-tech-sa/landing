import React, { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   BlackHole — Grok-inspired orbital light streams
   Concept: glowing calligraphic arcs spiralling around a dark void
   No accretion disk, no rings — just luminous brushstroke-like streams
   ───────────────────────────────────────────────────────────────────────── */

const GROW_MS = 2800;

// Each stream orbits at a different radius and speed.
// Colors go warm-white (outer) → cold blue-white (inner).
const STREAMS = [
  {
    baseAngle: 0.00,
    rMult:     4.0,
    speed:     0.09,           // rad / s
    span:      Math.PI * 1.35, // how many radians the tail covers
    maxW:      3.2,            // max stroke width at s = 1
    rgb:       [255, 248, 235] as const,
    wAmp:      0.08,           // wobble amplitude (fraction of radius)
    wFreq:     0.9,            // wobble time-frequency
    wSpatial:  4.2,            // wobble spatial frequency along the arc
  },
  {
    baseAngle: Math.PI * 0.62,
    rMult:     2.95,
    speed:     0.14,
    span:      Math.PI * 1.60,
    maxW:      2.5,
    rgb:       [252, 252, 255] as const,
    wAmp:      0.05,
    wFreq:     0.7,
    wSpatial:  3.8,
  },
  {
    baseAngle: Math.PI * 1.28,
    rMult:     2.10,
    speed:     0.22,
    span:      Math.PI * 1.75,
    maxW:      1.9,
    rgb:       [235, 244, 255] as const,
    wAmp:      0.06,
    wFreq:     1.4,
    wSpatial:  5.0,
  },
  {
    baseAngle: Math.PI * 0.35,
    rMult:     1.55,
    speed:     0.33,
    span:      Math.PI * 1.90,
    maxW:      1.4,
    rgb:       [215, 232, 255] as const,
    wAmp:      0.04,
    wFreq:     2.0,
    wSpatial:  6.2,
  },
  {
    baseAngle: Math.PI * 1.82,
    rMult:     1.18,
    speed:     0.48,
    span:      Math.PI * 1.15,
    maxW:      0.85,
    rgb:       [200, 220, 255] as const,
    wAmp:      0.03,
    wFreq:     2.8,
    wSpatial:  7.5,
  },
] as const;

const SEG = 50; // arc segments per stream (quality / perf balance)

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

    let animId:    number;
    let t          = 0;
    let lastTs:    number | null = null;
    let gp         = 0;
    let growStart: number | null = null;
    let isVisible  = false;
    let _vw        = window.innerWidth;
    let _vh        = window.innerHeight;

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
      { threshold: 0.05 }
    );
    io.observe(canvas);

    // ── Frame ──────────────────────────────────────────────────────────
    const frame = (ts: number) => {
      animId = requestAnimationFrame(frame);
      if (!isVisible) return;

      if (growStart === null) growStart = ts;
      const raw = Math.min((ts - growStart) / GROW_MS, 1);
      gp = 1 - Math.pow(1 - raw, 3);

      const dt = lastTs !== null ? Math.min((ts - lastTs) / 1000, 0.05) : 0;
      lastTs = ts;
      t += dt;

      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) return;

      const baseS = Math.min(_vw, _vh) / 490;
      const s     = baseS * gp;
      if (s < 0.005) { ctx.clearRect(0, 0, w, h); return; }

      const cx = _vw < 769  ? w * 0.50
               : _vw < 1100 ? w * 0.60
               : w * 0.67;
      const cy = h * 0.50;

      const R  = 96  * s;   // event horizon radius
      const PR = 110 * s;   // innermost stream reference radius

      ctx.clearRect(0, 0, w, h);

      // ── 1. Deep void atmosphere ────────────────────────────────────
      const atm = ctx.createRadialGradient(cx, cy, 0, cx, cy, PR * 5.5);
      atm.addColorStop(0,    `rgba( 6,  8, 24, ${0.22 * gp})`);
      atm.addColorStop(0.40, `rgba( 4,  5, 16, ${0.10 * gp})`);
      atm.addColorStop(0.75, `rgba( 2,  3, 10, ${0.04 * gp})`);
      atm.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(cx, cy, PR * 5.5, 0, Math.PI * 2);
      ctx.fill();

      // ── 2. Orbital light streams ───────────────────────────────────
      for (const st of STREAMS) {
        const [cr, cg, cb] = st.rgb;
        const headAngle = st.baseAngle + t * st.speed;
        const rBase     = st.rMult * PR;

        // Pre-compute all arc positions for this stream
        const pts: { x: number; y: number }[] = [];
        for (let i = 0; i <= SEG; i++) {
          const frac  = i / SEG;
          const angle = headAngle - (1 - frac) * st.span;
          // Radius: tail is ~15% further out (infall spiral)
          // plus two-frequency organic wobble for a living, breathing quality
          const r = rBase * (
            1 + 0.15 * (1 - frac)
            + st.wAmp * Math.sin(frac * st.wSpatial + t * st.wFreq)
            + st.wAmp * 0.4 * Math.cos(frac * (st.wSpatial * 1.6) - t * st.wFreq * 0.65)
          );
          pts.push({
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
          });
        }

        // PASS 1 — soft glow (wide, dim, blurred)
        ctx.save();
        ctx.shadowBlur  = 16 * s;
        ctx.shadowColor = `rgba(${cr},${cg},${cb},0.55)`;
        ctx.lineCap = 'round';
        for (let i = 0; i < SEG; i++) {
          const frac  = (i + 0.5) / SEG;
          const alpha = Math.pow(frac, 2.0) * 0.35 * gp;
          if (alpha < 0.005) continue;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
          ctx.lineWidth   = st.maxW * s * (0.4 + 0.6 * frac) * 3.5;
          ctx.stroke();
        }
        ctx.restore();

        // PASS 2 — bright core (narrow, opaque)
        ctx.lineCap = 'round';
        for (let i = 0; i < SEG; i++) {
          const frac  = (i + 0.5) / SEG;
          const alpha = Math.pow(frac, 1.6) * 0.92 * gp;
          if (alpha < 0.01) continue;
          // Skip segments fully inside event horizon
          const mx = (pts[i].x + pts[i + 1].x) * 0.5;
          const my = (pts[i].y + pts[i + 1].y) * 0.5;
          if ((mx - cx) ** 2 + (my - cy) ** 2 < (R * 0.92) ** 2) continue;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
          // Calligraphic taper: thin tail → full width at head
          ctx.lineWidth   = st.maxW * s * Math.pow(frac, 0.65);
          ctx.stroke();
        }

        // PASS 3 — head bright point
        const hx = pts[SEG].x;
        const hy = pts[SEG].y;
        const hDistSq = (hx - cx) ** 2 + (hy - cy) ** 2;
        if (hDistSq > (R * 1.08) ** 2) {
          ctx.save();
          ctx.shadowBlur  = 22 * s;
          ctx.shadowColor = `rgba(${cr},${cg},${cb},0.9)`;
          ctx.beginPath();
          ctx.arc(hx, hy, st.maxW * s * 2.0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${0.95 * gp})`;
          ctx.fill();
          ctx.restore();
        }
      }

      // ── 3. Event horizon — pure void, soft feathered edge ─────────
      const ehGrad = ctx.createRadialGradient(cx, cy, R * 0.74, cx, cy, R * 1.14);
      ehGrad.addColorStop(0,   '#000000');
      ehGrad.addColorStop(0.88,'#000000');
      ehGrad.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = ehGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.14, 0, Math.PI * 2);
      ctx.fill();
      // Solid core
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.82, 0, Math.PI * 2);
      ctx.fill();

      // ── 4. Photon ring — faint cool halo right at the horizon edge ─
      const ring = ctx.createRadialGradient(cx, cy, R * 0.86, cx, cy, R * 1.35);
      ring.addColorStop(0,    'rgba(0,0,0,0)');
      ring.addColorStop(0.55, `rgba(180,210,255,${0.04 * gp})`);
      ring.addColorStop(0.88, `rgba(210,228,255,${0.18 * gp})`);
      ring.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = ring;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2);
      ctx.fill();
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
        opacity:       0.90,
      }}
    />
  );
};

export default BlackHole;
