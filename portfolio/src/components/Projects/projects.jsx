
import Carousel from "./Carousel/carousel.jsx";
import hydra from '../../assets/projects/hydraLab.png';
import womensNetwork from '../../assets/projects/womensNetwork.png';
import rockPaperScissors from '../../assets/projects/rockPaperScissors.png';
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
const Projects = () => {

  const cards = [
    {
      id: 1,
      img: hydra,
      title: "Computer Science Hydra Lab Website",
      description: "Developed the core components of a scalable website for the SUNY New Paltz Computer Science Department, laying the groundwork for future students to expand. The platform serves as a central hub for department resources, events, and student engagement.",
      link: "https://hydra.newpaltz.edu/",
      technologies: ["React", "TailwindCSS", "Express", "MariaDB"],
    },
    {
      id: 2,
      img: womensNetwork,
      title: "NYS Ace Women's Network Website",
      description: "Built a fully custom WordPress theme from scratch in under two months. Collaborated with a graphic design student to bring UI/UX concepts to life, improving usability while rapidly learning WordPress development best practices.",
      link: "https://nyacewomen.org/",
      technologies: ["WordPress", "HTML", "CSS"],
    },
    {
      id: 3,
      img: rockPaperScissors,
      title: "Rock Paper Scissors Game",
      description: "Developed a fully functional Rock Paper Scissors game using JavaScript, HTML, and TailwindCSS. This project was to reenforce my vanilla JavaScript skills.",
      link: "https://taylorpitman.com/rock-paper-scissors-js/",
      technologies: ["JavaScript", "HTML", "TailwindCSS"],
    },
  ];

  return (
    <motion.section 
    id = "projects"
    aria-labelledby = 'recent-projects-heading'
    className="flex-col max-w-2xl mt-20 mx-auto justify-center flex px-8 md:px-6 gap-4 text-zinc-900"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h1 className="text-2xl font-bold" variants={childVariants}>Recent Projects</motion.h1>
      <motion.div variants={childVariants}>
        <Carousel cards={cards} />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
