import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const slideMenuRef = useRef();
  const mobileMenuRef = useRef();

  const openMenu = () => {
    setIsMobileMenuOpen(true);
    slideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    slideMenuRef.current.style.transform = "translateX(100%)";
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
        className={`w-full fixed px-4 sm:px-5 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 
          transition-all duration-500 ease-in-out 
          ${
            isScroll
              ? "bg-white/70 backdrop-blur-lg shadow-md dark:bg-gray-900/90 dark:shadow-white/20 translate-y-0 opacity-100"
              : "bg-transparent dark:bg-gray-900/50 translate-y-2 opacity-95"
          }`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="transition-transform duration-500 hover:scale-105"
        >
          <img
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-20 sm:w-24 md:w-30 cursor-pointer mr-8 sm:mr-10 md:mr-14"
            alt="logo"
          />
        </a>

        {/* Desktop Menu Links - Hidden on mobile */}
        <ul
          className={`hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-500
            ${
              isScroll
                ? "dark:bg-gray-800/50 backdrop-blur-md"
                : "bg-white/50 shadow-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600"
            }`}
        >
          <li>
            <a
              className="font-Ovo dark:text-white hover:text-rose-600 transition-colors"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:text-rose-600 transition-colors"
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:text-rose-600 transition-colors"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:text-rose-600 transition-colors"
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="font-Ovo dark:text-white hover:text-rose-600 transition-colors"
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <img
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className="w-5 sm:w-6 cursor-pointer"
              alt="toggle theme"
            />
          </button>

          {/* Contact Button - Hidden on mobile */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-gray-400 dark:text-white rounded-full ml-4 transition hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact{" "}
            <img
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrow"
            />
          </a>

          {/* Mobile Menu Button - Always visible on mobile */}
          <button
            onClick={openMenu}
            className="block lg:hidden ml-2 sm:ml-3 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <img
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              className="w-6 h-6"
              alt="menu"
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMenu}
          ></div>
        )}

        {/* Mobile Menu - Slide in from right */}
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 w-64 h-screen bg-white dark:bg-gray-800 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50 lg:hidden"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Menu
              </h3>
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <img
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  className="w-5 h-5"
                  alt="close"
                />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-6">
              <ul className="space-y-4">
                <li>
                  <a
                    onClick={closeMenu}
                    className="block py-3 px-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-lg font-medium"
                    href="#top"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeMenu}
                    className="block py-3 px-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-lg font-medium"
                    href="#about"
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeMenu}
                    className="block py-3 px-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-lg font-medium"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeMenu}
                    className="block py-3 px-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-lg font-medium"
                    href="#work"
                  >
                    My Work
                  </a>
                </li>
                <li>
                  <a
                    onClick={closeMenu}
                    className="block py-3 px-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-lg font-medium"
                    href="#contact"
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  © 2025 Inder Negi
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                  <img
                    src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                    className="w-4 h-4"
                    alt=""
                  />
                  <span className="text-sm">indernergi283@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
