import React from "react";
import logo from "../../../public/assets/FIN Welcome Page Assets/Fin Logo (1).png";
import ErrorImage from "../../../public/assets/6325254 1.png";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="font-poppins bg-white min-h-screen flex flex-col justify-center items-center text-black">
      <header className="absolute top-0 left-0 p-8">
        <img src={logo.src} alt="Fin Logo" className="w-28 h-auto" />
      </header>
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <img src={ErrorImage.src} alt="Error" />
        </div>
        <div className="mt-8">
          <button className="bg-green-300 text-white py-2 px-4 rounded-md mr-4 hover:bg-white hover:text-green-300 border-gray-200 hover:border hover:border-green-400">
            <Link href="/welcome">Back Home</Link>
          </button>
          <button className="text-green-400 border border-green-300 py-2 px-4 rounded-md hover:bg-green-300 hover:text-white">
            Explore
          </button>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold pt-4 pb-1">404 Error</p>
          <p className="font-normal pb-6">
            We can&apos;t seem to find the page that you were looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
