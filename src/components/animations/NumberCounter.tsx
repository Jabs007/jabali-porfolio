import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function NumberCounter({ 
  end, 
  duration = 2, 
  prefix = "", 
  suffix = "",
  className = ""
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const count = useMotionValue(0);
  const rounded = useSpring(count, {
    duration: duration * 1000,
    ease: "easeOut",
  });

  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
      count.set(end);
    }
  }, [inView, count, end]);

  // Subscribe to the spring value and update display
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}
