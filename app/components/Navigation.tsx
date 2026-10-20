'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const links = ['Services', 'Safety', 'Projects', 'Careers', 'About'];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/5"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="px-4 md:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">

          {/* Logo — larger on mobile */}
          <a href="#" className="flex-shrink-0 cursor-pointer" aria-label="Chesapeake Tower Solutions - Home">
            <img
              src="/images/favicon.svg"
              alt="Chesapeake Tower Solutions"
              className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-10 xl:space-x-14">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer text-white/90 hover:text-white font-display font-bold text-lg xl:text-2xl tracking-widest uppercase transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#contact"
              className="cursor-pointer inline-block bg-red-600 hover:bg-red-700 text-white font-display font-bold text-sm sm:text-base md:text-lg xl:text-xl uppercase tracking-widest py-2 px-4 sm:px-5 md:px-6 xl:px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
            >
              Contact
            </a>

            {/* Hamburger — mobile/tablet only */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden cursor-pointer text-white p-1"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">
          <div className="flex flex-col px-6 py-2">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="cursor-pointer text-white/90 hover:text-white font-display font-bold text-xl uppercase tracking-widest py-3 border-b border-white/5 last:border-0"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}