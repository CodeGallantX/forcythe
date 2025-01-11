const Hero = () => {
    return (
        <div>
            <div className="flex flex-col items-start space-y-5 px-10 bg-board rounded-[4rem] py-10">
                <h1 className="text-7xl w-4/5">We build <span className="text-secondary">products</span> that shape a better future</h1>
                <p className="text-lg text-gray-300 max-w-2xl">We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.</p>
                <a href="#" className="bg-white px-4 py-3 rounded-full text-bg">Book a call</a>
            </div>
        </div>
    )
}

export default Hero