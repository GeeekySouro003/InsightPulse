import Lottie from "lottie-react";
import { features } from "../constants";
import Section from "./Section";
import { useRef } from "react";
import animatedPhone from "../assets/phone-animation.json";


const Features = () => {

    const phoneRef = useRef(null);

  return (
    <>
    <Section crosses id="features">
        <div className="container px-5 mx-auto" >
            <div className="flex flex-col w-full mb-12 items-center">
                <h1 className="text-3xl font-bold font-grotesk title-font mb-4 text-text">
                    Features
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Discover the powerful features that make our product stand out. 
                From cutting-edge technology to user-friendly interfaces, we've got you covered.
                </p>
            </div>

            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <Lottie
                    onComplete={() => {
                        phoneRef.current?.goToAndPlay(90, true);
                    }}
                    lottieRef={phoneRef}
                    loop={true}
                    animationData={animatedPhone}
                    />
                </div>

                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left items-center">
                    {features.map((feat) => (
                        <div key={feat.id} className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-secondary mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <path d="m9 11 3 3L22 4"/>
                                </svg>
                            </div>

                            <div className="flex-grow">
                                <h2 className="text-text text-lg font-code font-semibold mb-3">
                                    {feat.title}
                                </h2>
                                <p className="leading-relaxed text-text text-sans">
                                    {feat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
    </>
  )
}

export default Features;