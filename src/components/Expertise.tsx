import { motion } from 'framer-motion';
import { Cloud, Server, Code, ShieldCheck, Activity, Lock, Scale } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Domain {
  icon: React.ReactNode;
  title: string;
  items: string[];
  color: string;
}

const TECH_DOMAINS: Domain[] = [
  {
    icon: <Cloud size={22} />,
    title: 'Cloud Platforms',
    items: ['AWS', 'GCP'],
    color: 'text-sky-400',
  },
  {
    icon: <Server size={22} />,
    title: 'Platform Engineering',
    items: ['Kubernetes', 'EKS', 'GKE', 'Docker', 'Istio'],
    color: 'text-purple-400',
  },
  {
    icon: <Code size={22} />,
    title: 'Infrastructure as Code',
    items: ['Terraform', 'AWS CDK', 'Ansible'],
    color: 'text-green-400',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'DevSecOps',
    items: ['GitOps', 'CI/CD', 'Policy as Code'],
    color: 'text-blue-400',
  },
  {
    icon: <Activity size={22} />,
    title: 'Observability',
    items: ['Grafana', 'Prometheus', 'ELK', 'Datadog'],
    color: 'text-orange-400',
  },
];

const SECURITY_DOMAINS: Domain[] = [
  {
    icon: <Lock size={22} />,
    title: 'Security Architecture',
    items: [
      'Zero Trust Architecture',
      'Cloud Security Posture Management (CSPM)',
      'Identity & Access Management (IAM)',
      'Security Information & Event Management (SIEM)',
      'Data Loss Prevention (DLP)',
      'Threat Intelligence',
    ],
    color: 'text-red-400',
  },
  {
    icon: <Scale size={22} />,
    title: 'Governance & Compliance',
    items: ['ISO/IEC 27001', 'PCI DSS', 'OJK Compliance', 'Bank Indonesia Compliance'],
    color: 'text-fuchsia-400',
  },
];

const Expertise = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="expertise" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.2em] uppercase mb-3">
            Architecture, Technology &amp; Security Expertise
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Domains under direct architectural responsibility
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Capability areas where I set platform, infrastructure, and security
            direction at architecture and programme level.
          </p>
        </motion.div>

        {/* Technology domains */}
        <div className="mb-12">
          <div className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-5">
            Technology Domains
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TECH_DOMAINS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className={`${d.color} mb-4`}>{d.icon}</div>
                <h3 className="text-base font-semibold text-white mb-3">{d.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {d.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-slate-800/60 text-gray-300 rounded-full text-xs border border-slate-600/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security & governance */}
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-5">
            Security &amp; Governance
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {SECURITY_DOMAINS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-7 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={d.color}>{d.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{d.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {d.items.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-300">
                      <span className="text-blue-400 mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
