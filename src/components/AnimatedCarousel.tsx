/* import { useState } from "react";
import * as Icons from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function AnimatedCarousel() {
  const [ref, { width }] = useMeasure();
  const [count, setCount] = useState(1);
  const prev = usePrevious(count);
  const direction = count > prev ? 1 : -1;

  return (
    <div className="flex items-center justify-center bg-black py-24 sm:py-32">
      <div className="mt-12 w-full max-w-lg text-white">
        <div className="flex justify-between px-4">
          <button onClick={() => setCount(count - 1)}>
            <Icons.ChevronLeftIcon className="h-10 w-10" />
          </button>
          <button onClick={() => setCount(count + 1)}>
            <Icons.ChevronRightIcon className="h-10 w-10" />
          </button>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="aspect-square w-2/5">
            <div
              ref={ref}
              className="relative flex h-full items-center justify-center overflow-hidden bg-white/10 rounded"
            >
              <AnimatePresence custom={{ direction, width }}>
                <motion.div
                  key={count}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={{ direction, width }}
                  className={`absolute flex h-2/3 w-2/3 items-center justify-center rounded text-3xl font-bold ${
                    colors[Math.abs(count) % 4]
                  }`}
                >
                  {count}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction, width }) => ({ x: direction * width }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
};

const colors = ["bg-logopink", "bg-indigo-500", "bg-lime-500", "bg-fuchsia-500"];

function usePrevious(state) {
  const [tuple, setTuple] = useState([null, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
} */