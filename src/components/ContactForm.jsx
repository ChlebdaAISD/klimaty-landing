import React, { useState } from 'react';
import MotionButton from './ui/MotionButton';

const WEBHOOK_URL =
  import.meta.env.VITE_KLIMATY_CONTACT_WEBHOOK ||
  'https://adrian264-20264.wykr.es/webhook/klimaty_kontakt';

const AUTH_HEADER_NAME = import.meta.env.VITE_N8N_NAME;
const AUTH_HEADER_VALUE = import.meta.env.VITE_N8N_VALUE;

// TEMP DEBUG — remove after confirming env vars reach bundle
if (typeof window !== 'undefined') {
  console.log('[contact-form env debug]', {
    hasName: Boolean(AUTH_HEADER_NAME),
    name: AUTH_HEADER_NAME,
    hasValue: Boolean(AUTH_HEADER_VALUE),
    valuePreview: AUTH_HEADER_VALUE ? `${AUTH_HEADER_VALUE.slice(0, 4)}...` : null,
  });
}

const initialState = { name: '', phone: '', message: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(AUTH_HEADER_NAME && AUTH_HEADER_VALUE
            ? { [AUTH_HEADER_NAME]: AUTH_HEADER_VALUE }
            : {}),
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          submittedAt: new Date().toISOString(),
          source: 'klimaty-landing',
        }),
      });

      if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);

      setStatus('success');
      setFormData(initialState);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Contact form submission failed', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full bg-[#18181b] border border-white/5 rounded-none p-8 md:p-12 relative overflow-hidden">
      {status === 'success' && (
        <div className="absolute inset-0 z-20 bg-[#18181b] flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-none flex items-center justify-center mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">Formularz wysłany.</h4>
          <p className="text-zinc-400">Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 text-white">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Imię i nazwisko</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
            className="bg-zinc-900 border border-white/10 rounded-none px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Numer telefonu</label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="123 456 789"
            className="bg-zinc-900 border border-white/10 rounded-none px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Wiadomość (opcjonalnie)</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="W czym możemy pomóc?"
            rows="3"
            className="bg-zinc-900 border border-white/10 rounded-none px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-400">
            Coś poszło nie tak. Zadzwoń:{' '}
            <a href="tel:883297379" className="text-accent hover:underline font-semibold">883 297 379</a>.
          </p>
        )}

        <div className="mt-4 flex">
          <MotionButton
            label={status === 'loading' ? 'Wysyłanie...' : 'Wyślij zapytanie'}
            variant="primary"
            context="dark"
            className="w-full justify-center"
          />
        </div>
      </form>
    </div>
  );
}
