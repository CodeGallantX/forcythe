import { HiMenuAlt2, HiX } from "react-icons/hi";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import styled from "styled-components";

// Styled Components
const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  backdrop-filter: blur(10px);
  padding: 1.75rem 1.5rem;
  z-index: 30;

  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 7rem;
  }
`;

const Logo = styled.img`
  width: 7rem;
`;

const LargeNav = styled.nav`
  display: none;

  @media (min-width: 640px) {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    color: white;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #60a6e7;
    }
  }
`;



const MenuButton = styled.button`
  font-size: 1.5rem;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 7rem;
  right: 2.5rem;
  max-width: 24rem;
  padding: 2.5rem 1.5rem;
  background: linear-gradient(to bottom, #061626, black);
  border: 1px solid #101d2d;
  border-radius: 2.5rem;
  color: white;
  gap: 1.5rem;
  z-index: 20;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #60a6e7;
    }
  }
`;

// Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <HeaderWrapper>
            <Logo src="/forcythe_logo.svg" alt="Forcythe Logo" />

            <LargeNav>
                <NavList>
                    <NavItem>
                        <a href="#">About</a>
                    </NavItem>
                    <NavItem>
                        <a href="#">Services</a>
                    </NavItem>
                    <NavItem>
                        <a href="#">Portfolio</a>
                    </NavItem>
                    <NavItem>
                        <a href="#">Studio</a>
                    </NavItem>
                    <NavItem>
                        <a href="#">Foundation</a>
                    </NavItem>
                </NavList>
            </LargeNav>

            <a className="block relative group" href="#">
                <button className="bg-white px-5 py-3 rounded-full group-hover:bg-[#064386] text-bg font-semibold group-hover:text-white transition-all duration-300 ease">
                    Book a call
                    <FaCaretRight className="inline-block ml-0.5 text-lg -translate-y-0.5 group-hover:hidden" />
                </button>
                <span className="absolute w-full h-full top-1.5 right-1.5 -z-10 rounded-full border-[1px] border-dashed group-hover:border-[#064386] transition-all duration-300 ease"></span>
            </a>

            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <HiX /> : <HiMenuAlt2 />}
            </MenuButton>

            {isMenuOpen && (
                <MobileNav>
                    <MobileNavList>
                        <MobileNavItem>
                            <a href="#">About</a>
                        </MobileNavItem>
                        <MobileNavItem>
                            <a href="#">Services</a>
                        </MobileNavItem>
                        <MobileNavItem>
                            <a href="#">Portfolio</a>
                        </MobileNavItem>
                        <MobileNavItem>
                            <a href="#">Studio</a>
                        </MobileNavItem>
                        <MobileNavItem>
                            <a href="#">Foundation</a>
                        </MobileNavItem>
                        <MobileNavItem>
                            <a href="#">Career</a>
                        </MobileNavItem>
                        <MobileNavItem>
                            <a href="#">Blog</a>
                        </MobileNavItem>
                    </MobileNavList>
                </MobileNav>
            )}
        </HeaderWrapper>
    );
};

export default Header;
