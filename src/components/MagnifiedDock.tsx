import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
  } from "framer-motion";
import { useRef } from "react";
  
export default function MagnifiedDock() {
    const mouseX = useMotionValue(Infinity);
  
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="bg-white flex items-center justify-center gap-2 md:gap-4 mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-7xl"
        >
            {[...Array(8).keys()].map((i) => (
            <AppIcon mouseX={mouseX} key={i} />
            ))}
        </motion.div>
    );
}
  
function AppIcon({ mouseX }: { mouseX: MotionValue }) {
    const ref = useRef<HTMLDivElement>(null);
  
    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
  
        return val - bounds.x - bounds.width / 2;
    });
  
    const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  
    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 rounded-full bg-indigo-600"
        />
    );
}  