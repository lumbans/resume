import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, TrendingUp, Users, DollarSign, Shield } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
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
    title: "Senior Vice President – Chief Information Security Officer (CISO)",
    company: "PT. Bank Multiarta Sentosa",
    period: "Sep 2023 - Present",
    achievements: [
      "Lead comprehensive cybersecurity strategy for 20+ professionals across Infosec, QA, IT GRC, and DevOps divisions",
      "Reduced security incidents by 30% through implementing enterprise-grade DevSecOps practices and automated threat detection systems",
      "Orchestrated critical infrastructure migration from Direct Connect VGW to Transit Gateway, improving network performance by 20%",
      "Established Zero Trust Architecture framework, achieving 99.9% system availability for critical banking services",
      "Implemented comprehensive compliance program covering PCI DSS and OJK regulations, passing all external security audits"
    ],
    technologies: ["DevSecOps", "Zero Trust Architecture", "AWS Transit Gateway", "PCI DSS", "Enterprise Security"],
    metrics: [
      { icon: <DollarSign className="text-green-400" size={20} />, value: "$5M+", label: "Annual Security Budget" },
      { icon: <TrendingUp className="text-blue-400" size={20} />, value: "30%", label: "Security Incidents Reduction" },
      { icon: <Shield className="text-purple-400" size={20} />, value: "99.9%", label: "System Availability" }
    ]
  },
  {
    title: "Senior Cloud Consultant",
    company: "SoftwareONE",
    period: "Jun 2023 - Oct 2023",
    achievements: [
      "Executed large-scale migration of 100+ CDN assets from Akamai to AWS CloudFront, managing $2M+ infrastructure transformation",
      "Achieved 25% reduction in content delivery latency post-migration through advanced caching optimization and edge location strategy",
      "Successfully migrated 3 enterprise domains and 100+ DNS records to AWS Route 53 with zero downtime using blue-green deployment",
      "Developed automated migration scripts using Terraform and AWS CLI, reducing manual effort by 60% for future migrations"
    ],
    technologies: ["AWS CloudFront", "Route 53", "Terraform", "AWS CLI", "Blue-Green Deployment"],
    metrics: [
      { icon: <DollarSign className="text-green-400" size={20} />, value: "$2M+", label: "Infrastructure Budget" },
      { icon: <TrendingUp className="text-blue-400" size={20} />, value: "25%", label: "Latency Reduction" },
      { icon: <Users className="text-orange-400" size={20} />, value: "60%", label: "Manual Effort Reduction" }
    ]
  },
  {
    title: "Principal DevOps Engineer",
    company: "Lyte Ventures Pte. Ltd",
    period: "Oct 2022 - Apr 2023",
    achievements: [
      "Architected and implemented scalable cloud-native solutions using AWS CDK with C#, serving 1M+ daily active users",
      "Reduced cloud operational costs by 30% through infrastructure optimization and automated resource scaling policies",
      "Conducted comprehensive security assessments and implemented DevSecOps best practices, achieving SOC 2 compliance",
      "Designed Infrastructure as Code (IaC) templates for automated deployment, reducing provisioning time from 4 hours to 30 minutes"
    ],
    technologies: ["AWS CDK", "C#", "Infrastructure as Code", "DevSecOps", "SOC 2 Compliance"],
    metrics: [
      { icon: <Users className="text-orange-400" size={20} />, value: "1M+", label: "Daily Active Users" },
      { icon: <TrendingUp className="text-blue-400" size={20} />, value: "30%", label: "Cost Reduction" },
      { icon: <DollarSign className="text-green-400" size={20} />, value: "4h→30m", label: "Provisioning Time" }
    ]
  },
  {
    title: "Vice President - DevOps Division Head",
    company: "PT Fintek Karya Nusantara (LinkAja)",
    period: "Aug 2019 - Oct 2021",
    achievements: [
      "Led 70+ professionals across SRE, QA, Automation Engineering, and Monitoring teams, managing $10M+ annual infrastructure budget",
      "Implemented comprehensive CI/CD pipelines using GitLab CI, Helm Charts, and Kubernetes on AWS EKS, serving 50M+ users",
      "Improved system stability and reduced downtime by 35% through proactive monitoring and automated incident response",
      "Completed full digital payment platform migration and CI/CD implementation in 18 months, supporting 300% user growth"
    ],
    technologies: ["GitLab CI", "Kubernetes", "AWS EKS", "Helm Charts", "SRE", "Automation Engineering"],
    metrics: [
      { icon: <Users className="text-orange-400" size={20} />, value: "70+", label: "Team Members" },
      { icon: <DollarSign className="text-green-400" size={20} />, value: "$10M+", label: "Annual Budget" },
      { icon: <TrendingUp className="text-blue-400" size={20} />, value: "50M+", label: "Users Served" }
    ]
  }
];

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            15+ years of strategic leadership in IT, driving digital transformation 
            and innovation across financial institutions and technology companies
          </p>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Role Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <Building className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <div className="text-blue-400 font-semibold">
                        {experience.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-6">
                    <Calendar className="text-gray-400" size={16} />
                    <span className="text-gray-300">{experience.period}</span>
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-3">
                    {experience.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-3">
                        {metric.icon}
                        <div>
                          <div className="text-white font-semibold">{metric.value}</div>
                          <div className="text-gray-400 text-sm">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Middle Column - Achievements */}
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                  <ul className="space-y-3 mb-6">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Drive Your Next Digital Transformation?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With proven expertise in leading large-scale transformations and managing multi-million dollar budgets, 
              I'm ready to help your organization achieve its technology goals.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
