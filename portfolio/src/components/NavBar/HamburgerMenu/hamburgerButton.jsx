import {motion, MotionConfig} from "motion/react"

const HamburgerButton = ({isOpen, toggle}) => {

    return (
        <MotionConfig 
            transition={{
                duration: .3,
                ease: "easeInOut",
        }}>
            <motion.button
                className="relative w-10 h-10 rounded-full group hover:cursor-pointer  ease-in-out transition-colors duration-300"
                onClick={toggle}
                aria-label="Toggle Menu"
                animate={ isOpen ? "open" : "closed" }
            
            >
                <motion.span 
                    style={{ 
                        left: '50%', 
                        top: '35%', 
                        x: '-50%', 
                        y: '-50%' }}
                    className="absolute h-0.5 w-5 bg-zinc-700 group-hover:bg-zinc-500 ease-in-out transition-colors duration-300"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],
                            top: ["35%", "50%", "50%"],

                        },
                        closed: {
                            rotate: ["45deg", "0deg", "0deg"],
                            top: ["50%", "50%", "35%"],
                        },
                    }}

                />
                <motion.span 
                    style={{ 
                        left: '50%', 
                        top: '50%', 
                        x: '-50%', 
                        y: '-50%' }}
                    className="absolute h-0.5 w-5 bg-zinc-700 group-hover:bg-zinc-500 ease-in-out transition-colors duration-300"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],

                        },
                        closed: {
                            rotate: ["45deg", "0deg", "0deg"],
                        },
                    }}
                />
                    
                <motion.span 
                    style={{ 
                        left: '50%', 
                        bottom: '35%', 
                        x: '-50%', 
                        y: '50%' }}
                    className="absolute h-0.5 w-5 bg-zinc-700 group-hover:bg-zinc-500 ease-in-out transition-colors duration-300"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "-45deg"],
                            bottom: ["35%", "50%", "50%"],

                        },
                        closed: {
                            rotate: ["-45deg", "0deg", "0deg"],
                            bottom: ["50%", "50%", "35%"],
                        },
                    }}
                />

            </motion.button>
        </MotionConfig>
    );
}

export default HamburgerButton;