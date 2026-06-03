import React, { Suspense, lazy } from 'react';
import { MotionConfig } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Chart-heavy sections (recharts) are loaded after first paint to keep the
// critical bundle small. They render below the fold, so the deferral is invisible.
const Metrics = lazy(() => import('./components/Metrics'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));

const SectionFallback: React.FC = () => (
  <div className="py-20" aria-hidden="true">
    <div className="container mx-auto px-6">
      <div className="h-72 rounded-2xl bg-slate-100/60 dark:bg-navy-light/30 animate-pulse" />
    </div>
  </div>
);

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-navy dark:via-[#0d1f3a] dark:to-navy transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <Metrics />
            <Experience />
          </Suspense>
          <Projects />
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
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
