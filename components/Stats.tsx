import React, { useEffect, useState, useRef } from 'react';
import { Target, Zap, Code2, Trophy } from 'lucide-react';

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

  // LeetCode Stats (Placeholder data - you can fetch this via API in the future)
  // Assuming a goal of 500 problems for the visual circle
  const leetStats = {
    easy: 86,
    medium: 142,
    hard: 24,
    total: 252,
    acceptance: '64.2%',
    goal: 500
  };

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (leetStats.total / leetStats.goal) * circumference;

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-brand-500 font-bold tracking-wide uppercase text-sm">My Toolkit</h2>
            <h3 className="text-3xl font-bold text-white mt-2">Skills & Technologies</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Skill Bars */}
          <div className="bg-slate-950/50 rounded-2xl p-8 border border-slate-800 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
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

          {/* Right: LeetCode & Stats */}
          <div className="space-y-6">
            
            {/* LeetCode Card */}
            <div className="bg-slate-950/50 rounded-2xl p-8 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-brand-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                    <div>
                        <h4 className="text-xl font-bold text-white flex items-center gap-2">
                            <Code2 className="h-6 w-6 text-yellow-500" />
                            LeetCode
                        </h4>
                        <p className="text-slate-400 text-sm mt-1">Problem Solving Journey</p>
                    </div>
                    <div className="text-right">
                         <div className="text-2xl font-bold text-white">{leetStats.acceptance}</div>
                         <div className="text-xs text-slate-500 uppercase font-bold">Acceptance</div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                    {/* Circle Chart */}
                    <div className="relative w-32 h-32 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                            {/* Background Circle */}
                            <circle 
                                cx="64" cy="64" r={radius} 
                                stroke="#1e293b" strokeWidth="6" fill="none" 
                            />
                            {/* Progress Circle */}
                            <circle 
                                cx="64" cy="64" r={radius} 
                                stroke="#eab308" strokeWidth="6" fill="none"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={isVisible ? progressOffset : circumference}
                                className="transition-all duration-1500 ease-out delay-300"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold text-white">{leetStats.total}</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Solved</span>
                        </div>
                    </div>
                    
                    {/* Stats List */}
                    <div className="flex-1 grid grid-cols-1 gap-3 w-full">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800/50 hover:border-emerald-500/30 transition-colors">
                             <span className="text-sm font-medium text-emerald-400">Easy</span>
                             <div className="flex items-center gap-3">
                                <div className="h-1.5 w-16 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500" style={{ width: `${(leetStats.easy / leetStats.total) * 100}%`}}></div>
                                </div>
                                <span className="font-bold text-white w-8 text-right">{leetStats.easy}</span>
                             </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800/50 hover:border-amber-400/30 transition-colors">
                             <span className="text-sm font-medium text-amber-400">Medium</span>
                             <div className="flex items-center gap-3">
                                <div className="h-1.5 w-16 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-400" style={{ width: `${(leetStats.medium / leetStats.total) * 100}%`}}></div>
                                </div>
                                <span className="font-bold text-white w-8 text-right">{leetStats.medium}</span>
                             </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800/50 hover:border-rose-500/30 transition-colors">
                             <span className="text-sm font-medium text-rose-500">Hard</span>
                             <div className="flex items-center gap-3">
                                <div className="h-1.5 w-16 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-rose-500" style={{ width: `${(leetStats.hard / leetStats.total) * 100}%`}}></div>
                                </div>
                                <span className="font-bold text-white w-8 text-right">{leetStats.hard}</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info Cards */}
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/50 hover:bg-slate-800 transition-colors rounded-xl border border-slate-700/50 hover:border-brand-500/50 flex items-center gap-3">
                    <div className="p-2.5 bg-brand-500/10 rounded-lg">
                        <Target className="h-5 w-5 text-brand-400" />
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white">2026</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Graduation</div>
                    </div>
                </div>
                <div className="p-4 bg-slate-800/50 hover:bg-slate-800 transition-colors rounded-xl border border-slate-700/50 hover:border-brand-500/50 flex items-center gap-3">
                    <div className="p-2.5 bg-brand-500/10 rounded-lg">
                        <Zap className="h-5 w-5 text-brand-400" />
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white">3+</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Major Projects</div>
                    </div>
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