const en = {
  nav: {
    about:    'About',
    services: 'Platform',
    contact:  'Contact',
    cta:      'Get early access',
  },
  hero: {
    eyebrow:   'Algo Trading · Tadawul · Saudi Markets',
    title:     'Trade like\nthe top 1%.',
    subtitle:  "Hedge funds on Tadawul don't place orders manually. Now, neither do you.",
    cta:       'Get early access',
    secondary: 'See the platform',
  },
  about: {
    label: 'The problem',
    title: 'The playing field\nwas never level.',
    body:  'For decades, institutional investors in Saudi Arabia have had an edge that retail investors simply couldn\'t access — co-located servers executing at microsecond latency, proprietary data feeds, and algorithmic strategies refined over years. You had a broker app and a 15-minute delay. Orion changes that.',
    before: [
      'Manual order entry',
      'Delayed price feeds',
      'No algorithmic strategies',
      'No execution controls',
      'No risk management layer',
    ],
    after: [
      'Algorithmic execution',
      'Real-time order book data',
      '15+ trading strategies',
      'Built-in risk management',
      'Full execution transparency',
    ],
    steps: [
      { num: '01', title: 'Connect',   desc: 'Link your brokerage account securely. Setup takes under five minutes.' },
      { num: '02', title: 'Configure', desc: 'Choose your strategy, set parameters, and define your risk limits.' },
      { num: '03', title: 'Execute',   desc: 'Orion runs your algorithms continuously on Tadawul — no manual intervention needed.' },
    ],
    stats: [
      { num: '<1ms', label: 'Execution Latency' },
      { num: '15+',  label: 'Algo Strategies'   },
      { num: '99.9%',label: 'System Uptime'     },
      { num: 'SAR',  label: 'Native Currency'   },
    ],
  },
  services: {
    label: 'Platform',
    title: 'One platform.\nEvery edge.',
    desc:  'Three core capabilities — each built specifically for Tadawul, designed to work independently or as a unified system.',
    items: [
      {
        num:      '01',
        title:    'Algorithmic Execution',
        desc:     'Stop placing orders manually. Configure a strategy once and let Orion handle the rest — entry, exit, and everything in between — with institutional precision.',
        features: ['TWAP & VWAP', 'Implementation shortfall', 'Custom alpha overlays', 'Pre-trade risk checks', 'Partial fill management'],
      },
      {
        num:      '02',
        title:    'Live Market Intelligence',
        desc:     'See what institutional desks see. Real-time order book depth, microstructure analytics, and flow signals — all calibrated specifically for Saudi equity markets.',
        features: ['Level 2 order book', 'Real-time tick data', 'Order flow imbalance signals', 'Corporate action feeds'],
      },
      {
        num:      '03',
        title:    'Risk Management',
        desc:     'The discipline that protects every institutional portfolio, now applied to yours automatically — across every position, every trade, every second the market is open.',
        features: ['Position limits & stop losses', 'Drawdown controls', 'Portfolio stress testing'],
      },
    ],
  },
  contact: {
    label: 'Early access',
    title: 'Be among\nthe first.',
    desc:  'Orion is onboarding a limited number of investors in 2026. If you\'re serious about trading on Tadawul, we\'d like to hear from you.',
    note:  'Early access · Limited spots available',
  },
  footer: {
    copy: '© 2026 Orion Technologies. All rights reserved.',
  },
};

export const translations = { en };
