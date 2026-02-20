import { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-brand-black z-40 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-white/10`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-2xl uppercase tracking-wider text-white/80 hover:text-brand-gold transition-colors duration-300 py-3 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center"
            >
              Book Now
            </a>
          </div>

          <div className="mt-auto pt-8 border-t border-white/10">
            <a
              href="tel:+18187433100"
              className="flex items-center gap-3 text-brand-gray hover:text-brand-gold transition-colors py-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (818) 743-3100
            </a>
            <a
              href="mailto:coachchrisjohnson1@gmail.com"
              className="flex items-center gap-3 text-brand-gray hover:text-brand-gold transition-colors py-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
