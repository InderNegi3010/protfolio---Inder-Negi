import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa06128a-de50-49f1-9973-b8dba6a7f70e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-center bg-no-repeat bg-[length:90%_auto] dark:bg-none dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Headings */}
      <motion.h4 
        className="text-center mb-2 text-lg font-Ovo text-gray-500 tracking-wide dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Connect with me
      </motion.h4>

      <motion.h2 
        className="text-center text-5xl font-Ovo text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Get in touch
      </motion.h2>

      <motion.p 
        className="text-center max-w-2xl mt-5 mb-12 mx-auto font-Ovo text-gray-600 text-lg md:text-md leading-relaxed dark:text-gray-300"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p>

      <motion.form 
        onSubmit={onSubmit} 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="w-full p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-pink-500 dark:focus:border-pink-400 focus:ring-1 focus:ring-pink-500 dark:focus:ring-pink-400 transition"
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />
          <input
            className="w-full p-3 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-pink-500 dark:focus:border-pink-400 focus:ring-1 focus:ring-pink-500 dark:focus:ring-pink-400 transition"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>

        <textarea
          className="w-full p-4 outline-none border border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 mb-6 focus:border-pink-500 dark:focus:border-pink-400 focus:ring-1 focus:ring-pink-500 dark:focus:ring-pink-400 transition"
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
        ></textarea>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-8 py-3 
             bg-black/80 dark:bg-white/90 text-white dark:text-gray-900 rounded-full shadow-md 
             hover:bg-black dark:hover:bg-white duration-500 cursor-pointer 
             mx-auto transition-colors"
        >
          Submit Now
          <img src={assets.right_arrow_white} alt="" className="w-4 dark:hidden" />
          <img src={assets.right_arrow} alt="" className="w-4 hidden dark:block" />
        </button>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
