import React from "react";
import LinkedInButton from "./LinkedInButton";
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
            I&apos;m currently studying to become a Frontend Developer at Chas Academy in Stockholm, Sweden.
          </p>
          <p className="mb-4 pb-5">
            Look below to see some of my most recent projects and don&apos;t forget to add me on LinkedIn!
          </p>
          <LinkedInButton />
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
