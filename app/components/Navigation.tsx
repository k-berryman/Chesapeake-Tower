'use client';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/5"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="px-4 md:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          
          {/* Left: Favicon */}
          <button
            onClick={() => router.push('/')}
            className="flex-shrink-0 cursor-pointer"
            aria-label="Chesapeake Tower Solutions - Home"
          >
            <img 
              src="/images/favicon.svg" 
              alt="Chesapeake Tower Solutions"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </button>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center space-x-14">
        {['Services', 'Safety', 'Projects', 'Careers'].map((item) => (
            <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="cursor-pointer text-white/90 hover:text-white font-display font-bold text-2xl tracking-widest uppercase transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
            aria-label={`Go to ${item} section`}
            >
            {item}
            </a>
        ))}
        </div>

        {/* Right: Contact Button */}
        <a
        href="#contact"
        className="cursor-pointer inline-block bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xl uppercase tracking-widest py-3 px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
        aria-label="Contact Chesapeake Tower Solutions"
        >
        Contact
        </a>
        </div>
      </div>
    </nav>
  );
}