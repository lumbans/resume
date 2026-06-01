import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Linkedin } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  /** Optional: where the recommendation is published, e.g. a LinkedIn URL */
  source?: string;
}

/**
 * Populate with REAL recommendations only (e.g. copied from LinkedIn with the
 * person's permission). Leave empty to show the LinkedIn call-to-action instead.
 * Example shape:
 *   {
 *     quote: 'Lumban rebuilt our security posture without slowing delivery...',
 *     name: 'Jane Doe',
 *     title: 'CTO, Example Bank',
 *     source: 'https://www.linkedin.com/in/lumbans'
 *   }
 */
const testimonials: Testimonial[] = [
  {
    quote: `Lumban's tagline describes him as "Just an ordinary person", but he certainly anything but. Lumban is smart, driven and tenacious. I would often get an email or IM from him at odd hours, telling me that he'd finally worked out how to fix an issue or roll out a new system. He's been instrumental in helping us move and manage our services in AWS. I'm sorry to see him go, but wish him all the best for the future. I hope one day we'll work together again.`,
    name: 'Aaron Chipper',
    title: 'CTO & Co-Founder at FrankieOne'
  },
  {
    quote: `Lumban has great grasp of Unix (namely Linux) systems and networks, and helped Multiply with the full automation of its server configuration and application deployments. Additionally, he worked (to great effect!) with the devs and other system administrators to keep the Multiply up and operational, even while under extreme loads.`,
    name: 'Kenneth Shaw',
    title: 'Former CTO, Brankas & Multiply.com'
  },
  {
    quote: `Lumban is a very high skilled DevOps engineer. We worked together in Smartfren to setup Continuous Delivery process in the company. He like to share his knowledge to others. I have learn so much from him.`,
    name: 'Chrystiadi Harris',
    title: 'AVP of Engineering at Tokopedia'
  },
  {
    quote: `I couldn't be more excited to recommend my friend, Lumban Sopian, for his incredible skills as a DevOps engineer. If you're looking for someone who truly knows the ins and outs of AWS, Lumban is your go-to person. While we worked together, Lumban consistently impressed me with his ability to streamline processes, troubleshoot issues, and find out-of-the-box solutions to any challenge. He's a natural problem solver with a positive attitude that's absolutely contagious.`,
    name: 'Ferbianto',
    title: 'AI Native Engineer | Full-stack Software Engineer'
  }
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="recommendations" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">Recommendations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Endorsements from leaders, peers, and teams across banking, fintech, and
            technology.
          </p>
        </motion.div>

        {hasTestimonials ? (
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name + index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 flex flex-col"
              >
                <Quote className="text-blue-400 mb-4" size={28} />
                <p className="text-gray-200 leading-relaxed mb-6 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-blue-400 text-sm">{t.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 rounded-2xl p-10 border border-indigo-500/30"
          >
            <Quote className="mx-auto text-blue-400 mb-4" size={36} />
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Colleagues, executives, and engineering teams I&rsquo;ve worked with have
              shared recommendations on LinkedIn. References are available on request.
            </p>
            <a
              href="https://www.linkedin.com/in/lumbans"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-900/30"
            >
              <Linkedin size={18} />
              <span>Read recommendations on LinkedIn</span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
