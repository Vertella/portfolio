import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Image from "next/image";
import Link from 'next/link';

const NavBar = () => {
    const { state } = useTheme();
    return (
        <nav className={`${state.theme === "light" ? "bg-zinc-100" : "bg-gray-900"} ${state.theme === "light" ? "text-gray-800" : "text-white"} py-4`} role="navigation" aria-label="Main Navigation">
            <div className="flex justify-between items-center text-center"> 
                <div className="ml-5 w-12 h-12 rounded-full overflow-hidden sm:w-10 sm:h-10">
                    <Image src="/veronica.jpg" alt="My picture" width={48} height={48} style={{ objectFit: "cover" }}/>
                </div>
                <ul className="hidden md:flex space-x-4 font-medium">
                    <li>
                    <Link href="#about" className={`hover:${state.theme === 'light' ? 'text-gray-300' : 'text-gray-700'}`}>About
                    </Link>
                    </li>
                    <li>
                        <Link href="#projects" className={`hover:${state.theme === 'light' ? 'text-gray-300' : 'text-gray-700'}`}>Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className={`hover:${state.theme === 'light' ? 'text-gray-300' : 'text-gray-700'}`}>Contact</Link>
                    </li>
                </ul>
                <ThemeSwitcher aria-label="Toggle theme" />
            </div>
        </nav>
    );
};

export default NavBar;
