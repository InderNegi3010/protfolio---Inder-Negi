import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Header = () => {
  const titles = ["MERN Stack Developer", "Frontend Developer", "Backend Developer", "Coder"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeoutId;

    if (isTyping) {
      // Typing animation - add characters one by one
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 150); // Speed of typing
      } else {
        // Wait before starting to delete
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2200); // Pause duration
      }
    } else {
      // Deleting animation - remove characters one by one
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 60); // Speed of deleting (faster than typing)
      } else {
        // Move to next title and start typing again
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTitleIndex, titles]);

  // Simple animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Simple background decorative elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-700/30 
                      bg-[size:20px_20px] opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800/30 
                      rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800/30 
                      rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
             
      {/* Main content */}
      <motion.div 
        className="relative z-10 w-11/12 max-w-4xl text-center mx-auto 
                   min-h-screen flex flex-col items-center justify-center gap-6 px-4 
                   pt-28 md:pt-32 lg:pt-40"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Profile Image */}
        <motion.div 
          className="relative group mb-4"
          variants={imageVariants}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 
                          to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 
                          transition duration-300 group-hover:duration-200"></div>
          <div className="relative">
            <img 
              src={assets.profile_img}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover 
                         border-4 border-white dark:border-gray-600 shadow-2xl 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
              alt="Inder Negi - Developer"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr 
                            from-transparent via-transparent to-white/10 
                            dark:to-gray-300/10 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.h3 
          className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-2 
                     font-Ovo text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          Hi! I'm Inder Negi{" "}
          <img 
            src={assets.hand_icon}
            className="w-6"
            alt="Hand wave"
          />
        </motion.h3>

        {/* Animated Title with Typewriter Effect */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-[70px] font-Ovo font-bold leading-tight 
                     bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 
                     dark:from-gray-100 dark:via-blue-400 dark:to-purple-400 
                     bg-clip-text text-transparent min-h-[1.2em] flex items-center justify-center"
          variants={itemVariants}
        >
          <span className="inline-flex items-center">
            {displayedText}
            <span className="inline-block w-1 h-[0.8em] bg-blue-500 ml-2 animate-pulse"></span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-[60px] font-Ovo font-bold 
                     text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          based in India
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-300 
                     text-lg md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          I am a MERN Stack Developer from Dehradun, Uttarakhand with 2 years of
          experience in multiple companies and complex projects
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
          variants={itemVariants}
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                       dark:from-blue-500 dark:to-purple-500 text-white rounded-full 
                       font-medium transition-all duration-300 hover:from-blue-700 
                       hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 
                       hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 
                       min-w-[200px] justify-center"
          >
            Contact Me
            <img src={assets.right_arrow_white} className="w-4" alt="" />
          </a>
           
          <a
            href="/sample-resume.docx"
            download
            className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 
                       text-gray-700 dark:text-gray-300 rounded-full font-medium 
                       transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 
                       hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl 
                       transform hover:-translate-y-1 flex items-center gap-2 
                       min-w-[200px] justify-center bg-white/80 dark:bg-gray-800/80"
          >
            My Resume
            <img src={assets.download_icon} className="w-4" alt="" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;