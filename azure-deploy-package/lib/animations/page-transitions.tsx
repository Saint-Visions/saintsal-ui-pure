"use client";
import * as React from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";

// Animation variants for page transitions
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

export const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Loading animation for SaintSal branding
export const SaintSalLoader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl"
            >
              <div className="text-black font-bold text-3xl">SV</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-yellow-400 text-sm font-medium mb-1">
                SAINTSAL™
              </div>
              <h1 className="text-white text-xl font-bold mb-2">
                SaintVisionAI
              </h1>
              <p className="text-white/70 text-sm">
                Initializing your AI sanctuary...
              </p>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 2 }}
              className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-6 max-w-xs mx-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Page wrapper with transitions
export const PageTransition = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Stagger animation for feature cards
export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
