export enum AppView {
  HOME = 'HOME',
  CASES = 'CASES',
  QUIZ = 'QUIZ',
  CONTACT = 'CONTACT'
}

export type Language = 'en' | 'ru';
export type Theme = 'light' | 'dark';

export interface CaseStudy {
  id: string;
  title: string;
  niche: string;
  description: string;
  fullStory?: string;
  metrics: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
  imageUrl: string;
}

export type QuizQuestionType = 'select' | 'text' | 'select-with-text';

export interface QuizQuestion {
  id: number;
  type: QuizQuestionType;
  question: string;
  options?: string[]; // For 'select' and 'select-with-text'
  placeholder?: string; // For 'text' and 'select-with-text' input field
}

export interface QuizResult {
  answers: Record<number, string>;
  leadInfo?: {
    name: string;
    contact: string;
    method: 'telegram' | 'whatsapp' | 'phone';
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MarketerInfo {
  name: string;
  title: string;
  tagline: string;
  avatarUrl: string;
  telegramLink: string;
}

export interface Translation {
  nav: {
    home: string;
    cases: string;
    quiz: string;
    contact: string;
  };
  hero: {
    status: string;
    startAudit: string;
    expertise: string;
    workWithMe: string;
    auditTitle: string;
    auditDesc: string;
  };
  cases: {
    title: string;
    subtitle: string;
    viewStrategy: string;
    back: string;
    results: string;
    about: string;
  };
  quiz: {
    question: string;
    of: string;
    almostDone: string;
    enterDetails: string;
    namePlaceholder: string;
    contactPlaceholder: string;
    analyzing: string;
    getAudit: string; // Used as "Sign up" now
    next: string;
    orWrite: string;
    selectMethod: string;
    // Success Page
    successTitle: string;
    successDesc: string;
    myTelegram: string;
    subscribeChannel: string;
    viewCases: string;
  };
  contact: {
    title: string;
    subtitle: string;
    dmButton: string;
    or: string;
    nameLabel: string;
    telegramLabel: string; // New field
    detailsLabel: string;
    detailsPlaceholder: string;
    submitButton: string;
    sentTitle: string;
    sentDesc: string;
    sendAnother: string;
  };
}