import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Page = () => (
  <>
    <Hero />
    <Experience />
    <Skills />
    <Achievements />
    <Certifications />
    <Contact />
  </>
);

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Page />} />
              <Route path="/resume/" element={<Page />} />
              <Route path="*" element={<Page />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;
