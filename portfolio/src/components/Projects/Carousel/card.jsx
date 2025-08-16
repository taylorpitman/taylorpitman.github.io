import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import { colors } from "../../../constants/colors.js";

const Card = ({ img, title, description, link, technologies }) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: .3 } },
    };

    const tagVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3 } },
    };

  return (
    <motion.div className={`relative  
                    aspect-[3/2] w-full rounded-2xl  
                    m-2 p-4 
                    flex flex-col items-center justify-center 
                    group overflow-hidden
                    border-1 hover:border-transparent border-zinc-200
                    `}>

    <img
        src={img}
        alt={`Screenshot of ${title}`}
        className="absolute inset-0 object-cover w-full h-full"
    />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />

      {/* Text content */}
      <motion.div className="absolute inset-0 z-12 
                      flex flex-col items-center justify-center
                      gap-1 sm:gap-2 px-4
                      text-white text-center "
                      
                    variants={containerVariants}
                    initial="hidden"
                    whileHover="show">

        <motion.h2 className="text-md sm:text-2xl font-semibold"
                    variants={itemVariants}>
                    {title}
        </motion.h2>
        <motion.p className="text-xs sm:text-sm px-8 py-1 mb-2"
                    variants={itemVariants}>
                    {description}
        </motion.p>

        <motion.div className="flex flex-wrap gap-1 w-3/4 items-center justify-center sm:gap-2">
          {technologies.map((technology, index) => (
            <motion.span key={technology} className={`text-xs ${colors[index % colors.length]} text-xs sm:text-sm px-2 py-1 rounded-md text-zinc-900 hover:scale-110 transition-transform duration-300 cursor-pointer`}
              variants={tagVariants}>
              {technology}
            </motion.span>
          ))}
        </motion.div>

                {/*link CTA button */}
        <motion.div className="absolute z-15 
                    flex justify-center items-center 
                    -bottom-1 -right-1 
                    rounded-tl-[50%]
                    aspect-square w-1/5
                    bg-zinc-50">

            {/*Circle with arrow icon */}
            <a href={link} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open project: ${title}`}
            className="flex justify-center items-center 
                            w-3/5 aspect-square rounded-full 
                            hover:scale-110 transition-transform duration-300 cursor-pointer
                            bg-zinc-900
                            focus:outline-none focus:ring-2 focus:ring-offset-2">

                {/* make arrow responsive size  */}
                <MdOutlineArrowOutward size={36} className=" text-white" />
            </a>
      </motion.div>
      </motion.div>


    </motion.div>
  );
};

export default Card;
