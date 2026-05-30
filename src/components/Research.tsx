import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FOCUS_AREAS = [
  'Zero Trust Architecture',
  'DevSecOps Transformation',
  'Attack Surface Management',
  'Cloud Security Governance',
  'Banking Cybersecurity',
  'Healthcare Platform Security',
  'Security Governance in Regulated Industries',
];

const ACADEMIC = [
  {
    degree: 'Master of Computer Science',
    institution: 'Binus University',
    status: 'In Progress',
  },
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'University of the People',
    status: 'In Progress',
  },
];

const Research = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="research" className="py-20 bg-slate-900/60">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.18em] uppercase mb-3">
            Research &amp; Thought Leadership
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Current research and academic focus
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Areas of intellectual focus alongside executive practice — concentrated
            on cybersecurity governance, cloud-native security, DevSecOps maturity,
            attack surface management, and technology risk management within highly
            regulated environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800/40 border border-slate-700/60 rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-400">
                <BookOpen size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">Current Focus Areas</h3>
            </div>
            <ul className="space-y-3">
              {FOCUS_AREAS.map((f) => (
                <li key={f} className="flex gap-3 text-gray-300">
                  <span className="text-blue-400 mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/40 border border-slate-700/60 rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-400">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">Academic Development</h3>
            </div>
            <ul className="space-y-4">
              {ACADEMIC.map((a) => (
                <li key={a.degree} className="border-l-2 border-blue-500/40 pl-4">
                  <div className="text-white font-medium">{a.degree}</div>
                  <div className="text-sm text-blue-400">{a.institution}</div>
                  <div className="text-xs text-gray-500 mt-1">{a.status}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
