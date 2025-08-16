
import { motion } from "motion/react";


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

const stackVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      ease: 'easeOut'
    },
  },
};


const About = () => {
    return (
        <motion.section 
        aria-labelledby="about-heading"
        className="flex-col max-w-2xl mt-20 mx-auto justify-center flex px-8 md:px-6 gap-4 text-zinc-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        >
        
            <motion.h1 className="text-2xl font-bold" variants={childVariants}>About Me</motion.h1>
            <motion.div className="flex flex-col gap-4 text-zinc-600" variants={stackVariants}>
                   <motion.p 
                    variants={childVariants} >I’m Taylor Pitman, <strong>a front-end developer</strong> with a growing passion for <strong>clean code, sharp UI, and seamless UX.</strong> </motion.p>

                   <motion.p variants={childVariants}>
                    With a Computer Science degree and <strong>hands-on experience</strong> building and deploying web applications, I know how to ship functional, responsive websites.
                    But now, in post-grad life, I’m focused on <strong>standing out through aesthetics and design.</strong>
                   </motion.p>

                    <motion.p variants={childVariants}>
                    I’m diving into the UI/UX world to bridge the gap between clean code and great user experiences. My goal is to create projects that aren’t 
                    just technically solid, but visually impactful from start to finish.
                    </motion.p>

                    <motion.p variants={childVariants}>Outside of code & design, you’ll find me lifting at the gym, reading fantasy novels, or knitting my wardrobe.</motion.p>

                    <motion.strong variants={childVariants}>I don’t just build websites. I build web experiences that work.</motion.strong>
            </motion.div>  
        </motion.section>
    )

}

export default About;