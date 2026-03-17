import React from 'react';

const STOCKS = [
  { symbol: 'ARAMCO',  price: '30.15',  change: '+0.87%', up: true  },
  { symbol: 'SABIC',   price: '138.40', change: '-0.42%', up: false },
  { symbol: 'STC',     price: '54.80',  change: '+1.23%', up: true  },
  { symbol: 'RAJHI',   price: '94.50',  change: '+0.53%', up: true  },
  { symbol: 'RIYAD',   price: '28.75',  change: '-0.18%', up: false },
  { symbol: 'NCB',     price: '47.90',  change: '+0.34%', up: true  },
  { symbol: 'MAADEN',  price: '61.20',  change: '-0.65%', up: false },
  { symbol: 'SAFCO',   price: '112.40', change: '+1.05%', up: true  },
  { symbol: 'ALINMA',  price: '35.60',  change: '+0.28%', up: true  },
  { symbol: 'JARIR',   price: '188.60', change: '-0.31%', up: false },
];

const Ticker: React.FC = () => (
  <div className="ticker" aria-label="Simulated market data">
    <div className="ticker-badge">
      <span className="ticker-live-dot" />
      TADAWUL
    </div>
    <div className="ticker-viewport">
      <div className="ticker-track">
        {[...STOCKS, ...STOCKS].map((s, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-symbol">{s.symbol}</span>
            <span className="ticker-price">{s.price}</span>
            <span className={`ticker-change ${s.up ? 'up' : 'down'}`}>
              {s.up ? '▲' : '▼'} {s.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Ticker;
