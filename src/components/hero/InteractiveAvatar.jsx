import React from "react";
import { motion } from "framer-motion";

const InteractiveAvatar = ({ imageSrc }) => {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto h-full flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.08, rotate: 2 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Outer orbit ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="currentColor"
          className="text-blue-300 dark:text-blue-600"
          strokeWidth="1"
          strokeOpacity="0.3"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />

        {/* Middle orbit ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="currentColor"
          className="text-purple-300 dark:text-purple-600"
          strokeWidth="1"
          strokeOpacity="0.4"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />

        {/* Inner orbit ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="currentColor"
          className="text-indigo-300 dark:text-indigo-500"
          strokeWidth="1"
          strokeOpacity="0.5"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />

        {/* Avatar photo (bigger & animated) */}
        <motion.image
          href={imageSrc}
          x="120"
          y="120"
          width="160"
          height="160"
          clipPath="circle(80px at 80px 80px)"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          filter="url(#glow)"
        />

        {/* Orbiting data particles */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <circle cx="360" cy="200" r="6" fill="url(#particleGradient)" filter="url(#glow)" />
          <circle cx="200" cy="40" r="4" fill="url(#particleGradient)" filter="url(#glow)" />
          <circle cx="40" cy="200" r="5" fill="url(#particleGradient)" filter="url(#glow)" />
        </motion.g>

        <motion.g
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          <circle cx="320" cy="200" r="3" fill="#22d3ee" filter="url(#glow)" />
          <circle cx="200" cy="80" r="4" fill="#a855f7" filter="url(#glow)" />
          <circle cx="80" cy="200" r="3" fill="#6366f1" filter="url(#glow)" />
        </motion.g>

        {/* Floating data symbols */}
        <motion.g
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <text x="120" y="120" className="fill-blue-400 dark:fill-blue-300 text-xs font-mono" opacity="0.6">λ</text>
          <text x="280" y="140" className="fill-purple-400 dark:fill-purple-300 text-xs font-mono" opacity="0.6">∑</text>
          <text x="320" y="280" className="fill-indigo-400 dark:fill-indigo-300 text-xs font-mono" opacity="0.6">μ</text>
          <text x="80" y="300" className="fill-cyan-400 dark:fill-cyan-300 text-xs font-mono" opacity="0.6">σ</text>
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default InteractiveAvatar;
