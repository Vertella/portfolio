// ProjectCard.js
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

const ProjectCard = ({ title, description, imageSrc, link, icons }) => {
  const { state } = useTheme();
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        state.theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div className="flex flex-row mb-4 w-full justify-evenly">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex flex-row">
          {icons.map((icon, index) => (
            <Image
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
      <div className="w-96 h-96 overflow-hidden mb-5">
        <Image
          src={imageSrc}
          alt={title}
          width={384}
          height={384}
          className="rounded object-cover"
        />
      </div>
      <p
        className={`${
          state.theme === "light" ? "text-gray-800" : "text-white"
        } mb-4 w-96`}
      >
        {description}
      </p>
      <div className="flex justify-around">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
