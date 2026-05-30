import { motion } from 'framer-motion';
import { Lock, Scale } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SECURITY = [
  'Zero Trust Architecture',
  'Cloud Security Posture Management (CSPM)',
  'Identity & Access Management (IAM)',
  'Security Information & Event Management (SIEM)',
  'Data Loss Prevention (DLP)',
  'Threat Intelligence',
];

const GOVERNANCE = [
  'ISO/IEC 27001',
  'PCI DSS',
  'OJK Compliance',
  'Bank Indonesia Compliance',
];

const SecurityGovernance = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="security" className="py-20 bg-slate-900/60">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.18em] uppercase mb-3">
            Security &amp; Governance Expertise
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Programmes I run under regulator scrutiny
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Security architecture and compliance disciplines exercised in
            production across Indonesian banking and fintech.
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
                <Lock size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">Security Architecture</h3>
            </div>
            <ul className="space-y-3">
              {SECURITY.map((s) => (
                <li key={s} className="flex gap-3 text-gray-300">
                  <span className="text-blue-400 mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{s}</span>
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
                <Scale size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">Governance &amp; Compliance</h3>
            </div>
            <ul className="space-y-3">
              {GOVERNANCE.map((g) => (
                <li key={g} className="flex gap-3 text-gray-300">
                  <span className="text-blue-400 mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecurityGovernance;
