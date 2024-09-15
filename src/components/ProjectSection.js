import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";
import ProjectCard from "./ProjectCard";


const ProjectSection = () => {
  const { state } = useTheme();

  return (
    <div id="projects" className={`${state.theme === "light" ? "bg-gray-50" : "bg-gray-800"} ${state.theme === "light" ? "text-gray-800" : "text-white"} py-20 text-center`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Project 1 */}
          <ProjectCard
            title="House Bingo"
            description="A version of bingo where you fill out your board in response to what happens in the show House MD."
            imageSrc="/hbingo.png"
            link="https://vertella.github.io/house-bingo/"
            icons={[
              { src: "/javascript.svg", alt: "Javascript Icon" },
              { src: "/html.svg", alt: "HTML Icon" },
              { src: "/css.svg", alt: "CSS Icon" }
            ]}
          />
          {/* Project 2 */}
          <div className={`${state.theme === "light" ? "bg-white" : "bg-gray-900"} p-6 rounded-lg shadow-md`}>
            <div className="flex flex-row justify-evenly mb-4">
              <h3 className="text-xl font-semibold">Skincare App</h3>
              <Image src="/figma-logo.svg" alt="Figma Logo" width={20} height={20} className="w-5"/>
            </div>
            <div className="w-96 h-96 mb-5">
                <Image src="/figmaapp.png" alt="Figma App" className="rounded object-cover" width={384} height={384} />
            </div>
            <p className={`${state.theme === "light" ? "text-gray-800" : "text-white"} mb-4 w-96`}>
              A skincare app that helps you keep track of your routines, the health of your skin etc.
            </p>
            <a
              href="https://www.figma.com/proto/ilhNIbKtPBDrhOgcqF1nla/Skincare-app?type=design&node-id=104-918&t=nNbS61duOs2FMiBw-1&scaling=scale-down&page-id=104%3A917&starting-point-node-id=104%3A918&mode=design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on Figma
            </a>
          </div>
          {/* Lyxfällan Bingo */}
          <div className={`${state.theme === "light" ? "bg-white" : "bg-gray-900"} p-6 rounded-lg shadow-md`}>
          <div className="flex flex-row mb-4 w-full justify-evenly">
              <h3 className="text-xl font-semibold">Lyxfällan Bingo</h3>
              <div className="flex flex-row">
                <Image src="/javascript.svg" alt="Javascript Icon" width={24} height={24}/>
                <Image src="/html.svg" alt="HTML Icon" width={28} height={28}/>
                <Image src="/css.svg" alt="CSS Icon" width={28} height={28}/>
              </div>
            </div>            <div className="w-96 h-96 mb-5">
                <Image src="/lyxbingo.png" alt="Bingo Image" width={384} height={384} className="rounded object-cover" />
            </div>
            <p className={`${state.theme === "light" ? "text-gray-800" : "text-white"} mb-4 w-96`}>
              Similar concept as for House Bingo, but this time it&apos;s about economically irresponsible Swedes.
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
