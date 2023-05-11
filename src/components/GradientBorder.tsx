import { CSSProperties } from "react";

export default function GradientBorder() {

    return (
        <div className="bg-black py-24 ">
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
            className="aspect-[2/1] rounded-xl border border-transparent [background:padding-box_var(--bg-color),border-box_var(--border-color)]
            mx-auto max-w-2xl lg:max-w-4xl flex items-center justify-center text-center"
            >
            <p className="text-xl lg:text-3xl font-medium text-white max-w-2xl">
                A gradient border implemented with multiple backgrounds.
                This technique uses the background-clip CSS property.
            </p>
        </div>
        </div>
    );
}