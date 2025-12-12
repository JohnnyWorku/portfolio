import React from 'react';
import { Briefcase, Calendar, Code, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#8b5cf6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-brand-500 font-bold tracking-wide uppercase text-sm mb-2">My Journey</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Education & Experience</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-slate-800"></div>

            {/* Experience Item 1: University (Right Side) */}
            <div className="relative z-10 mb-12 group">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                    
                    {/* Date - Left on Desktop */}
                    <div className="order-1 md:w-5/12 text-left md:text-right pl-16 md:pl-0 md:pr-10 mb-2 md:mb-0 relative">
                         <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-brand-300 font-medium text-sm shadow-sm">
                            <Calendar className="w-3.5 h-3.5 mr-2 text-brand-400" />
                            2022 - Present
                         </span>
                    </div>

                    {/* Timeline Dot - Center */}
                    <div className="absolute left-[20px] md:left-1/2 md:-ml-4 top-0 md:top-auto flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 border-4 border-slate-900 shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20">
                        <GraduationCap className="w-3.5 h-3.5 text-white" />
                    </div>

                    {/* Content - Right on Desktop */}
                    <div className="order-2 md:w-5/12 pl-16 md:pl-10 mt-2 md:mt-0">
                        <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl hover:border-brand-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-900/20 relative">
                            {/* Connector Arrow for desktop */}
                            <div className="hidden md:block absolute top-1/2 -left-2 w-4 h-4 bg-slate-950 border-l border-b border-slate-800 transform rotate-45 -translate-y-1/2 group-hover:border-brand-500 transition-colors"></div>

                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xl font-bold text-white">Bachelors of Software Engineering</h4>
                            </div>
                            <h5 className="text-brand-400 font-semibold mb-4 flex items-center">
                                Addis Ababa University
                            </h5>
                            
                            <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                Fourth-year student actively building a strong foundation in software engineering principles. Committed to continuous learning and skill improvement to develop innovative software solutions.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                                <span className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs font-medium text-slate-300 rounded-md border border-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-1.5"></div>
                                    Software Engineering
                                </span>
                                <span className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs font-medium text-slate-300 rounded-md border border-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-1.5"></div>
                                    System Design
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Item 2: Kuraz Internship (Left Side on Desktop) */}
            <div className="relative z-10 mb-12 group">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                    
                    {/* Content - Left on Desktop */}
                    <div className="order-2 md:order-1 md:w-5/12 pl-16 md:pl-0 md:pr-10 mt-2 md:mt-0">
                        <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl hover:border-brand-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-900/20 relative">
                            {/* Connector Arrow for desktop - Pointing Right */}
                            <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-slate-950 border-r border-t border-slate-800 transform rotate-45 -translate-y-1/2 group-hover:border-brand-500 transition-colors"></div>

                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xl font-bold text-white">Internship Experience</h4>
                            </div>
                            <h5 className="text-brand-400 font-semibold mb-4 flex items-center">
                                Kuraz Technologies
                            </h5>
                            
                            <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                Gained practical industry experience working on real-world software solutions. Specifically specialized in backend development using the Laravel framework, building robust APIs and managing database interactions while collaborating with senior developers.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                                <span className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs font-medium text-slate-300 rounded-md border border-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-1.5"></div>
                                    PHP
                                </span>
                                <span className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs font-medium text-slate-300 rounded-md border border-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5"></div>
                                    Laravel
                                </span>
                                <span className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs font-medium text-slate-300 rounded-md border border-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
                                    Backend
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Dot - Center */}
                    <div className="absolute left-[20px] md:left-1/2 md:-ml-4 top-0 md:top-auto flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 border-4 border-slate-900 shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20">
                        <Briefcase className="w-3.5 h-3.5 text-white" />
                    </div>

                     {/* Date - Right on Desktop */}
                     <div className="order-1 md:order-2 md:w-5/12 text-left pl-16 md:pl-10 mb-2 md:mb-0 relative">
                         <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-brand-300 font-medium text-sm shadow-sm">
                            <Calendar className="w-3.5 h-3.5 mr-2 text-brand-400" />
                            2024
                         </span>
                    </div>

                </div>
            </div>

            {/* Experience Item 3: A2SV (Right Side on Desktop) */}
            <div className="relative z-10 mb-12 group">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                    
                    {/* Date - Left on Desktop */}
                    <div className="order-1 md:w-5/12 text-left md:text-right pl-16 md:pl-0 md:pr-10 mb-2 md:mb-0 relative">
                         <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-brand-300 font-medium text-sm shadow-sm">
                            <Calendar className="w-3.5 h-3.5 mr-2 text-brand-400" />
                            2023 - 2024
                         </span>
                    </div>

                    {/* Timeline Dot - Center */}
                    <div className="absolute left-[20px] md:left-1/2 md:-ml-4 top-0 md:top-auto flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 border-4 border-slate-900 shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20">
                        <Code className="w-3.5 h-3.5 text-white" />
                    </div>

                    {/* Content - Right on Desktop */}
                    <div className="order-2 md:w-5/12 pl-16 md:pl-10 mt-2 md:mt-0">
                        <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl hover:border-brand-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-900/20 relative">
                            {/* Connector Arrow for desktop */}
                            <div className="hidden md:block absolute top-1/2 -left-2 w-4 h-4 bg-slate-950 border-l border-b border-slate-800 transform rotate-45 -translate-y-1/2 group-hover:border-brand-500 transition-colors"></div>

                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xl font-bold text-white">A2SV (Africa to Silicon Valley)</h4>
                            </div>
                            <h5 className="text-brand-400 font-semibold mb-4 flex items-center">
                                DSA & Software Engineering
                            </h5>
                            
                            <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                Completed one year of intensive training in Data Structures, Algorithms, and Python at A2SV. Currently, I am dedicated to further refining these problem-solving skills through independent advanced study and practical application.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                                <span className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs font-medium text-slate-300 rounded-md border border-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
                                    Python
                                </span>
                                <span className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs font-medium text-slate-300 rounded-md border border-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></div>
                                    DSA
                                </span>
                                <span className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs font-medium text-slate-300 rounded-md border border-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1.5"></div>
                                    Problem Solving
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;