import Memorial from './Memorial';

const aboutPhotos = [
  { image: '/images/old-website-pic-5.jpg', alt: 'CTS climbers working on a tower' },
  { image: '/images/old-website-pic-3.jpg', alt: 'View from a stadium lighting project' },
  { image: '/images/old-website-pic-7.jpg', alt: 'Working at height on a wind turbine' },
  { image: '/images/old-website-pic-4.jpg', alt: 'Rope access and rescue training' },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-red-500 font-display font-bold text-base uppercase tracking-widest text-center mb-2">
          Who We Are
        </p>
        <h2 className="font-display font-bold text-white text-3xl md:text-5xl uppercase tracking-widest text-center mb-10">
          Built in the Bay Region
        </h2>

        <p className="text-white/70 font-body leading-relaxed max-w-3xl mx-auto text-center mb-14">
          Chesapeake Tower Solutions provides rope access and communication
          solutions for the Chesapeake Bay region and beyond. Founded on
          decades of climbing, rigging, and telecom experience, our crews
          handle the work at heights that keeps the region communicating —
          from routine inspections to full tower construction and 24/7
          emergency response.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {aboutPhotos.map((photo) => (
            <figure key={photo.image} className="border border-white/10 overflow-hidden">
              <img
                src={photo.image}
                alt={photo.alt}
                className="w-full h-40 sm:h-48 object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <Memorial />

      </div>
    </section>
  );
}