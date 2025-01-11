const Footer = () => {
    return (
        <footer className="">
            <div className="flex flex-col items-start justify-start text-sm max-w-lg">
                <fieldset className="flex flex-row w-full">
                    <input type="email" className=" w-full bg-bg border outline-none border-white rounded-l-full px-4 py-3" placeholder="Your Email Address"/>
                    <button className="bg-white text-bg px-7 py-3 text-bg rounded-r-full border border-l-0 border-white hover:bg-[#064386] hover:text-white transition-all duration-300 ease-in-out">Subscribe</button>
                </fieldset>
                <fieldset className="flex flex-row items-center outline-none justify-start space-x-2">
                    <input type="checkbox" id="agree"/>
                    <label htmlFor="agree">I agree to receive other notifications from Forcythe</label>
                </fieldset>
            </div>
            <div className="flex flex-col items-start justify-start space-y-3">
                <img src="/forcythe_logo.svg" alt="" />
                <p className="text-gray-500">We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth.</p>
            </div>
            <div>
            </div>
        </footer>
    )
}

export default Footer