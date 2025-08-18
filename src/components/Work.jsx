import React from "react";
import { motion } from "motion/react"; // ✅ add motion import
import { assets, workData } from "../assets/assets";

const Work = ({ isDarkMode }) => {
  // Animation variants (same style as Services.jsx for sync)
  // ✅ Smooth + faster animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // faster
        delayChildren: 0.05, // less initial delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 12, duration: 0.5 },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <div id="work" className="w-full px-[12%] py-16 scroll-mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // ✅ triggers when in view
      >
        {/* Headings */}
        <motion.h4
          variants={itemVariants}
          className="text-center mb-2 text-lg font-Ovo text-gray-500 tracking-wide dark:text-white/80"
        >
          My portfolio
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-center text-5xl font-Ovo text-gray-800 dark:text-white/80"
        >
          My latest work
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center max-w-2xl mt-5 mb-12 mx-auto font-Ovo text-gray-600 text-lg md:text-md leading-relaxed dark:text-white/80"
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end and full-stack
          development.
        </motion.p>

        {/* Project Cards */}
        <motion.div
          variants={cardsContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10 dark:text-black"
        >
          {workData.map(
            ({ bgImage, title, description, link, github }, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md
               transform transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex flex-col
               dark:bg-gray-800 dark:border-gray-700"
              >
                {/* Image on top */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content below */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-6 mb-4 flex-grow line-clamp-3 dark:text-gray-300">
                    {description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-sm text-white rounded-lg transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-4 bg-gray-800 cursor-pointer hover:bg-gray-900 text-sm text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      <img
                        src={assets.github_icon}
                        alt="GitHub"
                        className="w-4 h-4"
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
                 py-3 px-10 mx-auto my-20 font-medium transition-all duration-300 
                 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] 
                 hover:bg-gray-800 hover:text-white dark:text-white dark:border-white"
        >
          Show More
          <img
            src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_bold}
            className="w-4 transition-transform duration-300 group-hover:translate-x-1"
            alt=""
          />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Work;
