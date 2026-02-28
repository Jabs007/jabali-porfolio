import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionSectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

const MotionSection = ({ children, id, className, delay = 0 }: MotionSectionProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay
            }}
            id={id}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default MotionSection;
