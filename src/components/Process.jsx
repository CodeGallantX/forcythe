import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

const Process = () => {
    const steps = [
        {
            name: "Idea",
            description: "Nurture your idea into a blueprint for success with our strategic insights and industry expertise. Your vision is unique—let us shape it.",
            headline: "Your vision is unique.",
            illustration: "/camera-man.svg",
        },
        {
            name: "Design",
            description: "Transform your blueprint into stunning visuals. Our creative team crafts designs that captivate and communicate effectively.",
            headline: "From concept to creation.",
            illustration: "/plan-design.svg",
        },
        {
            name: "Develop",
            description: "Build robust and scalable solutions with our cutting-edge development expertise, tailored to your specific goals.",
            headline: "Code your success.",
            illustration: "/plan-develop.svg",
        },
        {
            name: "Launch",
            description: "Bring your vision to life and launch your project with confidence. Let’s make an impact together.",
            headline: "Make your mark.",
            illustration: "/plan-launch.svg",
        },
    ];

    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="px-6 md:px-10 xl:px-28 py-20">
            <div className="mb-12 xl:mb-0 max-w-[45rem]">
                <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
                    <span className="text-primary capitalize">From Spark to Spotlight:</span> we take you every step of the way to success.
                </h2>
            </div>
            <div className="flex lg:items-end flex-col md:flex-row">
                <div className="basis-1/2 flex mb-8 md:mb-0">
                    <div className="md:pr-10 flex flex-col items-start justify-center">
                        <div className="w-full border-2 border-primary mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                            {steps.map((step, index) => (
                                <div
                                    key={step.name}
                                    onClick={() => setActiveStep(index)}
                                    className={`px-2 py-3 text-center font-medium cursor-pointer transition-all duration-300 ${activeStep === index
                                            ? `bg-[#b3d0f2] text-black rounded-full`
                                            : "bg-bg text-white"
                                        }`}
                                >
                                    {step.name}
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 mb-12">
                                {steps[activeStep].headline}
                            </h3>
                            <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
                                {steps[activeStep].description}
                            </p>
                        </div>
                        <a href="#" className="relative group">
                            <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">Book a call <FaCaretRight className="inline-block ml-0.5 text-lg -translate-y-0.5 group-hover:hidden" /></button>
                            <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
                        </a>
                    </div>
                </div>
                <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
                    <img
                        alt={steps[activeStep].name}
                        src={steps[activeStep].illustration}
                        className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Process;
