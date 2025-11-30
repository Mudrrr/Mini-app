import { CaseStudy, QuizQuestion, Service, MarketerInfo, Translation, Language } from './types';

// Shared Info
export const MARKETER_INFO_EN: MarketerInfo = {
  name: "Andrey M.arketing",
  title: "Growth Marketing Expert",
  tagline: "I turn traffic into revenue through data-driven strategies.",
  avatarUrl: "https://picsum.photos/200/200", 
  telegramLink: "https://t.me/username"
};

export const MARKETER_INFO_RU: MarketerInfo = {
  name: "Андрей Маркетинг",
  title: "Эксперт по Growth-маркетингу",
  tagline: "Превращаю трафик в выручку с помощью стратегий на основе данных.",
  avatarUrl: "https://picsum.photos/200/200", 
  telegramLink: "https://t.me/username"
};

// Services
export const SERVICES_EN: Service[] = [
  { id: '1', title: 'Traffic Acquisition', description: 'Targeted ads on Telegram & Facebook to bring high-quality leads.', iconName: 'Target' },
  { id: '2', title: 'Funnel Building', description: 'Automated sales funnels that convert cold traffic into loyal clients.', iconName: 'Zap' },
  { id: '3', title: 'Analytics & Strategy', description: 'Deep dive into metrics to optimize ROI and CAC.', iconName: 'BarChart3' }
];

export const SERVICES_RU: Service[] = [
  { id: '1', title: 'Закупка трафика', description: 'Таргетированная реклама в Telegram и Facebook для привлечения качественных лидов.', iconName: 'Target' },
  { id: '2', title: 'Построение воронок', description: 'Автоматические воронки продаж, конвертирующие холодный трафик в клиентов.', iconName: 'Zap' },
  { id: '3', title: 'Аналитика и стратегия', description: 'Глубокий анализ метрик для оптимизации ROI и CAC.', iconName: 'BarChart3' }
];

// Cases
export const CASES_EN: CaseStudy[] = [
  {
    id: '1', 
    title: 'Phuket Real Estate', 
    niche: 'Real Estate',
    description: 'Acquired 234 targeted subscribers at ~$5. Targeted investors and expats via Telegram Ads.',
    fullStory: "The agency approached us with an existing Telegram channel (420 subscribers). The goal was to attract investors and property buyers in Phuket.\n\nStrategy: We utilized official Telegram Ads, targeting competitor channels and business/investment interest groups.\n\nResult: The channel grew to 750 subscribers. We acquired 234 direct subscribers from ads at ~$5 CPA. Over 100 people downloaded the lead magnet, entering the sales funnel.",
    metrics: [
      { label: 'Spend', value: '~$1,100', trend: 'up' }, 
      { label: 'Subs', value: '+234', trend: 'up' },
      { label: 'CPA', value: '$5.1', trend: 'down' },
      { label: 'Leads', value: '100+', trend: 'up' }
    ],
    imageUrl: "https://picsum.photos/600/300?random=10"
  },
  {
    id: '2', title: 'E-commerce Scaling', niche: 'Fashion',
    description: 'Scaled a local clothing brand to $50k/mo revenue using Telegram Ads.',
    metrics: [{ label: 'ROAS', value: '450%', trend: 'up' }, { label: 'Leads', value: '1,200+', trend: 'up' }],
    imageUrl: "https://picsum.photos/600/300?random=1"
  },
  {
    id: '3', title: 'EdTech Course Launch', niche: 'Education',
    description: 'Launch strategy for a Python programming course.',
    metrics: [{ label: 'Revenue', value: '$120k', trend: 'up' }, { label: 'CAC', value: '$15', trend: 'down' }],
    imageUrl: "https://picsum.photos/600/300?random=2"
  }
];

export const CASES_RU: CaseStudy[] = [
  {
    id: '1', 
    title: 'Недвижимость Пхукет', 
    niche: 'Недвижимость',
    description: 'Привлекли 234 целевых подписчика по 471₽. Охват инвесторов и экспатов.',
    fullStory: "Агентство недвижимости пришло с готовым Telegram-каналом (420 подписчиков). Цель: Привлечение инвесторов и покупателей недвижимости на Пхукете.\n\nСтратегия: Использование официальной рекламы Telegram Ads с таргетингом на каналы конкурентов, каналы про инвестиции и бизнес.\n\nРезультат: В канале уже 750 подписчиков. С рекламы получено 234 подписчика по цене 471,8 ₽ (с НДС). Более 100 человек скачали лид-магнит, попав в воронку прогрева.",
    metrics: [
      { label: 'Расход', value: '110к ₽', trend: 'up' }, 
      { label: 'Подписчики', value: '+234', trend: 'up' },
      { label: 'Цена ПДП', value: '471,8 ₽', trend: 'down' },
      { label: 'Лид-магнит', value: '100+', trend: 'up' }
    ],
    imageUrl: "https://picsum.photos/600/300?random=10"
  },
  {
    id: '2', title: 'Масштабирование E-com', niche: 'Fashion',
    description: 'Вывели локальный бренд одежды на $50k/мес выручки через Telegram Ads.',
    metrics: [{ label: 'ROAS', value: '450%', trend: 'up' }, { label: 'Лиды', value: '1,200+', trend: 'up' }],
    imageUrl: "https://picsum.photos/600/300?random=1"
  },
  {
    id: '3', title: 'Запуск EdTech курса', niche: 'Обучение',
    description: 'Стратегия запуска курса по программированию на Python.',
    metrics: [{ label: 'Выручка', value: '$120k', trend: 'up' }, { label: 'CAC', value: '$15', trend: 'down' }],
    imageUrl: "https://picsum.photos/600/300?random=2"
  }
];

// Quiz
export const QUIZ_QUESTIONS_EN: QuizQuestion[] = [
  { id: 1, question: "What is your current monthly advertising budget?", options: ["Under $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000+"] },
  { id: 2, question: "What is your main marketing challenge right now?", options: ["High Cost per Lead", "Low Conversion Rate", "Scaling Volume", "Tracking Attribution"] },
  { id: 3, question: "Do you currently have a CRM system in place?", options: ["Yes, fully set up", "Yes, but not used well", "No, we use spreadsheets", "No system"] },
  { id: 4, question: "How quickly are you looking to scale?", options: ["Immediately", "Next 1-2 months", "Just researching", "Steady growth is fine"] }
];

export const QUIZ_QUESTIONS_RU: QuizQuestion[] = [
  { id: 1, question: "Какой у вас текущий рекламный бюджет в месяц?", options: ["До $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000+"] },
  { id: 2, question: "Какая главная проблема в маркетинге сейчас?", options: ["Дорогой лид", "Низкая конверсия", "Сложно масштабировать", "Нет аналитики"] },
  { id: 3, question: "Используете ли вы CRM систему?", options: ["Да, настроена", "Да, но используем плохо", "Нет, таблицы Excel", "Нет системы"] },
  { id: 4, question: "Как быстро планируете масштабироваться?", options: ["Срочно", "В ближайшие 1-2 мес", "Только изучаю", "Плавный рост"] }
];

// Translations Dictionary
export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    nav: { home: 'Home', cases: 'Cases', quiz: 'Quiz', contact: 'Contact' },
    hero: {
      status: 'OPEN',
      startAudit: 'Start Audit',
      expertise: 'My Expertise',
      workWithMe: 'Work with me',
      auditTitle: 'Is your marketing optimized?',
      auditDesc: 'Take the 30-second audit to find hidden revenue opportunities.'
    },
    cases: {
      title: 'Success Stories',
      subtitle: 'Real results from recent campaigns.',
      viewStrategy: 'View Strategy',
      back: 'Back to Cases',
      results: 'Key Results',
      about: 'About the project'
    },
    quiz: {
      question: 'Question',
      of: 'of',
      almostDone: 'Almost Done!',
      enterDetails: 'Enter your details below to receive your personalized marketing audit based on your answers.',
      namePlaceholder: 'Your Name',
      contactPlaceholder: 'Telegram Username or Email',
      analyzing: 'Analyzing...',
      getAudit: 'Get My Audit'
    },
    contact: {
      title: "Let's Talk",
      subtitle: 'Ready to scale your business? Fill out the form or DM me directly.',
      dmButton: 'DM on Telegram',
      or: 'OR',
      nameLabel: 'Your Name',
      detailsLabel: 'Project Details',
      detailsPlaceholder: 'Tell me about your business and goals...',
      submitButton: 'Send Inquiry',
      sentTitle: 'Message Sent!',
      sentDesc: 'Thanks for reaching out. I usually reply within 24 hours on Telegram.',
      sendAnother: 'Send another message'
    }
  },
  ru: {
    nav: { home: 'Главная', cases: 'Кейсы', quiz: 'Квиз', contact: 'Контакты' },
    hero: {
      status: 'ОТКРЫТ',
      startAudit: 'Начать аудит',
      expertise: 'Моя экспертиза',
      workWithMe: 'Сотрудничество',
      auditTitle: 'Ваш маркетинг оптимизирован?',
      auditDesc: 'Пройдите аудит за 30 секунд и найдите точки роста выручки.'
    },
    cases: {
      title: 'Истории успеха',
      subtitle: 'Реальные результаты недавних кампаний.',
      viewStrategy: 'Смотреть стратегию',
      back: 'Назад',
      results: 'Результаты',
      about: 'О проекте'
    },
    quiz: {
      question: 'Вопрос',
      of: 'из',
      almostDone: 'Почти готово!',
      enterDetails: 'Введите данные, чтобы получить персональный аудит на основе ваших ответов.',
      namePlaceholder: 'Ваше Имя',
      contactPlaceholder: 'Telegram или Email',
      analyzing: 'Анализирую...',
      getAudit: 'Получить аудит'
    },
    contact: {
      title: "Давайте обсудим",
      subtitle: 'Готовы масштабировать бизнес? Заполните форму или пишите в ЛС.',
      dmButton: 'Написать в Telegram',
      or: 'ИЛИ',
      nameLabel: 'Ваше Имя',
      detailsLabel: 'О проекте',
      detailsPlaceholder: 'Расскажите о бизнесе и целях...',
      submitButton: 'Отправить заявку',
      sentTitle: 'Сообщение отправлено!',
      sentDesc: 'Спасибо! Я обычно отвечаю в течение 24 часов в Telegram.',
      sendAnother: 'Отправить еще одно'
    }
  }
};

// Data Getter Helpers
export const getMarketerInfo = (lang: Language) => lang === 'en' ? MARKETER_INFO_EN : MARKETER_INFO_RU;
export const getServices = (lang: Language) => lang === 'en' ? SERVICES_EN : SERVICES_RU;
export const getCases = (lang: Language) => lang === 'en' ? CASES_EN : CASES_RU;
export const getQuizQuestions = (lang: Language) => lang === 'en' ? QUIZ_QUESTIONS_EN : QUIZ_QUESTIONS_RU;