"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv/MyResume.pdf'; // Make sure to place your CV file in the public folder
    link.download = 'cv_Fullstack.pdf'; // Replace with your actual name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
            Fullstack Developer
          </h1>
        </motion.div>

        {/* Profile Headshot */}
        <motion.div
          variants={slideInFromTop}
          className="flex justify-center md:justify-start mb-2"
        >
          <Image
            src="/headShot/profile.png" // Replace with your actual headshot path
            alt="Profile Headshot"
            height={150}
            width={150}
            className="rounded-full border-2 border-gradient-to-r from-purple-500 to-cyan-500 shadow-lg object-cover"
            draggable={false}
          />
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Transforming{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Ideas
          </span>{" "}
          into Seamless User{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experiences
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          Passionate and creative developer crafting tailored digital solutions with clean, efficient code. I bring ideas to life through intuitive applications, contribute to open-source projects, and thrive on solving complex problems with innovative thinking.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          variants={slideInFromLeft(1)}
          onClick={handleDownloadCV}
          className="py-2 px-5 sm:px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-base sm:text-lg font-medium rounded-lg shadow-lg transition-transform transform hover:scale-105 max-w-[180px] sm:max-w-[200px] mx-auto md:mx-0 cursor-pointer"
        >
          Download CV
        </motion.button>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-8 md:mt-0"
      >
        <Image
          // src="/hero-bg.svg" 
          src="/hero-bg.svg"
          alt="work icons"
          height={400}
          width={400}
          draggable={false}
          className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};