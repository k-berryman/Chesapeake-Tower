export default function CareerBanner() {
  return (
    <section id="careers" className="relative bg-neutral-950 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl uppercase tracking-widest mb-4">Ready to Climb Higher?</h2>
          <p className="text-white/70 font-body mb-2">Join the elite team at Chesapeake Tower Solutions.</p>
          <p className="text-white/70 font-body mb-8">Build your career. Elevate your future.</p>
          <a href="#contact" className="inline-block cursor-pointer bg-red-600 hover:bg-red-700 text-white font-display font-bold text-lg uppercase tracking-widest py-3 px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform">View Careers</a>
        </div>
        <div className="h-80 lg:h-96 bg-cover bg-center border border-white/10 order-1 lg:order-2" style={{ backgroundImage: "url('/images/careers-bg.jpg')" }} role="presentation"></div>
      </div>
    </section>
  );
}