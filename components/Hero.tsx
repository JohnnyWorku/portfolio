import React from 'react';
import { ArrowRight, Mail, BookOpen, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  // Simple handler for internal hero links to ensure consistent offset behavior
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2 animate-pulse"></span>
                <span className="text-xs text-brand-200 font-semibold tracking-wide uppercase">Software Engineering Student</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Innovating with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">
                    Code & AI.
                </span>
                </h1>
                
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-400 mb-10 mx-auto lg:mx-0">
                Hi, I'm <span className="text-white font-semibold">Yohannes Worku</span>. A fourth-year Software Engineering student actively mastering Full Stack Development, Algorithms, and AI. Aspiring to build innovative solutions that solve real-world problems.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a 
                    href="#projects" 
                    onClick={(e) => handleScroll(e, '#projects')}
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-brand-600 hover:bg-brand-500 transition-all hover:scale-105 shadow-lg shadow-brand-500/25 cursor-pointer"
                >
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                    href="#contact" 
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-bold rounded-full text-slate-300 bg-slate-900/50 hover:bg-slate-800 transition-all hover:text-white cursor-pointer"
                >
                    <Mail className="ml-2 h-5 w-5 mr-2" />
                    Contact Me
                </a>
                </div>
            </div>

            {/* Hero Visual - Abstract Code Representation */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-slate-900 rounded-xl overflow-hidden h-[400px] relative">
                         <div className="absolute top-0 w-full h-8 bg-slate-800 flex items-center px-4 space-x-2">
                             <div className="w-3 h-3 rounded-full bg-red-500"></div>
                             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                             <div className="w-3 h-3 rounded-full bg-green-500"></div>
                         </div>
                         <div className="p-6 pt-12 font-mono text-sm">
                             <div className="text-purple-400">const <span className="text-blue-400">engineer</span> = <span className="text-yellow-300">{"{"}</span></div>
                             <div className="pl-4 text-slate-300">name: <span className="text-green-400">'Yohannes'</span>,</div>
                             <div className="pl-4 text-slate-300">major: <span className="text-green-400">'Software Engineering'</span>,</div>
                             <div className="pl-4 text-slate-300">focus: <span className="text-green-400">['DSA', 'AI', 'Web']</span>,</div>
                             <div className="pl-4 text-slate-300">learning: <span className="text-blue-400">true</span>,</div>
                             <div className="pl-4 text-slate-300">university: <span className="text-green-400">'AAU'</span></div>
                             <div className="text-yellow-300">{"}"}</div>
                             <br />
                             <div className="text-purple-400">async function <span className="text-blue-400">buildFuture</span>() <span className="text-yellow-300">{"{"}</span></div>
                             <div className="pl-4 text-slate-400">// Compiling knowledge...</div>
                             <div className="pl-4 text-slate-300">await <span className="text-blue-400">master</span>([<span className="text-green-400">'Web'</span>, <span className="text-green-400">'AI'</span>]);</div>
                             <div className="pl-4 text-slate-300">return <span className="text-green-400">"Innovation"</span>;</div>
                             <div className="text-yellow-300">{"}"}</div>
                         </div>
                         
                         {/* Floating Badge */}
                         <div className="absolute bottom-6 right-6 bg-slate-800/90 backdrop-blur border border-slate-600 p-3 rounded-lg flex items-center shadow-xl animate-bounce">
                             <GraduationCap className="h-5 w-5 text-brand-400 mr-2" />
                             <span className="text-white font-bold text-xs">Addis Ababa Univ.</span>
                         </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;