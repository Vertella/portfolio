import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const scrollToBottom = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const HeroSection = () => {
  const { state } = useTheme();
  return (
    <div className={`${state.theme === "light" ? "bg-white" : "bg-gray-900"} ${state.theme === "light" ? "text-gray-800" : "text-white"} py-20 text-center`}>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2 lg:pr-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4" >Hello, I'm Veronica</h1>
                <p className="text-lg lg:text-xl mb-4">I make silly little web-based games for anyone to play, and more.</p>
                <p className="mb-4">Look below to see some of my most recent projects.</p>
                    <button className={`${state.theme === "light" ? "bg-green-400" : "bg-green-800"} ${state.theme === "light" ? "text-gray-800" : "white"} mt-8 hover:bg-green-600 py-2 px-4 rounded`} onClick={scrollToBottom}>
                        Get in Touch
                    </button>
            </div>
            <div className="flex justify-center mt-8">
                <div style={{ borderRadius: '50%', overflow: 'hidden', width: '150px', height: '150px' }}>
                    <img src="https://i.imgur.com/blRkjW1.jpeg" alt="Nessie" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
