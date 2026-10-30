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
    image: 'emergency.jpg',
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
    <section id="services" className="bg-black py-20 px-6 mt-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <p className="text-red-500 font-display font-bold text-lg uppercase tracking-widest text-center mb-3">
          WHAT WE DO
        </p>
        <h2 className="font-display font-bold text-white text-3xl md:text-5xl uppercase tracking-widest text-center mb-10">
          COMPLETE TOWER SOLUTIONS
        </h2>

        {/* Cards: 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-white/20 bg-neutral-950 flex flex-col transition-transform duration-200 hover:scale-105 will-change-transform"
            >
              {/* Card Image with Icon Overlay */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Red Icon Badge */}
                {service.icon && (
                  <div className="absolute bottom-4 left-4 bg-red-600 rounded-full p-2.5 shadow-lg">
                    <div className="text-black">
                      {service.icon}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1">
                <h3 className="font-display font-bold text-white text-xl uppercase tracking-wider mb-3">
                  {service.title}
                </h3>

                {service.bullets ? (
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {service.bullets.map((bullet) => (
                    <li
                        key={bullet}
                        className="text-white/70 text-sm font-body flex items-center"
                    >
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2.5" aria-hidden="true"></span>
                        {bullet}
                    </li>
                    ))}
                </ul>
                ) : (
                  <p className="text-white/70 text-sm leading-relaxed font-body">
                    {service.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}