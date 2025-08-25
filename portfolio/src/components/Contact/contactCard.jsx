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

const ContactCard = () => {

    return (
        <motion.section 
        aria-labelledby="hire-me-heading"
        className='flex-col max-w-2xl mt-20 mb-20 w-full mx-auto justify-center flex px-8 md:px-6 gap-2 text-zinc-900'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        >
                <motion.h1 className='text-2xl font-bold' variants={childVariants}>Hire Me</motion.h1>
                <motion.p className='text-md text-zinc-600' variants={childVariants}>Need an end-to-end builder who’s flexible, fast, and passionate 
                    about craft? I turn ideas into responsive, production ready experiences and love collaborating to 
                    iterate. Reach out!</motion.p>

                {/* CTA Button + Availability status  */}
                <motion.div className='flex items-center gap-4 ' variants={childVariants}>
                    <a href="mailto:taylordianebusiness@gmail.com"
                       className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white border-2 border-transparent hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 focus:ring-zinc-500 px-6 py-2 text-sm rounded-xl cursor-pointer"
                     aria-label="Email Taylor at taylordianebusiness@gmail.com"
                    >
                        Email Me
                    </a>

                    <div className='flex items-center bg-emerald-100 rounded-3xl  px-4 py-3 sm:p-4 gap-2'>
                        <span className="relative h-2 w-2 sm:h-3 sm:w-3 flex items-center" aria-hidden="true">
                            <span className="motion-safe:absolute motion-safe:inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-600 ring-2 ring-emerald-200"></span>
                        </span>
                        <p className=' hidden sm:block text-sm text-zinc-600'>Open to opportunities</p>
                        <p className=' sm:hidden text-sm text-zinc-600'>Available</p>
                    </div>
                </motion.div>
        </motion.section>

    )

}

export default ContactCard;