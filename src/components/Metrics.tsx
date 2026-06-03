import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Briefcase,
  Users,
  DollarSign,
  Globe,
  ShieldCheck,
  TrendingDown,
  Cloud,
  Timer
} from 'lucide-react';
import CountUp from './CountUp';

interface Metric {
  icon: React.ReactNode;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
}

/**
 * Executive impact dashboard. Figures use peak ("up to") framing consistent
 * with the rest of the site — career peaks for team/budget, real outcome
 * metrics for the rest. No invented numbers.
 */
const metrics: Metric[] = [
  {
    icon: <Briefcase size={22} />,
    to: 18,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'Banking · Fintech · Cloud'
  },
  {
    icon: <Users size={22} />,
    to: 70,
    suffix: '+',
    label: 'Engineers Led',
    sublabel: 'Peak org: SRE, QA, DevOps'
  },
  {
    icon: <DollarSign size={22} />,
    to: 10,
    prefix: '$',
    suffix: 'M+',
    label: 'Budget Managed',
    sublabel: 'Peak annual infrastructure'
  },
  {
    icon: <Globe size={22} />,
    to: 50,
    suffix: 'M+',
    label: 'Users Served',
    sublabel: 'National digital payments'
  },
  {
    icon: <ShieldCheck size={22} />,
    to: 99.95,
    decimals: 2,
    suffix: '%',
    label: 'Service Availability',
    sublabel: 'Critical banking services'
  },
  {
    icon: <TrendingDown size={22} />,
    to: 40,
    suffix: '%',
    label: 'Fewer Incidents',
    sublabel: 'Via DevSecOps & Zero Trust'
  },
  {
    icon: <Cloud size={22} />,
    to: 30,
    suffix: '%',
    label: 'Cloud Cost Saved',
    sublabel: 'Sustained FinOps discipline'
  },
  {
    icon: <Timer size={22} />,
    to: 50,
    suffix: '%',
    label: 'MTTR Improvement',
    sublabel: 'Faster incident recovery'
  }
];

const Metrics: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="metrics"
      className="py-20 bg-slate-100/50 dark:bg-navy-light/20 border-y border-slate-200/50 dark:border-white/10"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Executive Impact{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              at a Glance
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A snapshot of measurable outcomes delivered across 18+ years of
            technology, security, and platform leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
              className="group bg-white/80 dark:bg-navy-light/70 backdrop-blur-md rounded-2xl p-6 border border-slate-200/50 dark:border-white/10 hover:border-blue-500/30 hover:shadow-lg hover:shadow-slate-300/40 dark:hover:shadow-black/30 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                <CountUp
                  to={metric.to}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </div>
              <div className="text-slate-900 dark:text-white font-semibold">
                {metric.label}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {metric.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-slate-500 dark:text-slate-400 mt-10 max-w-2xl mx-auto"
        >
          Team and budget figures reflect peak career scope; outcome metrics reflect
          results delivered in specific roles. Detailed in the experience and projects below.
        </motion.p>
      </div>
    </section>
  );
};

export default Metrics;
