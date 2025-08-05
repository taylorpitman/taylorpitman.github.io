// ./Projects.jsx

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Card from "./Carousel/card.jsx"; 
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

      <div className="flex items-center justify-between w-full">
        {/* Left Arrow */}
        <MdKeyboardArrowLeft
          size={30}
          className="text-zinc-900 cursor-pointer hover:text-zinc-500 transition-colors duration-200"
        />

        {/* Cards */}
        <div className="w-full flex justify-center items-center">
          {cards.map((card) => (
            <Card
              key={card.id}
              img={card.img}
              title={card.title}
              description={card.description}
              link={card.link}
              technologies={card.technologies}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <MdKeyboardArrowRight
          size={30}
          className="text-zinc-900 cursor-pointer hover:text-zinc-500 transition-colors duration-200"
        />
      </div>
    </div>
  );
};

export default Projects;
