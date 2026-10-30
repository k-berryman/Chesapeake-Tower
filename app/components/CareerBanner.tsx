'use client';

export default function CareerBanner() {
  return (
    <section id="careers" className="bg-cover bg-center relative py-24 px-6"
      style={{ backgroundImage: "url('/images/careers-bg.jpg')" }}
      aria-label="Careers"
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-red-500 font-display font-bold text-base uppercase tracking-widest mb-2">
          Join Our Team
        </p>
        <h2 className="font-display font-bold text-white text-3xl md:text-5xl uppercase tracking-widest mb-6">
          Now Hiring
        </h2>

        <div className="border border-white/10 bg-neutral-950/80 rounded p-8 text-left max-w-xl mx-auto mb-8">
          <h3 className="font-display font-bold text-white text-xl uppercase tracking-widest mb-3">
            Maintenance Technician
          </h3>
          <p className="text-white/70 font-body leading-relaxed mb-6">
            We&apos;re hiring a maintenance technician for tower work across
            the Chesapeake region — lighting, steel, and equipment at heights,
            troubleshooting, and site upkeep. Climb training available for the
            right candidate; competitive pay with a crew that takes safety
            seriously.
          </p>
          <a
            href="#contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-display font-bold text-lg uppercase tracking-widest py-3 px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}