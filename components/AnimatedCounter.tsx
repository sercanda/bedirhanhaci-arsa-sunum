
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const startTime = performance.now();

      const animateCount = (timestamp: number) => {
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentCount = Math.floor(target * percentage);
        setCount(currentCount);

        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
};

export default AnimatedCounter;
