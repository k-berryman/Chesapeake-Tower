'use client';

import { useState } from 'react';

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xoeeprdj', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-black border-t border-white/10 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-red-500 font-display font-bold text-base md:text-lg uppercase tracking-widest mb-3">
          Get In Touch
        </p>

        <h2 className="font-display font-bold text-white text-3xl md:text-5xl uppercase tracking-widest mb-6">
          Request a Quote
        </h2>

        <p className="text-white/70 font-body text-base mb-2">
          Rope Access and Communication Solutions for The Bay and Beyond.
        </p>

        {/* Contact Buttons — more space above, less below */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-6">
          <a
            href="tel:+18035547891"
            className="inline-block cursor-pointer bg-red-600 hover:bg-red-700 text-white font-display font-bold text-lg md:text-xl uppercase tracking-widest py-3 px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
          >
            Call: 803-554-7891
          </a>
          <a
            href="mailto:dbeaumont@chesapeaketower.com"
            className="inline-block cursor-pointer bg-transparent border border-white hover:border-red-500 text-white font-display font-bold text-lg md:text-xl uppercase tracking-widest py-3 px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
          >
            Email Us
          </a>
        </div>

        {status === 'success' ? (
          <div className="max-w-md mx-auto border border-green-600 bg-neutral-950 rounded p-6 text-center">
            <p className="font-display font-bold text-green-500 text-lg uppercase tracking-widest mb-2">
              Message Sent!
            </p>
            <p className="text-white/70 font-body text-sm mb-4">
              Thanks for reaching out — we'll get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-display font-bold text-sm uppercase tracking-widest py-2 px-6 rounded transition-transform duration-200 hover:scale-105"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto text-left space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-white/70 font-body text-sm mb-1">Name</label>
              <input id="name" name="name" type="text" required disabled={status === 'sending'} className="w-full bg-neutral-900 border border-white/20 rounded px-3 py-2 text-white font-body focus:outline-none focus:border-red-500 disabled:opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/70 font-body text-sm mb-1">Email</label>
              <input id="email" name="email" type="email" required disabled={status === 'sending'} className="w-full bg-neutral-900 border border-white/20 rounded px-3 py-2 text-white font-body focus:outline-none focus:border-red-500 disabled:opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-white/70 font-body text-sm mb-1">Message</label>
              <textarea id="message" name="message" rows={4} required disabled={status === 'sending'} className="w-full bg-neutral-900 border border-white/20 rounded px-3 py-2 text-white font-body focus:outline-none focus:border-red-500 disabled:opacity-50"></textarea>
            </div>
            <input type="hidden" name="_subject" value="New contact form submission" />
            {status === 'error' && (
              <p className="text-red-500 font-body text-sm">
                Something went wrong — please try again or email us directly.
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-display font-bold text-lg uppercase tracking-widest py-3 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <img
            src="/images/favicon.svg"
            alt="Chesapeake Tower Solutions"
            className="w-24 h-24 mx-auto mb-4 object-contain"
          />
          <p className="text-white/70 font-body text-lg md:text-xl font-semibold mb-2">
            Chesapeake Tower Solutions
          </p>
          <p className="text-white/30 font-body text-xs mb-4">
            Rope Access and Communication Solutions for The Bay and Beyond.
          </p>
          {/* Phone pill — shifted up */}
          <div className="mt-8 flex justify-center">
            <a
              href="tel:+18035547891"
              className="inline-block bg-red-600 text-white font-body text-sm tracking-widest px-6 py-2 rounded-full border border-white/20"
            >
              803-554-7891
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}