import React from 'react';
import { Check, Brain, Server } from 'lucide-react';
import { Service } from '../types';

const expertiseItems: Service[] = [
  {
    title: 'Full Stack Web',
    description: 'Developing complete web applications using modern stacks for both frontend and backend.',
    features: ['React.js & Tailwind CSS', 'Node.js (Express)', 'Laravel', 'FastAPI'],
  },
  {
    title: 'Emerging Tech',
    description: 'Exploring advanced computing concepts and security to solve complex problems.',
    features: ['Artificial Intelligence', 'Data Structures (DSA)', 'Cyber Security', 'WebSockets'],
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-bold tracking-wide uppercase text-sm mb-2">Capabilities</h2>
          <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
            Areas of Expertise
          </h3>
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
            Passionate about modern engineering practices and creating scalable digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {expertiseItems.map((item, index) => (
            <div 
              key={item.title} 
              className="group relative rounded-3xl p-10 flex flex-col h-full bg-slate-900 border-2 border-brand-500/20 hover:border-brand-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl group-hover:bg-brand-500/10 transition-all"></div>
              
              <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 ? <Server className="h-8 w-8 text-brand-400" /> : <Brain className="h-8 w-8 text-brand-400" />}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-base leading-relaxed">{item.description}</p>
              </div>
              
              <div className="relative z-10 mt-auto pt-8 border-t border-slate-800">
                 <span className="text-sm font-bold text-brand-400 uppercase tracking-wider mb-4 block">Key Competencies</span>
                 <ul className="space-y-4">
                    {item.features.map((feature) => (
                    <li key={feature} className="flex items-center p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-500/20 flex items-center justify-center mr-3">
                            <Check className="h-3.5 w-3.5 text-brand-400" />
                        </div>
                        <span className="text-slate-200 font-medium">{feature}</span>
                    </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;