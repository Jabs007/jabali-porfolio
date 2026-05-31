import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  width?: number;
  height?: number;
}

export function LazyImage({ 
  src, 
  alt, 
  className = "", 
  placeholderColor = "#1a1a2e",
  width,
  height
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Skeleton/Placeholder */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isInView ? 0.1 : 1 }}
          className="absolute inset-0 bg-[color:var(--placeholder-color,--theme-gray)] flex items-center justify-center"
          style={{ backgroundColor: placeholderColor }}
        >
          {isInView && (
            <motion.div
              className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.div>
      )}

      {/* Actual Image */}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`
          w-full h-full object-cover transition-all duration-700
          ${isLoaded ? "blur-0 opacity-100" : "blur-sm opacity-50"}
        `}
        style={{
          willChange: "filter, opacity",
          transform: isLoaded ? "scale(1)" : "scale(1.05)",
          transition: "filter 0.7s ease, opacity 0.7s ease, transform 0.7s ease"
        }}
      />
    </div>
  );
}
