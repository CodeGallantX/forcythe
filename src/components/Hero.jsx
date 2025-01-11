const Hero = () => {
    return (
        <div>
            <div className="flex flex-col items-start justify-center w-full bg-white bg-opacity-10 rounded-[2rem] sm:rounded-[3rem]  p-5 py-8 md:p-8 lg:p-10 my-10 space-y-4">
                <h1 className="text-7xl w-4/5">We build <span className="text-secondary">products</span> that shape a better future</h1>
                <p className="text-lg text-gray-400 max-w-xl">We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.</p>
                <a href="#" className="relative group">
                    <button className="bg-white px-4 py-3 rounded-full group-hover:bg-[#064386] text-gray-700 group-hover:text-white transition-all duration-300 ease">Book a call</button>
                    <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
                </a>
            </div>
        </div>
    )
}

export default Hero