import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Cloud, Users } from 'lucide-react';
import CountUp from './CountUp';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#f8fafc' }}
    >
      {/* Background photo layer (brightened) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/resume/images/hero-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1.18) saturate(1.05)'
        }}
      />
      {/* Light wash for text legibility (stronger on the left, behind the copy) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/35"
      />
      {/* Subtle jewel tint */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(at 18% 22%, rgba(59, 130, 246, 0.10) 0px, transparent 50%), radial-gradient(at 82% 28%, rgba(139, 92, 246, 0.10) 0px, transparent 50%)`
        }}
      />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-slate-900"
          >
            {/* Executive Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Lumban</span>
                <br />
                <span className="text-slate-900">Sopian</span>
              </h1>
              <div className="text-xl lg:text-2xl text-slate-600 font-light">
                Strategic IT Executive | Division Head | DevOps & Cloud Architecture Leader
              </div>
            </motion.div>

            {/* Executive Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Technology &amp; security executive with <span className="text-blue-600 font-semibold">18+ years</span> building
                and securing mission-critical platforms in regulated banking and fintech. I lead at the intersection of
                cybersecurity, cloud, and platform engineering &mdash; translating regulatory and resilience mandates into
                measurable business outcomes.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Currently serving as <span className="text-blue-600 font-semibold">Division Head</span> at
                PT Bank Multiarta Sentosa Tbk, responsible for enterprise security strategy, technology governance,
                regulatory compliance, and digital transformation programs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Proven track record leading engineering organizations of up to <span className="text-blue-600 font-semibold">70+ professionals</span> and
                managing technology budgets of up to <span className="text-blue-600 font-semibold">USD 10M+</span>, while
                delivering 40% reduction in security incidents, 30% cloud cost optimization, 50% MTTR improvement, and
                sustained 99.95%+ service availability.
              </p>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  <CountUp to={18} suffix="+" />
                </div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  <CountUp to={70} suffix="+" />
                </div>
                <div className="text-sm text-slate-600">Team Members Led</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  <CountUp to={10} prefix="$" suffix="M+" />
                </div>
                <div className="text-sm text-slate-600">Budget Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  <CountUp to={50} suffix="M+" />
                </div>
                <div className="text-sm text-slate-600">Users Served</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-900/30"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Experience
              </button>
              <a
                href="/resume/Lumban-Sopian-CV.pdf"
                download
                className="px-8 py-3 border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 text-center"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Image & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            {/* Professional Image */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 rounded-full blur-lg opacity-40"></div>
              <picture>
                <source srcSet="/resume/images/professional-headshot.webp" type="image/webp" />
                <img
                  src="/resume/images/professional-headshot.jpg"
                  alt="Lumban Sopian — Technology & Security Executive"
                  width={384}
                  height={384}
                  decoding="async"
                  fetchPriority="high"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl shadow-slate-300/60"
                />
              </picture>
            </div>

            {/* Floating Cards with Key Highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-md rounded-lg p-4 border border-slate-200 shadow-lg shadow-slate-300/40"
            >
              <div className="flex items-center space-x-3">
                <Shield className="text-violet-600" size={24} />
                <div>
                  <div className="text-slate-900 font-semibold">99.95%</div>
                  <div className="text-slate-600 text-sm">Service Availability</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-md rounded-lg p-4 border border-slate-200 shadow-lg shadow-slate-300/40"
            >
              <div className="flex items-center space-x-3">
                <Cloud className="text-cyan-600" size={24} />
                <div>
                  <div className="text-slate-900 font-semibold">30%</div>
                  <div className="text-slate-600 text-sm">Cloud Cost Saved</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute top-1/2 -right-8 bg-white/80 backdrop-blur-md rounded-lg p-4 border border-slate-200 shadow-lg shadow-slate-300/40"
            >
              <div className="flex items-center space-x-3">
                <Users className="text-indigo-600" size={24} />
                <div>
                  <div className="text-slate-900 font-semibold">70+</div>
                  <div className="text-slate-600 text-sm">Engineers Led</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="text-slate-900 hover:text-blue-600 transition-colors duration-300"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="animate-bounce" size={24} />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Background Overlay Elements */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-violet-500/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
