import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? "bg-blue-800 shadow-xl" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-white text-3xl font-extrabold flex items-center">
          <img src="/navImage.png" alt="Logo" className="h-12 w-12 mr-3" />
          MyBrand
        </Link>
        <button className="text-white md:hidden text-3xl focus:outline-none">
          <i className="fa fa-bars"></i>
        </button>
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li>
            <Link to="/about-us" className="hover:text-gray-300 transition duration-200">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-gray-300 transition duration-200">CONTACT US</Link>
          </li>
          {localStorage.getItem("token") && (
            <li>
              <Link to="/admin/dashboard" className="hover:text-gray-300 transition duration-200">Admin Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
