import { useScroll, useTransform } from "framer-motion";

export function useParallax(containerRef: React.RefObject<HTMLElement>, intensity: number = 1) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * intensity, 100 * intensity]);
  const x = useTransform(scrollYProgress, [0, 1], [-50 * intensity, 50 * intensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return { y, x, scale, opacity };
}
