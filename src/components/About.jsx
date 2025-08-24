import React from "react";
import { motion } from "motion/react";
import { assets, infoList, toolsData } from "../assets/assets";

const About = ({ isDarkMode }) => {
  // Much faster animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Reduced from 0.2
        delayChildren: 0.05, // Reduced from 0.1
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15, // Reduced from 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35, // Reduced from 0.6
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92, // Less dramatic than 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45, // Reduced from 0.8
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="about"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-10 scroll-mt-20 bg-white dark:bg-gray-900"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} // Reduced from 0.3
      >
        <motion.h4
          variants={itemVariants}
          className="text-center mb-2 text-base sm:text-lg font-Ovo text-gray-500 dark:text-gray-400"
        >
          Introduction
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white"
        >
          About me
        </motion.h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 my-12 sm:my-16 md:my-20">
          <motion.div
            variants={imageVariants}
            className="w-48 sm:w-56 md:w-64 lg:w-80 rounded-3xl max-w-none"
          >
            <img
              src={assets.user_image}
              alt=""
              className="w-full rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </motion.div>

          <div className="flex-1 w-full">
            <motion.p
              variants={itemVariants}
              className="mb-8 sm:mb-10 max-w-2xl font-Ovo leading-relaxed text-gray-600 dark:text-gray-300 text-sm sm:text-base"
            >
              I am a motivated and detail-oriented{" "}
              <span className="text-rose-500 font-semibold">
                Full-Stack Web Developer
              </span>{" "}
              with hands-on experience in building scalable and user-friendly
              applications using the
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                {" "}
                MERN stack
              </span>
              . I specialize in
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {" "}
                RESTful API development, responsive UI design, and Agile
                methodologies
              </span>
              . Currently pursuing my B.Sc degree, I'm passionate about creating
              impactful, innovative web solutions and continuously expanding my
              technical expertise.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mb-8 sm:mb-10"
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <div
                  className="border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-rose-50 dark:hover:bg-gray-800 duration-300 hover:shadow-md bg-white dark:bg-gray-800/50"
                  key={index}
                >
                  <img
                    className="w-6 sm:w-7 mt-2 sm:mt-3"
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                  />
                  <h3 className="my-3 sm:my-4 font-semibold text-gray-700 font-Ovo dark:text-white text-sm sm:text-base">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-Ovo dark:text-gray-300">
                    {description}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.h4
              variants={itemVariants}
              className="my-4 sm:my-6 text-gray-700 font-Ovo dark:text-white text-base sm:text-lg"
            >
              Tools I use
            </motion.h4>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-wrap"
            >
              {toolsData.map((tool, index) => (
                <div
                  className="flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 duration-300 bg-white dark:bg-gray-800/50"
                  key={index}
                >
                  <img src={tool} alt="" className="w-4 sm:w-5 md:w-7" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
