"use client"
import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center p-5 overflow-hidden bg-gradient-to-br from-black to-teal-900">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'linear-gradient(45deg, #000000, #001a1a)',
            'linear-gradient(45deg, #001a1a, #003333)',
            'linear-gradient(45deg, #003333, #004d4d)',
            'linear-gradient(45deg, #004d4d, #006666)',
            'linear-gradient(45deg, #006666, #000000)',
          ],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300"
        >
          Ark is an onchain protocol that allows organizations to create and manage Para Autonomous Organizations (PAOs).
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
