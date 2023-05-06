import { Tab } from '@headlessui/react'
import SpotlightGradient from './components/SpotlightGradient'
import MagnifiedDock from './components/MagnifiedDock'
import AnimatedTabs from './components/AnimatedTabs'
import AnimatedSwitch from './components/AnimatedSwitch'
import GradientBorder from './components/GradientBorder'
import MultiStep from './components/MultiStep'
import StaggeredCheckbox from './components/StaggeredCheckbox'
import AnimatedCarousel from './components/AnimatedCarousel'
import FixedHeader from './components/FixedHeader'

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
    { name: 'Animated Carousel',
        summary: [
            {
                name: 'Animated Carousel',
                description: 'Animated Carousel',
                component: <AnimatedCarousel />
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
    { name: 'Staggered Checkbox',
        summary: [
            {
                name: 'Staggered Checkbox', 
                description: 'Staggered Checkbox',
                component: <StaggeredCheckbox />
            }
        ]
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
        <>
        <FixedHeader />
        <div className="bg-slate-900 py-24">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-slate-900 py-20 px-6 sm:px-10 rounded-lg">
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
                </div>
            </div>
        </div>
        </>
    )
}