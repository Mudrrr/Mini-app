import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from './constants';

export const sendTelegramMessage = async (text: string): Promise<boolean> => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE') {
    console.warn("Telegram configuration missing. Please update constants.ts");
    // Simulate success if config is missing (for demo purposes)
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API Error: ${response.statusText}`);
    }
    
    return true;
  } catch (error) {
    console.error("Failed to send Telegram message:", error);
    return false;
  }
};
