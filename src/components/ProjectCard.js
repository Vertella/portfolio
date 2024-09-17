// ProjectCard.js
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  imageSrc,
  link,
  githubLink,
  icons,
}) => {
  const { state } = useTheme();
  return (
    <div
      className={`flex flex-col p-6 rounded-lg shadow-md max-w-md h-full ${
        state.theme === "light" ? "bg-white" : "bg-zinc-900"
      }`}
    >
      <div>
        {/* Title and Icons */}
        <div className="flex flex-col md:flex-row mb-4 justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex flex-row space-x-2">
            {icons.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={28}
                height={28}
                className="object-contain"
              />
            ))}
          </div>
        </div>
        {/* Project Image */}
        <div className="w-96 h-96 overflow-hidden mb-5">
          <Image
            src={imageSrc}
            alt={title}
            width={384}
            height={256}
            className="rounded object-cover w-full h-full"
          />
        </div>
        {/* Description */}
        <p
          className={`${
            state.theme === "light" ? "text-gray-800" : "text-white"
          } mb-4`}
        >
          {description}
        </p>
      </div>

      {/* Buttons at the bottom */}
      <div className="mt-auto flex justify-between space-x-2">
          {link && (
            <button
            className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br ${
              state.theme === "light"
                ? "text-zinc-900 bg-gradient-to-br from-rose-200 to-zinc-200"
                : "text-white bg-gradient-to-br from-rose-800 to-zinc-950 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white"
            }`}
          >
            <Link
              href={link}
              className={`relative py-2.5 px-5 transition-all ease-in duration-75 rounded-md font-medium group-hover:bg-opacity-0 ${
                state.theme === "light"
                  ? "bg-white text-zinc-800 hover:bg-gradient-to-br hover:from-rose-200 hover:to-zinc-200"
                  : " bg-zinc-900 hover:bg-gradient-to-br hover:from-rose-800 hover:to-zinc-950"
              } `}
            >
              View Project
            </Link>
        </button>

          )}
        {githubLink && (
          <button 
          className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br ${
          state.theme === "light"
                ? "text-zinc-900 bg-gradient-to-br from-rose-200 to-zinc-200"
                : "text-white bg-gradient-to-br from-rose-800 to-zinc-950 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white"
            }`}
          >
            <Link
              href={githubLink}
              className={`relative py-2.5 px-5 transition-all ease-in duration-75 rounded-md font-medium group-hover:bg-opacity-0 ${
                state.theme === "light"
                  ? "bg-white text-zinc-800 hover:bg-gradient-to-br hover:from-rose-200 hover:to-zinc-200"
                  : "bg-zinc-900 hover:bg-gradient-to-br hover:from-rose-800 hover:to-zinc-950"
              }`}
            >
              View on GitHub
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
