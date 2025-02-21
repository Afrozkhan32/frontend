import React from "react";
import { motion } from "framer-motion";

const LoaderFullPage = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-95">
      <motion.div
        className="w-20 h-20 border-4 border-t-4 border-blue-500 rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p className="mt-5 text-white text-lg font-bold tracking-wide">Please wait...</p>
    </div>
  );
};

export default LoaderFullPage;

