import React from "react";
import { useTheme } from "../contexts/ThemeContext";


const ProjectSection = () => {
  const { state } = useTheme();

  return (
    <div id="projects" className={`${state.theme === "light" ? "bg-gray-50" : "bg-gray-800"} ${state.theme === "light" ? "text-gray-800" : "text-white"} py-20 text-center`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Project 1 */}
          <div className={`${state.theme === "light" ? "bg-white" : "bg-gray-900"} p-6 rounded-lg shadow-md`}>
            <div className="flex flex-row mb-4 w-full justify-evenly">
              <h3 className="text-xl font-semibold">House Bingo</h3>
              <div className="flex flex-row">
                <img src="javascript.svg" className="w-6"/>
                <img src="html.svg" className="w-7"/>
                <img src="css.svg" className="w-7"/>
              </div>
            </div>
            <div className="w-96 h-96 overflow-hidden mb-5">
                <img src="hbingo.png" className="rounded"></img>
            </div>
            <p className={`${state.theme === "light" ? "text-gray-800" : "text-white"} mb-4 w-96`}>
              A version of bingo where you fill out your board in response to what happens in the show House MD.
            </p>
            <div className="flex justify-around">
              <a
                href="https://vertella.github.io/housebingo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Play here
              </a>
              <a
                href="https://github.com/Vertella/house-bingo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className={`${state.theme === "light" ? "bg-white" : "bg-gray-900"} p-6 rounded-lg shadow-md`}>
            <div className="flex flex-row justify-evenly mb-4">
              <h3 className="text-xl font-semibold">Skincare App</h3>
              <img src="figma-logo.svg" className="w-5"/>
            </div>
            <div className="w-96 h-96 mb-5">
                <img src="figmaapp.png" className="rounded" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
            </div>
            <p className={`${state.theme === "light" ? "text-gray-800" : "text-white"} mb-4 w-96`}>
              A skincare app that helps you keep track of your routines, the health of your skin etc.
            </p>
            <a
              href="https://github.com/your-username/project-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          {/* Lyxfällan Bingo */}
          <div className={`${state.theme === "light" ? "bg-white" : "bg-gray-900"} p-6 rounded-lg shadow-md`}>
          <div className="flex flex-row mb-4 w-full justify-evenly">
              <h3 className="text-xl font-semibold">Lyxfällan Bingo</h3>
              <div className="flex flex-row">
                <img src="javascript.svg" className="w-6"/>
                <img src="html.svg" className="w-7"/>
                <img src="css.svg" className="w-7"/>
              </div>
            </div>            <div className="w-96 h-96 mb-5">
                <img src="lyxbingo.png" className="rounded" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
            </div>
            <p className={`${state.theme === "light" ? "text-gray-800" : "text-white"} mb-4 w-96`}>
              Similar concept as for House Bingo, but this time it's about economically irresponsible Swedes.
            </p>
            <div className="flex justify-around">
              <a
                href="https://vertella.github.io/lyxfallanbingo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Play here
              </a>
              <a
                href="https://github.com/Vertella/lyxfallanbingo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
