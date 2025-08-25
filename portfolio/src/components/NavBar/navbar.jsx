import React from 'react';
import { BiHomeAlt } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import HamburgerMenu from './HamburgerMenu/hamburgerMenu.jsx';


const NavBar = () => {
    return (
        <>
        <nav className="hidden sm:flex items-center justify-center fixed top-10 z-50  px-4 py-3 w-full">
            <div className = "flex items-center  px-4 py-2 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-lg   text-zinc-600 w-fit">

                {/*Home Link*/}
                <a href="/" className="flex justify-center items-center hover:text-zinc-500  transition-color ease-in-out duration-200 items" aria-label="Home"><BiHomeAlt size={24} /></a>

                {/*Divider*/}
                <div className = "w-px h-5 bg-zinc-200 mx-6"></div>

                {/*Links*/}
                <div className="flex items-center gap-2">
                    <a
                        href="#about"
                        className="group md:px-4 px-2 py-2 hover:text-zinc-900 relative transition-colors duration-300"
                    >
                        About
                        <span className=" absolute  left-0 bottom-1 w-full h-0.5 bg-zinc-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                    <a
                        href="#projects"
                        className="group md:px-4 px-2 py-2 hover:text-zinc-900 relative transition-colors duration-300"
                    >
                        Projects
                        <span className="absolute left-0 bottom-1 w-full h-0.5 bg-zinc-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                    <a
                        href="#experience"
                        className="group md:px-4 px-2 py-2 hover:text-zinc-900 relative transition-colors duration-300"
                    >
                        Experience
                        <span className="absolute left-0 bottom-1 w-full h-0.5 bg-zinc-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                    <a
                        href="#contact"
                        className="group md:px-4 px-2 py-2 hover:text-zinc-900 relative transition-colors duration-300"
                    >
                        Contact
                        <span className="absolute left-0 bottom-1 w-full h-0.5 bg-zinc-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                </div>

                {/*Divider*/}
                <div className = "w-px h-5 bg-zinc-200 mx-6"></div>

                {/*Social Links*/}
                <div className="flex items-center sm:gap-2 md:gap-4">
                    <a href="https://github.com/taylorpitman" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-zinc-500  transition-color ease-in-out duration-200 items">
                        <FiGithub size={22} />
                    </a>

                    <a href="https://www.linkedin.com/in/taylor-pitman/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className=" hover:text-zinc-500  transition-color ease-in-out duration-200 items">
                        <TbBrandLinkedin size={24} />
                    </a>
                </div>
            </div>

        </nav>
        
        {/* Mobile Menu */}
        <div className="sm:hidden">
            <HamburgerMenu />
        </div>
        

        </>



    );
};

export default NavBar;