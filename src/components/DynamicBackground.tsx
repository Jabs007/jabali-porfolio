import { motion } from "framer-motion";

const DynamicBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Primary Glow */}
            <motion.div
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -50, 30, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px]"
            />

            {/* Secondary Glow */}
            <motion.div
                animate={{
                    x: [0, -60, 40, 0],
                    y: [0, 40, -60, 0],
                    scale: [1, 0.8, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-accent/20 rounded-full blur-[100px]"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background/50" />
        </div>
    );
};

export default DynamicBackground;
