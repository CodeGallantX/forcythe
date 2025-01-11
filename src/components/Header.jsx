const Header = () => {
    return (
        <header className="fixed w-full flex flex-row items-center justify-between bg-transparent backdrop-blur-md px-24 py-5">
            <div>
                <img src="/forcythe_logo.svg" className="" alt="" />
            </div>
            <nav className="">
                <ul className="flex flex-row items-center justify-center space-x-6 text-white">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Foundation</a></li>
                </ul>
            </nav>
            <div className="relative group cursor-pointer">
                <button className="bg-white px-4 py-3 rounded-full group-hover:bg-[#064386] group-hover:text-white transition-all duration-300 ease">Book a call</button>
                <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
            </div>
        </header>
    )
}

export default Header