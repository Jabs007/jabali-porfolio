import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function TextReveal({ 
  text, 
  className = "", 
  delay = 0,
  direction = "up"
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getMotionValues = () => {
    switch (direction) {
      case "up":
        return { y: 80, opacity: 0 };
      case "down":
        return { y: -80, opacity: 0 };
      case "left":
        return { x: -80, opacity: 0 };
      case "right":
        return { x: 80, opacity: 0 };
      default:
        return { y: 80, opacity: 0 };
    }
  };

  const motionValues = getMotionValues();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.02, 
        delayChildren: delay * 0.1 
      },
    },
  };

  const child = {
    hidden: {
      ...motionValues,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
        delay: i * 0.02,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap gap-x-0.5 ${className}`}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          custom={index}
          className="inline-block"
          style={{ 
            whitespace: char === " " ? "pre" : "normal",
            display: "inline-block"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
