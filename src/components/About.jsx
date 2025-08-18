import React from "react";
import { motion } from "motion/react";
import { assets, infoList, toolsData } from "../assets/assets";

const About = ({isDarkMode}) => {
  // Simple animation variants similar to Header
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h4 
          variants={itemVariants}
          className="text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400"
        >
          Introduction
        </motion.h4>
        
        <motion.h2 
          variants={itemVariants}
          className="text-center text-5xl font-Ovo text-gray-800 dark:text-white"
        >
          About me
        </motion.h2>
        
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <motion.div 
            variants={imageVariants}
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          >
            <img 
              src={assets.user_image} 
              alt="" 
              className="w-full rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500" 
            />
          </motion.div>
          
          <div className="flex-1">
            <motion.p 
              variants={itemVariants}
              className="mb-10 max-w-2xl font-Ovo leading-relaxed text-gray-600 dark:text-gray-300"
            >
              I am a motivated and detail-oriented <span className="text-rose-500 font-semibold">Full-Stack Web Developer</span> with 
              hands-on experience in building scalable and user-friendly applications using the 
              <span className="text-gray-800 dark:text-gray-200 font-semibold"> MERN stack</span>. I specialize in 
              <span className="text-blue-600 dark:text-blue-400 font-medium"> RESTful API development, responsive UI design, and Agile methodologies</span>. 
              Currently pursuing my B.Sc degree, I'm passionate about creating impactful, innovative web solutions 
              and continuously expanding my technical expertise.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-10"
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <div
                  className="border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer hover:bg-rose-50 dark:hover:bg-gray-800 duration-500 hover:shadow-md bg-white dark:bg-gray-800/50"
                  key={index}
                >
                  <img 
                    className="w-7 mt-3" 
                    src={isDarkMode ? iconDark : icon} 
                    alt={title}
                  />
                  <h3 className="my-4 font-semibold text-gray-700 font-Ovo dark:text-white">{title}</h3>
                  <p className="text-gray-600 text-sm font-Ovo dark:text-gray-300">{description}</p>
                </div>
              ))}
            </motion.div>
            
            <motion.h4 
              variants={itemVariants}
              className="my-6 text-gray-700 font-Ovo dark:text-white"
            >
              Tools I use
            </motion.h4>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 sm:gap-5"
            >
              {toolsData.map((tool, index) => (
                <div
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 duration-500 bg-white dark:bg-gray-800/50"
                  key={index}
                >
                  <img src={tool} alt="" className="w-5 sm:w-7" />
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