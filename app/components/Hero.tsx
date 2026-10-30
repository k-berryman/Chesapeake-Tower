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

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 pb-32 md:pb-16 text-center">

        {/* Tagline — desktop pushed down, mobile untouched */}
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-widest leading-none mb-8 mt-64 md:mt-[26rem]">
          ELEVATING COMMUNICATIONS.
          <span className="block">DELIVERING EXCELLENCE.</span>
        </h2>

        {/* Services List — mobile leading-loose kept, desktop tightened a lot */}
        <p className="font-display font-bold text-white text-base sm:text-lg md:text-2xl uppercase tracking-wider leading-loose md:leading-normal mb-10 text-center">
          <span className="block">PROFESSIONAL TOWER CONSTRUCTION</span>
          <span className="block">MAINTENANCE • INSPECTIONS</span>
          <span className="block">EMERGENCY RESPONSE</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-7">
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

      {/* Scroll Indicator — raised to clear the audio bar */}
      <a
        href="#services"
        className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hover:opacity-70 transition-opacity duration-200"
        aria-label="Scroll to Services section"
      >
        <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}