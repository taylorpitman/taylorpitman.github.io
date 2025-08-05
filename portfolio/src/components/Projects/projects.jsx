// ./Projects.jsx

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "./Carousel/carousel.jsx";
import hydra from '../../assets/projects/hydraLab.png';

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
  ];

  return (
    <div className="flex-col max-w-2xl mt-20 mx-auto justify-center flex px-8 md:px-6 gap-4 text-zinc-900">
      <h1 className="text-2xl font-semibold mb-4">Recent Projects</h1>
        <Carousel cards={cards} />
    </div>
  );
};

export default Projects;
