import Card from "./card.jsx";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const Carousel = ({ cards }) => {
 const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
    pointerEvents: "none",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
    pointerEvents: "auto",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
    pointerEvents: "none",
  }),
};
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="flex items-center justify-between w-full relative">
        {/* Left Arrow */}
        <MdKeyboardArrowLeft
          size={30}
          className="text-zinc-900 cursor-pointer hover:text-zinc-500 transition-colors duration-200"
          onClick={goToPrev}
        />

        {/* Cards */}
        <div className="w-full flex justify-center items-center relative min-h-[350px] overflow-x-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={cards[current].id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", stiffness: 400, damping: 30 }}
              className="w-full flex justify-center items-center "
            >
              <Card
                img={cards[current].img}
                title={cards[current].title}
                description={cards[current].description}
                link={cards[current].link}
                technologies={cards[current].technologies}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <MdKeyboardArrowRight
          size={30}
          className="text-zinc-900 cursor-pointer hover:text-zinc-500 transition-colors duration-200"
          onClick={goToNext}
        />
      </div>
      <div className="flex justify-center mt-2 gap-2">
        {cards.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? "bg-zinc-900" : "bg-zinc-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;