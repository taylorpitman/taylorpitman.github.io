import {motion, MotionConfig} from "motion/react"
import { PiPaintBrush, PiLightbulb, PiBriefcase, PiUser } from "react-icons/pi";

const HamburgerSlideOut = ({isOpen}) => {
    return (
    <>
        <MotionConfig
            transition={{
                duration: .3,
                ease: "easeInOut",
        }}>
            <motion.div 
                className = "fixed left-0 right-0 border-b border-zinc-200 shadow-lg z-40 max-w-full overflow-hidden"
                animate={ isOpen ? "open" : "closed" }
                variants={{
                        open: {
                            height: "auto",
                            opacity: 1,
                        },
                        closed: {
                            overflow: "hidden",
                            height: 0,
                            opacity: 0,
                        },
                    }}
            >
                <motion.ul 
                    className = "py-2 bg-zinc-100/80 backdrop-blur-lg max-w-full text-zinc-900"
                >
                    <motion.li
                    className="hover:translate-x-1 transition-transform duration-300 ease-in-out"
                    >
                        <a href ="/" className= "flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors ease-in-out duration-300">
                            <PiUser size={24} />
                            <span className="text-lg font-medium">About</span>
                        </a>
                    </motion.li>
                    
                    <motion.li
                        className="hover:translate-x-1 transition-transform duration-300 ease-in-out"
                    >
                        <a href ="/" className= "flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors ease-in-out duration-300">
                            <PiPaintBrush size={24} />
                            <span className="text-lg font-medium">Projects</span>
                        </a>
                    </motion.li>
                    

                    <motion.li
                        className="hover:translate-x-1 transition-transform duration-300 ease-in-out">
                        <a href ="/" className= "flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors ease-in-out duration-300">
                            <PiBriefcase size={24} />
                            <span className="text-lg font-medium">Experience</span>
                        </a>
                    </motion.li>

                    <motion.li
                    className="px-6 py-4 ">

                        <a 
                        href="mailto:taylordianebusiness@gmail.com"
                        className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-500 px-6 py-3.5 text-sm rounded-xl lg:text-base w-full md:w-[155px] cursor-pointer">
                            Email Me
                        </a>
                    </motion.li>

                </motion.ul>

            </motion.div>
        </MotionConfig>
    </>
    );
};

export default HamburgerSlideOut;
