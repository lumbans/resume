import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Users, 
  Code, 
  Monitor,
  Server,
  Database,
  Network,
  Zap,
  Target,
  Award
} from 'lucide-react';

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
    color: 'blue',
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
    color: 'green',
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
    color: 'red',
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
    color: 'purple',
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
    color: 'orange',
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
    color: 'teal',
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
      blue: { bg: 'bg-blue-600/20', border: 'border-blue-500/30', text: 'text-blue-400', progress: 'bg-blue-500' },
      green: { bg: 'bg-green-600/20', border: 'border-green-500/30', text: 'text-green-400', progress: 'bg-green-500' },
      red: { bg: 'bg-red-600/20', border: 'border-red-500/30', text: 'text-red-400', progress: 'bg-red-500' },
      purple: { bg: 'bg-purple-600/20', border: 'border-purple-500/30', text: 'text-purple-400', progress: 'bg-purple-500' },
      orange: { bg: 'bg-orange-600/20', border: 'border-orange-500/30', text: 'text-orange-400', progress: 'bg-orange-500' },
      teal: { bg: 'bg-teal-600/20', border: 'border-teal-500/30', text: 'text-teal-400', progress: 'bg-teal-500' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const activeSkillCategory = skillCategories.find(cat => cat.id === activeCategory) || skillCategories[0];
  const colorClasses = getColorClasses(activeSkillCategory.color);

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical skills across cloud platforms, security, DevOps, 
            and leadership gained through 15+ years of hands-on experience
          </p>
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
                        : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={isActive ? colors.text : 'text-gray-400'}>
                        {category.icon}
                      </div>
                      <div>
                        <div className={`font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                          {category.title}
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
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
                  <h3 className="text-2xl font-bold text-white">
                    {activeSkillCategory.title}
                  </h3>
                  <p className="text-gray-300">
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
                    className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {skill.description}
                        </p>
                      </div>
                      <div className={`text-xl font-bold ${colorClasses.text}`}>
                        {skill.level}%
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className={`h-2 rounded-full ${colorClasses.progress}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <Award className="mx-auto text-blue-400 mb-3" size={32} />
            <div className="text-2xl font-bold text-white mb-1">6</div>
            <div className="text-gray-400">Skill Categories</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <Target className="mx-auto text-green-400 mb-3" size={32} />
            <div className="text-2xl font-bold text-white mb-1">25+</div>
            <div className="text-gray-400">Core Technologies</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <Zap className="mx-auto text-orange-400 mb-3" size={32} />
            <div className="text-2xl font-bold text-white mb-1">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <Network className="mx-auto text-purple-400 mb-3" size={32} />
            <div className="text-2xl font-bold text-white mb-1">10+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
