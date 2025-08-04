"use client"

import { useEffect, useRef, useState, PropsWithChildren } from "react";

interface LazySectionProps extends PropsWithChildren {
  className?: string;
  threshold?: number;
}

export default function LazySection({
  children,
  className = "",
  threshold = 0.1,
}: LazySectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
