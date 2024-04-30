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
      className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
      onClick={toggleTheme}
    >
      {state.theme === "light" ? <Image
            src="/sun.svg"
            alt="Sun"
            width={24}
            height={24}
            className="w-6 h-6 ml-2"
          /> : (
        <>
          <Image
            src="/moon.svg"
            alt="Moon"
            width={24}
            height={24}
            className="w-6 h-6 ml-2"
          />
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;
