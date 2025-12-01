import React, { useState } from 'react';
import { getQuizQuestions } from '../constants';
import { useAppContext } from '../App';
import { ChevronRight, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { sendTelegramMessage } from '../utils';

interface QuizProps {
  onComplete: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const { language, t } = useAppContext();
  const questions = getQuizQuestions(language);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadFormVisible, setLeadFormVisible] = useState(false);
  
  // Initialize contact with '@' as requested
  const [leadData, setLeadData] = useState({ contact: '@' });

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
    
    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(prev => prev + 1), 250);
    } else {
      setTimeout(() => setLeadFormVisible(true), 250);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format answers for Telegram message
    let answersText = '';
    questions.forEach((q, index) => {
      answersText += `<b>Q${index + 1}:</b> ${q.question}\n<b>A:</b> ${answers[q.id]}\n\n`;
    });

    const message = `
🎯 <b>New Quiz Lead</b>

👤 <b>User:</b> ${leadData.contact}

<b>--- Quiz Answers ---</b>
${answersText}
    `.trim();

    await sendTelegramMessage(message);

    setIsSubmitting(false);
    onComplete(); // Navigate to Contact/Success view
  };

  if (leadFormVisible) {
    return (
      <div className="flex flex-col h-full p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
          <div className="bg-indigo-100 dark:bg-indigo-500/10 p-4 rounded-full">
            <CheckCircle2 className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.quiz.almostDone}</h2>
            <p className="text-slate-500 dark:text-slate-400">
              {t.quiz.enterDetails}
            </p>
          </div>

          <form onSubmit={handleLeadSubmit} className="w-full space-y-4">
            <div>
              <label className="block text-left text-xs font-bold text-slate-500 uppercase mb-1 ml-1">
                {language === 'en' ? 'Your Telegram' : 'Ваш Telegram'}
              </label>
              <input
                required
                type="text"
                placeholder="@username"
                value={leadData.contact}
                onChange={(e) => setLeadData({ contact: e.target.value })}
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/30 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  <span>{t.quiz.analyzing}</span>
                </>
              ) : (
                <>
                  <span>{t.quiz.getAudit}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-6">
      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">{t.quiz.question} {currentIndex + 1} {t.quiz.of} {questions.length}</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(option)}
              className="w-full text-left p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent hover:border-indigo-500/50 active:bg-indigo-100 dark:active:bg-indigo-500/10 active:border-indigo-500 transition-all group flex justify-between items-center shadow-sm dark:shadow-none"
            >
              <span className="text-slate-700 dark:text-slate-200 font-medium">{option}</span>
              <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};