import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  ShieldCheck,
  Cloud,
  Server,
  GitBranch,
  ChevronDown
} from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period?: string;
  icon: React.ReactNode;
  achievements: string[];
  technologies: string[];
  metrics: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Senior Vice President – Division Head",
    company: "PT. Bank Multiarta Sentosa",
    period: "Sep 2023 – Present",
    icon: <ShieldCheck size={20} />,
    achievements: [
      "Own enterprise security and technology governance for a regulated bank, directing 20+ professionals across InfoSec, QA, IT GRC, and DevOps — accountable for security posture, regulatory standing, and operational resilience",
      "Reduced security incidents by 40% through implementing enterprise-grade DevSecOps practices and automated threat detection systems",
      "Orchestrated critical infrastructure migration from Direct Connect VGW to Transit Gateway, improving network performance by 20%",
      "Established Zero Trust Architecture framework, achieving 99.95% system availability for critical banking services",
      "Implemented comprehensive compliance program covering PCI DSS and OJK regulations, passing all external security audits"
    ],
    technologies: ["DevSecOps", "Zero Trust Architecture", "AWS Transit Gateway", "PCI DSS", "Enterprise Security"],
    metrics: [
      { icon: <DollarSign className="text-blue-600" size={20} />, value: "$5M+", label: "Annual Security Budget" },
      { icon: <TrendingUp className="text-green-600" size={20} />, value: "40%", label: "Security Incidents Reduction" },
      { icon: <Shield className="text-green-600" size={20} />, value: "99.95%", label: "System Availability" }
    ]
  },
  {
    title: "Principal DevOps Engineer",
    company: "Lyte Ventures Pte. Ltd",
    period: "Oct 2022 – Oct 2023",
    icon: <Cloud size={20} />,
    achievements: [
      "Architected and implemented scalable cloud-native solutions using AWS CDK with C#, serving 1M+ daily active users",
      "Reduced cloud operational costs by 30% through infrastructure optimization and automated resource scaling policies",
      "Conducted comprehensive security assessments and implemented DevSecOps best practices, achieving SOC 2 compliance",
      "Designed Infrastructure as Code (IaC) templates for automated deployment, reducing provisioning time from 4 hours to 30 minutes"
    ],
    technologies: ["AWS CDK", "C#", "Infrastructure as Code", "DevSecOps", "SOC 2 Compliance"],
    metrics: [
      { icon: <Users className="text-blue-600" size={20} />, value: "1M+", label: "Daily Active Users" },
      { icon: <TrendingUp className="text-green-600" size={20} />, value: "30%", label: "Cost Reduction" },
      { icon: <DollarSign className="text-blue-600" size={20} />, value: "4h→30m", label: "Provisioning Time" }
    ]
  },
  {
    title: "VP - IT Service & Infrastructure Division Head",
    company: "PT Bank Jago Tbk",
    period: "Dec 2021 – Dec 2022",
    icon: <Server size={20} />,
    achievements: [
      "Managed hybrid infrastructure and led server room migrations as Head of IT Security, sustaining 99.9% uptime for critical banking services",
      "Coordinated disaster recovery simulations, improving system resilience by 25%",
      "Led the enterprise-wide rollout of Endpoint Protection and Data Loss Prevention (DLP)"
    ],
    technologies: ["InfoSec", "Trend Micro DLP & Endpoint Protection", "VMware", "SolarWinds", "GCP", "GKE", "Cloudflare"],
    metrics: [
      { icon: <Users className="text-blue-600" size={20} />, value: "2M+", label: "Daily Active Users" },
      { icon: <TrendingUp className="text-green-600" size={20} />, value: "30%", label: "Incident Reduction" },
      { icon: <DollarSign className="text-blue-600" size={20} />, value: "<1h", label: "Recovery Time" }
    ]
  },
  {
    title: "Vice President - DevOps Division Head",
    company: "PT Fintek Karya Nusantara (LinkAja)",
    period: "Aug 2019 – Oct 2021",
    icon: <GitBranch size={20} />,
    achievements: [
      "Directed a 70+ person engineering organization (SRE, QA, Automation, Monitoring) and a $10M+ infrastructure budget for a national digital-payments platform",
      "Implemented comprehensive CI/CD pipelines using GitLab CI, Helm Charts, and Kubernetes on AWS EKS, serving 50M+ users",
      "Improved system stability and reduced downtime by 35% through proactive monitoring and automated incident response",
      "Completed full digital payment platform migration and CI/CD implementation in 18 months, supporting 300% user growth"
    ],
    technologies: ["GitLab CI", "Kubernetes", "AWS EKS", "Helm Charts", "SRE", "Automation Engineering"],
    metrics: [
      { icon: <Users className="text-blue-600" size={20} />, value: "70+", label: "Team Members" },
      { icon: <DollarSign className="text-blue-600" size={20} />, value: "$10M+", label: "Annual Budget" },
      { icon: <TrendingUp className="text-blue-600" size={20} />, value: "50M+", label: "Users Served" }
    ]
  }
];

const ExperienceCard: React.FC<{
  experience: ExperienceItem;
  index: number;
  inView: boolean;
}> = ({ experience, index, inView }) => {
  const [expanded, setExpanded] = useState(false);
  const detailId = `experience-detail-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      className="relative pl-14 sm:pl-20 pb-12 last:pb-0"
    >
      {/* Node */}
      <div className="absolute left-5 sm:left-7 -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-white dark:bg-navy-light border-2 border-blue-500 flex items-center justify-center text-blue-600 shadow-md shadow-slate-300/50 dark:shadow-black/30 z-10">
        {experience.icon}
      </div>

      {/* Period badge */}
      {experience.period && (
        <div className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20 mb-3">
          <Calendar size={13} className="mr-1.5" />
          {experience.period}
        </div>
      )}

      {/* Card */}
      <div className="bg-white/80 dark:bg-navy-light/70 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-slate-200/50 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300">
        {/* Clickable header: Title + Company */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={detailId}
          className="w-full text-left group"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {experience.title}
          </h3>
          <div className="flex items-center justify-between gap-3 mt-1">
            <span className="text-blue-600 font-semibold group-hover:underline underline-offset-4 decoration-blue-400">
              {experience.company}
            </span>
            <span className="flex items-center gap-1.5 flex-shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-600 transition-colors">
              <span className="hidden sm:inline">{expanded ? 'Hide details' : 'View details'}</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </span>
          </div>
        </button>

        {/* Expandable detail */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={detailId}
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-5 border-t border-slate-200/50 dark:border-white/10">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {experience.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="bg-slate-100/50 dark:bg-white/5 rounded-lg p-3 border border-slate-200/50 dark:border-white/10"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {metric.icon}
                        <span className="text-slate-900 dark:text-white font-bold">{metric.value}</span>
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="space-y-3 mb-6">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-600 rounded-full text-xs border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05
  });

  return (
    <section id="experience" className="py-20 bg-slate-100/50 dark:bg-navy-light/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            18+ years of strategic leadership in IT, driving digital transformation
            and innovation across financial institutions and technology companies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical rail */}
          <div
            aria-hidden="true"
            className="absolute left-5 sm:left-7 -translate-x-1/2 top-1 bottom-1 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 opacity-60 dark:opacity-50"
          />

          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} inView={inView} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 rounded-2xl p-8 border border-indigo-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Selectively exploring executive technology leadership mandates
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Open to senior leadership roles and board-level advisory where security, cloud, and platform
              engineering are central to the business strategy.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-900/30"
            >
              Start a Conversation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
