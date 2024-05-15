import React, { useState } from "react";
import darkModeIcon from "../../public/assets/FIN Welcome Page Assets/dark-mode 1.png";
import logo from "../../public/assets/FIN Welcome Page Assets/FinLogo.png";
import Link from "next/link";
import Image from "next/image";

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
      <div>
        <Link href="/welcome">
          <img src={logo.src} alt="Fin Logo" className="w-24 h-auto ml-8" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav
        className="hidden md:flex items-center space-x-4 space-y-6"
        style={{ fontFamily: "Poppins" }}
      >
        <div className="relative">
          <Link href="#" className="font-normal" onClick={toggleMenu}>
            Our Products
          </Link>
          {isMenuOpen && (
            <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-lg py-2 px-4 mt-1">
              <Link
                href="/dental-finance"
                className="block py-1"
                onClick={closeMenu}
              >
                Medical Loan
              </Link>
              <Link
                href="/flexi-loans"
                className="block py-1"
                onClick={closeMenu}
              >
                Flexi Loan
              </Link>
              <Link
                href="/shopping-partners"
                className="block py-1"
                onClick={closeMenu}
              >
                Online Loan
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <Link href="/register" className="font-normal">
            Join Fin Pay
          </Link>
        </div>
        <div className="relative">
          <Link href="/login" className="font-normal">
            Fin Pay Portal
          </Link>
        </div>
        <div className="relative">
          <Link href="#" className="font-normal">
            Contact Us
          </Link>
        </div>
        <div className="relative">
          <button
            className="bg-[white] text-[#31c231] border border-[green] font-normal"
            style={{
              borderRadius: "2.5rem",
              height: "2.5rem",
              width: "6rem",
            }}
          >
            <Link href="/register">Register</Link>
          </button>
        </div>

        <div className="relative">
          <button
            className="bg-[#a9f7a9] text-black font-normal"
            style={{
              borderRadius: "4.5rem",
              height: "2.5rem",
              width: "6rem",
            }}
          >
            <Link href="/login">Sign In</Link>
          </button>
        </div>
        <div className="relative">
          <button
            className="mr-4 text-sm"
            style={{ width: "38px", height: "30px" }}
            onClick={toggleDarkMode}
          >
            <div>
              <img
                src={darkModeIcon.src}
                alt="Dark/Light Mode"
                className="w-2/3 h-2/3"
              />
            </div>
          </button>
        </div>
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
          <Link
            href="#"
            className="block text-sm font-normal py-2"
            onClick={closeMenu}
          >
            Our Products
          </Link>
          <Link href="#" className="block text-sm font-normal py-2">
            Join Fin Pay
          </Link>
          <Link href="#" className="block text-sm font-normal py-2">
            Fin Pay Portal
          </Link>
          <Link href="#" className="block text-sm font-normal py-2">
            Contact Us
          </Link>
          <button className="bg-[white] text-[#4bc74b] border border-[green] text-sm w-full mt-4 font-normal">
            Register
          </button>

          <button className="bg-[#5ff35f] text-[#000000c4] text-sm w-full mt-2 font-normal">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
