import React from "react";
import { motion } from "motion/react";
import { assets, serviceData } from "../assets/assets";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced from 30
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Added duration
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
        ease: "easeOut" // Changed from spring for faster animation
      },
    },
  };

  return (
    <div
      id="services"
      className="w-full px-[12%] py-16 scroll-mt-20
                  bg-gradient-to-b from-white via-gray-50 to-white
                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
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
          className="text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400 tracking-wide"
        >
          What I Offer
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-center text-5xl font-Ovo font-bold text-gray-800 dark:text-gray-100"
        >
          My Services
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-center max-w-2xl mt-5 mb-12 mx-auto font-Ovo text-gray-600 dark:text-gray-300 text-lg md:text-md leading-relaxed"
        >
          I am a MERN Stack Developer from Dehradun, Uttarakhand with 2 years of
          experience working on scalable, modern, and user-friendly applications.
        </motion.p>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10"
        >
          {serviceData.map(({ icon, title, description, link }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative border border-gray-200 dark:border-gray-700 rounded-2xl px-8 py-12
               bg-white dark:bg-gray-800 transition-all duration-300 ease-out
               hover:-translate-y-2 hover:bg-gray-50 dark:hover:bg-gray-700
               hover:shadow-[0_8px_16px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_8px_16px_rgba(255,255,255,0.1)]"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 rounded-xl mb-6 shadow-inner">
                <img className="w-8" src={icon} alt={title} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">{description}</p>
              <a
                href={link}
                className="flex items-center gap-2 text-sm mt-6 text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-200"
              >
                Read more <img src={assets.right_arrow} className="w-4" alt="arrow" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;