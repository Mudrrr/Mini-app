import React, { useState, useRef, useEffect } from 'react';
import { getQuizQuestions } from '../constants';
import { useAppContext } from '../App';
import { ChevronRight, CheckCircle2, Loader2, ArrowRight, MessageCircle, Phone, Send, ArrowLeft, ExternalLink, Briefcase } from 'lucide-react';
import { sendTelegramMessage } from '../utils';

interface QuizProps {
  onViewCases: () => void;
}

type ContactMethod = 'telegram' | 'whatsapp' | 'phone';

export const Quiz: React.FC<QuizProps> = ({ onViewCases }) => {
  const { language, t, startParam, username } = useAppContext();
  const questions = getQuizQuestions(language);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [inputText, setInputText] = useState(''); // Temp state for text inputs
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadFormVisible, setLeadFormVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Lead Data State
  const [contactMethod, setContactMethod] = useState<ContactMethod>('telegram');
  const [contactValue, setContactValue] = useState('');

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-fill username if available when form opens and method is telegram
  useEffect(() => {
    if (leadFormVisible && contactMethod === 'telegram' && username && !contactValue) {
      setContactValue(`@${username}`);
    }
  }, [leadFormVisible, contactMethod, username]);

  // --- Handlers ---

  const handleNext = () => {
    // Save input text if applicable
    if (inputText.trim()) {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: inputText.trim() }));
      setInputText('');
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setLeadFormVisible(true);
    }
  };

  const handleBack = () => {
    if (isSuccess) return; // Cannot go back from success screen

    if (leadFormVisible) {
      setLeadFormVisible(false);
      return;
    }

    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      
      // Optional: Restore text if needed, currently we just clear to prevent carry-over
      setInputText(''); 
    }
  };

  const handleOptionSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }));
    setInputText(''); // Clear manual text if option selected
    
    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(prev => prev + 1), 200);
    } else {
      setTimeout(() => setLeadFormVisible(true), 200);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format answers for Telegram message
    let answersText = '';
    questions.forEach((q, index) => {
      const answer = answers[q.id] || "Skipped";
      answersText += `<b>Q${index + 1} (${q.type}):</b> ${q.question}\n<b>A:</b> ${answer}\n\n`;
    });

    const sourceInfo = startParam ? startParam : 'N/A (Direct)';
    const methodIcon = contactMethod === 'telegram' ? '✈️' : contactMethod === 'whatsapp' ? '🟢' : '📞';

    const message = `
🎯 <b>New Quiz Consultation Request</b>

${methodIcon} <b>Contact:</b> ${contactValue} (${contactMethod})
📢 <b>Source:</b> <code>${sourceInfo}</code>

<b>--- Quiz Answers ---</b>
${answersText}
    `.trim();

    await sendTelegramMessage(message);

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // --- Render Functions ---

  const renderQuestionContent = () => {
    switch (currentQuestion.type) {
      case 'select':
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option, idx) => (
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
        );

      case 'text':
        return (
          <div className="space-y-4">
            <textarea
              ref={textAreaRef}
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
             <button
              onClick={handleNext}
              disabled={!inputText.trim()}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:dark:bg-slate-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/30 disabled:shadow-none"
            >
              <span>{t.quiz.next}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        );

      case 'select-with-text':
        return (
          <div className="space-y-6">
            <div className="space-y-3">
              {currentQuestion.options?.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent hover:border-indigo-500/50 active:bg-indigo-100 active:border-indigo-500 transition-all flex justify-between items-center"
                >
                  <span className="text-slate-700 dark:text-slate-200 font-medium text-sm">{option}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>
            
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="bg-white dark:bg-slate-900 px-2 text-slate-500 uppercase font-bold">{t.quiz.orWrite}</span>
                </div>
            </div>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="flex-1 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                    onClick={handleNext}
                    disabled={!inputText.trim()}
                    className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:dark:bg-slate-700 text-white p-3 rounded-xl transition-colors"
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  // --- Success / Thank You View ---

  if (isSuccess) {
    return (
      <div className="flex flex-col h-full p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 justify-center items-center text-center pb-24">
        <div className="w-24 h-24 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.quiz.successTitle}</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">
          {t.quiz.successDesc}
        </p>
        <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-8">
          {t.quiz.myTelegram}
        </p>

        <div className="w-full space-y-3">
          <a
            href="https://t.me/+h_TlMMS6OgUyZDQy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#229ED9] hover:bg-[#1e8dbf] text-white p-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-500/30"
          >
            <span>{t.quiz.subscribeChannel}</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          <button
            onClick={onViewCases}
            className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white p-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all border border-slate-200 dark:border-slate-700"
          >
             <span>{t.quiz.viewCases}</span>
             <Briefcase className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // --- Final Form View ---

  if (leadFormVisible) {
    return (
      <div className="flex flex-col h-full p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24 relative">
        {/* Back Button for Form */}
        <button 
          onClick={handleBack}
          className="absolute top-6 left-6 p-2 -ml-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 mt-8">
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.quiz.almostDone}</h2>
            <p className="text-slate-500 dark:text-slate-400">
              {t.quiz.enterDetails}
            </p>
          </div>

          <form onSubmit={handleLeadSubmit} className="w-full space-y-6">
            
            {/* Contact Method Selector */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setContactMethod('telegram')}
                className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center space-y-1 transition-all ${
                  contactMethod === 'telegram' 
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300' 
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400'
                }`}
              >
                <Send className="w-6 h-6" />
                <span className="text-[10px] font-bold">Telegram</span>
              </button>

              <button
                type="button"
                onClick={() => setContactMethod('whatsapp')}
                className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center space-y-1 transition-all ${
                  contactMethod === 'whatsapp' 
                    ? 'border-green-600 bg-green-50 dark:bg-green-500/20 text-green-700 dark:text-green-300' 
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400'
                }`}
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-[10px] font-bold">WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setContactMethod('phone')}
                className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center space-y-1 transition-all ${
                  contactMethod === 'phone' 
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300' 
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400'
                }`}
              >
                <Phone className="w-6 h-6" />
                <span className="text-[10px] font-bold">{language === 'en' ? 'Phone' : 'Звонок'}</span>
              </button>
            </div>

            {/* Input Field */}
            <div className="space-y-1 text-left">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">
                 {contactMethod === 'telegram' ? '@username' : contactMethod === 'whatsapp' ? 'WhatsApp Number' : 'Phone Number'}
              </label>
              <input
                required
                type={contactMethod === 'telegram' ? 'text' : 'tel'}
                placeholder={contactMethod === 'telegram' ? '@username' : '+7 999 000 00 00'}
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
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

  // --- Active Question View ---

  return (
    <div className="flex flex-col h-full p-6 pb-24">
      {/* Header logic for back button */}
      <div className="flex items-center mb-6 h-8 relative">
        {currentIndex > 0 && (
          <button 
            onClick={handleBack}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 -ml-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">{t.quiz.question} {currentIndex + 1} {t.quiz.of} {questions.length}</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          {currentQuestion.question}
        </h2>

        {renderQuestionContent()}
      </div>
    </div>
  );
};