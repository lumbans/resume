import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FORM_ENDPOINT =
  import.meta.env.VITE_FORM_ENDPOINT ?? 'https://formspree.io/f/xojnenow';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useScrollReveal();

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New contact message from ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-slate-950"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Open to strategic conversations around cloud, DevSecOps,
            digital transformation, and technology leadership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send a Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-green-400">
                    Message sent successfully.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="text-red-400" size={20} />
                  <span className="text-red-400">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                />

                <div>
                  <label htmlFor="contact-name" className="sr-only">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="sr-only">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-400" size={22} />
                  <a
                    href="mailto:lumban.sopian@msn.com"
                    className="text-blue-400 hover:underline"
                  >
                    lumban.sopian@msn.com
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <Linkedin className="text-blue-500" size={22} />
                  <a
                    href="https://www.linkedin.com/in/lumbans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    linkedin.com/in/lumbans
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <Github className="text-gray-300" size={22} />
                  <a
                    href="https://github.com/lumbans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    github.com/lumbans
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="text-red-400" size={22} />
                  <span className="text-gray-400">
                    Tangerang, Indonesia
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="text-blue-400" size={20} />
                <span className="text-white font-medium">
                  Response Time
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Typical response within 24–48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
