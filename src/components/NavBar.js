import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Image from "next/legacy/image";

const NavBar = () => {
    const { state } = useTheme();
    return (
        <nav className={`${state.theme === "light" ? "bg-white" : "bg-gray-900"} ${state.theme === "light" ? "text-gray-800" : "text-white"} py-4`}>
            <div className="flex justify-between items-center"> 
                <div className="ml-5 w-12 h-12 rounded-full overflow-hidden">
                    <Image src="https://i.imgur.com/blRkjW1.jpeg" alt="Nessie" width={48} height={48} style={{ objectFit: "cover" }}/>
                </div>
                <ul className="flex space-x-4 font-medium">
                    <li>
                        <a href="#about" className="hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-300">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-300">Contact</a>
                    </li>
                </ul>
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default NavBar;
