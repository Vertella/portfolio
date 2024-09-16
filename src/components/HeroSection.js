import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";

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
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:items-start">
            <div className="lg:w-1/2 lg:pr-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4" >Hello, I&apos;m Veronica</h1>
                <p className="text-lg lg:text-xl mb-4">I make silly little web-based games for anyone to play, and more.</p>
                <p className="mb-4">Look below to see some of my most recent projects.</p>
                    <button 
                    
                    aria-label="Scroll to contact section"
                    className={`${state.theme === "light" ? "bg-green-400" : "bg-green-800"} ${state.theme === "light" ? "text-gray-800" : "white"} mt-8 hover:bg-green-600 py-2 px-4 rounded text-lg font-bold`} 
                    onClick={scrollToBottom}>
                        Get in Touch
                    </button>
            </div>
            <div className="flex justify-center mt-8">
                <div style={{ borderRadius: '50%', overflow: 'hidden', width: '150px', height: '150px' }}>
                    <Image src="/veronica.jpg" alt="My picture" width={150} height={150} priority />
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
