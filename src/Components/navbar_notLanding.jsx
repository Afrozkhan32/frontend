import React from "react";
import Navbar from "./navbar";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-4 shadow-lg fixed w-full z-50">
        <Navbar navBackground={styles.scrolled} />
      </div>
      <div className="h-16"></div> {/* Spacer to prevent content from being hidden */}
    </React.Fragment>
  );
};

export default NavBar;
