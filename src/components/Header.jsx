import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Header = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const titles = [
      "MERN Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Coder",
    ];
    const currentTitle = titles[currentTitleIndex];
    let timeoutId;

    if (isTyping) {
      // Typing animation - add characters one by one
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 80); // Slightly faster typing
      } else {
        // Wait longer before starting to delete so people can read
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 3000); // Longer pause duration
      }
    } else {
      // Deleting animation - remove characters one by one
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40); // Faster deleting
      } else {
        // Move to next title and start typing again
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTitleIndex]);

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
    <div
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Simple background decorative elements */}
      <div
        className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-700/30 
                      bg-[size:20px_20px] opacity-30"
      ></div>
      <div
        className="absolute top-10 left-4 w-48 h-48 sm:top-20 sm:left-10 sm:w-72 sm:h-72 
                      bg-blue-200 dark:bg-blue-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      ></div>
      <div
        className="absolute bottom-10 right-4 w-48 h-48 sm:bottom-20 sm:right-10 sm:w-72 sm:h-72 
                      bg-purple-200 dark:bg-purple-800/30 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      ></div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl text-center mx-auto 
                   min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 
                   pt-20 sm:pt-24 md:pt-28 lg:pt-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Enhanced Profile Image with Professional Cropping */}
        <motion.div
          className="relative group mb-4 sm:mb-6 md:mb-8"
          variants={imageVariants}
        >
          <div
            className="absolute -inset-2 sm:-inset-3 md:-inset-4 profile-glow-professional rounded-full blur-sm 
                          transition duration-500 group-hover:duration-300"
          ></div>
          <div className="relative profile-professional">
            <img
              src={assets.profile_img}
              className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-68 xl:h-68
                         rounded-full border-4 border-white dark:border-gray-700 
                         shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl
                         ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 profile-image-mobile"
              alt="Inder Negi - Developer"
              style={{
                objectPosition: "center 25%", // Updated positioning
                aspectRatio: "1/1",
                objectFit: "cover",
                transform: "scale(1.1)", // Zoom to show upper body better
              }}
            />
            {/* Enhanced overlay for professional look */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-tr 
                            from-transparent via-transparent to-white/20 
                            dark:to-gray-300/20 pointer-events-none"
            ></div>
            {/* Professional subtle inner shadow */}
            <div
              className="absolute inset-0 rounded-full 
                            shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] 
                            dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]
                            pointer-events-none"
            ></div>
            {/* Status indicator with enhanced styling */}
            <div
              className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 
                              w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-2 
                              border-white dark:border-gray-800 shadow-lg
                              ring-2 ring-green-500/30 animate-pulse"
            ></div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.h3
          className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-2 
                     font-Ovo text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          Hi! I'm Inder Negi{" "}
          <img src={assets.hand_icon} className="w-5 sm:w-6" alt="Hand wave" />
        </motion.h3>

        {/* Animated Title with Typewriter Effect */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] 
                     font-Ovo font-bold leading-tight 
                     bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 
                     dark:from-gray-100 dark:via-blue-400 dark:to-purple-400 
                     bg-clip-text text-transparent px-2"
          variants={itemVariants}
        >
          <div
            className="min-h-[1em] sm:min-h-[1.1em] md:min-h-[1.2em] lg:min-h-[1em] 
                      flex items-center justify-center mb-2"
          >
            <span className="inline-flex items-center">
              {displayedText}
              <span
                className={`inline-block w-0.5 sm:w-1 h-[0.8em] bg-blue-500 ml-1 sm:ml-2
                           ${isTyping ? "animate-pulse" : "animate-bounce"}`}
              ></span>
            </span>
          </div>
          <span
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[60px] 
                      text-gray-600 dark:text-gray-400 block"
          >
            based in India
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-300 
                     text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4"
          variants={itemVariants}
        >
          I am a MERN Stack Developer from Dehradun, Uttarakhand with 2 years of
          experience in multiple companies and complex projects
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="header-buttons flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 w-full"
          variants={itemVariants}
        >
          <a
            href="#contact"
            className="group w-full max-w-xs sm:w-auto sm:min-w-[200px] px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                       dark:from-blue-500 dark:to-purple-500 text-white rounded-full 
                       font-medium transition-all duration-300 hover:from-blue-700 
                       hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 
                       hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 
                       text-sm sm:text-base min-h-[44px]"
          >
            Contact Me
            <img src={assets.right_arrow_white} className="w-3 sm:w-4" alt="" />
          </a>

          <a
            href="/sample-resume.docx"
            download
            className="group w-full max-w-xs sm:w-auto sm:min-w-[200px] px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 
                       text-gray-700 dark:text-gray-300 rounded-full font-medium 
                       transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 
                       hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl 
                       transform hover:-translate-y-1 flex items-center justify-center gap-2 
                       bg-white/80 dark:bg-gray-800/80
                       text-sm sm:text-base min-h-[44px]"
          >
            My Resume
            <img src={assets.download_icon} className="w-3 sm:w-4" alt="" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
