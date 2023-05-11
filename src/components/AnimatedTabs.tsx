import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
    { id: "the", label: "The" },
    { id: "devil", label: "Devil" },
    { id: "went", label: "Went" },
    { id: "to", label: "To" },
    { id: "georgia", label: "Georgia" },
];

export default function AnimatedTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex space-x-1 bg-black items-center justify-center py-24 sm:py-32">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                        activeTab === tab.id ? "" : "hover:text-white/60"
                    } relative rounded-full px-3 py-1.5 text-sm md:text-3xl font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                    >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-white mix-blend-difference"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {tab.label}
                </button>
            ))}
        </div>
    );
}