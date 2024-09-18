// components/LinkedInButton.jsx
import React from "react";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";

const LinkedInButton = () => {
  const { state } = useTheme();
  return (
    <Link href="https://www.linkedin.com/in/veronica-ros%C3%A9n-04b9b5328/" passHref
        className={`${
            state.theme === "light"
              ? "text-white bg-gradient-to-r from-rose-400 to-zinc-900"
              : "bg-gradient-to-r from-rose-800 to-zinc-950 hover:ring-rose-800"
          } inline-block px-6 py-3 text-white rounded-full text-lg font-semibold transform transition-transform animate-bounce `}
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect on LinkedIn
    </Link>
  );
};

export default LinkedInButton;
