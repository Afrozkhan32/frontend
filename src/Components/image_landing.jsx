import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styles from "./styles/image_landing.module.css";

const ImageLanding = () => {
  return (
    <div className={styles.backgroundImage}>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className={styles.title}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className={styles.text}>ROTARACT IIITM</p>
          <p className={styles.header}>You Bestow, We Deliver</p>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="Donate"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className={`btn btn-success p-3 ${styles.donateBtn}`}>
              DONATE NOW
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageLanding;
