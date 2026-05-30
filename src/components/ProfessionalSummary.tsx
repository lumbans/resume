import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProfessionalSummary = () => {
  const [ref, inView] = useScrollReveal();

  return (
    <section id="summary" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="text-blue-400 text-xs tracking-[0.18em] uppercase mb-3">
            Professional Summary
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
            An executive operator at the intersection of platform engineering,
            cybersecurity, and regulatory compliance.
          </h2>
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>
              I lead technology and security organisations through the
              transformations that regulated industries find hardest: cloud
              adoption under audit scrutiny, DevSecOps modernisation without
              destabilising production, Zero Trust rollout across legacy estates,
              and platform consolidation that holds 99.95% availability.
            </p>
            <p>
              Eighteen years across Banking, Fintech, and enterprise platforms
              have made me equally comfortable with board-level reporting,
              budget ownership, and the architecture choices that determine
              whether a programme delivers. I have built and run engineering
              organisations of 70+ across SRE, QA, GRC, and DevOps; defended
              critical platforms under PCI DSS, OJK, and Bank Indonesia
              supervision; and closed external audits with zero critical
              findings.
            </p>
            <p>
              My current focus is the next decade of regulated technology:
              security governance for cloud-native banking, attack surface
              management at scale, and the executive disciplines — risk, vendor,
              and talent — that determine whether technology becomes a durable
              advantage or a liability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
