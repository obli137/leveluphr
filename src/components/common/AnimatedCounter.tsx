import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number; // en ms
  className?: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 1200, className = '', prefix = '', suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimestamp = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    setDisplayValue(0);
    startTimestamp.current = null;
    if (raf.current) cancelAnimationFrame(raf.current);

    const animate = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter; 