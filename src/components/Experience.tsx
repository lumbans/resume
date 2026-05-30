import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Role {
  company: string;
  title: string;
  duration: string;
  outcomes: string[];
  scope: string;
  technology: string;
}

const ROLES: Role[] = [
  {
    company: 'PT Bank Multiarta Sentosa Tbk',
    title: 'CISO / Head of Information Security & Application Management',
    duration: 'Nov 2023 – Present',
    outcomes: [
      'Reduced security incidents by 40% through enterprise-grade DevSecOps and automated threat detection.',
      'Achieved 99.95% availability for critical banking platforms via Zero Trust adoption and platform hardening.',
      'Closed external audits with zero critical findings across PCI DSS and OJK regulatory frameworks.',
      'Executed enterprise network migration from Direct Connect VGW to Transit Gateway, improving performance by 20%.',
    ],
    scope:
      '20+ professionals across Infosec, QA, IT GRC, and DevOps · $5M+ annual security & technology budget · Board and audit-committee reporting',
    technology:
      'Zero Trust Architecture · Enterprise DevSecOps · AWS Transit Gateway · PCI DSS · OJK Compliance · ISMS',
  },
  {
    company: 'Lyte Ventures Pte. Ltd',
    title: 'Principal DevOps Engineer',
    duration: 'Oct 2022 – Sep 2023',
    outcomes: [
      'Reduced cloud operational costs by 30% through architectural optimisation and automated scaling policies.',
      'Drove SOC 2 readiness, embedding DevSecOps practice into the engineering lifecycle.',
      'Cut provisioning time from 4 hours to 30 minutes via Infrastructure-as-Code templating.',
    ],
    scope:
      'Cloud-native architecture for a regional fintech platform serving 1M+ daily active users',
    technology:
      'AWS CDK (C#) · Infrastructure as Code · SOC 2 · DevSecOps tooling',
  },
  {
    company: 'PT Bank Jago Tbk',
    title: 'Head of IT Infrastructure & Service Management',
    duration: 'Oct 2021 – Sep 2022',
    outcomes: [
      'Sustained 99.9% uptime for critical banking services through hybrid-infrastructure leadership and server-room migrations.',
      'Improved disaster-recovery posture by 25% via simulation-driven resilience programme.',
      'Rolled out enterprise endpoint protection and DLP across the organisation.',
    ],
    scope:
      'Hybrid on-premise and cloud infrastructure · acted as Head of IT Security · 2M+ daily active users supported',
    technology:
      'VMware · GCP · GKE · Trend Micro DLP & Endpoint Protection · SolarWinds · Cloudflare',
  },
  {
    company: 'PT Fintek Karya Nusantara (LinkAja)',
    title: 'VP, DevOps Division Head',
    duration: 'Aug 2019 – Oct 2021',
    outcomes: [
      'Led complete digital payment platform migration and CI/CD modernisation, supporting 300% user growth.',
      'Reduced platform downtime by 35% through proactive observability and automated incident response.',
      'Delivered end-to-end transformation in 18 months for a platform serving 50M+ users.',
    ],
    scope:
      '70+ professionals across SRE, QA, Automation Engineering, and Monitoring · $10M+ annual infrastructure budget · Executive committee membership',
    technology:
      'GitLab CI · AWS EKS · Kubernetes · Helm · SRE practice · Microservices',
  },
  {
    company: 'Grab',
    title: 'DevOps Engineering Manager',
    duration: 'Jun 2016 – Jul 2019',
    outcomes: [
      'Migrated 600+ workloads from on-premise infrastructure to AWS using Terraform and Ansible.',
      'Cut deployment time from hours to minutes via modernised CI/CD pipelines.',
      'Introduced Kubernetes adoption across regional microservices platforms to improve scalability and operational efficiency.',
    ],
    scope:
      '25-member DevOps team supporting regional engineering operations across Southeast Asia',
    technology:
      'AWS · Terraform · Ansible · Kubernetes · Regional microservices platforms',
  },
  {
    company: 'Earlier Infrastructure & DevOps Engineering Roles',
    title: 'Engineering, Systems, and Infrastructure Foundations',
    duration: '2007 – 2015',
    outcomes: [
      'Built the operational foundation — Linux, networking, virtualisation, and early cloud experience — that underwrites later executive scope.',
    ],
    scope:
      'Multiple infrastructure and DevOps roles across enterprise and service-provider environments',
    technology: 'Linux · Networking · Virtualisation · Early-generation cloud platforms',
  },
];

const Experience = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-blue-400 text-xs tracking-[0.18em] uppercase mb-3">
            Career Highlights
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Eighteen years of technology and security leadership
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Executive and senior engineering mandates across regulated banking,
            regional fintech, and enterprise platform organisations.
          </p>
        </motion.div>

        <div className="space-y-6">
          {ROLES.map((role, i) => (
            <motion.article
              key={role.company}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 lg:p-8"
            >
              <div className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-10">
                <header>
                  <h3 className="text-xl font-bold text-white mb-1 leading-snug">
                    {role.title}
                  </h3>
                  <div className="text-blue-400 font-medium mb-2">{role.company}</div>
                  <div className="text-sm text-gray-500">{role.duration}</div>
                </header>

                <div className="space-y-5">
                  <div>
                    <div className="text-xs tracking-[0.18em] uppercase text-blue-400 mb-3">
                      Key Business Outcomes
                    </div>
                    <ul className="space-y-2.5">
                      {role.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-gray-300 leading-relaxed">
                          <span className="text-blue-400 mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-700/50">
                    <div>
                      <div className="text-xs tracking-[0.18em] uppercase text-blue-400 mb-2">
                        Leadership Scope
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{role.scope}</p>
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.18em] uppercase text-blue-400 mb-2">
                        Technology Impact
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{role.technology}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
