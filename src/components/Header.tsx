import React, { useState } from "react";
import darkModeIcon from "../../public/assets/FIN Welcome Page Assets/dark-mode 1.png";
import { Button } from "fin-ui";
import logo from "../../public/assets/FIN Welcome Page Assets/Fin Logo (1).png";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="font-poppins font-thin p-3 flex justify-between items-center bg-white text-[black]">
      <img src={logo.src} alt="Fin Logo" className="w-24 h-auto ml-8" />

      {/* Navigation Menu */}
      <nav
        className="hidden md:flex items-center space-x-4"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="relative">
          <a href="#" className="font-normal" onClick={toggleMenu}>
            Our Products
          </a>
          {isMenuOpen && (
            <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-lg py-2 px-4 mt-1">
              <a href="/dental-finance" className="block py-1" onClick={closeMenu}>
                Medical Loan
              </a>
              <a href="/flexi-loans" className="block py-1" onClick={closeMenu}>
                Flexi Loan
              </a>
              <a href="/shopping-partners" className="block py-1" onClick={closeMenu}>
                Online Loan
              </a>
            </div>
          )}
        </div>
        <a href="/https://client.fin-connect.net/auth/signUp" className="font-normal">
          Join Fin Pay
        </a>
        <a href="/https://client.fin-connect.net/auth/signIn" className="font-normal">
          Fin Pay Portal
        </a>
        <a href="#" className="font-normal">
          Contact Us
        </a>
        <Button
          className="bg-[white] text-[#31c231] border-[green] font-normal"
          style={{
            borderRadius: "2.5rem",
            height: "2.5rem",
            width: "6rem",
          }}
        >
          <a href="/register">Register</a>
        </Button>

        <Button
          className="bg-[#a9f7a9] text-black font-normal"
          style={{
            borderRadius: "4.5rem",
            height: "2.5rem",
            width: "6rem",
          }}
        >
          <a href="/login">Sign In</a>
        </Button>
        <button
          className="mr-4 text-sm"
          style={{ width: "38px", height: "30px" }}
          onClick={toggleDarkMode}
        >
          <img
            src={darkModeIcon.src}
            alt="Dark/Light Mode"
            className="w-2/3 h-2/3"
          />
        </button>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <button className="md:hidden" onClick={toggleMenu}>
        <svg
          className="w-6 h-6 text-gray-800 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Collapsible Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-16 right-0 bg-white bg-opacity-100 shadow-md rounded-lg py-4 px-2 mt-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <a
            href="#"
            className="block text-sm font-normal py-2"
            onClick={closeMenu}
          >
            Our Products
          </a>
          <a href="#" className="block text-sm font-normal py-2">
            Join Fin Pay
          </a>
          <a href="#" className="block text-sm font-normal py-2">
            Fin Pay Portal
          </a>
          <a href="#" className="block text-sm font-normal py-2">
            Contact Us
          </a>
          <Button className="bg-[white] text-[#4bc74b] border-[green] text-sm w-full mt-4 font-normal">
            Register
          </Button>

          <Button className="bg-[#5ff35f] text-[#000000c4] text-sm w-full mt-2 font-normal">
            Sign In
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
