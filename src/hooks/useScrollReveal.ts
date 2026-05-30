import { useInView } from 'react-intersection-observer';

export const useScrollReveal = () =>
  useInView({ triggerOnce: true, threshold: 0.1 });
