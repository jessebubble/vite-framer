import { CSSProperties } from "react";

export default function GradientBorder() {

    return (
        <div
            style={
                {
                "--dark-purple": "4 6 22",
                "--light-purple": "120 119 198",

                "--bg-color":
                    "linear-gradient(rgb(var(--dark-purple)), rgb(var(--dark-purple)))",
                "--border-color": `linear-gradient(145deg,
                    rgb(var(--light-purple)) 0%,
                    rgb(var(--light-purple) / 0.3) 33.33%,
                    rgb(var(--light-purple) / 0.14) 66.67%,
                    rgb(var(--light-purple) / 0.1) 100%)
                `,
                } as CSSProperties
            }
            className="flex aspect-[2/1] w-full max-w-md lg:max-w-7xl flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center
            [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
            >
            <p className="text-xl lg:text-3xl font-medium text-white max-w-2xl">
                A gradient border implemented with multiple backgrounds.
                This technique uses the background-clip CSS property.
            </p>
        </div>
    );
}