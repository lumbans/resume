import { motion } from 'framer-motion';
import { ChevronDown, Shield, Cloud, Users } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="hero-background relative min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 py-24 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-300 text-xs tracking-[0.2em] uppercase">
              Technology &amp; Security Executive
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-5">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Lumban
              </span>{' '}
              <span className="text-white">Sopian</span>
            </h1>

            <p className="text-lg lg:text-xl text-blue-200 mb-8 leading-relaxed">
              CISO &nbsp;·&nbsp; Technology &amp; Security Executive &nbsp;·&nbsp;
              Cloud, DevSecOps &amp; Platform Transformation Leader
            </p>

            <div className="space-y-4 text-gray-300 leading-relaxed mb-10 max-w-2xl">
              <p>
                Security and Platform Executive with{' '}
                <span className="text-blue-300 font-semibold">18+ years</span>{' '}
                delivering secure, scalable, and compliant technology platforms
                across Banking, Fintech, and Enterprise environments.
              </p>
              <p>
                Proven leadership across cloud transformation, Zero Trust adoption,
                DevSecOps modernisation, and regulatory compliance — having built
                and run engineering organisations of{' '}
                <span className="text-blue-300 font-semibold">70+</span>, defended
                critical platforms under PCI DSS, OJK, and Bank Indonesia
                supervision, and closed external audits with{' '}
                <span className="text-blue-300 font-semibold">zero critical findings</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('impact')}
                className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-600/20"
              >
                View Executive Impact
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3 border-2 border-blue-400/60 text-blue-300 hover:bg-blue-400/10 hover:border-blue-300 font-semibold rounded-lg transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </motion.div>

          {/* RIGHT — portrait with gradient ring and floating exec badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-72 h-72 xl:w-80 xl:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30" />
              <img
                src="/resume/images/professional-headshot.jpg"
                alt="Lumban Sopian"
                loading="eager"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -top-2 -left-6 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Shield className="text-blue-300" size={22} />
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">CISO</div>
                    <div className="text-gray-300 text-xs leading-tight">Security Leader</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.05, duration: 0.4 }}
                className="absolute top-1/2 -translate-y-1/2 -right-8 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Cloud className="text-blue-300" size={22} />
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">Cloud</div>
                    <div className="text-gray-300 text-xs leading-tight">Architect</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute -bottom-2 -right-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Users className="text-blue-300" size={22} />
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">DevSecOps</div>
                    <div className="text-gray-300 text-xs leading-tight">Platform Lead</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl" />
      </div>

      <button
        onClick={() => scrollTo('impact')}
        aria-label="Scroll to Executive Impact"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 hover:text-blue-400 transition-colors"
      >
        <ChevronDown className="animate-bounce" size={24} />
      </button>
    </section>
  );
};

export default Hero;
