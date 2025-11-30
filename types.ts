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
  fullStory?: string; // New field for detailed view
  metrics: {
    label: string;
    value: string;
    trend: 'up' | 'down';
  }[];
  imageUrl: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface QuizResult {
  answers: Record<number, string>;
  leadInfo?: {
    name: string;
    contact: string;
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
    getAudit: string;
  };
  contact: {
    title: string;
    subtitle: string;
    dmButton: string;
    or: string;
    nameLabel: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    submitButton: string;
    sentTitle: string;
    sentDesc: string;
    sendAnother: string;
  };
}