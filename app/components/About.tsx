'use client';

const aboutBlurbs = [
  {
    heading: 'Inspections',
    text: 'Experienced, certified tower climbers providing comprehensive, thorough reports for mapping structural, L&A, and TIA-222H compliance, and all of your engineering needs. Accurate measurements, pictures, and close-out documents.',
  },
  {
    heading: 'Maintenance',
    text: 'Lighting, steel, cellular, microwave, broadband, painting, troubleshoots, meteorological equipment repairs, calibrations, and upkeep for all things at heights. Ask us how we can make your site more profitable.',
  },
  {
    heading: 'Construction',
    text: 'Tower erections, co-locations, site builds, testing, integrations, decommissioning, and consultation. From start to finish — efficient, safe, and cost effective.',
  },
];

const aboutPhotos = [
  { image: '/images/About-1.png', alt: 'Chesapeake Tower Solutions field work' },
  { image: '/images/About-2.png', alt: 'CTS crew on site' },
  { image: '/images/About-3.jpeg', alt: 'Tower infrastructure project' },
  { image: '/images/About-4.jpeg', alt: 'CTS tower project' },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <p className="text-red-500 font-display font-bold text-base uppercase tracking-widest text-center mb-2">
          Who We Are
        </p>
        <h2 className="font-display font-bold text-white text-3xl md:text-5xl uppercase tracking-widest text-center mb-10">
          Built in the Bay Region
        </h2>

        {/* Company Story */}
        <p className="text-white/70 font-body leading-relaxed max-w-3xl mx-auto text-center mb-14">
          Chesapeake Tower Solutions provides rope access and communication
          solutions for the Chesapeake Bay region and beyond. Founded on
          decades of climbing, rigging, and telecom experience, our crews
          handle the work at heights that keeps the region communicating —
          from routine inspections to full tower construction and 24/7
          emergency response.
        </p>

        {/* Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {aboutBlurbs.map((blurb) => (
            <div key={blurb.heading} className="border border-white/10 rounded p-6">
              <h3 className="font-display font-bold text-white text-xl uppercase tracking-widest mb-3">
                {blurb.heading}
              </h3>
              <p className="text-white/60 font-body text-sm leading-relaxed">
                {blurb.text}
              </p>
            </div>
          ))}
        </div>

        {/* Photo Strip — horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-20 snap-x scroll-px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {aboutPhotos.map((photo) => (
            <figure key={photo.image} className="snap-start shrink-0 border border-white/10 overflow-hidden">
              <img
                src={photo.image}
                alt={photo.alt}
                className="w-72 md:w-96 h-48 md:h-64 object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        {/* Memorial */}
        <div className="max-w-3xl mx-auto text-center border-t border-white/10 pt-16">

          <p className="text-neutral-400 font-display font-semibold text-sm uppercase tracking-[0.3em] mb-8">
            In Honor Of
          </p>

          <img
            src="/images/chad.jpg"
            alt="Chad Ryser"
            className="w-36 h-36 rounded-full object-cover mx-auto mb-8 border border-neutral-700 grayscale"
          />

          <h3 className="font-display font-bold text-white text-3xl md:text-4xl uppercase tracking-widest mb-2">
            Chad Ryser
          </h3>
          <p className="text-neutral-500 font-body text-sm mb-8">
            Long-time climbing partner and friend
          </p>

          <p className="text-white/70 font-body text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Chad passed before he could see Chesapeake Tower Solutions come to
            fruition. We grew up in this industry together, and much of this
            company traces back to his work and the success we had as a team in
            the Chesapeake Bay region.
          </p>

          <p className="font-display font-semibold text-neutral-300 text-xl uppercase tracking-widest">
            The best rigger I&apos;ve ever known.
          </p>

        </div>

      </div>
    </section>
  );
}
