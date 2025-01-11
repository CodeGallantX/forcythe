const Process = () => {
    return (
        <div className=" px-6 md:px-10 xl:px-28  py-20">
            <div className="mb-12 xl:mb-0 max-w-[45rem]">
                <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
                    <span className="text-[#60a6e7] capitalize">From Spark to Spotlight:</span>
                    we take you every step of the way to success.
                </h2>
            </div>
            <div className="flex lg:items-end flex-col md:flex-row">
                <div className="basis-1/2 flex mb-8 md:mb-0">
                    <div className="md:pr-10">
                        <div className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                            <div className="px-2 py-3 text-center font-medium cursor-pointer transition-all duration-300 bg-accent2 text-black rounded-full">
                                Idea
                            </div>
                            <div className="px-2 py-3 text-center font-medium cursor-pointer transition-all duration-300 bg-transparent text-white rounded-full">
                                Design
                            </div>
                            <div className="px-2 py-3 text-center font-medium cursor-pointer transition-all duration-300 bg-transparent text-white rounded-full">
                                Develop
                            </div>
                            <div className="px-2 py-3 text-center font-medium cursor-pointer transition-all duration-300 bg-transparent text-white rounded-full">
                                Launch
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 mb-12">
                                Your vision is unique.
                            </h3>
                            <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
                                Nurture your idea into a blueprint for success with our strategic insights and industry expertise. Your vision is unique—let us shape it.
                            </p>
                        </div>
                        <a href="#" className="relative group">
                            <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">Visit Blog <FaCaretRight className="inline-block ml-0.5 text-lg -translate-y-0.5 group-hover:hidden" /></button>
                            <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
                        </a>
                    </div>
                </div>
                <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
                    <img
                        alt=""
                        src="/camera-man.svg"
                        className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
                    />
                </div>
            </div>
        </div>

    )
}

export default Process