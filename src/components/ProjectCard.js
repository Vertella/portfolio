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
        state.theme === "light" ? "bg-white" : "bg-gray-900"
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
          <Link
            href={link}
            className={`py-2 px-4 rounded text-white font-bold ${
              state.theme === "light"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-green-700 hover:bg-green-800"
            }`}
          >
            View Project
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            className={`py-2 px-4 rounded text-white font-bold ${
              state.theme === "light"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            View on GitHub
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
