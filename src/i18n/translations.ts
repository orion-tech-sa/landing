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
    subtitle:  'Orion brings the algorithmic strategies, execution speed, and real-time market intelligence used by Saudi hedge funds to every individual investor.',
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

const ar: typeof en = {
  nav: {
    about:    'عن أوراين',
    services: 'المنصة',
    contact:  'تواصل',
    cta:      'احصل على وصول مبكر',
  },
  hero: {
    eyebrow:   'تداول خوارزمي · تداول · الأسواق السعودية',
    title:     'تداول كأفضل\n١٪.',
    subtitle:  'أوراين يتيح لكل مستثمر سعودي الوصول إلى الاستراتيجيات الخوارزمية وسرعة التنفيذ وذكاء السوق الفوري الذي احتكرته صناديق التحوط لعقود.',
    cta:       'احصل على وصول مبكر',
    secondary: 'استعرض المنصة',
  },
  about: {
    label: 'المشكلة',
    title: 'الميدان لم يكن\nمتكافئاً قط.',
    body:  'لعقود، تمتعت صناديق التحوط السعودية بميزة لا يستطيع المستثمر الأفراد الوصول إليها — خوادم مجاورة للسوق تنفذ بأقل من الميلي ثانية، تغذيات بيانات احترافية، وخوارزميات معدّلة على مدى سنوات. أما نصيبك فكان تطبيق وسيط وأسعار متأخرة 15 دقيقة. أوراين يغير ذلك.',
    before: [
      'إدخال الأوامر يدوياً',
      'تغذيات أسعار متأخرة',
      'لا استراتيجيات خوارزمية',
      'لا ضوابط للتنفيذ',
      'لا طبقة لإدارة المخاطر',
    ],
    after: [
      'تنفيذ خوارزمي',
      'بيانات دفتر الأوامر الفورية',
      'أكثر من 15 استراتيجية',
      'إدارة مخاطر مدمجة',
      'شفافية تامة في التنفيذ',
    ],
    steps: [
      { num: '01', title: 'الاتصال',  desc: 'اربط حساب وسيطك بأمان. يستغرق الإعداد أقل من خمس دقائق.' },
      { num: '02', title: 'الإعداد',  desc: 'اختر استراتيجيتك، حدد البارامترات، وضع حدود المخاطر الخاصة بك.' },
      { num: '03', title: 'التنفيذ', desc: 'يشغّل أوراين خوارزمياتك باستمرار في سوق تداول — دون أي تدخل يدوي.' },
    ],
    stats: [
      { num: '<1ms',  label: 'زمن التنفيذ'          },
      { num: '+15',   label: 'استراتيجية خوارزمية'  },
      { num: '99.9%', label: 'استمرارية النظام'     },
      { num: 'ريال',  label: 'العملة المحلية'        },
    ],
  },
  services: {
    label: 'المنصة',
    title: 'منصة واحدة.\nكل ميزة.',
    desc:  'ثلاث قدرات أساسية — مصممة خصيصاً لسوق تداول، تعمل باستقلالية أو كنظام موحد متكامل.',
    items: [
      {
        num:      '01',
        title:    'التنفيذ الخوارزمي',
        desc:     'توقف عن إدخال الأوامر يدوياً. أعدّ استراتيجيتك مرة واحدة ودع أوراين يتولى الباقي — الدخول والخروج وكل ما بينهما — بدقة مؤسسية.',
        features: ['TWAP و VWAP', 'قصور التنفيذ', 'طبقات ألفا مخصصة', 'فحوصات المخاطر قبل التداول', 'إدارة التنفيذ الجزئي'],
      },
      {
        num:      '02',
        title:    'ذكاء السوق الفوري',
        desc:     'انظر ما تراه مكاتب المؤسسات. عمق دفتر الأوامر الفوري وتحليلات الهيكل الدقيق وإشارات تدفق الأوامر — معايَرة خصيصاً لأسواق الأسهم السعودية.',
        features: ['دفتر الأوامر المستوى 2', 'بيانات التداول الفورية', 'إشارات اختلال تدفق الأوامر', 'تغذيات الأحداث المؤسسية'],
      },
      {
        num:      '03',
        title:    'إدارة المخاطر',
        desc:     'الانضباط الذي يحمي كل محفظة مؤسسية، يُطبَّق على محفظتك الآن تلقائياً — في كل مركز، وكل صفقة، وكل ثانية يكون فيها السوق مفتوحاً.',
        features: ['حدود المراكز وأوامر وقف الخسارة', 'ضوابط الحد الأقصى للخسارة', 'اختبار إجهاد المحفظة'],
      },
    ],
  },
  contact: {
    label: 'وصول مبكر',
    title: 'كن من\nالأوائل.',
    desc:  'أوراين يستقبل عدداً محدوداً من المستثمرين في 2026. إذا كنت جاداً في التداول في سوق تداول، نود سماع منك.',
    note:  'وصول مبكر · مقاعد محدودة',
  },
  footer: {
    copy: '© 2026 أوراين تكنولوجيز. جميع الحقوق محفوظة.',
  },
};

export const translations = { en, ar };
