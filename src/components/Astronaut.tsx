import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   Astronaut — floating space-suit figure for the About section
   Palette: deep navy suit, slate-indigo trim, glowing visor
   ViewBox: 0 0 300 460  (astronaut spans ~y:42–442, x:12–288)
   ───────────────────────────────────────────────────────────────────────── */

const STARS = [
  { cx:  22, cy:  48, r: 1.2, op: 0.55, dur: 3.8, del: '0.0s' },
  { cx: 272, cy:  76, r: 0.9, op: 0.45, dur: 5.1, del: '1.3s' },
  { cx:  10, cy: 195, r: 1.4, op: 0.60, dur: 4.2, del: '0.6s' },
  { cx: 288, cy: 158, r: 1.0, op: 0.40, dur: 6.4, del: '2.0s' },
  { cx:  48, cy: 378, r: 1.1, op: 0.35, dur: 3.6, del: '1.7s' },
  { cx: 280, cy: 345, r: 1.3, op: 0.55, dur: 4.9, del: '0.4s' },
  { cx:  14, cy: 428, r: 0.8, op: 0.30, dur: 5.5, del: '2.8s' },
  { cx: 262, cy: 442, r: 1.0, op: 0.45, dur: 3.3, del: '1.6s' },
  { cx: 112, cy:  18, r: 0.8, op: 0.35, dur: 4.5, del: '0.9s' },
  { cx: 198, cy:  14, r: 1.1, op: 0.50, dur: 5.9, del: '2.2s' },
  { cx:  68, cy: 452, r: 0.9, op: 0.28, dur: 3.9, del: '1.2s' },
  { cx: 238, cy: 456, r: 1.4, op: 0.55, dur: 4.7, del: '0.7s' },
  { cx:   8, cy: 298, r: 0.7, op: 0.25, dur: 6.2, del: '3.1s' },
  { cx: 294, cy: 255, r: 0.8, op: 0.38, dur: 4.3, del: '1.8s' },
  { cx: 152, cy:   8, r: 0.6, op: 0.28, dur: 5.0, del: '0.3s' },
  { cx:  32, cy: 135, r: 0.9, op: 0.32, dur: 4.0, del: '2.5s' },
  { cx: 278, cy: 418, r: 0.8, op: 0.40, dur: 5.3, del: '1.0s' },
];

const Astronaut: React.FC = () => (
  <div className="astronaut-wrap" aria-hidden="true">
    <style>{`
      .astronaut-wrap {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @media (min-width: 769px) {
        .astronaut-wrap {
          justify-content: flex-end;
          padding-right: 7%;
        }
      }
      .astronaut-svg {
        width: min(340px, 48vw);
        height: auto;
        opacity: 0.92;
        animation: astroFloat 7.5s ease-in-out infinite alternate;
        filter: drop-shadow(0 0 32px rgba(60,100,200,0.18));
      }
      @media (max-width: 768px) {
        .astronaut-svg {
          width: min(220px, 65vw);
          opacity: 0.25;
        }
      }
      @keyframes astroFloat {
        0%   { transform: translateY(0px)   rotate(-1.8deg); }
        100% { transform: translateY(-26px) rotate(2.0deg);  }
      }
      @keyframes visorBreath {
        0%, 100% { opacity: 0.30; }
        50%       { opacity: 0.55; }
      }
      @keyframes helmetLight {
        0%, 100% { opacity: 0.45; }
        50%       { opacity: 0.80; }
      }
      @keyframes starTwinkle {
        0%, 100% { opacity: var(--star-op); }
        50%       { opacity: calc(var(--star-op) * 0.25); }
      }
      @media (prefers-reduced-motion: reduce) {
        .astronaut-svg    { animation: none !important; filter: none; }
        .visor-glow       { animation: none !important; }
        .helmet-light     { animation: none !important; }
        .star-dot         { animation: none !important; }
      }
    `}</style>

    <svg
      className="astronaut-svg"
      viewBox="0 0 300 460"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        {/* Visor gradient — dark blue with depth */}
        <radialGradient id="ast-visor" cx="40%" cy="35%" r="60%">
          <stop offset="0%"   stopColor="#1e4a88" />
          <stop offset="40%"  stopColor="#0d2248" />
          <stop offset="100%" stopColor="#060e22" />
        </radialGradient>

        {/* Soft glow behind the whole figure */}
        <radialGradient id="ast-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#1a2e60" stopOpacity="0.18" />
          <stop offset="55%"  stopColor="#0d1838" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#000"    stopOpacity="0"    />
        </radialGradient>

        {/* Visor breathing glow */}
        <radialGradient id="ast-visor-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#3a70cc" stopOpacity="0.70" />
          <stop offset="100%" stopColor="#3a70cc" stopOpacity="0"    />
        </radialGradient>

        {/* Suit edge gradient for subtle 3-D feel */}
        <linearGradient id="ast-suit-lg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#18283e" />
          <stop offset="100%" stopColor="#0a111e" />
        </linearGradient>

        <filter id="ast-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── Outer body aura ───────────────────────────────────────────── */}
      <ellipse cx="150" cy="240" rx="128" ry="195" fill="url(#ast-aura)" />

      {/* ── Background stars ──────────────────────────────────────────── */}
      {STARS.map((s, i) => (
        <circle
          key={i}
          className="star-dot"
          cx={s.cx} cy={s.cy} r={s.r}
          fill={`rgba(200,218,255,${s.op})`}
          style={{
            '--star-op': s.op,
            animation: `starTwinkle ${s.dur}s ease-in-out ${s.del} infinite`,
          } as React.CSSProperties}
        />
      ))}

      {/* ── Life-support backpack ─────────────────────────────────────── */}
      <rect x="206" y="194" width="24" height="88" rx="7"
        fill="#090f1c" stroke="#182438" strokeWidth="1.5" />
      {/* Thruster nozzles */}
      <rect x="209" y="272" width="7"  height="14" rx="3.5" fill="#060c18" stroke="#162030" strokeWidth="1"/>
      <rect x="220" y="272" width="7"  height="14" rx="3.5" fill="#060c18" stroke="#162030" strokeWidth="1"/>

      {/* ── Left arm — drifting down-left ─────────────────────────────── */}
      {/* Dark base stroke (silhouette) */}
      <path d="M 90 212 C 65 226 44 252 28 274"
        stroke="#0a1220" strokeWidth="32" strokeLinecap="round" />
      {/* Suit fill stroke */}
      <path d="M 90 212 C 65 226 44 252 28 274"
        stroke="url(#ast-suit-lg)" strokeWidth="30" strokeLinecap="round" opacity="0.9" />
      {/* Edge highlight */}
      <path d="M 86 210 C 61 224 40 252 24 272"
        stroke="#1e3050" strokeWidth="5" strokeLinecap="round" opacity="0.30" />
      {/* Wrist ring */}
      <line x1="24" y1="268" x2="34" y2="280"
        stroke="#1a2840" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>

      {/* ── Right arm — floating up-right ────────────────────────────── */}
      <path d="M 210 206 C 234 212 254 218 268 228"
        stroke="#0a1220" strokeWidth="32" strokeLinecap="round" />
      <path d="M 210 206 C 234 212 254 218 268 228"
        stroke="url(#ast-suit-lg)" strokeWidth="30" strokeLinecap="round" opacity="0.9" />
      <path d="M 210 203 C 234 210 254 216 268 226"
        stroke="#1e3050" strokeWidth="5" strokeLinecap="round" opacity="0.30" />
      {/* Wrist ring */}
      <line x1="264" y1="224" x2="272" y2="234"
        stroke="#1a2840" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>

      {/* ── Torso ────────────────────────────────────────────────────── */}
      <rect x="80" y="184" width="140" height="148" rx="24"
        fill="url(#ast-suit-lg)" stroke="#182438" strokeWidth="1.5" />
      {/* Shoulder seam */}
      <path d="M 80 216 Q 150 222 220 216"
        stroke="#182438" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

      {/* Control panel */}
      <rect x="98" y="212" width="62" height="50" rx="9"
        fill="#060c18" stroke="#1a2e4a" strokeWidth="1" />
      {/* Display rows */}
      <rect x="106" y="220" width="11" height="6"  rx="2" fill="#1a3f88" opacity="0.90"/>
      <rect x="121" y="220" width="11" height="6"  rx="2" fill="#124e62" opacity="0.90"/>
      <rect x="136" y="220" width="11" height="6"  rx="2" fill="#3a1468" opacity="0.75"/>
      {/* Status dots */}
      <circle cx="110" cy="237" r="4.5" fill="#1e3e9a" opacity="0.85"/>
      <circle cx="126" cy="237" r="4.5" fill="#1a6a52" opacity="0.75"/>
      <circle cx="142" cy="237" r="4.5" fill="#6a1858" opacity="0.65"/>
      {/* Tiny data lights */}
      <circle cx="108" cy="250" r="2" fill="#2a5acc" opacity="0.70"/>
      <circle cx="120" cy="250" r="2" fill="#2a5acc" opacity="0.55"/>
      <circle cx="132" cy="250" r="2" fill="#2a5acc" opacity="0.50"/>
      <circle cx="144" cy="250" r="2" fill="#2a5acc" opacity="0.45"/>
      <circle cx="152" cy="250" r="2" fill="#cc5a2a" opacity="0.55"/>

      {/* Right chest badge */}
      <rect x="172" y="212" width="34" height="34" rx="7"
        fill="#060c18" stroke="#1a2e4a" strokeWidth="1" />
      {/* Belt of Orion suggestion (3 aligned dots) */}
      <circle cx="181" cy="222" r="2"   fill="#3a5898" opacity="0.70"/>
      <circle cx="189" cy="224" r="2"   fill="#3a5898" opacity="0.70"/>
      <circle cx="197" cy="226" r="2"   fill="#3a5898" opacity="0.70"/>
      <line x1="181" y1="222" x2="197" y2="226" stroke="#2a4878" strokeWidth="0.7" opacity="0.45"/>
      <circle cx="184" cy="234" r="1.5" fill="#2a4280" opacity="0.55"/>
      <circle cx="194" cy="234" r="1.5" fill="#2a4280" opacity="0.55"/>

      {/* ── Neck collar ──────────────────────────────────────────────── */}
      <rect x="122" y="172" width="56" height="22" rx="10"
        fill="#101c30" stroke="#182438" strokeWidth="1.5"/>
      {/* Collar ring detail */}
      <line x1="126" y1="183" x2="174" y2="183"
        stroke="#1e2e44" strokeWidth="1" opacity="0.7"/>

      {/* ── Helmet shell ─────────────────────────────────────────────── */}
      <circle cx="150" cy="108" r="66"
        fill="#0c1624" stroke="#182438" strokeWidth="2"/>
      {/* Inner rim ring */}
      <circle cx="150" cy="108" r="60"
        fill="none" stroke="#182438" strokeWidth="0.8" opacity="0.55"/>

      {/* ── Visor ────────────────────────────────────────────────────── */}
      <ellipse cx="150" cy="115" rx="46" ry="42"
        fill="url(#ast-visor)"/>
      {/* Visor outer edge */}
      <ellipse cx="150" cy="115" rx="46" ry="42"
        stroke="#1e3460" strokeWidth="1.2" opacity="0.7"/>
      {/* Breathing glow overlay */}
      <ellipse
        className="visor-glow"
        cx="150" cy="115" rx="50" ry="46"
        fill="url(#ast-visor-glow)"
        style={{ animation: 'visorBreath 4.2s ease-in-out infinite' }}
      />
      {/* Primary reflection (upper-left catch light) */}
      <ellipse cx="132" cy="101" rx="13" ry="9"
        fill="rgba(175,210,255,0.10)"
        transform="rotate(-20 132 101)" />
      {/* Small secondary reflection */}
      <ellipse cx="160" cy="95" rx="5.5" ry="4"
        fill="rgba(195,225,255,0.07)"
        transform="rotate(-10 160 95)" />
      {/* Subtle scan-line data reflection in visor */}
      <line x1="114" y1="108" x2="186" y2="108" stroke="rgba(60,110,200,0.07)" strokeWidth="1"/>
      <line x1="113" y1="116" x2="187" y2="116" stroke="rgba(60,110,200,0.06)" strokeWidth="1"/>
      <line x1="114" y1="124" x2="186" y2="124" stroke="rgba(60,110,200,0.05)" strokeWidth="1"/>

      {/* ── Helmet top light ─────────────────────────────────────────── */}
      <circle
        className="helmet-light"
        cx="150" cy="47" r="5"
        fill="#4a80c8" filter="url(#ast-glow)"
        style={{ animation: 'helmetLight 3.6s ease-in-out infinite' }}
      />
      <circle cx="150" cy="47" r="2.2" fill="#90c0f8" opacity="0.9"/>

      {/* ── Left glove ───────────────────────────────────────────────── */}
      <ellipse cx="24" cy="278" rx="17" ry="15"
        fill="#090f1c" stroke="#182438" strokeWidth="1.5"/>
      <ellipse cx="24" cy="278" rx="10" ry="9"
        fill="none" stroke="#162030" strokeWidth="0.8" opacity="0.55"/>

      {/* ── Right glove ──────────────────────────────────────────────── */}
      <ellipse cx="272" cy="232" rx="17" ry="15"
        fill="#090f1c" stroke="#182438" strokeWidth="1.5"/>
      <ellipse cx="272" cy="232" rx="10" ry="9"
        fill="none" stroke="#162030" strokeWidth="0.8" opacity="0.55"/>

      {/* ── Left leg ─────────────────────────────────────────────────── */}
      <rect x="90" y="322" width="50" height="112" rx="21"
        fill="url(#ast-suit-lg)" stroke="#182438" strokeWidth="1.5"/>
      {/* Knee joint */}
      <line x1="90" y1="362" x2="140" y2="362"
        stroke="#182438" strokeWidth="1.2" opacity="0.50"/>

      {/* ── Right leg ────────────────────────────────────────────────── */}
      <rect x="160" y="322" width="50" height="112" rx="21"
        fill="url(#ast-suit-lg)" stroke="#182438" strokeWidth="1.5"/>
      <line x1="160" y1="362" x2="210" y2="362"
        stroke="#182438" strokeWidth="1.2" opacity="0.50"/>

      {/* ── Boots ────────────────────────────────────────────────────── */}
      <rect x="82" y="418" width="64" height="28" rx="14"
        fill="#08101e" stroke="#182438" strokeWidth="1.5"/>
      <rect x="154" y="418" width="64" height="28" rx="14"
        fill="#08101e" stroke="#182438" strokeWidth="1.5"/>

      {/* ── Safety tether — dashes floating behind ───────────────────── */}
      <path d="M 26 272 Q 4 316 18 390 Q 24 422 12 450"
        stroke="rgba(80,120,200,0.13)" strokeWidth="1.2"
        strokeLinecap="round" strokeDasharray="5 7" />
    </svg>
  </div>
);

export default Astronaut;
