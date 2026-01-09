import React from 'react';
import { Award, ShieldCheck, FileBadge, ExternalLink } from 'lucide-react';
import { Certification } from '../types';

const certs: Certification[] = [
  {
    id: '1',
    title: 'Backend Development',
    issuer: 'Kuraz Technologies',
    date: '2024',
    icon: 'award',
    link: 'https://drive.google.com/file/d/1gUlupW0N8OK_5RjWUSwf0liFFRn-lDEZ/view?usp=sharing'
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certs" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-bold tracking-wide uppercase text-sm mb-2">Recognition</h2>
          <h3 className="text-3xl font-bold text-white">Certifications & Awards</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 hover:border-brand-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-brand-500/10 rounded-xl group-hover:bg-brand-500/20 transition-colors">
                  {cert.icon === 'award' && <Award className="h-6 w-6 text-brand-400" />}
                  {cert.icon === 'badge' && <FileBadge className="h-6 w-6 text-brand-400" />}
                  {cert.icon === 'certificate' && <ShieldCheck className="h-6 w-6 text-brand-400" />}
                </div>
                {cert.link && (
                  <a href={cert.link} className="text-slate-500 hover:text-white transition-colors" target='blank'>
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
              
              <h4 className="text-lg font-bold text-white mb-1 group-hover:text-brand-300 transition-colors">{cert.title}</h4>
              <p className="text-brand-400 text-sm font-medium mb-2">{cert.issuer}</p>
              <p className="text-slate-500 text-xs font-mono">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;