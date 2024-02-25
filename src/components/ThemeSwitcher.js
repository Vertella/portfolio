// components/ThemeSwitcher.js

import React from "react";
import { useTheme } from "../contexts/ThemeContext";

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
      {state.theme === "light" ? <img
            src="/sun.svg"
            alt="Sun"
            className="w-6 h-6 ml-2"
          /> : (
        <>
          <img
            src="/moon.svg"
            alt="Moon"
            className="w-6 h-6 ml-2"
          />
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;
