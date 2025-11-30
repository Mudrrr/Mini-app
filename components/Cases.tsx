import React, { useState } from 'react';
import { getCases } from '../constants';
import { useAppContext } from '../App';
import { TrendingUp, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { CaseStudy } from '../types';

export const Cases: React.FC = () => {
  const { language, t } = useAppContext();
  const cases = getCases(language);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Detail View
  if (selectedCase) {
    return (
      <div className="p-0 animate-in slide-in-from-right duration-300 bg-slate-50 dark:bg-slate-900 min-h-screen pb-24 absolute top-0 left-0 w-full z-20">
        {/* Header Image */}
        <div className="relative h-64 w-full">
           <img 
              src={selectedCase.imageUrl} 
              alt={selectedCase.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <button 
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full text-white transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block shadow-sm">
                  {selectedCase.niche}
                </span>
                <h1 className="text-2xl font-bold text-white shadow-black/50 drop-shadow-md leading-tight">{selectedCase.title}</h1>
            </div>
        </div>

        <div className="p-6 space-y-8">
           {/* Metrics Grid */}
           <div className="space-y-3">
             <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{t.cases.results}</h3>
             <div className="grid grid-cols-2 gap-3">
                {selectedCase.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-xs mb-1 uppercase tracking-wider">{metric.label}</div>
                    <div className="flex items-center space-x-1">
                      <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{metric.value}</span>
                      {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-500" />}
                    </div>
                  </div>
                ))}
              </div>
           </div>

           {/* Full Story */}
           <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{t.cases.about}</h3>
              <div className="prose dark:prose-invert prose-indigo prose-sm max-w-none">
                {selectedCase.fullStory ? (
                  selectedCase.fullStory.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedCase.description}
                  </p>
                )}
              </div>
           </div>

           <button 
            onClick={() => setSelectedCase(null)}
            className="w-full py-4 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
           >
             {t.cases.back}
           </button>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="p-6 pb-24 space-y-6 animate-in fade-in zoom-in-95 duration-500">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.cases.title}</h2>
        <p className="text-slate-500 dark:text-slate-400">{t.cases.subtitle}</p>
      </div>

      <div className="grid gap-6">
        {cases.map((caseStudy) => (
          <div key={caseStudy.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-none group transition-colors duration-200">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={caseStudy.imageUrl} 
                alt={caseStudy.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block shadow-sm">
                  {caseStudy.niche}
                </span>
                <h3 className="text-xl font-bold text-white shadow-black/50 drop-shadow-md">{caseStudy.title}</h3>
              </div>
            </div>
            
            <div className="p-5 space-y-4">
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-2">
                {caseStudy.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50">
                    <div className="text-slate-500 dark:text-slate-400 text-xs mb-1 uppercase tracking-wider">{metric.label}</div>
                    <div className="flex items-center space-x-1">
                      <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{metric.value}</span>
                      {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-500" />}
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setSelectedCase(caseStudy)}
                className="w-full mt-2 py-3 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 rounded-xl text-sm font-bold hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors flex items-center justify-center space-x-2"
              >
                <span>{t.cases.viewStrategy}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};