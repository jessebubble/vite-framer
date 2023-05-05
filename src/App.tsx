import { Tab } from '@headlessui/react'
import SpotlightGradient from './components/SpotlightGradient'
import MagnifiedDock from './components/MagnifiedDock'
import AnimatedTabs from './components/AnimatedTabs'
import AnimatedSwitch from './components/AnimatedSwitch'
import GradientBorder from './components/GradientBorder'
import MultiStep from './components/MultiStep'

const tabArray = [
    { name: 'Spotlight Gradient',
        summary: [
            {
                name: 'Spotlight Gradient',
                description: 'Spotlight Gradient',
                component: <SpotlightGradient />
            },
        ],
    },
    { name: 'Animated Tabs', 
        summary: [
            { 
                name: 'Animated Tabs',
                description: 'Animated Tabs' ,
                component: <AnimatedTabs />
            },
        ],
    },
    { name: 'Magnified Dock', 
        summary: [
            { 
                name: 'Magnified Dock',
                description: 'Magnified Dock',
                component: <MagnifiedDock /> 
            },
        ],
    },
    { name: 'Animated Switch', 
        summary: [
            {
                name: 'Animated Switch',
                description: 'Animated Switch',
                component: <AnimatedSwitch />
            },
        ],
    },
    { name: 'Multi-Step Wizard',
        summary: [
            {
                name: 'Multi-Step Wizard',
                description: 'Multi-Step Wizard',
                component: <MultiStep />
            }
        ]
    },
    { name: 'Gradient Border',
        summary: [
            {
                name: 'Gradient Border',
                description: 'Gradient Border',
                component: <GradientBorder />
            }
        ]
    }
]

export default function App() {
    return (
        <div className="bg-slate-900 py-24">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-white/10 py-20 px-6 sm:px-10 rounded-lg">
                    <div className="mx-auto max-w-2xl md:max-w-none gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-10 md:mb-10">
                        <div className="lg:row-start-2">
                            <h2 className="text-3xl text-center font-bold tracking-tight text-logopink sm:text-4xl">
                                <span className="text-indigo-500">Framer</span> + <span className="text-indigo-500">Motion</span> 
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-white text-center">
                                Using Vite and Tailwindcss to learn, build and get familiar
                                <span className="block">with the motion library for React, Framer Motion</span>
                                                          
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-7xl px-1 sm:mt-20 md:mt-0 lg:mt-10 lg:px-8 lg:row-start-3">
                        <Tab.Group as="dl" className="text-base leading-7" >
                            <Tab.List className="flex items-center justify-evenly space-x-1 border-b border-gray-700 pb-3">
                                {tabArray.map((tab) => (
                                    <Tab key={tab.name} className="text-left lg:text-center px-2 text-sm md:text-lg font-medium text-gray-400" >
                                        {tab.name}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="">
                                {tabArray.map((tab) => (
                                    <Tab.Panel key={tab.name} className="">
                                        <div className="mx-auto md:mt-2 lg:mt-1 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                                            {tab.summary.map((summary) => (
                                                <div key={summary.name} className="relative md:max-w-md lg:max-w-7xl">
                                                    <dt className="inline-block font-semibold text-logopink mt-10">
                                                        {summary.description}
                                                    </dt>{' '}
                                                    <dd className="mt-4">{summary.component}</dd>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                    <svg className="pointer-events-none absolute top-1/2 left-80 -z-10 h-[42.375rem] -translate-y-full transform-gpu blur-3xl lg:top-1/2 lg:bottom-[-10rem] -lg:translate-y-full" viewBox="0 0 1155 678" fill="none" >
                        <path fill="url(#c0458c57-1330-459f-9d5c-f0d75c210466)" fillOpacity=".25" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                        <defs>
                        <linearGradient
                            id="c0458c57-1330-459f-9d5c-f0d75c210466" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse" >
                            <stop stopColor="#E11887" />
                            <stop offset={1} stopColor="#FFF" />
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}