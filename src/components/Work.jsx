import React from "react";
import { motion } from "motion/react";
import { assets, workData } from "../assets/assets";

const Work = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
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
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Headings */}
        <motion.h4
          variants={itemVariants}
          className="text-center mb-2 text-base sm:text-lg font-Ovo text-gray-500 tracking-wide dark:text-white/70"
        >
          My portfolio
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white mb-4"
        >
          My latest work
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center max-w-2xl mt-4 sm:mt-5 mb-12 sm:mb-16 mx-auto font-Ovo text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed dark:text-white/80 px-4"
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end and full-stack
          development.
        </motion.p>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 my-8 sm:my-10"
        >
          {workData.map(
            ({ bgImage, title, description, link, github }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg
               transform transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] 
               flex flex-col h-full dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg"
                style={{ minHeight: "420px" }}
              >
                {/* Image Container with Overlay */}
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Live Demo Badge */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                      Live Demo
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300 line-clamp-2">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {/* You can add tech stack tags here based on the project */}
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                      React
                    </span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                      Node.js
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 
                               text-white text-sm font-semibold rounded-xl transition-all duration-300 
                               hover:shadow-lg hover:-translate-y-0.5 text-center transform active:scale-95"
                    >
                      Live Demo
                    </a>

                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 
                               dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-semibold 
                               rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 
                               transform active:scale-95 min-w-[100px]"
                    >
                      <img
                        src={assets.github_icon}
                        alt="GitHub"
                        className="w-4 h-4 opacity-90"
                      />
                      Code
                    </a>
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500 
                              group-hover:w-full transition-all duration-500 ease-out"
                ></div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Show More Button */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/InderNegi3010"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-max flex items-center gap-3 text-gray-700 dark:text-white border-2 border-gray-700 
                   dark:border-white rounded-full py-4 px-8 mx-auto my-16 sm:my-20 font-semibold 
                   transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] 
                   hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800
                   hover:border-gray-800 dark:hover:border-white text-base transform active:scale-95"
        >
          View All Projects
          <img
            src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_bold}
            className="w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
            alt="arrow"
          />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Work;
