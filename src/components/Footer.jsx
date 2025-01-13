const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
                <div className="col-span-2 flex flex-col items-start justify-start text-sm max-w-lg space-y-3">
                    <fieldset className="flex flex-row w-full">
                        <input type="email" className=" w-full bg-bg border outline-none border-white rounded-l-full px-4 py-3" placeholder="Your Email Address" />
                        <button className="bg-white text-bg px-7 py-3 text-bg rounded-r-full border border-l-0 border-white hover:bg-[#064386] hover:text-white transition-all duration-300 ease-in-out">Subscribe</button>
                    </fieldset>
                    <fieldset className="flex flex-row items-center outline-none justify-start space-x-2">
  <input
    type="checkbox"
    id="agree"
    className="appearance-none w-4 h-4 rounded-full bg-bg border-white border-2 border-solid checked:bg-white checked:border-transparent checked:ring-2 checked:ring-white checked:ring-offset-2"
  />
  <label htmlFor="agree">I agree to receive other notifications from Forcythe</label>
</fieldset>

                </div>
                <div className="col-span-2 grid grid-cols-3 gap-6 md:gap-20">
                    <div className="col-span-2 flex flex-col items-start justify-start space-y-5">
                        <img src="/forcythe_logo.svg" alt="" />
                        <p className="text-gray-400">We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth.</p>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-5">
                        <h3 className="font-bold text-2xl">Company</h3>
                        <ul className="font-medium text-gray-400 flex flex-col space-y-2">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Studio</a></li>
                            <li><a href="#">Foundation</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="mt-6 border border-secondary" />
            <p className="text-gray-400 mt-3 text-sm">Copyright © 2024 Forcythe. All rights reserved.</p>
        </footer>
    )
}

export default Footer