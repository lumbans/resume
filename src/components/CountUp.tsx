import React, { useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

/**
 * Animates a number from 0 → `to` once it scrolls into view.
 * Honors prefers-reduced-motion (jumps straight to the final value).
 */
const CountUp: React.FC<CountUpProps> = ({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.5
}) => {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? to : 0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    if (reduceMotion) {
      setValue(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: latest => setValue(latest)
    });
    return () => controls.stop();
  }, [inView, to, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
