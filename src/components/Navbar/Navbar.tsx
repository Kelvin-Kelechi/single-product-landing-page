import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { links } from "./data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 p-4 bg-white shadow-md z-50">
      <div className="mx-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-black text-xl font-bold">
            <RouterLink to="/">Logo</RouterLink>
          </div>
        </div>
        <div className="hidden md:flex space-x-10">
          {links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.href}
              smooth={true}
              duration={500}
              className="hover:text-gray-300 text-black font-kufam text-[20px] font-normal leading-normal cursor-pointer"
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
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
              className="block text-black font-kufam text-[20px] font-normal leading-normal cursor-pointer"
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

