export default function Footer() {
  return (
    <section id="contact" className="bg-black border-t border-white/10 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-red-500 font-display font-bold text-base md:text-lg uppercase tracking-widest mb-3">
          Get In Touch
        </p>

        <h2 className="font-display font-bold text-white text-3xl md:text-5xl uppercase tracking-widest mb-6">
          Request a Quote
        </h2>

        <p className="text-white/70 font-body mb-2">
          Rope Access and Communication Solutions for The Bay and Beyond.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="tel:+18035547891"
            className="inline-block cursor-pointer bg-red-600 hover:bg-red-700 text-white font-display font-bold text-lg md:text-xl uppercase tracking-widest py-3 px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
          >
            Call: 803-554-7891
          </a>
          <a
            href="mailto:dbeaumont@chesapeaketower.com"
            className="inline-block cursor-pointer bg-transparent border border-white hover:border-red-500 text-white font-display font-bold text-lg md:text-xl uppercase tracking-widest py-3 px-8 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform"
          >
            Email Us
          </a>
        </div>

        <form
        action="mailto:dbeaumont@chesapeaketower.com"
        method="post"
        encType="text/plain"
        className="max-w-md mx-auto text-left space-y-4"
        >
        <div>
            <label htmlFor="name" className="block text-white/70 font-body text-sm mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full bg-neutral-900 border border-white/20 rounded px-3 py-2 text-white font-body focus:outline-none focus:border-red-500" />
        </div>
        <div>
            <label htmlFor="email" className="block text-white/70 font-body text-sm mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full bg-neutral-900 border border-white/20 rounded px-3 py-2 text-white font-body focus:outline-none focus:border-red-500" />
        </div>
        <div>
            <label htmlFor="message" className="block text-white/70 font-body text-sm mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full bg-neutral-900 border border-white/20 rounded px-3 py-2 text-white font-body focus:outline-none focus:border-red-500"></textarea>
        </div>
        <button type="submit" className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-display font-bold text-lg uppercase tracking-widest py-3 rounded transition-transform duration-200 hover:scale-105 origin-center will-change-transform">Send Message</button>
        </form>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <img
            src="/images/favicon.svg"
            alt="Chesapeake Tower Solutions"
            className="w-24 h-24 mx-auto mb-4 object-contain"
          />
          <p className="text-white/50 font-body text-sm mb-2">
            Chesapeake Tower Solutions
          </p>
          <p className="text-white/30 font-body text-xs">
            Rope Access and Communication Solutions for The Bay and Beyond.
          </p>
          <p className="text-center text-white/60 font-body text-sm tracking-widest pb-2">
              <a href="tel:+18035547891" className="hover:text-white">803-554-7891</a>
          </p>
        </div>
      </div>
    </section>
  );
}