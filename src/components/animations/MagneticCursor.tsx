import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticCursorProps {
  children: React.ReactNode;
  strength?: number;
  padding?: number;
  className?: string;
}

export function MagneticCursor({ 
  children, 
  strength = 0.3, 
  padding = 50,
  className = ""
}: MagneticCursorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const x = useTransform(springX, (value) => value * strength);
  const y = useTransform(springY, (value) => value * strength);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const isWithinPadding = 
        Math.abs(distanceX) <= rect.width / 2 + padding &&
        Math.abs(distanceY) <= rect.height / 2 + padding;
      
      if (isWithinPadding) {
        setIsHovering(true);
        mouseX.set(distanceX);
        mouseY.set(distanceY);
      } else {
        setIsHovering(false);
        mouseX.set(0);
        mouseY.set(0);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, padding, strength]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={`relative inline-block transition-all duration-300 ${className}`}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {children}
    </motion.div>
  );
}
