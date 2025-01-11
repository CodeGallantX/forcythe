import { FaCaretRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="px-28 relative">
            <div>
                <img src="/header-background.svg" alt="" className="absolute w-11/12 left-1/3 -translate-x-1/3" />
            </div>
            <div className="flex flex-col items-start justify-center w-full bg-white bg-opacity-10 rounded-[2rem] sm:rounded-[3rem] p-5 py-8 md:p-10 lg:p-14 my-10 space-y-6 z-10">
                <h1 className="text-8xl w-11/12">We build <span className="text-secondary">products</span> that shape a better future</h1>
                <p className="text-lg text-gray-400 w-3/5">We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.</p>
                <a href="#" className="relative group">
                    <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">Book a call <FaCaretRight className="inline-block ml-0.5 text-lg -translate-y-0.5 group-hover:hidden" /></button>
                    <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
                </a>
            </div>
        </div>
    )
}

export default Hero;