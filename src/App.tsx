import React from 'react';
import { MotionConfig } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Experience from './components/Experience';
import Projects from './components/Projects';
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-navy dark:via-[#0d1f3a] dark:to-navy transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Metrics />
          <Experience />
          <Projects />
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
