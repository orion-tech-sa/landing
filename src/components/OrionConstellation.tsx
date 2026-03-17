import React from 'react';

// Main Orion stars — positions in a 520 × 700 viewBox
// Betelgeuse (gold) top-left shoulder | Rigel (blue-white) bottom-right foot
const STARS = [
  { id: 'meissa',     x: 250, y:  55, r: 3,   glow: 20, color: '#dde8ff', pulse: 4.5, isGold: false },
  { id: 'betelgeuse', x: 118, y: 192, r: 9,   glow: 52, color: '#dde8ff', pulse: 6.2, isGold: false },
  { id: 'bellatrix',  x: 392, y: 162, r: 5,   glow: 28, color: '#ccdeff', pulse: 3.9, isGold: false },
  { id: 'mintaka',    x: 185, y: 398, r: 4,   glow: 22, color: '#d8eaff', pulse: 5.1, isGold: false },
  { id: 'alnilam',    x: 250, y: 415, r: 5.5, glow: 30, color: '#f0f6ff', pulse: 4.8, isGold: false },
  { id: 'alnitak',    x: 315, y: 432, r: 4,   glow: 22, color: '#d8eaff', pulse: 3.6, isGold: false },
  { id: 'saiph',      x: 155, y: 612, r: 5.5, glow: 28, color: '#ccdeff', pulse: 4.9, isGold: false },
  { id: 'rigel',      x: 408, y: 590, r: 9,   glow: 54, color: '#b8d2ff', pulse: 5.8, isGold: false },
];

// Standard Orion constellation lines
const LINES: [string, string][] = [
  ['meissa',     'betelgeuse'],
  ['meissa',     'bellatrix'],
  ['betelgeuse', 'mintaka'],
  ['bellatrix',  'alnitak'],
  ['mintaka',    'alnilam'],
  ['alnilam',    'alnitak'],
  ['mintaka',    'saiph'],
  ['alnitak',    'rigel'],
  ['saiph',      'rigel'],
];

// Extra faint background stars to fill the space around the constellation
const BG_STARS = [
  { x:  48, y: 110, r: 1   }, { x: 460, y:  90, r: 1.5 }, { x: 490, y: 310, r: 1 },
  { x:  30, y: 330, r: 1.2 }, { x: 505, y: 480, r: 1   }, { x:  70, y: 490, r: 1 },
  { x: 480, y: 640, r: 1.5 }, { x:  25, y: 640, r: 1   }, { x: 130, y:  32, r: 1 },
  { x: 380, y: 690, r: 1.2 }, { x: 210, y: 680, r: 1   }, { x: 340, y:  28, r: 1 },
  { x:  95, y: 280, r: 0.8 }, { x: 440, y: 260, r: 0.8 }, { x: 270, y: 550, r: 0.8 },
];

const pos = Object.fromEntries(STARS.map(s => [s.id, { x: s.x, y: s.y }]));

const OrionConstellation: React.FC = () => (
  <div className="constellation-wrap" aria-hidden="true">
    <svg
      viewBox="0 0 520 700"
      className="constellation-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Star glow gradients */}
        {STARS.map(s => (
          <radialGradient key={`g-${s.id}`} id={`g-${s.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={s.color} stopOpacity="0.9" />
            <stop offset="40%"  stopColor={s.color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={s.color} stopOpacity="0" />
          </radialGradient>
        ))}
        {/* Nebula hazes around the two brightest stars */}
        <radialGradient id="haze-betelgeuse" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#b8d2ff" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#b8d2ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="haze-rigel" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#6ea8fe" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#6ea8fe" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background faint stars */}
      {BG_STARS.map((s, i) => (
        <circle key={`bg-${i}`} cx={s.x} cy={s.y} r={s.r} fill="rgba(200,225,255,0.35)" />
      ))}

      {/* Nebula hazes */}
      <ellipse cx="118" cy="192" rx="100" ry="100" fill="url(#haze-betelgeuse)" />
      <ellipse cx="408" cy="590" rx="100" ry="100" fill="url(#haze-rigel)" />

      {/* Constellation lines */}
      {LINES.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={pos[a].x} y1={pos[a].y}
          x2={pos[b].x} y2={pos[b].y}
          stroke="rgba(180, 210, 255, 0.22)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      ))}

      {/* Stars: outer glow + solid core */}
      {STARS.map(s => (
        <g key={s.id}>
          <circle
            cx={s.x} cy={s.y}
            r={s.glow}
            fill={`url(#g-${s.id})`}
            style={{ animation: `${s.isGold ? 'pulseGold' : 'pulseWhite'} ${s.pulse}s ease-in-out infinite` }}
          />
          <circle cx={s.x} cy={s.y} r={s.r} fill={s.color} />
        </g>
      ))}
    </svg>
  </div>
);

export default OrionConstellation;
