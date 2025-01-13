import { HiMenuAlt2, HiX } from "react-icons/hi";
import { FaCaretRight } from "react-icons/fa"
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full flex items-center justify-between bg-transparent backdrop-blur-xl px-6 lg:px-16 xl:px-28 py-7 md:py-8 z-30">
            <div>
                <img
                    src="/forcythe_logo.svg"
                    className="w-28"
                    alt="Forcythe Logo"
                />
            </div>

            <nav className="sm:hidden md:flex items-center space-x-7 text-white">
                <ul className="flex items-center space-x-7">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Studio</a>
                    </li>
                    <li>
                        <a href="#">Foundation</a>
                    </li>
                </ul>

            </nav>
                <a href="#" className="relative group">
                    <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">
                        Book a call
                        <FaCaretRight className="inline-block ml-0.5 text-lg -translate-y-0.5 group-hover:hidden" />
                    </button>
                    <span className="absolute w-full h-full top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
                </a>

            <button
                className="text-white text-2xl md:hidden z-30 bg-white bg-opacity-10 rounded-lg p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <HiX /> : <HiMenuAlt2 />}
            </button>

            {isMenuOpen && (
                <nav className="absolute top-28 right-10 max-w-96 py-10 pr-28 border border-[#101d2d] px-6 rounded-[2.5rem] bg-gradient-to-b from-[#061626] to-black text-white flex flex-col items-start justify-center space-y-6 z-20">
                    <ul className="text-left space-y-6">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Studio</a>
                        </li>
                        <li>
                            <a href="#">Foundation</a>
                        </li>
                        <li>
                            <a href="#">Career</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
