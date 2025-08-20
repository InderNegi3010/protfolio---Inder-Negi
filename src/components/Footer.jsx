import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Footer = ({ isDarkMode }) => {
  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 30 }} // Reduced from 100
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }} // Reduced from 0.8
      viewport={{ once: true, amount: 0.1 }} // Triggers earlier
    >
      <div className="text-center">
        <img
          src={isDarkMode ? assets.logo_dark : assets.logo}
          className="w-36 mx-auto mb-2"
          alt=""
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <img
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            className="w-6"
            alt=""
          />
          indernegi283@gmail.com
        </div>
      </div>

      <motion.div
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-8 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }} // Reduced delays
        viewport={{ once: true }}
      >
        <p>© 2025 Inder Negi. All rights reserved.</p>
        <ul className="flex items-center gap-20 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/InderNegi3010" className="hover:text-blue-500 transition-colors duration-200">Github</a>
          </li>
          <li>
            <a target="_blank" href="www.linkedin.com/in/inder-singh-negi-937477354" className="hover:text-blue-500 transition-colors duration-200">LinkedIn</a>
          </li>
          <li>
            <a target="_blank" href="" className="hover:text-blue-500 transition-colors duration-200">Twitter</a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;