import { motion } from 'framer-motion';
import {
  Users,
  ClipboardCheck,
  DollarSign,
  Building2,
  AlertTriangle,
  ShieldCheck,
  FileCheck,
  Target,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Area {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const AREAS: Area[] = [
  {
    icon: <Users size={22} />,
    title: 'Cross-Functional Team Leadership',
    description:
      'Built and led engineering organisations spanning SRE, QA, GRC, and DevSecOps — up to 70+ across four divisions.',
    color: 'text-blue-400',
  },
  {
    icon: <ClipboardCheck size={22} />,
    title: 'Board-Level Reporting',
    description:
      'Regular reporting to executive leadership and audit committees on security posture, technology risk, and strategic initiatives.',
    color: 'text-purple-400',
  },
  {
    icon: <DollarSign size={22} />,
    title: 'Budget Ownership',
    description:
      'Direct ownership of annual technology and security budgets up to $10M+, with consistent delivery against P&L commitments.',
    color: 'text-green-400',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Vendor Management',
    description:
      'Strategic relationships with cloud, security, and platform vendors — covering contract, performance, and supply-chain risk.',
    color: 'text-orange-400',
  },
  {
    icon: <AlertTriangle size={22} />,
    title: 'Risk Governance',
    description:
      'Enterprise risk frameworks, technology risk appetite, and treatment plans aligned with bank-wide risk management.',
    color: 'text-amber-400',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Security Governance',
    description:
      'Information security strategy, policy architecture, and ISMS leadership under Bank Indonesia and OJK supervision.',
    color: 'text-red-400',
  },
  {
    icon: <FileCheck size={22} />,
    title: 'Compliance Leadership',
    description:
      'Programme ownership for PCI DSS, ISO 27001, OJK, and Bank Indonesia — external audits closed with zero critical findings.',
    color: 'text-sky-400',
  },
  {
    icon: <Target size={22} />,
    title: 'Technology Strategy',
    description:
      'Multi-year roadmaps for cloud, platform, and security — translating business strategy into executable engineering programmes.',
    color: 'text-fuchsia-400',
  },
];

const Leadership = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="leadership" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.2em] uppercase mb-3">
            Core Leadership Areas
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How I operate as an executive
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Eight disciplines that consistently appear across my CISO,
            VP Engineering, and Head-of-Infrastructure mandates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className={`${area.color} mb-4`}>{area.icon}</div>
              <h3 className="text-base font-semibold text-white mb-2">{area.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
