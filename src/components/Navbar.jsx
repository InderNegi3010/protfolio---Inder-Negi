import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { label: "Home", href: "#top" },
    { label: "About me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "My Work", href: "#work" },
    { label: "Contact me", href: "#contact" },
  ];

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Close menu on outside click & lock body scroll while open
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Navbar scroll background toggle
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-10">
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%] dark:hidden">
        <img src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-4 sm:px-5 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScroll
            ? "bg-white/70 backdrop-blur-lg shadow-md dark:bg-gray-900/90 dark:shadow-white/20 translate-y-0 opacity-100"
            : "bg-transparent dark:bg-gray-900/50 translate-y-2 opacity-95"
        }`}
        style={{ zIndex: 50 }}
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

        {/* Desktop Menu Links */}
        <ul
          className={`hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-500 ${
            isScroll
              ? "dark:bg-gray-800/50 backdrop-blur-md"
              : "bg-white/50 shadow-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600"
          }`}
        >
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-[Ovo] dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <img
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className="w-5 sm:w-6"
              alt="toggle theme"
            />
          </button>

          {/* Contact Button - Hidden on mobile */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-gray-400 dark:text-white rounded-full ml-4 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact{" "}
            <img
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrow"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            className="block lg:hidden ml-2 sm:ml-3 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
          >
            <img
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              className="w-6 h-6"
              alt="menu"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          style={{ zIndex: 998 }}
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-80 h-screen transform transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${
          isDarkMode
            ? "bg-gray-900 shadow-2xl shadow-black/50 border-l border-gray-700"
            : "bg-white shadow-2xl shadow-gray-500/30 border-l border-gray-200"
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div
            className={`flex items-center justify-between p-6 border-b ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <h3
              className={`text-xl font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Menu
            </h3>
            <button
              onClick={closeMenu}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDarkMode
                  ? "hover:bg-gray-700 text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
              aria-label="Close menu"
            >
              <img
                src={isDarkMode ? assets.close_white : assets.close_black}
                className="w-6 h-6"
                alt="close"
              />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-200 text-lg font-medium block w-full ${
                      isDarkMode
                        ? "text-gray-100 hover:bg-gray-800 hover:text-rose-400 bg-gray-800/20"
                        : "text-gray-700 hover:bg-gray-50 hover:text-rose-600 bg-gray-50/50"
                    }`}
                    style={{
                      display: "flex",
                      textDecoration: "none",
                      minHeight: "56px",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`text-sm opacity-60 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* Contact Button in Mobile Menu */}
            <div className="mt-8">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition-all duration-200 font-medium"
                style={{
                  display: "flex",
                  textDecoration: "none"
                }}
              >
                Contact me
                <img
                  src={assets.arrow_icon_dark || assets.arrow_icon}
                  className="w-4 h-4"
                  style={{ filter: "invert(1)" }}
                  alt="arrow"
                />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`p-6 border-t ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="text-center space-y-3">
              <p
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                © 2025 Inder Negi
              </p>
              <div
                className={`flex items-center justify-center gap-3 p-3 rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <img
                  src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                  className="w-5 h-5"
                  alt="mail"
                />
                <span
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  indernegi283@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;