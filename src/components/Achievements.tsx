import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Shield, 
  DollarSign, 
  Users, 
  Clock, 
  Award,
  Target,
  Zap,
  CheckCircle,
  BarChart3,
  Globe,
  Server
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  metrics: {
    value: string;
    label: string;
    icon: React.ReactNode;
    color: string;
  }[];
  impact: string;
  category: string;
  technologies: string[];
}

const achievements: Achievement[] = [
  {
    id: 'security-transformation',
    title: 'Enterprise Security Transformation',
    description: 'Led comprehensive cybersecurity strategy implementation across financial institution, establishing Zero Trust Architecture and DevSecOps practices.',
    metrics: [
      { value: '40%', label: 'Security Incidents Reduction', icon: <Shield size={20} />, color: 'text-green-600' },
      { value: '99.95%', label: 'System Availability', icon: <CheckCircle size={20} />, color: 'text-green-600' },
      { value: '$5M+', label: 'Annual Security Budget', icon: <DollarSign size={20} />, color: 'text-blue-600' },
      { value: '20+', label: 'Team Members', icon: <Users size={20} />, color: 'text-blue-600' }
    ],
    impact: 'Achieved full compliance for PCI DSS and OJK regulations, passing all external security audits while significantly improving security posture.',
    category: 'Security Leadership',
    technologies: ['DevSecOps', 'Zero Trust', 'PCI DSS', 'Enterprise Security', 'Risk Management']
  },
  {
    id: 'cloud-migration',
    title: 'Large-Scale Cloud Migration Success',
    description: 'Orchestrated migration of 100+ CDN assets from Akamai to AWS CloudFront with comprehensive DNS transformation to Route 53.',
    metrics: [
      { value: '100+', label: 'CDN Assets Migrated', icon: <Globe size={20} />, color: 'text-blue-600' },
      { value: '25%', label: 'Latency Reduction', icon: <TrendingUp size={20} />, color: 'text-green-600' },
      { value: '60%', label: 'Manual Effort Reduction', icon: <Zap size={20} />, color: 'text-green-600' },
      { value: '$2M+', label: 'Infrastructure Value', icon: <DollarSign size={20} />, color: 'text-blue-600' }
    ],
    impact: 'Achieved zero downtime migration using blue-green deployment strategy, significantly improving content delivery performance.',
    category: 'Cloud Architecture',
    technologies: ['AWS CloudFront', 'Route 53', 'Terraform', 'Blue-Green Deployment', 'DNS Migration']
  },
  {
    id: 'digital-platform',
    title: 'Digital Payment Platform Transformation',
    description: 'Led complete digital payment platform migration and CI/CD implementation for LinkAja, serving 50+ million users.',
    metrics: [
      { value: '50M+', label: 'Users Served', icon: <Users size={20} />, color: 'text-blue-600' },
      { value: '300%', label: 'User Growth Supported', icon: <BarChart3 size={20} />, color: 'text-green-600' },
      { value: '35%', label: 'Downtime Reduction', icon: <Clock size={20} />, color: 'text-green-600' },
      { value: '18', label: 'Months to Complete', icon: <Target size={20} />, color: 'text-blue-600' }
    ],
    impact: 'Successfully transformed legacy payment infrastructure to modern cloud-native architecture, enabling massive scale growth.',
    category: 'Digital Transformation',
    technologies: ['GitLab CI', 'Kubernetes', 'AWS EKS', 'Helm Charts', 'Microservices']
  },
  {
    id: 'team-leadership',
    title: 'Large-Scale Team Leadership',
    description: 'Successfully managed and led cross-functional teams of 70+ professionals across SRE, QA, Automation Engineering, and Monitoring.',
    metrics: [
      { value: '70+', label: 'Team Members Led', icon: <Users size={20} />, color: 'text-blue-600' },
      { value: '$10M+', label: 'Annual Budget Managed', icon: <DollarSign size={20} />, color: 'text-blue-600' },
      { value: '95%+', label: 'Project Success Rate', icon: <CheckCircle size={20} />, color: 'text-green-600' },
      { value: '4', label: 'Division Management', icon: <Award size={20} />, color: 'text-blue-600' }
    ],
    impact: 'Built high-performing engineering teams with exceptional retention rates and consistent delivery of complex technical initiatives.',
    category: 'Leadership Excellence',
    technologies: ['Team Management', 'Agile', 'SRE', 'DevOps Culture', 'Performance Management']
  },
  {
    id: 'infrastructure-optimization',
    title: 'Infrastructure Cost Optimization',
    description: 'Implemented comprehensive infrastructure optimization strategies across multiple cloud platforms, achieving significant cost savings.',
    metrics: [
      { value: '15-30%', label: 'Cost Reduction', icon: <TrendingUp size={20} />, color: 'text-green-600' },
      { value: '$500K+', label: 'Annual Savings', icon: <DollarSign size={20} />, color: 'text-green-600' },
      { value: '4h→30m', label: 'Provisioning Time', icon: <Clock size={20} />, color: 'text-blue-600' },
      { value: '1M+', label: 'Daily Active Users', icon: <Users size={20} />, color: 'text-blue-600' }
    ],
    impact: 'Delivered substantial cost savings while improving system performance and reducing operational overhead through automation.',
    category: 'Operational Excellence',
    technologies: ['Infrastructure as Code', 'AWS CDK', 'Cost Optimization', 'Automation', 'Resource Scaling']
  },
  {
    id: 'network-transformation',
    title: 'Critical Network Infrastructure Upgrade',
    description: 'Orchestrated migration from Direct Connect VGW to Transit Gateway, significantly improving network architecture and performance.',
    metrics: [
      { value: '20%', label: 'Performance Improvement', icon: <TrendingUp size={20} />, color: 'text-green-600' },
      { value: '100%', label: 'Zero Downtime', icon: <CheckCircle size={20} />, color: 'text-green-600' },
      { value: 'Enterprise', label: 'Scale Implementation', icon: <Server size={20} />, color: 'text-blue-600' },
      { value: 'Critical', label: 'Banking Services', icon: <Shield size={20} />, color: 'text-blue-600' }
    ],
    impact: 'Enhanced network reliability and performance for critical banking operations while maintaining 100% uptime during transition.',
    category: 'Network Architecture',
    technologies: ['AWS Transit Gateway', 'Direct Connect', 'Network Architecture', 'Infrastructure Migration']
  }
];

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="achievements" className="py-20 bg-slate-100/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Key <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Quantified business impact and technical excellence across 18+ years of
            strategic leadership in IT transformation and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200/50 hover:border-blue-500/30 transition-all duration-300 group"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-600 rounded-full text-sm border border-blue-600/30">
                  {achievement.category}
                </span>
                <Award className="text-blue-600 group-hover:text-blue-300 transition-colors" size={24} />
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {achievement.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {achievement.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metricIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + metricIndex * 0.1 }}
                    className="bg-slate-100/50 rounded-lg p-4 border border-slate-200/30"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={metric.color}>
                        {metric.icon}
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        {metric.value}
                      </div>
                    </div>
                    <div className="text-sm text-slate-500">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Impact */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 rounded-lg border border-blue-500/20">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <div className="text-sm font-semibold text-blue-600 mb-1">Business Impact</div>
                    <div className="text-slate-600 text-sm leading-relaxed">
                      {achievement.impact}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-sm font-semibold text-slate-900 mb-3">Technologies & Skills</div>
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-200/50 text-slate-600 rounded text-xs border border-slate-300/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 rounded-2xl p-8 border border-indigo-500/30"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Cumulative Impact Overview
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These achievements represent consistent delivery of measurable business value 
              through strategic technology leadership and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-slate-600">Major Transformations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">$17M+</div>
              <div className="text-slate-600">Budget Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 mb-2">50M+</div>
              <div className="text-slate-600">Users Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%+</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
