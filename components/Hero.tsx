import React from 'react';
import { AppView, Service } from '../types';
import { getMarketerInfo, getServices } from '../constants';
import { useAppContext } from '../App';
import { Target, Zap, BarChart3, ChevronRight, Star } from 'lucide-react';

// Helper to render icons dynamically
const IconRenderer = ({ name, className }: { name: string, className: string }) => {
  const icons: Record<string, React.ElementType> = {
    Target, Zap, BarChart3
  };
  const Icon = icons[name] || Star;
  return <Icon className={className} />;
};

export const Hero: React.FC = () => {
  const { language, setCurrentView, t } = useAppContext();
  const info = getMarketerInfo(language);
  const services = getServices(language);

  return (
    <div className="p-6 pb-24 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img 
            src={info.avatarUrl} 
            alt={info.name} 
            className="w-20 h-20 rounded-full border-2 border-indigo-500 object-cover shadow-md"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white dark:border-slate-900 shadow-sm">
            {t.hero.status}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{info.name}</h1>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{info.title}</p>
        </div>
      </div>

      {/* Value Prop */}
      <div className="bg-slate-100 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm transition-colors duration-200">
        <p className="text-slate-700 dark:text-slate-200 text-lg font-medium leading-relaxed">
          "{info.tagline}"
        </p>
      </div>

      {/* Main CTA: Quiz */}
      <div className="relative overflow-hidden bg-indigo-600 rounded-2xl p-6 shadow-lg shadow-indigo-900/20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <h3 className="text-xl font-bold text-white mb-2 relative z-10">{t.hero.auditTitle}</h3>
        <p className="text-indigo-100 mb-6 text-sm relative z-10">{t.hero.auditDesc}</p>
        <button 
          onClick={() => setCurrentView(AppView.QUIZ)}
          className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold text-sm w-full flex items-center justify-center space-x-2 hover:bg-indigo-50 transition-colors relative z-10 shadow-sm"
        >
          <span>{t.hero.startAudit}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Services */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t.hero.expertise}</h2>
          <button onClick={() => setCurrentView(AppView.CONTACT)} className="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline">{t.hero.workWithMe}</button>
        </div>
        
        <div className="space-y-3">
          {services.map((service: Service) => (
            <div key={service.id} className="flex items-start space-x-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none">
              <div className="bg-slate-50 dark:bg-slate-900 p-2.5 rounded-lg text-indigo-600 dark:text-indigo-400">
                <IconRenderer name={service.iconName} className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{service.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};