import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import logo from "../../../public/assets/FIN Welcome Page Assets/FinLogo.png";
import regImage from "../../../public/assets/4351531 1.png";
import Image from "next/image";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="font-poppins bg-white min-h-screen flex justify-center items-center text-black">
      <header className="absolute top-0 left-0 p-8">
        <Image    src={logo.src} alt="Fin Logo" className="w-28 h-auto" />
      </header>
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl w-full">
        <div className="md:w-1/2 md:pr-4">
          <h2 className="text-2xl font-normal mb-2 text-black">Welcome !</h2>
          <h1 className="text-black text-3xl font-semibold mb-5">Register</h1>
          <div className="mb-6 relative">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-300"
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="username" className="block text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              name="username"
              className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-300"
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your Password"
                className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-300"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 py-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your Password"
                className="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-indigo-300"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 py-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <button className="w-full bg-green-300 text-white py-2 rounded-md hover:bg-green-500 transition duration-300">
            Register
          </button>
          <br />
          <br />
          <div className="justify-center align-middle text-black font-thin pl-12">
            <p>
              Already have an Account ?{" "}
              <span className="font-semibold">Sign In</span>
            </p>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0 pt-20">
          <Image   
            src={regImage.src}
            alt="Image"
            className="w-full h-auto md:w-200 md:h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
