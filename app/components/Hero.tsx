'use client';

export default function Hero() {
  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-black"
      aria-label="Chesapeake Tower Solutions - Hero Section"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.svg')",
        }}
        role="presentation"
      />

      {/* Main Content - Lower positioned */}
      <div className="relative z-20 flex flex-col items-center justify-end h-full px-6 pb-34 text-center">
        
        {/* Tagline */}
        <h2 className="font-display font-bold text-white text-2xl md:text-4xl lg:text-5xl tracking-widest leading-none mb-4">
        ELEVATING COMMUNICATIONS.
        <span className="block">DELIVERING EXCELLENCE.</span>
        </h2>

        {/* Services List - Two rows */}
        <div className="mb-6 space-y-1">
        <p className="font-display font-bold text-white text-lg md:text-2xl uppercase tracking-wider">
            PROFESSIONAL TOWER CONSTRUCTION • MAINTENANCE
        </p>
        <p className="font-display font-bold text-white text-lg md:text-2xl uppercase tracking-wider">
            INSPECTIONS • EMERGENCY RESPONSE
        </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
            <a
            href="#contact"
            className="inline-block cursor-pointer bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xl md:text-2xl uppercase tracking-widest py-3 px-8 rounded transition-all duration-200 hover:scale-105 origin-center will-change-transform"
            >
            Request a Quote
            </a>
            <a
            href="#services"
            className="inline-block cursor-pointer bg-transparent border border-white hover:border-red-500 text-white font-display font-bold text-xl md:text-2xl uppercase tracking-widest py-3 px-8 rounded transition-all duration-200 hover:scale-105 origin-center will-change-transform"
            >
            Our Services
            </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}