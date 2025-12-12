import React from 'react';
import { Code2, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center text-white mb-6">
              <Code2 className="h-6 w-6 text-brand-500" />
              <span className="ml-2 text-xl font-bold tracking-tight">YOHANNES Worku</span>
            </div>
            <p className="text-slate-400 text-lg max-w-md mb-8">
              A dedicated Software Engineering student building accessible, pixel-perfect, and performant web experiences. Always open to internships and collaborative projects.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-center text-slate-300 group">
                    <div className="p-2 bg-slate-900 rounded-lg mr-3 group-hover:bg-brand-500/10 transition-colors">
                        <Mail className="h-5 w-5 text-brand-500" />
                    </div>
                    <a href="mailto:Johnnythegold41@gmail.com" className="hover:text-white transition-colors">Johnnythegold41@gmail.com</a>
                </div>
                <div className="flex items-center text-slate-300 group">
                    <div className="p-2 bg-slate-900 rounded-lg mr-3 group-hover:bg-brand-500/10 transition-colors">
                        <Phone className="h-5 w-5 text-brand-500" />
                    </div>
                    <a href="tel:+251964746440" className="hover:text-white transition-colors">+251-964746440</a>
                </div>
                <div className="flex items-center text-slate-300 group">
                    <div className="p-2 bg-slate-900 rounded-lg mr-3 group-hover:bg-brand-500/10 transition-colors">
                        <Send className="h-5 w-5 text-brand-500" />
                    </div>
                    <a href="https://t.me/JohnWo672427" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@JohnWo672427</a>
                </div>
            </div>
          </div>
          
          <div className="md:text-right">
            <h4 className="text-white font-bold mb-6 text-lg">Connect</h4>
            <div className="flex md:justify-end space-x-4">
              <a href="https://github.com/JohnnyWorku" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-brand-600 transition-all border border-slate-800 hover:border-brand-500">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/Johannes-Worku" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-brand-600 transition-all border border-slate-800 hover:border-brand-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center md:text-left">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Yohannes Worku. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;