import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function SpotlightGradient() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <>        
        <div 
            className="group relative mx-auto max-w-7xl rounded-xl flex flex-col items-center justify-center px-12 py-24 bg-slate-900"
            onMouseMove={handleMouseMove}
            >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                background: useMotionTemplate`
                    radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(14, 165, 233, 0.15),
                    transparent 80%
                    )
                `,
                }}
            />
            <div className="">
                <h1 className="text-4xl font-bold text-center text-logopink">
                    <span className="text-indigo-600">Radial Gradient</span>
                </h1>
                <p className="mt-4 text-lg text-center text-gray-300 max-w-md">
                    A radial gradient that follows the mouse cursor as it moves across the card.
                    Uses Framer Motion to update the mouse coordinates and re-render the gradient's position outside of React's render cycle.
                </p>
            </div>
        </div>
        </>
    )
}