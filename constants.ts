import { CaseStudy, QuizQuestion, Service, MarketerInfo, Translation, Language } from './types';

// --- TELEGRAM CONFIGURATION ---
// 1. Create a bot via @BotFather and paste the token below.
// 2. Get your numeric Chat ID via @userinfobot and paste it below.
export const TELEGRAM_BOT_TOKEN = "8519438678:AAGGK-pFDV7cqSO-yNUxWzI-jDhndVEceEY"; 
export const TELEGRAM_CHAT_ID = "35608067";
// ------------------------------

// Shared Info
export const MARKETER_INFO_EN: MarketerInfo = {
  name: "Andrey M.arketing",
  title: "Growth Marketing Expert",
  tagline: "I turn traffic into revenue through data-driven strategies.",
  avatarUrl: "https://i.ibb.co/M5k3pXfm/Ya.png", 
  telegramLink: "https://t.me/mudrrr"
};

export const MARKETER_INFO_RU: MarketerInfo = {
  name: "Андрей Маркетинг",
  title: "Эксперт по Growth-маркетингу",
  tagline: "Превращаю трафик в выручку с помощью стратегий на основе данных.",
  avatarUrl: "https://i.ibb.co/M5k3pXfm/Ya.png", 
  telegramLink: "https://t.me/mudrrr"
};

// Services
export const SERVICES_EN: Service[] = [
  { 
    id: '1', 
    title: 'Yandex Direct', 
    description: 'Managed 50M+ RUB ad budget. $2M+ real estate sales in Phuket. Legal entity, contract work. 7 years working with long-term clients.', 
    iconName: 'Target' 
  },
  { 
    id: '2', 
    title: 'Quizzes', 
    description: 'Marquiz.ru expert. 150+ quizzes (Tatneft, FitStars, Like Center). Recent case: 955 job applications at 415₽. Cost per hire 7500₽.', 
    iconName: 'Zap' 
  },
  {
    id: '3',
    title: 'Telegram Mini-App',
    description: 'Custom Mini-Apps for Telegram Ads and channel pinned messages to boost engagement and retention.',
    iconName: 'Smartphone'
  }
];

export const SERVICES_RU: Service[] = [
  { 
    id: '1', 
    title: 'Яндекс Директ', 
    description: 'Открутил 50+ млн ₽ рекламного бюджета. $2М+ продаж недвижимости на Пхукете. ИП, работа по договору. 7 лет работы с постоянными клиентами.', 
    iconName: 'Target' 
  },
  { 
    id: '2', 
    title: 'Квизы', 
    description: 'Эксперт Marquiz. 150+ квизов. Клиенты: Татнефть, FitStars, Лайк Центр. Последний кейс: 955 откликов на вахту по 415₽. Выход на вахту 7500₽.', 
    iconName: 'Zap' 
  },
  {
    id: '3',
    title: 'Telegram Mini-App',
    description: 'Mini-app приложения для Telegram для рекламы в TG-Ads и закрепа в канале.',
    iconName: 'Smartphone'
  }
];

// Cases
export const CASES_EN: CaseStudy[] = [
  {
    id: '5',
    title: 'Phuket Real Estate',
    niche: 'Real Estate / Lead Gen',
    description: '309 leads. $2M in sales. Replaced ineffective site with Quiz + Auto-funnel.',
    fullStory: "The agency sells property in Phuket. Instead of an ineffective website, we launched a quiz with a warming auto-funnel to drive leads to viewings.\n\nTraffic was driven from context ads to relevant quizzes. The quiz had 4 questions: purchase goal, budget, area, and bonus choice (flight, yacht, or cashback), followed by a messenger form.\n\nLeads from the quiz went to amoCRM, triggering a WhatsApp bot: the bot immediately sent a PDF selection and offered a viewing 10 minutes later.\n\nResult: 309 conversions from Yandex Direct at ~4,265 RUB and $2M in property sales. The Quiz + Funnel combo was key.",
    metrics: [
      { label: 'Leads', value: '309', trend: 'up' },
      { label: 'Sales', value: '$2M', trend: 'up' },
      { label: 'CPL', value: '4265 ₽', trend: 'down' },
      { label: 'CR', value: '1.4%', trend: 'up' }
    ],
    imageUrl: "https://i.ibb.co/SXHnQNFj/image.jpg"
  },
  {
    id: '4',
    title: 'Staffing: Shift Work',
    niche: 'HR / Recruitment',
    description: '955 applications at 415 ₽. Reduced lead cost 3.3x via segmentation.',
    fullStory: "Niche: Outstaffing. Landing pages: Quizzes.\n\nHow did we lower the lead cost by 3.3 times?\n\nWe stopped driving all traffic to a single quiz and segmented the audience instead. This allowed us to get leads 3.3 times cheaper with the same ad campaign settings.\n\nBefore: 1,339 ₽ per lead\nAfter: 415 ₽ per lead\n\nCost per hire: 7,500 RUB.",
    metrics: [
      { label: 'Apps', value: '955', trend: 'up' },
      { label: 'CPL', value: '415 ₽', trend: 'down' },
      { label: 'Cost/Hire', value: '7500 ₽', trend: 'down' },
      { label: 'Old CPL', value: '1339 ₽', trend: 'down' }
    ],
    imageUrl: "https://i.ibb.co/wNpqSN1V/HR.jpg"
  },
  {
    id: '1', 
    title: 'Phuket TG Channel Ads', 
    niche: 'Real Estate',
    description: 'Acquired 234 targeted subscribers at ~$5. Targeted investors and expats via Telegram Ads.',
    fullStory: "The agency approached us with an existing Telegram channel (420 subscribers). The goal was to attract investors and property buyers in Phuket.\n\nStrategy: We utilized official Telegram Ads, targeting competitor channels and business/investment interest groups.\n\nResult: The channel grew to 750 subscribers. We acquired 234 direct subscribers from ads at ~$5 CPA. Over 100 people downloaded the lead magnet, entering the sales funnel.",
    metrics: [
      { label: 'Spend', value: '~$1,100', trend: 'up' }, 
      { label: 'Subs', value: '+234', trend: 'up' },
      { label: 'CPA', value: '$5.1', trend: 'down' },
      { label: 'Leads', value: '100+', trend: 'up' }
    ],
    imageUrl: "https://i.ibb.co/67Hy2SZf/image.jpg"
  }
];

export const CASES_RU: CaseStudy[] = [
  {
    id: '5',
    title: 'Недвижимость Пхукет',
    niche: 'Недвижимость / Лидогенерация',
    description: '309 заявок. Продаж на $2 млн.',
    fullStory: "Агентство продаёт недвижимость на Пхукете и вместо неэффективного сайта запустило квиз с автоворонкой догрева, чтобы вести лидов на просмотры объектов.\n\nТрафик вели с контекстной рекламы на несколько релевантных квизов. В квизе 4 вопроса: цель покупки, бюджет, район и выбор бонуса (перелёт с трансфером, яхта или кешбэк), затем форма с мессенджером.\n\nЛид с квиза попадал в amoCRM, где триггер запускал бота в WhatsApp: бот сразу отправлял PDF‑подборку и через 10 минут предлагал записаться на просмотр.\n\nЗа сезон получено 309 конверсий из Яндекс Директ по ~4 265 ₽ и продано объектов на 2 млн долларов. Именно связка квиз + автоворонка догрева дала просмотры и продажи в дорогой нише недвижимости.",
    metrics: [
      { label: 'Заявки', value: '309', trend: 'up' },
      { label: 'Продажи', value: '$2M', trend: 'up' },
      { label: 'Цена заявки', value: '4265 ₽', trend: 'down' },
      { label: 'Конверсия', value: '1,4%', trend: 'up' }
    ],
    imageUrl: "https://i.ibb.co/SXHnQNFj/image.jpg"
  },
  {
    id: '4',
    title: 'Аутстаффинг: Вахта',
    niche: 'HR / Найм',
    description: '955 откликов по 415 ₽. Снизили стоимость лида в 3,3 раза через сегментацию.',
    fullStory: "Ниша: аутстаффинг. Посадочные страницы: квизы.\n\nКак мы снизили стоимость лида в 3,3 раза?\n\nПерестали загонять всех в один квиз и сегментировали аудиторию. Так мы получили лид в 3,3 раза дешевле при тех же настройках в рекламной кампании.\n\nБыло: 1 339 ₽ за заявку\nСтало: 415 ₽ за заявку\n\nВыход на вахту: 7500 рублей.",
    metrics: [
      { label: 'Отклики', value: '955', trend: 'up' },
      { label: 'Цена лида', value: '415 ₽', trend: 'down' },
      { label: 'Выход', value: '7500 ₽', trend: 'down' }, 
      { label: 'Было', value: '1339 ₽', trend: 'down' }
    ],
    imageUrl: "https://i.ibb.co/wNpqSN1V/HR.jpg"
  },
  {
    id: '1', 
    title: 'Реклама TG канала Пхукет', 
    niche: 'Недвижимость',
    description: 'Привлекли 234 целевых подписчика по 471₽. Охват инвесторов и экспатов.',
    fullStory: "Агентство недвижимости пришло с готовым Telegram-каналом (420 подписчиков). Цель: Привлечение инвесторов и покупателей недвижимости на Пхукете.\n\nСтратегия: Использование официальной рекламы Telegram Ads с таргетингом на каналы конкурентов, каналы про инвестиции и бизнес.\n\nРезультат: В канале уже 750 подписчиков. С рекламы получено 234 подписчика по цене 471,8 ₽ (с НДС). Более 100 человек скачали лид-магнит, попав в воронку прогрева.",
    metrics: [
      { label: 'Расход', value: '110к ₽', trend: 'up' }, 
      { label: 'Подписчики', value: '+234', trend: 'up' },
      { label: 'Цена ПДП', value: '471,8 ₽', trend: 'down' },
      { label: 'Лид-магнит', value: '100+', trend: 'up' }
    ],
    imageUrl: "https://i.ibb.co/67Hy2SZf/image.jpg"
  }
];

// Quiz Questions
export const QUIZ_QUESTIONS_EN: QuizQuestion[] = [
  { 
    id: 1, 
    type: 'select',
    question: "What niche do you work in?", 
    options: ["Real Estate", "E-commerce", "Construction & Repair", "Auto & Transport", "Food & Drinks", "Health & Beauty", "Education", "Marketing", "Services", "B2B"] 
  },
  { 
    id: 2, 
    type: 'text',
    question: "What does your business do?", 
    placeholder: "e.g. Selling luxury villas in Bali..." 
  },
  { 
    id: 3, 
    type: 'select-with-text',
    question: "What is your main marketing challenge?", 
    options: ["High Cost per Lead", "Low Conversion Rate", "Scaling Volume", "Tracking Attribution"],
    placeholder: "Or describe your challenge..."
  },
  { 
    id: 4, 
    type: 'select',
    question: "Do you currently have a CRM system in place?", 
    options: ["Yes, fully set up", "Yes, but not used well", "No, we use spreadsheets", "No system"] 
  }
];

export const QUIZ_QUESTIONS_RU: QuizQuestion[] = [
  { 
    id: 1, 
    type: 'select',
    question: "В какой нише вы работаете?", 
    options: ["Недвижимость", "Онлайн-торговля", "Строительство и ремонт", "Авто и транспорт", "Еда и напитки", "Здоровье и красота", "Образование и обучение", "Маркетинг", "Услуги", "B2B"] 
  },
  { 
    id: 2, 
    type: 'text',
    question: "Чем занимается ваш бизнес?", 
    placeholder: "Например: Продажа новостроек на Пхукете..." 
  },
  { 
    id: 3, 
    type: 'select-with-text',
    question: "Какая главная проблема в маркетинге сейчас?", 
    options: ["Дорогой лид", "Низкая конверсия", "Сложно масштабировать", "Нет аналитики"],
    placeholder: "Или напишите свой вариант..."
  },
  { 
    id: 4, 
    type: 'select',
    question: "Используете ли вы CRM систему?", 
    options: ["Да, настроена", "Да, но используем плохо", "Нет, таблицы Excel", "Нет системы"] 
  }
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
      enterDetails: 'Choose how to contact you:',
      namePlaceholder: 'Your Name',
      contactPlaceholder: '@username or phone',
      analyzing: 'Sending...',
      getAudit: 'Sign up for consultation',
      next: 'Next',
      orWrite: 'OR Write your own:',
      selectMethod: 'Preferred contact method',
      successTitle: 'Thank You!',
      successDesc: 'I will contact you within a few hours during business hours.',
      myTelegram: 'My Telegram → @mudrrr',
      subscribeChannel: 'Subscribe to channel',
      viewCases: 'View Cases'
    },
    contact: {
      title: "Let's Talk",
      subtitle: 'Ready to scale your business? Fill out the form or DM me directly.',
      dmButton: 'DM on Telegram',
      or: 'OR',
      nameLabel: 'Your Name',
      telegramLabel: 'Your Telegram',
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
      startAudit: 'Пройти опрос',
      expertise: 'Моя экспертиза',
      workWithMe: 'Сотрудничество',
      auditTitle: 'Ваш маркетинг оптимизирован?',
      auditDesc: 'Пройдите опрос за 30 сек, расскажите какая сейчас потребность и я помогу.'
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
      enterDetails: 'Выберите, куда вам написать:',
      namePlaceholder: 'Ваше Имя',
      contactPlaceholder: 'Ваш контакт',
      analyzing: 'Отправка...',
      getAudit: 'Записаться на консультацию',
      next: 'Далее',
      orWrite: 'ИЛИ напишите свой вариант:',
      selectMethod: 'Удобный способ связи',
      successTitle: 'Спасибо!',
      successDesc: 'Я свяжусь с вами в течение нескольких часов в рабочее время.',
      myTelegram: 'Мой Telegram → @mudrrr',
      subscribeChannel: 'Подписаться на канал',
      viewCases: 'Смотреть кейсы'
    },
    contact: {
      title: "Давайте обсудим",
      subtitle: 'Готовы масштабировать бизнес? Заполните форму или пишите в ЛС.',
      dmButton: 'Написать в Telegram',
      or: 'ИЛИ',
      nameLabel: 'Ваше Имя',
      telegramLabel: 'Ваш Telegram',
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