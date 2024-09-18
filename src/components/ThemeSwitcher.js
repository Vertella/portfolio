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
        state.theme === "light" ? " hover:bg-gradient-to-br bg-gradient-to-tl from-zinc-600 to-blue-200" : "bg-gradient-to-tl from-rose-800 to-amber-400 hover:bg-gradient-to-br fill-slate-500"
      } text-white py-2 px-4 rounded flex items-center justify-center`}
      onClick={toggleTheme}
    >
      {state.theme === "light" ? (
        <Image
            src="/images/theme-toggle/moon.svg"
            alt="Moon"
            width={24}
            height={24}
            className="w-6 h-6"
          />) : (
          <Image
            src="/images/theme-toggle/sun.svg"
            alt="Sun"
            width={24}
            height={24}
            className="w-6 h-6"
          />
      )}
    </button>
  );
};

export default ThemeSwitcher;
