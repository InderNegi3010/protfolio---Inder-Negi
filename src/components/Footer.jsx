import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ isDarkMode }) => {
  return (
    <motion.div
      className="mt-12 sm:mt-16 md:mt-20"
      initial={{ opacity: 0, y: 30 }} // Reduced from 100
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8
      viewport={{ once: true, amount: 0.1 }} // Triggers earlier
    >
      <div className="text-center px-4">
        <img
          src={isDarkMode ? assets.logo_dark : assets.logo}
          className="w-24 sm:w-28 md:w-36 mx-auto mb-2"
          alt=""
        />

        <div className="w-max flex items-center gap-2 mx-auto text-sm sm:text-base">
          <img
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            className="w-5 sm:w-6"
            alt=""
          />
          indernegi283@gmail.com
        </div>
      </div>

      <motion.div
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-4 sm:mx-6 md:mx-[10%] mt-6 sm:mt-8 py-8 sm:py-12 md:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }} // Reduced delays
        viewport={{ once: true }}
      >
        <p className="text-sm sm:text-base mb-4 sm:mb-0">
          © 2025 Inder Negi. All rights reserved.
        </p>
        <ul className="flex items-center gap-8 sm:gap-12 md:gap-20 justify-center text-sm sm:text-base">
          <li>
            <a
              target="_blank"
              href="https://github.com/InderNegi3010"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/inder-singh-negi-937477354/"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://x.com/INegi16088"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Twitter
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
