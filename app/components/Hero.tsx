'use client';

export default function Hero() {
  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-black"
      aria-label="Chesapeake Tower Solutions - Hero Section"
    >
      {/* Background — desktop (landscape) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
        role="presentation"
      />

      {/* Background — mobile (portrait) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/images/hero-bg-mobile.png')" }}
        role="presentation"
      />

      {/* Main Content — tagline nudged down, more breathing room between elements */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 pt-48 pb-24 md:pt-60 md:pb-72 text-center">

        {/* Tagline */}
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-widest leading-none mb-6">
          ELEVATING COMMUNICATIONS.
          <span className="block">DELIVERING EXCELLENCE.</span>
        </h2>

        {/* Services List */}
        <div className="mb-8 space-y-2">
          <p className="font-display font-bold text-white text-lg md:text-2xl uppercase tracking-wider">
            PROFESSIONAL TOWER CONSTRUCTION • MAINTENANCE
          </p>
          <p className="font-display font-bold text-white text-lg md:text-2xl uppercase tracking-wider">
            INSPECTIONS • EMERGENCY RESPONSE
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-7">
          <a
            href="#contact"
            className="inline-block cursor-pointer bg-red-600 hover:bg-red-700 text-white font-display font-bold text-lg md:text-2xl uppercase tracking-widest py-3 px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="inline-block cursor-pointer bg-transparent border border-white hover:border-red-500 text-white font-display font-bold text-lg md:text-2xl uppercase tracking-widest py-3 px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator — nudge down slightly */}
      <a
        href="#services"
        className="absolute bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hover:opacity-70 transition-opacity duration-200"
        aria-label="Scroll to Services section"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}