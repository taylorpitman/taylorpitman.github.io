import {useState} from 'react';
import { BiHomeAlt } from "react-icons/bi";
import HamburgerButton from './hamburgerButton.jsx';
import HamburgerSlideOut from "./hamburgerSlideOut.jsx";
import { useEffect } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        const handleScroll = () => setIsOpen(false);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    return (
        <>
            <div className=" flex items-center justify-between border text-zinc-700 border-zinc-200 w-full px-5 py-4">
                <a 
                    href="/" 
                    className="flex justify-center items-center hover:text-zinc-500  transition-color ease-in-out duration-200 " 
                    aria-label="Home"
                >
                    <BiHomeAlt size={26} />
                </a>

                <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

            </div>
            <HamburgerSlideOut isOpen={isOpen} />
        </>
    )
}

export default HamburgerMenu;
