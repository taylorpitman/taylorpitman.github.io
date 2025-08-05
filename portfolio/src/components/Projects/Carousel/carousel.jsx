import Card from "./card.jsx"; 
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


const Carousel = ({ cards }) => {
    return (
    <div>
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
        <div className="flex justify-center mt-2">
            <span className="text-sm text-zinc-500">Swipe to see more projects</span>
        </div>   
    </div>
    );
};

export default Carousel;