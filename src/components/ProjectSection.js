import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const { state } = useTheme();

  return (
    <div
      id="projects"
      className={`${state.theme === "light" ? "bg-zinc-100" : "bg-zinc-800"} ${
        state.theme === "light" ? "text-zinc-800" : "text-white"
      } py-10 text-center`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-3xl font-bold mb-8 text-center">My Projects</h3>
        <div className="flex flex-row justify-center gap-4 md:gap-8 lg:gap-10">
          {/* Project 1 */}
          <ProjectCard
            title="House Bingo"
            description="A version of bingo where you fill out your board in response to what happens in the show House MD."
            imageSrc="/images/project/hbingo.png"
            link="https://vertella.github.io/house-bingo/"
            githubLink={"https://github.com/Vertella/house-bingo"}
            icons={[
              { src: "/images/logos/javascript.svg", alt: "Javascript technology icon" },
              { src: "/images/logos/html.svg", alt: "HTML Icon" },
              { src: "/images/logos/css.svg", alt: "CSS Icon" },
            ]}
          />
          {/* Project 2 */}
          <ProjectCard
            title="Darkest Helper"
            description="A Darkest Dungeon Team Builder application, created to make party planning convenient and easy for everyone."
            imageSrc="/images/project/darkest-helper.png"
            link="https://darkest-helper.vercel.app/"
            githubLink="https://github.com/Vertella/darkest-app"
            icons={[
              { src: "/images/logos/javascript.svg", alt: "Javascript Icon" },
              { src: "/images/logos/next-js.svg", alt: "HTML Icon" },
              { src: "/images/logos/tailwindcss.svg", alt: "CSS Icon" },
            ]}
          />
          {/* Project 3 */}
          <ProjectCard
            title="Planet Quiz"
            description="Test your knowledge of our solar system and what lies beyond."
            imageSrc="/images/project/planet-quiz.png"
            link="https://solar-quiz.vercel.app/"
            githubLink="https://github.com/Vertella/quiz-app"
            icons={[
              { src: "/images/logos/javascript.svg", alt: "Javascript Icon" },
              { src: "/images/logos/next-js.svg", alt: "HTML Icon" },
              { src: "/images/logos/tailwindcss.svg", alt: "CSS Icon" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
