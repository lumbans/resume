import { motion } from 'framer-motion';
import { Cloud, Server, Code, ShieldCheck, Activity } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Domain {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const DOMAINS: Domain[] = [
  {
    icon: <Cloud size={22} />,
    title: 'Cloud Platforms',
    items: ['AWS', 'GCP'],
  },
  {
    icon: <Server size={22} />,
    title: 'Platform Engineering',
    items: ['Kubernetes', 'EKS', 'GKE', 'Docker', 'Istio'],
  },
  {
    icon: <Code size={22} />,
    title: 'Infrastructure as Code',
    items: ['Terraform', 'AWS CDK', 'Ansible'],
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'DevSecOps',
    items: ['GitOps', 'CI/CD', 'Policy as Code'],
  },
  {
    icon: <Activity size={22} />,
    title: 'Observability',
    items: ['Grafana', 'Prometheus', 'ELK', 'Datadog'],
  },
];

const Expertise = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="expertise" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.18em] uppercase mb-3">
            Architecture &amp; Technology Expertise
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Domains under direct architectural responsibility
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Capability areas where I set platform and infrastructure direction at
            architecture and programme level.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {DOMAINS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-slate-900/50 border border-slate-700/60 rounded-lg p-6"
            >
              <div className="text-blue-400 mb-4">{d.icon}</div>
              <h3 className="text-base font-semibold text-white mb-3">{d.title}</h3>
              <ul className="space-y-1.5">
                {d.items.map((item) => (
                  <li key={item} className="text-sm text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
