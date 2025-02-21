import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(styles.notscrolled);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;
      setNavBackground(scrolled ? styles.scrolled : styles.notscrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${navBackground} fixed w-full top-0 z-50 transition-all duration-300 shadow-md`}>
      <Navbar />
    </nav>
  );
};

export default NavBar;
