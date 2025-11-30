import React from 'react';
import { AppView } from '../types';
import { useAppContext } from '../App';
import { Home, Briefcase, BrainCircuit, MessageSquare } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { currentView, setCurrentView, t } = useAppContext();

  const navItems = [
    { view: AppView.HOME, icon: Home, label: t.nav.home },
    { view: AppView.CASES, icon: Briefcase, label: t.nav.cases },
    { view: AppView.QUIZ, icon: BrainCircuit, label: t.nav.quiz },
    { view: AppView.CONTACT, icon: MessageSquare, label: t.nav.contact },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 backdrop-blur-md pb-safe z-50 transition-colors duration-200">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setCurrentView(item.view)}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
                isActive 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};