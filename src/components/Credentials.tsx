import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Cert {
  name: string;
  issuer: string;
  year: string;
  domain: string;
}

interface Degree {
  degree: string;
  institution: string;
  period: string;
  status: 'In Progress' | 'Completed';
  positioning: string;
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

const DEGREES: Degree[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'Binus University',
    period: '2025 – Present',
    status: 'In Progress',
    positioning:
      'Advanced technical depth — software engineering, distributed systems, and applied security research.',
  },
  {
    degree: 'Master of Business Administration (MBA)',
    institution: 'University of the People',
    period: 'In Progress',
    status: 'In Progress',
    positioning:
      'Executive development — business strategy, organisational leadership, financial management, and governance.',
  },
  {
    degree: 'Bachelor of Information System',
    institution: 'Nusa Mandiri University',
    period: '2021 – 2024',
    status: 'Completed',
    positioning:
      'Information systems management, database design, and business technology integration.',
  },
  {
    degree: 'Associate Degree in Information & Communication Technologies',
    institution: 'Bina Sarana Informatika University',
    period: 'Graduated 2007',
    status: 'Completed',
    positioning: 'Foundational ICT, networking, and infrastructure engineering.',
  },
];

const Credentials = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="credentials" className="py-20 bg-slate-900/60">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.2em] uppercase mb-3">
            Credentials &amp; Education
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Executive, technical, and academic foundation
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Professional certifications across security leadership, banking risk,
            and cloud architecture — alongside active postgraduate study in
            technical and executive disciplines.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-yellow-400" size={22} />
            <h3 className="text-lg font-semibold text-white">Professional Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {CERTS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 flex gap-4 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-blue-400 shrink-0 mt-1">
                  <Award size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-base font-semibold text-white leading-snug">{c.name}</h4>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{c.year}</span>
                  </div>
                  <div className="text-sm text-blue-400 mb-1">{c.issuer}</div>
                  <div className="text-xs text-gray-500">{c.domain}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-blue-400" size={22} />
            <h3 className="text-lg font-semibold text-white">Academic Background</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {DEGREES.map((d, i) => (
              <motion.div
                key={d.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.05 + 0.1 }}
                className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 shrink-0 mt-1">
                    <GraduationCap size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-base font-semibold text-white">{d.degree}</h4>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          d.status === 'In Progress'
                            ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                            : 'bg-slate-700/60 text-gray-300 border border-slate-600/40'
                        }`}
                      >
                        {d.status}
                      </span>
                    </div>
                    <div className="text-sm text-blue-400 mb-1">{d.institution}</div>
                    <div className="text-xs text-gray-500 mb-3">{d.period}</div>
                    <p className="text-sm text-gray-400 leading-relaxed">{d.positioning}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
