import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "card";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ 
  className = "", 
  variant = "rectangular",
  width,
  height
}: SkeletonProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "text":
        return "h-4 rounded";
      case "circular":
        return "rounded-full aspect-square";
      case "card":
        return "rounded-2xl";
      default:
        return "rounded";
    }
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-white/5",
        getVariantClass(),
        className
      )}
      style={{
        width: width || "100%",
        height: height || "1em",
        willChange: "background-position",
      }}
    />
  );
}
