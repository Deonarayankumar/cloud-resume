import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const leftSection = useRef(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const failSafe = window.setTimeout(() => setVisible(true), 80);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!leftSection.current) {
            return;
          }

          leftSection.current = false;
          window.clearTimeout(failSafe);
          setVisible(false);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setVisible(true));
          });
          return;
        }

        if (!entry.isIntersecting) {
          leftSection.current = true;
        }
      },
      { threshold: [0, 0.08, 0.25, 0.5, 1] },
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(failSafe);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`reveal${visible ? ' reveal--in' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
