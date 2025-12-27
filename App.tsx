import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Expertise from './components/Expertise';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import BackgroundViz from './components/BackgroundViz';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-brand-500 selection:text-white relative">
      <BackgroundViz />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Experience />
          <Stats />
          <Expertise />
          <Certifications />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;