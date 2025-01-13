const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-20 mb-20 w-full md:w-8/12 mx-auto">
            <h1 className="text-3xl lg:text-5xl leading-none"><span className="text-primary leading-snug">Ready to Scale?</span><br />Join successful brands that chose us as their <span className="text-primary">growth accelerator</span></h1>
            <a href="#" className="relative group">
                <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">Book a call</button>
                <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
            </a>
        </div>
    )
}

export default CTA;