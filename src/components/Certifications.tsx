import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Cert {
  name: string;
  issuer: string;
  year: string;
  domain: string;
}

const CERTS: Cert[] = [
  {
    name: 'Chief Information Security Officer (C|CISO)',
    issuer: 'EC-Council',
    year: '2024',
    domain: 'Information Security Leadership',
  },
  {
    name: 'Indonesia Banking Risk Management Qualification (BMSR Jenjang 5)',
    issuer: 'Lembaga Sertifikasi Profesi Perbankan',
    year: '2024',
    domain: 'Banking Risk & Regulatory',
  },
  {
    name: 'System Analyst',
    issuer: 'BNSP — Badan Nasional Sertifikasi Profesi',
    year: '2024',
    domain: 'National Professional Certification',
  },
  {
    name: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    year: '2026',
    domain: 'Cloud Architecture',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2021',
    domain: 'Cloud Foundations',
  },
];

const Certifications = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="certifications" className="py-20 bg-slate-900/60">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.18em] uppercase mb-3">
            Certifications
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Executive and technical credentials
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Credentials spanning security leadership, banking risk, cloud
            architecture, and national professional standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-slate-800/40 border border-slate-700/60 rounded-lg p-6 flex gap-4"
            >
              <div className="text-blue-400 shrink-0 mt-1">
                <Award size={22} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-white leading-snug">{c.name}</h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{c.year}</span>
                </div>
                <div className="text-sm text-blue-400 mb-1">{c.issuer}</div>
                <div className="text-xs text-gray-500">{c.domain}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
