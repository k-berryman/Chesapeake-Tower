const projects = [
  { image: '/images/old-website-pic-6.jpg', label: 'Tower Construction' },
  { image: '/images/old-website-pic-2.jpg', label: 'Antenna Installation' },
  { image: '/images/old-website-pic-9.jpg', label: 'Multi-Site Complex' },
  { image: '/images/old-website-pic-8.jpg', label: 'Microwave & Satellite Systems' },
  { image: '/images/old-website-pic-1.jpg', label: 'Wind Turbine Maintenance' },
  { image: '/images/old-website-pic-10.jpg', label: 'Rapid Response Crews' },
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-red-500 font-display font-bold text-base uppercase tracking-widest text-center mb-2">Featured Projects</p>
        <h2 className="font-display font-bold text-white text-3xl md:text-5xl uppercase tracking-widest text-center mb-14">Proven Performance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure key={p.label} className="group border border-white/20 bg-neutral-950 overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img src={p.image} alt={p.label} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <figcaption className="p-5 font-display font-bold text-white text-lg uppercase tracking-wider">{p.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}