import plant from '../../assets/hero/plant.png';
import lamp from '../../assets/hero/lamp.png';
import headshot from '../../assets/headshots/headshot.jpg';
import { motion } from "motion/react";


const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};


const Hero = () => {
  return (
    <motion.section
      aria-labelledby='hero-heading'
      className="relative flex-col sm:flex-row max-w-2xl sm:mt-27 mt-0 mx-auto justify-center flex px-8 sm:px-6 md:px-6 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >

      {/*Headshot */}
      <motion.div className="flex justify-center  w-full" >
        <div className="flex flex-col gap-4 justify-center items-center w-36 sm:min-h-full sm:justify-start">
          <motion.img src={lamp} alt="Lamp" className='cursor-pointer hover:scale-105 transition-transform duration-200'  />
          <motion.img src={headshot} alt="Headshot" className="w-sm sm:w-md rounded-full shadow-lg"    />
          <motion.a
            href="portfolio/src/assets/Pitman_Resume_June_2025.pdf"
            download="TaylorPitman_Resume.pdf"
            className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white  border-2 border-transparent
                 hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50
                focus:ring-zinc-500 p-2 text-xs  rounded-xl w-full cursor-pointer"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>

      <motion.div className="flex items-center justify-center mt-8 sm:mt-15 md:mt-30  "  >
        <div className="flex flex-col items-center sm:items-baseline sm:mt-5 gap-2 text-zinc-900 relative z-0  ">
          <motion.h1 className ="text-zinc-900 text-4xl sm:text-3xl font-bold "   >
            Hello, I'm Taylor. <br/> Front-end Developer.
          </motion.h1>
          <motion.span className="text-left px-auto text-zinc-600 text-lg sm:text-sm "   >
                        I thrive in the code space and I'm currently
                        diving into UI/UX and graphic design to
                        bridge the gap between design and development.
          </motion.span>
        </div>
      </motion.div>
      
      {/* Plant */}
      <motion.img src={plant} alt="Plant" className=" hidden scale-x-[-1] sm:block relative translate-y-11 -translate-x-5 self-end h-90  z-4 "    />
    </motion.section>
  );
}
export default Hero;