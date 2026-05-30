import { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SECTION_IDS = [
  'hero',
  'impact',
  'summary',
  'leadership',
  'experience',
  'expertise',
  'security',
  'certifications',
  'education',
  'research',
  'contact',
];

const SectionNav = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTION_IDS.indexOf(entry.target.id);
            if (idx !== -1) setCurrentIndex(idx);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (idx: number) => {
    const id = SECTION_IDS[idx];
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const canGoUp = currentIndex > 0;
  const canGoDown = currentIndex < SECTION_IDS.length - 1;

  const buttonClass =
    'w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-md border border-blue-500/30 text-blue-400 transition-all hover:bg-blue-600/30 hover:scale-105 hover:border-blue-400 disabled:opacity-25 disabled:hover:bg-slate-900/80 disabled:hover:scale-100 disabled:hover:border-blue-500/30 disabled:cursor-not-allowed flex items-center justify-center shadow-lg';

  return (
    <div className="fixed bottom-24 right-4 md:right-6 z-40 flex flex-col gap-3">
      <button
        onClick={() => scrollToSection(currentIndex - 1)}
        disabled={!canGoUp}
        aria-label="Previous section"
        title="Previous section"
        className={buttonClass}
      >
        <ChevronUp size={20} />
      </button>
      <button
        onClick={() => scrollToSection(currentIndex + 1)}
        disabled={!canGoDown}
        aria-label="Next section"
        title="Next section"
        className={buttonClass}
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
};

export default SectionNav;
