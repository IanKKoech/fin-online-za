import React from "react";
import Link from "next/link";
import { Container } from "./Container/Container";

export default function DigitalAssistant() {
  return (
    <Container className="!p-0 bg-[#B7F6D7] border-t border-gray-300 py-5 space-y-6">
      <div className="text-center mt-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Fin Connect Digital Assistant?
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            Chat with one of our specialists and find out how our products can
            work for you.
          </p>
        </div>
      </div>
      <div className="w-full max-w-2xl p-2 mx-auto py-10 rounded-2xl text-center">
        <Link
          href="https://wa.me/27120450606?text=Hie%20there%20I%20need%20assistance"
          className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-black capitalize transition-colors duration-200 transform bg-[#64EBA9] rounded-md hover:bg-[#15A25E] focus:outline-none focus:bg-[#15A25E]"
        >
          Let`s Chat!
        </Link>
      </div>
    </Container>
  );
}
