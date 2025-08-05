import Card from "./card.jsx";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useEffect } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  const goToPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

    // Auto-scroll effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current, isHovered]); 


return (
    <div>
        {/* Desktop view */}
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hidden sm:flex flex-col items-center justify-center gap-1 relative"
        >
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

            {/* Pagination Dots */}
            <div className="flex justify-center m-2 gap-2">
                {cards.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === current ? "bg-zinc-900" : "bg-zinc-300"}`}
                    />
                ))}
            </div>
        </div>
        
        {/* Mobile view */}
        <div className="sm:hidden flex flex-col gap-4">
            {cards.map((card) => (
                <div key={card.id} className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src={card.img}
                        alt={card.title}
                        className="w-full object-cover"
                        style={{ maxHeight: 220 }}
                    />
                    <div className="w-full px-4 py-2 text-center">
                        <span className="text-zinc-900 font-semibold text-lg">{card.title}</span>
                    </div>
                    <div className="w-full px-4 pb-2">
                        <details className="text-left">
                            <summary className="cursor-pointer text-zinc-700 font-medium py-1 hover:underline">
                                Details
                            </summary>
                            <div className="mt-2">
                                <div className="mb-2 text-zinc-600 text-sm">
                                    {card.description}
                                </div>
                                <div className="text-zinc-500 text-xs">
                                    <span className="font-semibold">Technologies:</span>{" "}
                                    {card.technologies && Array.isArray(card.technologies)
                                        ? card.technologies.join(", ")
                                        : card.technologies}
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default Carousel;