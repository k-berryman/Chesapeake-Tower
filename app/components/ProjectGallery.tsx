const projects = [
  { image: '/images/projects-1.jpg', label: 'Tower Construction' },
  { image: '/images/projects-2.jpeg', label: 'Antenna Installation' },
  { image: '/images/projects-3.png', label: 'Multi-Site Complex' },
  { image: '/images/projects-4.jpeg', label: 'Microwave & Satellite Systems' },
  { image: '/images/projects-5.png', label: 'Wind Turbine Maintenance' },
  { image: '/images/projects-6.jpeg', label: 'Rapid Response Crews' },
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="bg-black py-20 md:pt-32 px-6">
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