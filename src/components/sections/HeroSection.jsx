import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import InteractiveAvatar from "../hero/InteractiveAvatar";
import MatrixBackground from "../hero/MatrixBackground";
import { Typewriter } from "react-simple-typewriter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950/50 transition-all duration-700"
    >
      <MatrixBackground />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 items-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
        {/* Left Side */}
        <motion.div
          className="text-center md:text-left py-16 md:py-0 order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              I am Snehasish Das
            </span>
            <br />
            <span className="text-gray-900 dark:text-white transition-colors duration-700">
              <Typewriter
                words={[
                  "Data Scientist",
                  "Data Analyst",
                  "Developer",
                  "ML Engineer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed transition-colors duration-700"
          >
            Transforming complex data into actionable insights through{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-700">
              machine learning
            </span>{" "}
            and advanced analytics that drive business growth.
          </motion.p>

          {/* Buttons & Socials */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white px-8 py-3 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://url-shortener.me/3ZKU">
                <Download className="mr-4 h-6 w-7" />
                Download Resume
              </a>
            </Button>

            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-gray-200 dark:border-gray-700"
              >
                <a href="https://github.com/Unknowncoder3" aria-label="GitHub">
                  <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-gray-200 dark:border-gray-700"
              >
                <a
                  href="https://www.linkedin.com/in/snehasish-das-450403374/"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-gray-200 dark:border-gray-700"
              >
                <a href="mailto:snehasishdas146@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-6 max-w-sm mx-auto md:mx-0"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                2+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                10+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                15+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ML Models Deployed
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Avatar with public photo */}
        <motion.div
          className="w-full h-full order-1 md:order-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <InteractiveAvatar imageSrc="/myphoto.jpg" />
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20 col-span-2"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Scroll to explore
            </span>
            <ArrowDown className="h-6 w-6 text-blue-500 dark:text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
