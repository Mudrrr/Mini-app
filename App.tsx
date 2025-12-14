import React, { useState, createContext, useContext, useEffect } from 'react';
import { AppView, Language, Theme, Translation } from './types';
import { TRANSLATIONS } from './constants';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Cases } from './components/Cases';
import { Quiz } from './components/Quiz';
import { ContactForm } from './components/ContactForm';
import { Moon, Sun } from 'lucide-react';

// --- Context Setup ---
interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: Translation;
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  startParam: string | null; // Added traffic source tracking
}

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

// --- App Component ---
export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [language, setLanguage] = useState<Language>('ru');
  const [theme, setTheme] = useState<Theme>('dark');
  const [startParam, setStartParam] = useState<string | null>(null);

  // Handle Theme Side Effects
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Handle Telegram WebApp Initialization & Start Param Extraction
  useEffect(() => {
    // Check for Telegram WebApp environment
    const tg = (window as any).Telegram?.WebApp;
    
    if (tg) {
      tg.ready();
      // Try to get start_param from Telegram init data
      // Usage: t.me/botname/appname?startapp=campaign_123
      const param = tg.initDataUnsafe?.start_param;
      if (param) {
        setStartParam(param);
        console.log("Captured Telegram Start Param:", param);
      }
    }

    // Fallback: Check standard URL parameters (useful for web debugging or direct links)
    const urlParams = new URLSearchParams(window.location.search);
    // Telegram sometimes passes it as tgWebAppStartParam in the URL query
    const webParam = urlParams.get('tgWebAppStartParam') || urlParams.get('startapp');
    
    if (webParam && !startParam) {
      setStartParam(webParam);
      console.log("Captured Web URL Param:", webParam);
    }
  }, []);

  const t = TRANSLATIONS[language];

  const contextValue: AppContextType = {
    language, setLanguage,
    theme, setTheme,
    t,
    currentView, setCurrentView,
    startParam
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME: return <Hero />;
      case AppView.CASES: return <Cases />;
      case AppView.QUIZ: return <Quiz onViewCases={() => setCurrentView(AppView.CASES)} />;
      case AppView.CONTACT: return <ContactForm />;
      default: return <Hero />;
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen font-sans selection:bg-indigo-500/30 bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-md mx-auto min-h-screen relative shadow-2xl bg-white dark:bg-slate-900 border-x border-slate-200 dark:border-slate-800 transition-colors duration-200 flex flex-col">
          
          {/* Header with Toggles */}
          <header className="px-6 pt-6 pb-2 flex justify-between items-center z-10">
             <div className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-100">
                AM<span className="text-indigo-600 dark:text-indigo-400">.</span>
             </div>
             <div className="flex items-center space-x-3 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full border border-slate-200 dark:border-slate-700">
               {/* Language Toggle */}
               <button 
                 onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                 className="px-2 py-1 text-xs font-bold rounded-full transition-all text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400"
               >
                 {language === 'en' ? 'RU' : 'EN'}
               </button>
               
               <div className="w-px h-4 bg-slate-300 dark:bg-slate-600"></div>

               {/* Theme Toggle */}
               <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1 rounded-full text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm transition-all"
               >
                 {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
               </button>
             </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 pb-20">
            {renderView()}
          </main>

          {/* Navigation */}
          <Navigation />
          
        </div>
      </div>
    </AppContext.Provider>
  );
}