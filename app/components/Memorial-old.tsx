'use client';

export default function Memorial() {
  return (
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
  );
}