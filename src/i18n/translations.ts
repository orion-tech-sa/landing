const en = {
  nav: {
    about:    'About',
    services: 'Services',
    contact:  'Contact',
    cta:      'Get in Touch',
  },
  hero: {
    title:    'Precision in Every Trade',
    subtitle: 'Algorithmic execution and market intelligence for the Saudi capital markets — built on risk-aware systems that deliver.',
  },
  about: {
    label: 'About Orion',
    title: 'Built for Saudi Markets',
    desc:  'Orion is a Saudi-based algorithmic trading and market intelligence firm. We design systems that operate at the intersection of data, speed, and discipline — enabling institutional participants to execute with precision on Tadawul and beyond.',
    pillars: [
      { title: 'Market Intelligence',   desc: 'Real-time data feeds, order-book depth, and Saudi market microstructure analytics — giving you the edge before the open.' },
      { title: 'Risk-Aware Execution',  desc: 'Pre-trade risk checks, position limits, and smart order routing — every order evaluated before it leaves the system.' },
      { title: 'Algorithmic Systems',   desc: 'TWAP, VWAP, and custom alpha strategies engineered to minimise market impact on Tadawul and the Saudi derivatives market.' },
    ],
    stats: [
      { num: '<1ms',  label: 'Execution Latency' },
      { num: '99.9%', label: 'System Uptime' },
      { num: '24/7',  label: 'Market Coverage' },
      { num: 'SAR',   label: 'Native Currency' },
    ],
  },
  services: {
    label: 'Services',
    title: 'What We Build',
    desc:  'Three focused capabilities — each designed to work independently or as a unified platform.',
    items: [
      {
        num:      '01',
        title:    'Market Data',
        desc:     'Low-latency feeds for equities, ETFs, and derivatives on Tadawul — normalised, time-stamped, and ready to consume in your models.',
        features: ['Level 2 order book', 'Tick-by-tick history', 'Corporate action adjustments', 'Index constituents'],
      },
      {
        num:      '02',
        title:    'Execution Algorithms',
        desc:     'Institutional-grade execution strategies designed to minimise slippage across Saudi equity and derivatives markets.',
        features: ['TWAP / VWAP', 'Implementation shortfall', 'Custom alpha overlays', 'Pre-trade risk controls'],
      },
      {
        num:      '03',
        title:    'AI Analytics',
        desc:     'Machine-learning pipelines that surface alpha signals, detect anomalies, and forecast Saudi market conditions in real time.',
        features: ['Predictive order flow', 'Sentiment from local news', 'Regime detection', 'Portfolio stress testing'],
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: "Let's Talk",
    desc:  "Whether you're a fund manager, family office, or fintech building on the Saudi market — reach out and let's explore what's possible.",
  },
  footer: {
    copy: '© 2026 Orion Technologies. All rights reserved.',
  },
};

const ar: typeof en = {
  nav: {
    about:    'عن أوريون',
    services: 'الخدمات',
    contact:  'تواصل',
    cta:      'تواصل معنا',
  },
  hero: {
    title:    'الدقة في كل صفقة',
    subtitle: 'تنفيذ خوارزمي وذكاء السوق لأسواق رأس المال السعودية — مبني على أنظمة واعية بالمخاطر تحقق النتائج.',
  },
  about: {
    label: 'عن أوريون',
    title: 'مصمم للأسواق السعودية',
    desc:  'أوريون شركة سعودية متخصصة في التداول الخوارزمي وذكاء الأسواق المالية. نصمم أنظمة تعمل عند تقاطع البيانات والسرعة والانضباط — لتمكين المؤسسات المالية من التنفيذ بدقة في تداول الأسهم السعودية وما يتجاوزه.',
    pillars: [
      { title: 'ذكاء السوق',           desc: 'تغذية بيانات فورية وعمق دفتر الأوامر وتحليلات الهيكل الدقيق لسوق الأسهم السعودية — تمنحك الأفضلية قبيل الافتتاح.' },
      { title: 'تنفيذ واعٍ بالمخاطر', desc: 'فحوصات المخاطر قبل التداول وحدود المراكز والتوجيه الذكي للأوامر — كل أمر يُقيَّم قبل إرساله إلى السوق.' },
      { title: 'الأنظمة الخوارزمية',  desc: 'استراتيجيات TWAP وVWAP وألفا مخصصة مصممة لتقليل تأثير السوق في تداول الأسهم السعودية وسوق المشتقات.' },
    ],
    stats: [
      { num: '<1ms',  label: 'زمن التنفيذ' },
      { num: '99.9%', label: 'استمرارية النظام' },
      { num: '24/7',  label: 'تغطية السوق' },
      { num: 'ريال',  label: 'العملة المحلية' },
    ],
  },
  services: {
    label: 'الخدمات',
    title: 'ما نبنيه',
    desc:  'ثلاث قدرات محددة — كل منها مصممة للعمل باستقلالية أو كمنصة موحدة.',
    items: [
      {
        num:      '01',
        title:    'بيانات السوق',
        desc:     'تغذيات بيانات منخفضة الكمون للأسهم وصناديق المؤشرات والمشتقات في تداول — موحدة ومرتبة زمنياً وجاهزة للاستهلاك في نماذجك.',
        features: ['دفتر الأوامر المستوى 2', 'تاريخ كل تداول', 'تعديلات الأحداث المؤسسية', 'مكونات المؤشرات'],
      },
      {
        num:      '02',
        title:    'خوارزميات التنفيذ',
        desc:     'استراتيجيات تنفيذ بمستوى مؤسسي مصممة لتقليل الانزلاق السعري في أسواق الأسهم والمشتقات السعودية.',
        features: ['TWAP / VWAP', 'قصور التنفيذ', 'طبقات ألفا مخصصة', 'ضوابط المخاطر قبل التداول'],
      },
      {
        num:      '03',
        title:    'تحليلات الذكاء الاصطناعي',
        desc:     'خطوط معالجة تعلم آلي تكشف إشارات الألفا وتكتشف الشذوذات وتتنبأ بظروف السوق السعودي في الوقت الفعلي.',
        features: ['التنبؤ بتدفق الأوامر', 'تحليل مشاعر الأخبار المحلية', 'اكتشاف الأنظمة', 'اختبار إجهاد المحفظة'],
      },
    ],
  },
  contact: {
    label: 'تواصل',
    title: 'لنتحدث',
    desc:  'سواء كنت مدير صندوق أو مكتب عائلي أو شركة تقنية مالية تبني على السوق السعودية — تواصل معنا واستكشف الإمكانيات.',
  },
  footer: {
    copy: '© 2026 أوريون تكنولوجيز. جميع الحقوق محفوظة.',
  },
};

export const translations = { en, ar };
