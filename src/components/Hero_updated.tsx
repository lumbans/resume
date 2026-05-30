import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Cloud, Users, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const experienceRef = useRef<HTMLElement | null>(null);
  const scrollToNext = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/resume/images/hero-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Executive Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="text-blue-400">Lumban</span>
                <br />
                <span className="text-white">Sopian</span>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 font-light">
                Strategic IT Executive | CISO | DevOps & Cloud Architecture Leader
              </div>
            </motion.div>

            {/* Executive Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Strategic IT Executive with <span className="text-blue-400 font-semibold">15+ years</span> of experience 
                leading digital transformation in DevOps, Cloud Architecture, and Cybersecurity for financial institutions 
                and technology companies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently serving as <span className="text-blue-400 font-semibold">Senior VP & Chief Information Security Officer</span> at 
                PT. Bank Multiarta Sentosa, managing enterprise security strategy with a team of 20+ professionals 
                and $5M+ annual budget.
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
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">70+</div>
                <div className="text-sm text-gray-300">Team Members Led</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$10M+</div>
                <div className="text-sm text-gray-300">Budget Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50M+</div>
                <div className="text-sm text-gray-300">Users Served</div>
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
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Experience
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Image & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Professional Image */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-30"></div>
              <img
                src="/resume/images/professional-headshot.jpg"
                alt="Lumban Sopian - IT Executive"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>

            {/* Floating Cards with Key Highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center space-x-3">
                <Shield className="text-blue-400" size={24} />
                <div>
                  <div className="text-white font-semibold">CISO</div>
                  <div className="text-gray-300 text-sm">Security Leader</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center space-x-3">
                <Cloud className="text-blue-400" size={24} />
                <div>
                  <div className="text-white font-semibold">AWS</div>
                  <div className="text-gray-300 text-sm">Cloud Expert</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
            >
              <div className="flex items-center space-x-3">
                <Users className="text-blue-400" size={24} />
                <div>
                  <div className="text-white font-semibold">DevOps</div>
                  <div className="text-gray-300 text-sm">Team Leader</div>
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
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="animate-bounce" size={24} />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Background Overlay Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
