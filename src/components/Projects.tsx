import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChevronDown,
  Target,
  Compass,
  Layers,
  TrendingUp,
  Lightbulb,
  CreditCard,
  ShieldCheck,
  Network,
  Wallet
} from 'lucide-react';

interface ProjectMetric {
  value: string;
  label: string;
}

interface Project {
  id: string;
  title: string;
  context: string;
  category: string;
  icon: React.ReactNode;
  problem: string;
  objective: string;
  solution: string[];
  technologies: string[];
  outcomes: ProjectMetric[];
  lessons: string;
}

/**
 * Featured strategic projects, framed as executive case studies
 * (Problem → Objective → Solution → Outcome → Lessons). Figures are drawn
 * from real roles documented elsewhere on the site — no invented numbers.
 */
const projects: Project[] = [
  {
    id: 'payments-scale',
    title: 'National Digital-Payments Platform Scale-Up',
    context: 'PT Fintek Karya Nusantara (LinkAja)',
    category: 'Platform Engineering',
    icon: <CreditCard size={24} />,
    problem:
      'A legacy payment infrastructure could not absorb explosive user growth. Release cadence was slow, operations were largely manual, and downtime risk threatened a nationally critical service.',
    objective:
      'Modernize to a cloud-native, observable platform able to scale past 50M+ users while improving resilience and accelerating delivery — and build the engineering organization to operate it.',
    solution: [
      'Re-architected to containerized microservices on Kubernetes (AWS EKS) with Helm-based release management',
      'Implemented end-to-end CI/CD with GitLab CI to standardize and accelerate deployments',
      'Stood up proactive monitoring and incident response (SRE practices) for early detection and fast recovery',
      'Designed the org across SRE, QA, Automation, and Monitoring — scaling the team to 70+ professionals'
    ],
    technologies: ['Kubernetes', 'AWS EKS', 'GitLab CI', 'Helm', 'SRE', 'Microservices'],
    outcomes: [
      { value: '50M+', label: 'Users served' },
      { value: '300%', label: 'User growth supported' },
      { value: '35%', label: 'Downtime reduction' },
      { value: '18 mo', label: 'Full migration' }
    ],
    lessons:
      'Platform modernization and organizational design must evolve together. Observability is not an add-on — it is the prerequisite that makes operating at national scale sustainable.'
  },
  {
    id: 'zero-trust-bank',
    title: 'Zero Trust & DevSecOps in Regulated Banking',
    context: 'PT Bank Multiarta Sentosa Tbk',
    category: 'Security Leadership',
    icon: <ShieldCheck size={24} />,
    problem:
      'A growing threat surface met strict OJK and PCI DSS obligations, while security was perceived as a delivery bottleneck slowing the business down.',
    objective:
      'Embed security directly into the delivery pipeline, satisfy regulators with auditable controls, and sustain availability for critical banking services.',
    solution: [
      'Established a Zero Trust Architecture framework across critical banking systems',
      'Integrated automated threat detection and DevSecOps controls into the delivery pipeline',
      'Built an IT GRC function aligning controls with PCI DSS and OJK regulatory requirements',
      'Directed 20+ professionals across InfoSec, QA, IT GRC, and DevOps to own security posture'
    ],
    technologies: ['Zero Trust', 'DevSecOps', 'PCI DSS', 'OJK Compliance', 'Threat Detection'],
    outcomes: [
      { value: '40%', label: 'Fewer security incidents' },
      { value: '99.95%', label: 'Service availability' },
      { value: '100%', label: 'External audits passed' },
      { value: '20+', label: 'Specialists directed' }
    ],
    lessons:
      'Automated, auditable controls reconcile the apparent tension between speed and compliance. Security embedded in the pipeline becomes an enabler of delivery, not a gate against it.'
  },
  {
    id: 'cloud-network-modernization',
    title: 'Enterprise Cloud & Network Modernization',
    context: 'Cross-organization · CDN & Core Network',
    category: 'Cloud Architecture',
    icon: <Network size={24} />,
    problem:
      'A legacy Akamai CDN and Direct Connect VGW network introduced latency, heavy manual effort, and limited scalability for a critical banking environment.',
    objective:
      'Reduce latency and operational cost and improve network performance — with zero downtime during the transition.',
    solution: [
      'Migrated 100+ assets from Akamai to AWS CloudFront with DNS cut-over to Route 53',
      'Re-architected core connectivity from Direct Connect VGW to AWS Transit Gateway',
      'Codified the target state in Terraform for repeatable, reviewable infrastructure',
      'Executed a blue-green strategy to guarantee continuity for live banking traffic'
    ],
    technologies: ['AWS CloudFront', 'Route 53', 'Transit Gateway', 'Terraform', 'Blue-Green'],
    outcomes: [
      { value: '25%', label: 'Latency reduction' },
      { value: '60%', label: 'Less manual effort' },
      { value: '20%', label: 'Network performance' },
      { value: '0', label: 'Downtime' }
    ],
    lessons:
      'Blue-green cut-over combined with infrastructure-as-code turns high-stakes migrations into low-risk, reversible operations — essential when the workload cannot pause.'
  },
  {
    id: 'finops-optimization',
    title: 'Cloud Cost Optimization as an Operating Discipline',
    context: 'Lyte Ventures Pte. Ltd',
    category: 'Cloud & FinOps',
    icon: <Wallet size={24} />,
    problem:
      'Cloud spend was climbing at 1M+ daily active users, while slow manual provisioning constrained the pace of delivery.',
    objective:
      'Cut cloud cost without sacrificing performance, and dramatically shorten provisioning time — while meeting SOC 2 obligations.',
    solution: [
      'Built Infrastructure-as-Code templates (AWS CDK with C#) for automated, consistent provisioning',
      'Implemented automated resource scaling policies tuned to real demand',
      'Embedded DevSecOps best practices to achieve and sustain SOC 2 compliance',
      'Operationalized cost visibility so efficiency became a continuous practice, not a cleanup'
    ],
    technologies: ['AWS CDK', 'C#', 'Infrastructure as Code', 'Auto-scaling', 'SOC 2'],
    outcomes: [
      { value: '30%', label: 'Cloud cost reduction' },
      { value: '4h → 30m', label: 'Provisioning time' },
      { value: '1M+', label: 'Daily active users' },
      { value: 'SOC 2', label: 'Compliance achieved' }
    ],
    lessons:
      'Cost efficiency is an operating model owned by leadership, not a quarterly exercise. Automation that ties spend to real demand keeps savings durable.'
  }
];

const ProjectCard: React.FC<{ project: Project; index: number; inView: boolean }> = ({
  project,
  index,
  inView
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="bg-white/80 dark:bg-navy-light/70 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-5 gap-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600">
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <div className="text-blue-600 font-medium text-sm mt-1">{project.context}</div>
            </div>
          </div>
          <span className="flex-shrink-0 px-3 py-1 bg-blue-600/20 text-blue-600 rounded-full text-xs border border-blue-600/30 whitespace-nowrap">
            {project.category}
          </span>
        </div>

        {/* Problem & Objective (always visible) */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-100/50 dark:bg-white/5 rounded-lg p-4 border border-slate-200/50 dark:border-white/10">
            <div className="flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-white mb-2">
              <Target size={16} className="text-violet-600" />
              <span>Problem</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="bg-slate-100/50 dark:bg-white/5 rounded-lg p-4 border border-slate-200/50 dark:border-white/10">
            <div className="flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-white mb-2">
              <Compass size={16} className="text-indigo-600" />
              <span>Objective</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>

        {/* Outcome metrics (always visible) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {project.outcomes.map((o) => (
            <div
              key={o.label}
              className="text-center bg-gradient-to-br from-blue-600/10 to-violet-600/10 rounded-lg p-4 border border-blue-500/20"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {o.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{o.label}</div>
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
        >
          <span>{expanded ? 'Hide solution & lessons' : 'View solution architecture & lessons'}</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Expandable detail */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-slate-200/50 dark:border-white/10 space-y-6">
                {/* Solution */}
                <div>
                  <div className="flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    <Layers size={16} className="text-cyan-600" />
                    <span>Solution Architecture</span>
                  </div>
                  <ul className="space-y-2">
                    {project.solution.map((s, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-slate-200/50 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded text-xs border border-slate-300/30 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lessons */}
                <div className="bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-sm font-semibold text-blue-600 mb-1">Lessons Learned</div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {project.lessons}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-20 bg-white/50 dark:bg-navy-light/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Strategic initiatives framed as case studies — the problem, the objective,
            the architecture, the outcome, and what each one taught.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center space-x-2 text-slate-500 dark:text-slate-400">
            <TrendingUp size={18} className="text-blue-600" />
            <span className="text-sm">
              Additional case studies available on request during conversations.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
