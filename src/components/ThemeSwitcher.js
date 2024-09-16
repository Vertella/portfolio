// components/ThemeSwitcher.js

import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";

const ThemeSwitcher = () => {
  const { state, dispatch } = useTheme();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <button
      className={`${
        state.theme === "light" ? "bg-gray-300 hover:bg-gray-400" : "bg-gray-700 hover:bg-gray-500"
      } text-white py-2 px-4 rounded flex items-center justify-center`}
      onClick={toggleTheme}
    >
      {state.theme === "light" ? (
        <Image
            src="/moon.svg"
            alt="Sun"
            width={24}
            height={24}
            className="w-6 h-6"
          />) : (
          <Image
            src="/sun.svg"
            alt="Moon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
      )}
    </button>
  );
};

export default ThemeSwitcher;
