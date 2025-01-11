import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full flex items-center justify-between bg-transparent backdrop-blur-xl px-6 md:px-28 py-5 z-30">
            <div>
                <img src="/forcythe_logo.svg" className="w-28" alt="Forcythe Logo" />
            </div>
            <nav
                className={`absolute md:static top-16 left-0 md:top-0 md:left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center justify-center transition-transform ${
                    isMenuOpen ? "-translate-x-0" : "translate-x-full"
                } md:translate-x-0 z-20`}
            >
                <ul className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-7 text-black md:text-white py-5 md:py-0 bg-white md:bg-transparent">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Foundation</a></li>
                </ul>
            </nav>
            <div className="hidden md:block">
                <button className="bg-white px-4 py-3 rounded-full hover:bg-[#064386] hover:text-white transition-all duration-300 ease">
                    Book a call
                </button>
            </div>
            <button
                className="text-white text-2xl md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <FaBars />
            </button>
        </header>
    );
};

export default Header;
