import { useState, type FormEvent } from 'react';
import { services } from '../data/services';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to JSON to avoid CSRF protection
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'same-origin',
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try calling us or sending an email directly.');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-8 rounded-2xl bg-brand-surface border border-brand-gold/20">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl uppercase tracking-wider text-white mb-3">
          Message Sent!
        </h3>
        <p className="text-white/60 mb-6">
          Thank you for reaching out. Coach Chris will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary btn-small"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-subheading uppercase tracking-wider text-white/80 mb-2">
          Full Name <span className="text-brand-orange">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-brand-surface border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
          placeholder="Your full name"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-subheading uppercase tracking-wider text-white/80 mb-2">
            Email <span className="text-brand-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-brand-surface border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-subheading uppercase tracking-wider text-white/80 mb-2">
            Phone <span className="text-brand-orange">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 bg-brand-surface border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="service" className="block text-sm font-subheading uppercase tracking-wider text-white/80 mb-2">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 bg-brand-surface border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors appearance-none"
          defaultValue=""
        >
          <option value="" disabled>Select a program...</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
          <option value="Not sure yet">Not sure yet — I'd like to discuss</option>
        </select>
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="preferred-time" className="block text-sm font-subheading uppercase tracking-wider text-white/80 mb-2">
          Preferred Time
        </label>
        <select
          id="preferred-time"
          name="preferred_time"
          className="w-full px-4 py-3 bg-brand-surface border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors appearance-none"
          defaultValue=""
        >
          <option value="" disabled>Select preferred time...</option>
          <option value="Morning (8am-12pm)">Morning (8am–12pm)</option>
          <option value="Afternoon (12pm-5pm)">Afternoon (12pm–5pm)</option>
          <option value="Evening (5pm-9pm)">Evening (5pm–9pm)</option>
          <option value="Flexible">Flexible</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-subheading uppercase tracking-wider text-white/80 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 bg-brand-surface border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
          placeholder="Tell us about your goals, experience level, and any questions you have..."
        />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Request
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
