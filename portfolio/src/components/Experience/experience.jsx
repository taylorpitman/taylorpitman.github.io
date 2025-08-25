import Timeline from "./Timeline/timeline";
import Button from "../Buttons/button.jsx";
import {motion} from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Experience = () => {
    return (
        <motion.section
        id = "experience" 
        aria-labelledby="experience-heading"
        className="flex-col max-w-2xl mt-20 mb-20 w-full mx-auto justify-center flex px-8 md:px-6 gap-2 sm:gap-6 text-zinc-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        >
            <motion.div className="flex flex-col sm:flex-row gap-2 sm:justify-between"
            variants={childVariants}
            >
                <h1 className="text-2xl font-bold">Work Experience</h1>
                <a href="/PitmanResume.pdf" download="TaylorPitman_Resume.pdf"
                    className="hidden sm:flex "
                    aria-label = "Download my Resume as a PDF">
                    <Button
                        text="Download CV"
                    />
                </a>
            </motion.div>
            <motion.div
                variants={childVariants}
            >
                <Timeline />
            </motion.div>
        </motion.section>
    )

}

export default Experience;