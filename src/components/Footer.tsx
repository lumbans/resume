import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  ArrowUp,
  Heart,
  Code,
  Shield,
  Cloud,
  Users
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  const expertise = [
    { icon: <Shield size={16} />, label: 'Cybersecurity' },
    { icon: <Cloud size={16} />, label: 'Cloud Architecture' },
    { icon: <Code size={16} />, label: 'DevOps' },
    { icon: <Users size={16} />, label: 'Leadership' }
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, label: 'lumban.sopian@msn.com', href: 'mailto:lumban.sopian@msn.com' },
    { icon: <Linkedin size={16} />, label: 'linkedin.com/in/lumbans', href: 'https://www.linkedin.com/in/lumbans' },
    { icon: <MapPin size={16} />, label: 'Tangerang, Banten, Indonesia', href: null }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-white mb-4">
                  <span className="text-blue-400">Lumban</span> Sopian
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Strategic IT Executive specializing in cybersecurity, cloud architecture, 
                  and digital transformation leadership.
                </p>
                
                {/* Expertise Icons */}
                <div className="flex flex-wrap gap-3">
                  {expertise.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50"
                      title={item.label}
                    >
                      <span className="text-blue-400">{item.icon}</span>
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href.substring(1))}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                <ul className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-blue-400">{contact.icon}</span>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : '_self'}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                        >
                          {contact.label}
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">{contact.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Professional Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Professional Highlights</h3>
                <div className="space-y-4">
                  <div className="text-center bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="text-2xl font-bold text-green-400 mb-1">70+</div>
                    <div className="text-gray-400 text-sm">Team Members Led</div>
                  </div>
                  <div className="text-center bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="text-2xl font-bold text-purple-400 mb-1">$10M+</div>
                    <div className="text-gray-400 text-sm">Budget Managed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              <p className="flex items-center justify-center md:justify-start space-x-1">
                <span>© {currentYear} Lumban Sopian. Made with</span>
                <Heart className="text-red-400" size={14} />
                <span>and</span>
                <Code className="text-blue-400" size={14} />
                <span>for professional excellence.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="mailto:lumban.sopian@msn.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lumbans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg border border-blue-600/30 transition-all duration-300 hover:scale-105"
                title="Back to top"
              >
                <ArrowUp size={16} />
                <span className="text-sm">Top</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Professional Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 pt-8 pb-4"
        >
          <div className="text-center">
            <p className="text-gray-400 text-sm italic max-w-2xl mx-auto">
              "Driving digital transformation through strategic technology leadership, 
              security excellence, and innovation that delivers measurable business value."
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
