import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Degree {
  degree: string;
  institution: string;
  period: string;
  status: 'In Progress' | 'Completed';
  positioning: string;
}

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

const Education = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="education" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.18em] uppercase mb-3">
            Education
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Continuous executive and technical development
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Active postgraduate study in both technical and executive disciplines,
            building on a foundation in information systems and ICT.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {DEGREES.map((d, i) => (
            <motion.div
              key={d.degree}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-slate-900/50 border border-slate-700/60 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-400 shrink-0 mt-1">
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-white">{d.degree}</h3>
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
    </section>
  );
};

export default Education;
