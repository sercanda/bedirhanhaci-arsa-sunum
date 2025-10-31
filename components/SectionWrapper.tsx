import React, { ReactNode, CSSProperties } from 'react';
import { useInView } from '../hooks/useInView';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  // FIX: Add style prop to allow inline styles for background images.
  style?: CSSProperties;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id, style }) => {
  // FIX: Removed `triggerOnce` as it's not a valid IntersectionObserverInit property. The useInView hook already provides a "trigger once" behavior.
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section 
      id={id} 
      ref={ref} 
      style={style}
      className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
