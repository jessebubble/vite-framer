/* import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useTransform,
    useScroll,
  } from "framer-motion";
  import { useEffect, useRef } from "react";
  
  const scrollThreshold = [0, 50];
  
  export default function FixedHeader() {
    const { scrollY } = useScroll();
    const scrollYOnDirectionChange = useRef(scrollY.get());
    const lastPixelsScrolled = useRef();
    const lastScrollDirection = useRef();
    const pixelsScrolled = useMotionValue(0);
    const height = useTransform(pixelsScrolled, scrollThreshold, [100, 60]);
    const backgroundOpacity = useTransform(
      pixelsScrolled,
      scrollThreshold,
      [1, 0.4]
    );
    const backgroundColorTemplate = useMotionTemplate`rgba(250 250 249 / ${backgroundOpacity})`;
  
    useEffect(() => {
      return scrollY.onChange((latest) => {
        if (latest < 0) return;
  
        const isScrollingDown = scrollY.getPrevious() - latest < 0;
        const scrollDirection = isScrollingDown ? "down" : "up";
        const currentPixelsScrolled = pixelsScrolled.get();
        let newPixelsScrolled;
  
        if (lastScrollDirection.current !== scrollDirection) {
          lastPixelsScrolled.current = currentPixelsScrolled;
          scrollYOnDirectionChange.current = latest;
        }
  
        if (isScrollingDown) {
          newPixelsScrolled = Math.min(
            lastPixelsScrolled.current +
              (latest - scrollYOnDirectionChange.current),
            scrollThreshold[1]
          );
        } else {
          newPixelsScrolled = Math.max(
            lastPixelsScrolled.current -
              (scrollYOnDirectionChange.current - latest),
            scrollThreshold[0]
          );
        }
  
        pixelsScrolled.set(newPixelsScrolled);
        lastScrollDirection.current = scrollDirection;
      });
    }, [pixelsScrolled, scrollY]);
  
    return (
      <div>
        <motion.header
          style={{ height, backgroundColor: backgroundColorTemplate }}
          className="fixed inset-x-0 top-0 z-10 flex items-center shadow-sm backdrop-blur "
        >
          <div className="flex items-center justify-between w-full max-w-3xl px-4 mx-auto">
            <a href="/" className="font-semibold leading-none text-logopink">
               Hola Framer Motion!
            </a>
          </div>
        </motion.header>
      </div>
    );
  } */