import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full flex items-center justify-between bg-transparent backdrop-blur-xl px-6 md:px-28 py-5 z-30">
            <div>
                <img src="/forcythe_logo.svg" className="w-28" alt="Forcythe Logo" />
            </div>
            <nav
                className={`absolute md:static top-14 right-10 border-r border-r-white max-w-sm w-full rounded-3xl md:rounded-none md:p-0 md:w-auto md:h-auto bg-bg md:bg-transparent text-white md:text-black rounded-xl md:rounded-none flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-7 transition-transform duration-300 ${isMenuOpen ? "block" : "hidden"
                    } md:translate-x-0 z-20`}
            >
                <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-7 text-white">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Foundation</a></li>
                </ul>
            </nav>
                <a href="#" className="hidden md:block relative group">
                    <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">Book a call</button>
                    <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
                </a>
            <button
                className="text-white text-2xl md:hidden z-30"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
        </header>
    );
};

export default Header;