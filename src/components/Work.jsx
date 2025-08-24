import React from "react";
import { motion } from "motion/react";
import { assets, workData } from "../assets/assets";

const Work = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced from 30
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.08, // Reduced from 0.15
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced from 40
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35, // Much faster
        ease: "easeOut", // Changed from spring for speed
      },
    },
  };

  return (
    <div
      id="work"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-12 sm:py-16 scroll-mt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Triggers much earlier
      >
        {/* Headings */}
        <motion.h4
          variants={itemVariants}
          className="text-center mb-2 text-base sm:text-lg font-Ovo text-gray-500 tracking-wide dark:text-white/80"
        >
          My portfolio
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white/80"
        >
          My latest work
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center max-w-2xl mt-4 sm:mt-5 mb-8 sm:mb-12 mx-auto font-Ovo text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed dark:text-white/80 px-4"
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end and full-stack
          development.
        </motion.p>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 my-8 sm:my-10 dark:text-black"
        >
          {workData.map(
            ({ bgImage, title, description, link, github }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md
               transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex flex-col
               dark:bg-gray-800 dark:border-gray-700"
              >
                {/* Image on top */}
                <div className="w-full h-40 sm:h-48 overflow-hidden">
                  <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content below */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-gray-100">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-5 sm:leading-6 mb-3 sm:mb-4 flex-grow line-clamp-3 dark:text-gray-300">
                    {description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-2 sm:gap-4 mt-auto">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 bg-pink-500 hover:bg-pink-600 text-xs sm:text-sm text-white rounded-lg transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-2 sm:py-4 bg-gray-800 cursor-pointer hover:bg-gray-900 text-xs sm:text-sm text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
                    >
                      <img
                        src={assets.github_icon}
                        alt="GitHub"
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Show More Button */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/InderNegi3010"
          target="_blank"
          className="w-max flex items-center gap-2 text-gray-700 border border-gray-700 rounded-full 
                 py-2.5 sm:py-3 px-6 sm:px-10 mx-auto my-12 sm:my-20 font-medium transition-all duration-300 
                 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] 
                 hover:bg-gray-800 hover:text-white dark:text-white dark:border-white text-sm sm:text-base"
        >
          Show More
          <img
            src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_bold}
            className="w-3 sm:w-4 transition-transform duration-300 group-hover:translate-x-1"
            alt=""
          />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Work;
