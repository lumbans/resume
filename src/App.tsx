import React from 'react';
import { MotionConfig } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Achievements />
          <Certifications />
          <Insights />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
