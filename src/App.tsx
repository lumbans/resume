import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import SectionNav from './components/SectionNav';
import Hero from './components/Hero';
import ExecutiveImpact from './components/ExecutiveImpact';
import Leadership from './components/Leadership';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Credentials from './components/Credentials';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <div className="min-h-screen bg-slate-950 text-white">
          <Header />
          <SectionNav />
          <main>
            <Routes>
              <Route
                path="/resume/"
                element={
                  <>
                    <Hero />
                    <ExecutiveImpact />
                    <Leadership />
                    <Experience />
                    <Expertise />
                    <Credentials />
                    <Research />
                    <Contact />
                  </>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;
