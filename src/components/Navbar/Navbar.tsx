import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { links } from "./data";
import { useTheme } from "../../theme-context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const { isDark } = useTheme();

  const handleSetActive = (to: any) => {
    setActiveLink(to);
  };

  return (
    <nav className={`sticky top-0 p-4 shadow-md z-50 ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <div className="mx-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className={`font-kufam text-xl font-bold ${isDark ? "text-white" : "text-black"}`}>
            <RouterLink to="/">
              Smart<span className="text-[#663399]">Shop</span>X
            </RouterLink>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-10">
          {links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.href}
              smooth={true}
              duration={500}
              className={`hover:text-[#663399] font-kufam text-[20px] font-normal leading-normal cursor-pointer ${
                activeLink === link.href ? "border-b-4 border-[#663399]" : ""
              } ${isDark ? "text-white" : "text-black"}`}
              onClick={() => handleSetActive(link.href)}
            >
              {link.text}
            </ScrollLink>
          ))}
        </div>
        <div className="hidden md:flex items-center">
          <RouterLink
            to="/register"
            className="button font-kufam px-10 rounded-s-xl text-xl py-3 self-start bg-[#663399] text-white"
          >
            Buy Now
          </RouterLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black   focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${isDark ? "text-white" : "text-[#663399]"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.href}
              smooth={true}
              duration={500}
              className={`block font-kufam text-[20px] font-normal leading-normal cursor-pointer ${
                activeLink === link.href ? "border-b-4 border-[#663399]" : ""
              } ${isDark ? "text-white" : "text-black"}`}
              onClick={() => {
                setIsOpen(false);
                handleSetActive(link.href);
              }}
            >
              {link.text}
            </ScrollLink>
          ))}
          <RouterLink
            to="/register"
            className="button block text-center font-kufam px-10 rounded-s-xl text-xl py-3 bg-[#663399] text-white"
          >
            Buy Now
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
