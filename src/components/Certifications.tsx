import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  GraduationCap, 
  Calendar, 
  Star,
  Target,
  TrendingUp,
  BookOpen,
  Users,
  Shield,
  Cloud
} from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
  description: string;
  icon: React.ReactNode;
  credentialId?: string;
  skills: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
}

const certifications: Certification[] = [
  {
    id: 'bmsr-5',
    name: 'Indonesia Banking Risk Management Qualification 5 (BMSR Jenjang 5)',
    issuer: 'Lembaga Sertifikasi Profesi Perbankan',
    year: '2024',
    status: 'completed',
    category: 'Financial Risk Management',
    description: 'Advanced certification in banking risk management and regulatory compliance for financial institutions.',
    icon: <Shield className="text-red-400" size={24} />,
    skills: ['Risk Management', 'Banking Compliance', 'Financial Regulations', 'OJK Compliance']
  },
  {
    id: 'system-analyst',
    name: 'System Analyst Certification',
    issuer: 'BNSP (Badan Nasional Sertifikasi Profesi)',
    year: '2024',
    status: 'completed',
    category: 'Professional Certification',
    description: 'National professional certification for system analysis and design expertise.',
    icon: <Target className="text-blue-400" size={24} />,
    skills: ['System Analysis', 'System Design', 'Business Process', 'Technical Documentation']
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Cloud Practitioner Certification',
    issuer: 'Amazon Web Services',
    year: '2021',
    status: 'completed',
    category: 'Cloud Computing',
    description: 'Foundational certification demonstrating cloud concepts and AWS services knowledge.',
    icon: <Cloud className="text-orange-400" size={24} />,
    skills: ['AWS Services', 'Cloud Architecture', 'Cloud Security', 'Cost Optimization']
  },
  {
    id: 'aws-solutions-architect',
    name: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    year: '2024',
    status: 'in-progress',
    category: 'Cloud Architecture',
    description: 'Advanced certification for designing distributed applications on AWS platform.',
    icon: <Cloud className="text-blue-500" size={24} />,
    skills: ['Solution Design', 'AWS Architecture', 'Scalability', 'High Availability']
  },
  {
    id: 'cism',
    name: 'Certified Information Security Manager (CISM)',
    issuer: 'ISACA',
    year: '2024',
    status: 'planned',
    category: 'Information Security',
    description: 'Global certification for information security management and governance.',
    icon: <Shield className="text-purple-400" size={24} />,
    skills: ['Security Management', 'Risk Governance', 'Incident Response', 'Security Program']
  }
];

const education: Education[] = [
  {
    degree: 'Computer Science',
    institution: 'Binus University',
    period: '2025 - Present',
    status: 'Current Studies',
    description: 'Advanced computer science program focusing on modern software engineering and technology leadership.'
  },
  {
    degree: 'Information System',
    institution: 'Nusa Mandiri University',
    period: '2021 - 2024',
    status: 'Completed',
    description: 'Comprehensive program in information systems management, database design, and business technology integration.'
  }
];

const professionalDevelopment = [
  {
    title: 'Technical Leadership',
    description: 'Successfully led digital transformation initiatives across multiple organizations',
    icon: <Users className="text-blue-400" size={20} />
  },
  {
    title: 'Industry Recognition',
    description: 'Invited speaker for DevOps and cybersecurity conferences',
    icon: <Award className="text-yellow-400" size={20} />
  },
  {
    title: 'Community Contribution',
    description: 'Active member of Indonesia DevOps Community',
    icon: <Users className="text-green-400" size={20} />
  },
  {
    title: 'Innovation',
    description: 'Developed proprietary automation frameworks reducing operational overhead by 25%+',
    icon: <TrendingUp className="text-purple-400" size={20} />
  }
];

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-600/20 text-yellow-400 border-yellow-500/30';
      case 'planned':
        return 'bg-blue-600/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Certified';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return status;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Certifications & <span className="text-blue-400">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous professional development through industry certifications, 
            formal education, and ongoing commitment to technology excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Award className="text-yellow-400" size={28} />
                <span>Professional Certifications</span>
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-1">
                              {cert.name}
                            </h4>
                            <div className="text-blue-400 font-medium">
                              {cert.issuer}
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(cert.status)}`}>
                              {getStatusText(cert.status)}
                            </span>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Calendar size={14} className="mr-1" />
                              {cert.year}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {cert.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-sm border border-slate-600/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Professional Development */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <GraduationCap className="text-blue-400" size={28} />
                <span>Education</span>
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        edu.status === 'Completed' 
                          ? 'bg-green-600/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional Development */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <BookOpen className="text-green-400" size={28} />
                <span>Professional Development</span>
              </h3>
              
              <div className="space-y-4">
                {professionalDevelopment.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
                  >
                    <div className="flex items-start space-x-3">
                      {item.icon}
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certification Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Continuous Learning Commitment
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Star className="mx-auto text-yellow-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <GraduationCap className="mx-auto text-blue-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-white mb-1">2</div>
                <div className="text-gray-400">Degrees</div>
              </div>
              <div className="text-center">
                <TrendingUp className="mx-auto text-green-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-gray-400">Years Learning</div>
              </div>
              <div className="text-center">
                <Award className="mx-auto text-purple-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-white mb-1">4+</div>
                <div className="text-gray-400">Achievements</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
