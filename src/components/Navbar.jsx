import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const slideMenuRef = useRef();

  const openMenu = () => {
    slideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    slideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-10">
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%] dark:hidden">
        <img src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
          transition-all duration-500 ease-in-out 
          ${isScroll
            ? "bg-white/70 backdrop-blur-lg shadow-md dark:bg-gray-900/90 dark:shadow-white/20 translate-y-0 opacity-100"
            : "bg-transparent dark:bg-gray-900/50 translate-y-2 opacity-95"
          }`}
      >
        {/* Logo */}
        <a href="#top" className="transition-transform duration-500 hover:scale-105">
          <img
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-30 cursor-pointer mr-14"
            alt="logo"
          />
        </a>

        {/* Menu Links */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-500
            ${isScroll
              ? "dark:bg-gray-800/50 backdrop-blur-md"
              : "bg-white/50 shadow-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600"
            }`}
        >
          <li><a className="font-Ovo dark:text-white hover:text-rose-600 transition-colors" href="#top">Home</a></li>
          <li><a className="font-Ovo dark:text-white hover:text-rose-600 transition-colors" href="#about">About me</a></li>
          <li><a className="font-Ovo dark:text-white hover:text-rose-600 transition-colors" href="#services">Services</a></li>
          <li><a className="font-Ovo dark:text-white hover:text-rose-600 transition-colors" href="#work">My Work</a></li>
          <li><a className="font-Ovo dark:text-white hover:text-rose-600 transition-colors" href="#contact">Contact me</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <img
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className="w-6 cursor-pointer"
              alt="toggle theme"
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-gray-400 dark:text-white rounded-full ml-4 transition hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact <img src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="arrow" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            className="block md:hidden ml-3 cursor-pointer"
          >
            <img src={isDarkMode ? assets.menu_white : assets.menu_black} className="w-6" alt="menu" />
          </button>
        </div>

        {/* ---------- Mobile Menu --------------- */}
        <ul
          ref={slideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen 
          bg-rose-700 dark:bg-gray-800 transition-transform duration-500 ease-in-out"
        >
          <div className="absolute top-6 right-6">
            <img
              src={isDarkMode ? assets.close_white : assets.close_black}
              onClick={closeMenu}
              className="w-5 cursor-pointer"
              alt="close"
            />
          </div>

          <li><a onClick={closeMenu} className="font-Ovo text-white hover:text-gray-300 transition" href="#top">Home</a></li>
          <li><a onClick={closeMenu} className="font-Ovo text-white hover:text-gray-300 transition" href="#about">About me</a></li>
          <li><a onClick={closeMenu} className="font-Ovo text-white hover:text-gray-300 transition" href="#services">Services</a></li>
          <li><a onClick={closeMenu} className="font-Ovo text-white hover:text-gray-300 transition" href="#work">My Work</a></li>
          <li><a onClick={closeMenu} className="font-Ovo text-white hover:text-gray-300 transition" href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
