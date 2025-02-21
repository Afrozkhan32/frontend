import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.backgroundColor = "#f4f4f9"; // Light background color
    setTimeout(() => {
      document.body.style.transition = "background-color 0.5s ease-in-out";
      document.body.style.backgroundColor = "white";
    }, 300);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: "fixed", bottom: 20, right: 20 }}
    >
      <span style={{ fontSize: "12px", color: "#555" }}>Navigating...</span>
    </motion.div>
  );
}
