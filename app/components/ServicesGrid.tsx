'use client';

interface Service {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  bullets?: string[];
}

import { Power, Wrench, ClipboardCheck, AlertTriangle, Shield, Wifi } from 'lucide-react';

const services: Service[] = [
  {
    title: 'TOWER CONSTRUCTION',
    description: 'Building wireless infrastructure from the ground up.',
    image: '/images/construction.jpg',
    icon: <Power className="w-6 h-6" />,
  },
  {
    title: 'TOWER MAINTENANCE',
    description: 'Preventive maintenance, repairs, lighting systems, and structural upgrades.',
    image: '/images/maintenance.png',
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: 'INSPECTIONS',
    description: '',
    image: '/images/inspections.jpg',
    icon: <ClipboardCheck className="w-6 h-6" />,
    bullets: ['FAA-Compliant', 'Drone Inspections', 'Structural Evaluations', 'Documentation'],
  },
  {
    title: 'EMERGENCY RESPONSE',
    description: '24/7 rapid deployment crews for storm damage and emergency restoration.',
    image: '/images/emergency.jpg',
    icon: <AlertTriangle className="w-6 h-6" />,
  },
  {
    title: 'GOVERNMENT & DEFENSE',
    description: 'Supporting federal agencies, aerospace facilities, and mission-critical infrastructure.',
    image: '/images/defense.jpg',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'INSTALLATIONS & UPGRADES',
    description: 'Antenna installations, microwave, DAS, and system enhancements.',
    image: '/images/installations.jpg',
    icon: <Wifi className="w-6 h-6" />,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-black py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-red-500 font-display font-bold text-base uppercase tracking-widest mb-2">
            What We Do
          </p>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl uppercase tracking-widest">
            Complete Tower Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-neutral-900 border border-white/10 rounded overflow-hidden hover:border-red-600/50 transition-colors duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded bg-red-600 text-white flex-shrink-0">
                    {service.icon}
                  </span>
                  <h3 className="font-display font-bold text-white text-xl uppercase tracking-wider">
                    {service.title}
                  </h3>
                </div>

                {service.bullets ? (
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="text-white/70 font-body text-sm">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/70 font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}