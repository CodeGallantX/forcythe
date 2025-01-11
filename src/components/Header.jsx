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
            <div className="relative">
                <button className="bg-white px-4 py-3 rounded-full">Book a call</button>
                <span className="absolute border border-dotted border-white w-10 h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
            </div>
        </header>
    )
}

export default Header