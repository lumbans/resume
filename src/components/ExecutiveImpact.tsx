import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  DollarSign,
  ShieldCheck,
  TrendingDown,
  Activity,
  Server,
  FileCheck,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface KPI {
  icon: React.ReactNode;
  value: string;
  label: string;
  context: string;
  color: string;
}

const KPIS: KPI[] = [
  {
    icon: <Briefcase size={22} />,
    value: '18+',
    label: 'Years Experience',
    context: 'Across Banking, Fintech, and Enterprise',
    color: 'text-blue-400',
  },
  {
    icon: <Users size={22} />,
    value: '70+',
    label: 'Engineers Led',
    context: 'Peak organisational scope',
    color: 'text-orange-400',
  },
  {
    icon: <DollarSign size={22} />,
    value: '$5M+',
    label: 'Annual Budget',
    context: 'Current security & technology P&L',
    color: 'text-green-400',
  },
  {
    icon: <ShieldCheck size={22} />,
    value: '40%',
    label: 'Security Incident Reduction',
    context: 'Enterprise security programme',
    color: 'text-red-400',
  },
  {
    icon: <TrendingDown size={22} />,
    value: '30%',
    label: 'Cloud Cost Savings',
    context: 'Architecture & FinOps initiatives',
    color: 'text-emerald-400',
  },
  {
    icon: <Activity size={22} />,
    value: '50%',
    label: 'MTTR Improvement',
    context: 'Incident response & observability',
    color: 'text-amber-400',
  },
  {
    icon: <Server size={22} />,
    value: '99.95%',
    label: 'Service Availability',
    context: 'Critical banking platforms',
    color: 'text-sky-400',
  },
  {
    icon: <FileCheck size={22} />,
    value: 'Zero',
    label: 'Critical Audit Findings',
    context: 'OJK · PCI DSS · ISO 27001',
    color: 'text-purple-400',
  },
];

const ExecutiveImpact = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="impact" className="py-20 bg-slate-900/60">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.2em] uppercase mb-3">
            Executive Impact
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Measurable outcomes from technology &amp; security leadership
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Quantified results delivered across enterprise banking, fintech, and
            regional engineering operations — spanning organisational leadership,
            governance, and platform transformation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className={`${kpi.color} mb-4`}>{kpi.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{kpi.value}</div>
              <div className="text-sm font-semibold text-gray-200 mb-1">{kpi.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{kpi.context}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveImpact;
