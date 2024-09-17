import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";

const scrollToBottom = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => {
  const { state } = useTheme();
  return (
    <div
      className={`${
        state.theme === "light"
          ? "bg-white text-zinc-800"
          : "bg-zinc-900 text-white"
      }  py-20 text-center`}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:items-start">
        <div className="lg:w-1/2 lg:pr-8">
          <div className="flex flex-row justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 mr-4">
              Hello, I&apos;m
            </h1>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-800 to-rose-100 inline-block text-transparent bg-clip-text">Veronica</h1>
          </div>
          <p className="text-lg lg:text-xl mb-4">
            I'm currently studying to become a Frontend Developer at Chas Academy in Stockholm, Sweden.
          </p>
          <p className="mb-4">
            Look below to see some of my most recent projects.
          </p>
          <button
            aria-label="Scroll to contact section"
            className={`${
              state.theme === "light"
                ? "text-white bg-gradient-to-r from-rose-400 to-amber-200"
                : "bg-gradient-to-r from-rose-800 to-zinc-950 hover:ring-rose-800 "
            } mt-8 py-2 px-4 rounded-full text-lg font-medium hover:ring-4`}
            onClick={scrollToBottom}
          >
            Get in Touch
          </button>
        </div>
        <div className="flex justify-center mt-8 rounded-full">
          <Image
            src="/veronica.jpg"
            alt="My picture"
            width={148}
            height={148}
            className={`${
              state.theme === "light"
                ? "ring-rose-200"
                : "rounded-full ring-rose-950"
            } rounded-full ring-4`}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
