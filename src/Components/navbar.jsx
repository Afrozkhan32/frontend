import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-blue-600 shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <img src="/navImage.png" alt="Logo" className="h-10 w-10 mr-2" />
          MyBrand
        </Link>
        <button className="text-white md:hidden text-2xl">
          <i className="fa fa-bars"></i>
        </button>
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          <li>
            <Link to="/about-us" className="hover:text-gray-200 transition">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-gray-200 transition">CONTACT US</Link>
          </li>
          {localStorage.getItem("token") && (
            <li>
              <Link to="/admin/dashboard" className="hover:text-gray-200 transition">Admin-Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
