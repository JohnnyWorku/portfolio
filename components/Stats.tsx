import React, { useEffect, useState, useRef } from 'react';

const skillData = [
  { subject: 'Backend (Node/Laravel)', level: 85 },
  { subject: 'Frontend (React/JS)', level: 80 },
  { subject: 'Python & AI', level: 75 },
];

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-brand-500 font-bold tracking-wide uppercase text-sm">My Toolkit</h2>
            <h3 className="text-3xl font-bold text-white mt-2">Skills & Technologies</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Skill Bars */}
          <div className="bg-slate-950/50 rounded-2xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
             {/* Background glow for the card */}
             <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-500/5 rounded-full blur-2xl"></div>
             
             <div className="flex items-center justify-between mb-8 relative z-10">
                 <h4 className="text-xl font-bold text-white">Core Competencies</h4>
                 <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                 </div>
             </div>
             
             <div className="space-y-8 relative z-10">
                {skillData.map((skill) => (
                    <div key={skill.subject} className="group">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{skill.subject}</span>
                            <span className="text-brand-400 text-xs font-mono font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden border border-slate-800/50 p-0.5 box-content">
                            <div 
                                className="h-full rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
                                style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                            >
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-500 to-indigo-500"></div>
                                
                                {/* Fluid Shimmer Effect */}
                                <div 
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                  style={{
                                    animation: 'shimmer 2s infinite linear',
                                    transform: 'skewX(-20deg) translateX(-150%)'
                                  }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
          </div>

          {/* Right: Text and Stats */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Hungry for Knowledge</h4>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                As a fourth-year Software Engineering student, I am focused on mastering modern web frameworks like React, Laravel, and FastAPI, while building a strong foundation in Data Structures and Algorithms.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/50 hover:bg-slate-800 transition-colors rounded-xl border border-slate-700/50 hover:border-brand-500/50">
                    <div className="text-3xl font-bold text-white mb-1">2026</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Expected Grad</div>
                </div>
                <div className="p-4 bg-slate-800/50 hover:bg-slate-800 transition-colors rounded-xl border border-slate-700/50 hover:border-brand-500/50">
                    <div className="text-3xl font-bold text-white mb-1">3+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Major Projects</div>
                </div>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: skewX(-20deg) translateX(-150%); }
          100% { transform: skewX(-20deg) translateX(150%); }
        }
      `}</style>
    </section>
  );
};

export default Stats;