import React, { useState, useEffect } from 'react';
import { Send, Check, MessageCircle, Loader2 } from 'lucide-react';
import { getMarketerInfo } from '../constants';
import { useAppContext } from '../App';
import { sendTelegramMessage } from '../utils';

export const ContactForm: React.FC = () => {
  const { language, t, startParam, username } = useAppContext();
  const info = getMarketerInfo(language);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', telegram: '', details: '' });

  // Auto-fill Telegram username
  useEffect(() => {
    if (username && !formData.telegram) {
      setFormData(prev => ({ ...prev, telegram: `@${username}` }));
    }
  }, [username]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const sourceInfo = startParam ? startParam : 'N/A (Direct)';

    const message = `
📩 <b>New Contact Request</b>

👤 <b>Name:</b> ${formData.name}
✈️ <b>Telegram:</b> ${formData.telegram}
📢 <b>Source:</b> <code>${sourceInfo}</code>
📝 <b>Details:</b> ${formData.details}
    `.trim();

    await sendTelegramMessage(message);
    
    setLoading(false);
    setSent(true);
    setFormData({ name: '', telegram: username ? `@${username}` : '', details: '' });
  };

  if (sent) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-in zoom-in-95">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-green-600 dark:text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.contact.sentTitle}</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          {t.contact.sentDesc}
        </p>
        <button 
          onClick={() => setSent(false)}
          className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-500 dark:hover:text-indigo-300"
        >
          {t.contact.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.contact.title}</h2>
      <p className="text-slate-500 dark:text-slate-400 mb-8">
        {t.contact.subtitle}
      </p>

      <a 
        href={info.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-[#229ED9] hover:bg-[#1e8dbf] text-white p-4 rounded-xl font-bold flex items-center justify-center space-x-3 transition-colors mb-8 shadow-lg shadow-blue-500/30"
      >
        <MessageCircle className="w-6 h-6" />
        <span>{t.contact.dmButton}</span>
      </a>

      <div className="flex items-center space-x-4 mb-8">
        <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
        <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">{t.contact.or}</span>
        <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">{t.contact.nameLabel}</label>
          <input 
            required 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors" 
            placeholder={language === 'en' ? "John Doe" : "Иван Петров"}
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">{t.contact.telegramLabel}</label>
          <input 
            required 
            type="text" 
            value={formData.telegram}
            onChange={(e) => setFormData({...formData, telegram: e.target.value})}
            className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors" 
            placeholder="@username"
          />
        </div>
        
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-500 uppercase">{t.contact.detailsLabel}</label>
          <textarea 
            required
            rows={4}
            value={formData.details}
            onChange={(e) => setFormData({...formData, details: e.target.value})}
            className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-colors" 
            placeholder={t.contact.detailsPlaceholder}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all mt-4 shadow-lg shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
             <Loader2 className="animate-spin w-5 h-5" />
          ) : (
            <>
              <span>{t.contact.submitButton}</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};