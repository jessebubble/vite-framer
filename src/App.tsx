import SpotlightGradient from './components/SpotlightGradient'
import MagnifiedDock from './components/MagnifiedDock'
import AnimatedTabs from './components/AnimatedTabs'
import AnimatedSwitch from './components/AnimatedSwitch'
import GradientBorder from './components/GradientBorder'
import MultiStep from './components/MultiStep'
import StaggeredCheckbox from './components/StaggeredCheckbox'

export default function App() { 

    return (
        <> 
        <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
                <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                    <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                        <blockquote className="text-xl font-semibold leading-8 text-gray-700 sm:text-2xl sm:leading-9">
                            <p>
                                <span className="text-orange-500">Framer Motion</span> provides a declarative and easy-to-use way to create fluid and interactive animations for web applications
                                while leveraging React's component-based architecture, allowing you to create animations across individual or multiple components
                                <span className="block text-base text-gray-500 font-normal mt-2">It integrates well with React's virtual DOM, making it efficient in terms of performance and re-rendering</span>
                                
                            </p>
                        </blockquote>
                    </div>
                    <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                        <img
                        className="rounded-xl bg-indigo-50 lg:rounded-3xl"
                        src="https://cdn.sanity.io/images/etrj839y/production/34d61ea6239c0ab077834d119e671b8d18bf6f51-960x1200.jpg"
                        alt="male with oranges on face"
                        />
                    </div>
                    <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                        <div className="font-semibold text-gray-700">Let's explore some examples</div>
                        <div className="mt-1 text-orange-500">
                            <p>
                                Built with Vite and Framer Motion
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
        <SpotlightGradient />
        <MagnifiedDock />
        <AnimatedTabs />
        <AnimatedSwitch />
        <GradientBorder />
        <MultiStep />
        <StaggeredCheckbox />
        </>
    )
}