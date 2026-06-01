import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Mic, FileText, Shield, Cloud, Server, TrendingUp } from 'lucide-react';

interface Insight {
  category: string;
  format: 'Talk' | 'Article' | 'Perspective';
  title: string;
  abstract: string;
  icon: React.ReactNode;
  color: string;
}

/**
 * Seed topics drawn from Lumban's actual expertise and speaking history
 * (invited DevOps/cybersecurity conference speaker, Indonesia DevOps Community).
 * Replace `abstract`/`format` and add a `href` when published pieces or recorded
 * talks are available.
 */
const insights: Insight[] = [
  {
    category: 'Security Leadership',
    format: 'Perspective',
    title: 'DevSecOps in Regulated Banking',
    abstract:
      'How to embed security into the delivery pipeline without slowing the business — aligning automated controls with OJK and PCI DSS obligations.',
    icon: <Shield size={22} />,
    color: 'text-violet-600'
  },
  {
    category: 'Architecture',
    format: 'Perspective',
    title: 'Zero Trust for Financial Services',
    abstract:
      'A pragmatic path to Zero Trust in a regulated environment, and what it takes to sustain 99.95%+ availability for critical banking services.',
    icon: <Server size={22} />,
    color: 'text-indigo-600'
  },
  {
    category: 'Platform Engineering',
    format: 'Talk',
    title: 'Engineering for Scale: Lessons from 50M+ Users',
    abstract:
      'Building and operating a national digital-payments platform through 300% growth — resilience, observability, and the org design behind it.',
    icon: <TrendingUp size={22} />,
    color: 'text-cyan-600'
  },
  {
    category: 'Cloud & FinOps',
    format: 'Perspective',
    title: 'Cloud Cost Optimization as a Leadership Discipline',
    abstract:
      'Why cost efficiency is an executive responsibility, not a quarterly cleanup — the operating model behind sustained 30% cloud savings.',
    icon: <Cloud size={22} />,
    color: 'text-sky-600'
  }
];

const formatIcon = (format: Insight['format']) =>
  format === 'Talk' ? <Mic size={14} /> : <FileText size={14} />;

const Insights: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="insights" className="py-20 bg-slate-100/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Insights & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Perspectives</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Topics I speak and advise on — drawn from leading security, cloud, and
            platform engineering across regulated banking and fintech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200/50 hover:border-blue-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-600 rounded-full text-sm border border-blue-600/30">
                  {insight.category}
                </span>
                <span className="flex items-center space-x-1 text-slate-500 text-xs uppercase tracking-wide">
                  {formatIcon(insight.format)}
                  <span>{insight.format}</span>
                </span>
              </div>

              <div className="flex items-start space-x-4 mb-4">
                <div className={`${insight.color} mt-1 flex-shrink-0`}>{insight.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {insight.title}
                </h3>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {insight.abstract}
              </p>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-300 transition-colors self-start"
              >
                <span>Discuss this topic</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
