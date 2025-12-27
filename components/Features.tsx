import React from 'react';
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Random Chat App',
    category: 'Real-time Communication',
    description: 'A dynamic web application facilitating random user connections. Built to ensure seamless real-time messaging and user interaction.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000&auto=format&fit=crop',
    technologies: ['Laravel', 'React', 'WebSockets'],
    link: 'https://github.com/JohnnyWorku'
  },
  {
    id: '2',
    title: 'QR Digital Food Ordering',
    category: 'Web Application',
    description: 'A contactless dining solution allowing customers to order via QR codes. Features a responsive frontend and a robust backend for order management.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop',
    technologies: ['React.js', 'Node.js', 'HTML/CSS', 'JavaScript'],
    link: 'https://github.com/JohnnyWorku'
  }
];

const getTechColor = (tech: string) => {
    const colors = [
        'bg-blue-500',
        'bg-green-500',
        'bg-purple-500',
        'bg-yellow-500',
        'bg-red-500',
        'bg-indigo-500',
        'bg-pink-500',
        'bg-cyan-500'
    ];
    let hash = 0;
    for (let i = 0; i < tech.length; i++) {
        hash = tech.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
};

const Features: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <h2 className="text-brand-500 font-bold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Project Experience</h3>
            </div>
            <a href="https://github.com/JohnnyWorku" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-slate-400 hover:text-brand-400 transition-colors mt-4 md:mt-0">
                View GitHub <Github className="ml-2 h-4 w-4" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-900/20 hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{project.category}</span>
                        <h4 className="text-xl font-bold text-white mt-1 group-hover:text-brand-300 transition-colors">{project.title}</h4>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-brand-600 transition-all">
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <span key={tech} className="inline-flex items-center px-2.5 py-1 bg-slate-900 text-xs font-medium text-slate-300 rounded-md border border-slate-700">
                             <div className={`w-1.5 h-1.5 rounded-full ${getTechColor(tech)} mr-1.5`}></div>
                            {tech}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="https://github.com/JohnnyWorku" className="inline-flex items-center text-brand-400 font-semibold">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Features;