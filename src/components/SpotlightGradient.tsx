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
        <section className="isolate overflow-hidden bg-black px-6 lg:px-8">
            <div 
                className="group relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl"
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
                <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                    <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                        <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                            <p>
                                In this <span className="text-indigo-500">Radial Gradient</span> example, we're using framer motion and the clients mouse and finger coordinates to create this effect
                                <span className="block text-base text-gray-400 font-normal mt-2">
                                Radial gradients can be used to simulate lighting effects, create depth, or simply add aesthetic appeal to a design. 
                                </span>
                                
                            </p>
                        </blockquote>
                    </div>
                    <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                        <img
                        className="rounded-xl bg-indigo-50 lg:rounded-3xl"
                        src="https://a-us.storyblok.com/f/1014535/1024x1024/89873ebeca/framer-spotlight-hero2.PNG"
                        alt="alone in spooky room"
                        />
                    </div>
                    <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                        <div className="font-semibold text-white">Radial Gradient Example</div>
                        <div className="mt-1 text-indigo-500">
                            <p>
                                Move your mouse or finger across the card
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
        </>
    )
}