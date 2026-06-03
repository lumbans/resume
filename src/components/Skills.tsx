import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from 'recharts';
import {
  Cloud,
  Shield,
  Settings,
  Users,
  Code,
  Monitor
} from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

const shortTitle: Record<string, string> = {
  cloud: 'Cloud',
  devops: 'DevOps',
  security: 'Security',
  leadership: 'Leadership',
  monitoring: 'Monitoring',
  programming: 'Programming'
};

const tierValue = (level: number) => (level >= 90 ? 3 : level >= 80 ? 2 : 1);
const tierLabel = (v: number) =>
  v >= 2.5 ? 'Expert' : v >= 1.5 ? 'Advanced' : 'Proficient';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    icon: <Cloud size={24} />,
    description: 'Multi-cloud architecture and platform expertise',
    color: 'cyan',
    skills: [
      { name: 'AWS (EC2, S3, EKS, Lambda, CloudFormation)', level: 95, description: 'Advanced cloud architecture and service management' },
      { name: 'Google Cloud Platform (GCP)', level: 85, description: 'Multi-cloud implementation and migration' },
      { name: 'Multi-cloud Architecture', level: 90, description: 'Cross-platform integration and optimization' },
      { name: 'Hybrid Cloud Strategy', level: 88, description: 'On-premise to cloud transformation' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    icon: <Settings size={24} />,
    description: 'Continuous integration, deployment, and infrastructure automation',
    color: 'blue',
    skills: [
      { name: 'CI/CD (GitLab CI, Jenkins)', level: 92, description: 'Automated deployment pipelines' },
      { name: 'Infrastructure as Code (Terraform, Ansible)', level: 90, description: 'Automated infrastructure provisioning' },
      { name: 'Kubernetes (EKS/GKE)', level: 88, description: 'Container orchestration and management' },
      { name: 'Docker Containerization', level: 85, description: 'Application containerization and optimization' },
      { name: 'Helm Charts', level: 82, description: 'Kubernetes package management' }
    ]
  },
  {
    id: 'security',
    title: 'Security Leadership',
    icon: <Shield size={24} />,
    description: 'Enterprise security architecture and risk management',
    color: 'violet',
    skills: [
      { name: 'DevSecOps Implementation', level: 94, description: 'Security integrated development practices' },
      { name: 'Zero Trust Architecture', level: 90, description: 'Modern security framework implementation' },
      { name: 'Enterprise Risk Management', level: 88, description: 'Strategic risk assessment and mitigation' },
      { name: 'Compliance (ISO 27001, PCI DSS)', level: 92, description: 'Regulatory compliance and governance' },
      { name: 'Incident Response', level: 85, description: 'Security incident management and recovery' }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership & Strategy',
    icon: <Users size={24} />,
    description: 'Team leadership, strategic planning, and business alignment',
    color: 'indigo',
    skills: [
      { name: 'Digital Transformation', level: 95, description: 'Leading organizational technology transformation' },
      { name: 'Team Leadership (70+ members)', level: 92, description: 'Cross-functional team management' },
      { name: 'Budget Management ($10M+)', level: 90, description: 'Financial planning and resource allocation' },
      { name: 'Vendor Management', level: 88, description: 'Strategic vendor relationships and partnerships' },
      { name: 'IT Governance', level: 85, description: 'Technology strategy and policy development' }
    ]
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Observability',
    icon: <Monitor size={24} />,
    description: 'System monitoring, analytics, and performance optimization',
    color: 'teal',
    skills: [
      { name: 'Prometheus/Grafana', level: 88, description: 'Infrastructure and application monitoring' },
      { name: 'ELK Stack', level: 85, description: 'Log aggregation and analysis' },
      { name: 'Application Performance Monitoring', level: 82, description: 'Performance tracking and optimization' },
      { name: 'Infrastructure Monitoring', level: 90, description: 'System health and capacity planning' },
      { name: 'Log Analytics', level: 85, description: 'Data-driven operational insights' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Scripting',
    icon: <Code size={24} />,
    description: 'Development and automation scripting capabilities',
    color: 'sky',
    skills: [
      { name: 'Python', level: 85, description: 'Automation and data processing scripts' },
      { name: 'Bash/Shell', level: 90, description: 'System administration and automation' },
      { name: 'AWS CDK (C#)', level: 82, description: 'Infrastructure as code development' },
      { name: 'Infrastructure Automation', level: 88, description: 'Automated deployment and configuration' },
      { name: 'API Integration', level: 80, description: 'System integration and data exchange' }
    ]
  }
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('cloud');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-600/20', border: 'border-blue-500/30', text: 'text-blue-600', progress: 'bg-blue-500' },
      indigo: { bg: 'bg-indigo-600/20', border: 'border-indigo-500/30', text: 'text-indigo-600', progress: 'bg-indigo-500' },
      violet: { bg: 'bg-violet-600/20', border: 'border-violet-500/30', text: 'text-violet-600', progress: 'bg-violet-500' },
      cyan: { bg: 'bg-cyan-600/20', border: 'border-cyan-500/30', text: 'text-cyan-600', progress: 'bg-cyan-500' },
      teal: { bg: 'bg-teal-600/20', border: 'border-teal-500/30', text: 'text-teal-400', progress: 'bg-teal-500' },
      sky: { bg: 'bg-sky-600/20', border: 'border-sky-500/30', text: 'text-sky-600', progress: 'bg-sky-500' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getTier = (level: number) => {
    if (level >= 90) return { label: 'Expert', fraction: 100 };
    if (level >= 80) return { label: 'Advanced', fraction: 66 };
    return { label: 'Proficient', fraction: 33 };
  };

  const activeSkillCategory = skillCategories.find(cat => cat.id === activeCategory) || skillCategories[0];
  const colorClasses = getColorClasses(activeSkillCategory.color);

  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const axisColor = isDark ? '#cbd5e1' : '#334155';
  const gridColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.12)';
  const radiusTickColor = isDark ? '#94a3b8' : '#64748b';

  const radarData = skillCategories.map((cat) => ({
    domain: shortTitle[cat.id] ?? cat.title,
    score:
      Math.round(
        (cat.skills.reduce((sum, s) => sum + tierValue(s.level), 0) / cat.skills.length) * 10
      ) / 10
  }));

  return (
    <section id="skills" className="py-20 bg-white/50 dark:bg-navy-light/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive technical skills across cloud platforms, security, DevOps, 
            and leadership gained through 18+ years of hands-on experience
          </p>
        </motion.div>

        {/* Capability radar map (tier-based) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12 bg-white/80 dark:bg-navy-light/70 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-slate-200/50 dark:border-white/10"
        >
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Capability Map
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Relative depth across core domains — expressed as proficiency tiers,
                not self-rated percentages.
              </p>
              <ul className="space-y-2">
                {[
                  { tier: 'Expert', desc: 'Sets direction, owns outcomes at scale' },
                  { tier: 'Advanced', desc: 'Leads delivery hands-on with autonomy' },
                  { tier: 'Proficient', desc: 'Operates effectively and guides others' }
                ].map((t) => (
                  <li key={t.tier} className="flex items-start space-x-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex-shrink-0" />
                    <span className="text-sm">
                      <span className="font-semibold text-slate-900 dark:text-white">{t.tier}</span>
                      <span className="text-slate-500 dark:text-slate-400"> — {t.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <ResponsiveContainer width="100%" height={340}>
                <RadarChart data={radarData} outerRadius="72%">
                  <defs>
                    <linearGradient id="radarGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="55%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                  <PolarGrid stroke={gridColor} />
                  <PolarAngleAxis dataKey="domain" tick={{ fill: axisColor, fontSize: 13 }} />
                  <PolarRadiusAxis
                    domain={[0, 3]}
                    tickCount={4}
                    angle={90}
                    tick={{ fill: radiusTickColor, fontSize: 10 }}
                    tickFormatter={(v) => (v === 0 ? '' : tierLabel(v))}
                  />
                  <Radar
                    dataKey="score"
                    stroke="#6366f1"
                    strokeWidth={2}
                    fill="url(#radarGrad)"
                    fillOpacity={0.45}
                  />
                  <Tooltip
                    contentStyle={{
                      background: isDark ? '#0A192F' : '#ffffff',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.1)'}`,
                      borderRadius: 8,
                      color: isDark ? '#e2e8f0' : '#0f172a',
                      fontSize: 13
                    }}
                    formatter={(value) => [`${tierLabel(Number(value))} (${value}/3)`, 'Tier']}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-3">
              {skillCategories.map((category, index) => {
                const isActive = category.id === activeCategory;
                const colors = getColorClasses(category.color);
                
                return (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                      isActive 
                        ? `${colors.bg} ${colors.border} shadow-lg` 
                        : 'bg-slate-100/50 dark:bg-navy-light/40 border-slate-200/50 dark:border-white/10 hover:border-slate-300/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={isActive ? colors.text : 'text-slate-500 dark:text-slate-400'}>
                        {category.icon}
                      </div>
                      <div>
                        <div className={`font-semibold ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                          {category.title}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {category.skills.length} skills
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Skills Detail */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className={`rounded-2xl p-8 border ${colorClasses.bg} ${colorClasses.border}`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className={colorClasses.text}>
                  {activeSkillCategory.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {activeSkillCategory.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {activeSkillCategory.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {activeSkillCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-100/50 dark:bg-navy-light/40 rounded-lg p-6 border border-slate-200/50 dark:border-white/10"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                          {skill.description}
                        </p>
                      </div>
                      <div className={`text-sm font-semibold px-3 py-1 rounded-full border ${colorClasses.bg} ${colorClasses.border} ${colorClasses.text}`}>
                        {getTier(skill.level).label}
                      </div>
                    </div>

                    {/* Proficiency Indicator */}
                    <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${getTier(skill.level).fraction}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className={`h-1.5 rounded-full ${colorClasses.progress}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
