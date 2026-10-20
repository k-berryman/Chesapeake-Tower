import { ShieldCheck, Users, FileCheck, Clock, Award } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'SAFETY FIRST', text: 'Safety is our core value and the foundation of every job we perform.' },
  { icon: Users, title: 'EXPERIENCED PROFESSIONALS', text: 'Highly trained climbers and technicians with years of hands-on experience.' },
  { icon: FileCheck, title: 'CERTIFIED & COMPLIANT', text: 'OSHA compliant, fully insured, and up to date on all industry standards.' },
  { icon: Clock, title: 'RAPID RESPONSE', text: 'Available 24/7 for emergency response and critical restoration.' },
  { icon: Award, title: 'QUALITY GUARANTEED', text: 'Exceptional workmanship that stands the test of time.' },
];

export default function WhyChooseUs() {
  return (
    <section id="safety" className="bg-neutral-950 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-red-500 font-display font-bold text-base uppercase tracking-widest mb-2">Built on Experience. Driven by Safety.</p>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl uppercase tracking-widest mb-10">Why Choose Chesapeake?</h2>
          <ul className="space-y-6">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="bg-red-600 rounded-full p-2 shrink-0"><Icon className="w-5 h-5 text-black" /></span>
                <div>
                  <h3 className="font-display font-bold text-white text-lg uppercase tracking-wider mb-1">{title}</h3>
                  <p className="text-white/70 font-body text-sm leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-black border border-white/10 p-10 flex flex-col justify-center h-full">
          <p className="text-red-500 font-display font-bold text-lg uppercase tracking-widest mb-3">Safety Is Never Optional</p>
          <p className="text-white/70 font-body mb-8">We don&apos;t just build towers. We protect every person who climbs them.</p>
          <ul className="space-y-4">
            {['0 LOST TIME INCIDENTS', '100% PPE COMPLIANCE', 'DAILY JOB HAZARD ANALYSIS', 'RESCUE TRAINED CREWS', 'OSHA COMPLIANT'].map((s) => (
              <li key={s} className="font-display font-semibold text-white text-xl uppercase tracking-widest flex items-center gap-3">
                <span className="w-2 h-2 bg-red-600 rounded-full" aria-hidden="true"></span>{s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}