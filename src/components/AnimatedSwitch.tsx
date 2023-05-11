import { ComponentProps, ReactNode, useState } from "react";
import { Switch as AriaSwitch } from "react-aria-components";


function Switch({
    children,
    ...props
    }: { children: ReactNode } & ComponentProps<typeof AriaSwitch>) {
    return (
        <AriaSwitch
            {...props}
            className="group inline-flex touch-none items-center justify-center"
            style={{ WebkitTapHighlightColor: "transparent" }}
        >
        <span className="group-data-[selected]:bg-logopink group-data-[focus-visible]:ring-2 mr-4 h-6 w-9 cursor-pointer rounded-full border-2 border-transparent bg-gray-900 ring-offset-2 ring-offset-zinc-900 transition duration-200">
            <span className="group-data-[selected]:ml-3 group-data-[selected]:group-data-[pressed]:ml-2 group-data-[pressed]:w-6 block h-5 w-5 origin-right rounded-full bg-white shadow transition-all duration-200" />
        </span>
        <span>{children}</span>
        </AriaSwitch>
    );
}

export default function AnimatedSwitch() {
    const [warmduscherMode, setWarmduscherMode] = useState(false);
  
    return (
      <div className="bg-white py-24 sm:py-32 text-logopink text-lg md:text-3xl flex items-center justify-center font-bold">
        <Switch isSelected={warmduscherMode} onChange={setWarmduscherMode}>
            Framer Motion
        </Switch>
      </div>
    );
}  