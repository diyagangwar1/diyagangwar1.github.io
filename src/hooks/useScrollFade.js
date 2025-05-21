import { useEffect, useRef, useState } from 'react';

export function useScrollFade() {
  const ref = useRef();
  const [style, setStyle] = useState({
    opacity: 0,
    transform: 'translateY(80px) scale(0.98)',
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const clamped = Math.max(0, Math.min(1, ratio));
        setStyle({
          opacity: clamped,
          transform: `translateY(${120 * (1 - clamped)}px) scale(${0.98 + 0.02 * clamped})`,
          transition: 'opacity 0.2s linear, transform 0.2s linear',
          willChange: 'opacity, transform',
        });
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return [ref, style];
} 