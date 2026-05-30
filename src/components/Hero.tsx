import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="hero-background relative min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 py-24 lg:py-28">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-300 text-xs tracking-[0.18em] uppercase">
              Technology &amp; Security Executive
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Lumban Sopian
            </h1>

            <p className="text-lg lg:text-xl text-blue-200 mb-8 leading-relaxed">
              CISO &nbsp;·&nbsp; Technology &amp; Security Executive &nbsp;·&nbsp;
              Cloud, DevSecOps &amp; Platform Transformation Leader
            </p>

            <p className="text-base lg:text-lg text-gray-300 max-w-3xl leading-relaxed mb-10">
              Security and Platform Executive with{' '}
              <span className="text-white font-semibold">18+ years</span> of
              experience delivering secure, scalable, and compliant technology
              platforms across Banking, Fintech, and Enterprise environments.
              Proven track record leading cloud transformation, Zero Trust
              adoption, DevSecOps modernisation, and regulatory compliance
              while managing large-scale engineering organisations and
              multi-million-dollar technology budgets.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('impact')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
              >
                View Executive Impact
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 border border-blue-400/50 text-blue-300 hover:bg-blue-600/10 hover:border-blue-300 font-semibold rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <img
              src="/resume/images/professional-headshot.jpg"
              alt="Lumban Sopian"
              loading="eager"
              className="w-64 h-64 xl:w-72 xl:h-72 object-cover rounded-md border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
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
