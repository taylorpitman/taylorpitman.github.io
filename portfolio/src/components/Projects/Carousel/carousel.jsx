import Card from "./card.jsx";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import arrow from "../../../assets/accordianArrow.svg";


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

const detailsVariants = {
  hidden:  { opacity: 0, height: 0, y: -12 },
  visible: {
    opacity: 1, height: "auto", y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0, height: 0, y: -12,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};


const detailsItem = {
  hidden:  { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const arrowVariants = {
    open:   {   rotate: [-90, 10, 0],  
                scale:  [1, 1.06, 1],
                transition: { duration: 0.3, ease: "easeInOut" } },
    closed: {   rotate: -90, 
            },
    exit: {     rotate: [0, -100, -90], 
                scale:  [1, 1.06, 1],
                transition: { duration: 0.3, ease: "easeInOut" } },

};

const Carousel = ({ cards }) => {

  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { amount: 0.5 }); 
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [openIds, setOpenIds] = useState(() => new Set());

    const isOpen = (id) => openIds.has(id);
    const toggle = (id) =>
    setOpenIds(prev => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
    });

  const goToPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };


  useEffect(() => {
    if (!isInView || isHovered) return;
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [current, isInView, isHovered]);


return (
    <div>
        {/* Desktop view */}
        <div
            ref={carouselRef}
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

                    {/* Details Drop down*/}
                    <motion.div className="w-full px-4 pb-2">
                        <div className="text-left">

                            <motion.button className="flex gap-2 cursor-pointer select-none items-center"
                                onClick={() => toggle(card.id)}
                                type = "button"
                                aria-expanded={isOpen(card.id)}
                                aria-controls={`details-${card.id}`}
                            >
                                <motion.span className="text-zinc-700 font-medium py-1">
                                    Details
                                </motion.span>
                                <motion.img src={arrow} alt="Toggle Details" className="w-4 block origin-center" 
                                    aria-hidden="true"
                                    variants={arrowVariants}
                                    initial="closed"
                                    animate={isOpen(card.id) ? "open" : "exit"}
                                />
                            </motion.button>

                            {/* Details Panel */}

                            <AnimatePresence initial = {false}> 
                                {isOpen(card.id) && (
                                    <motion.div
                                        key={`details-${card.id}`}            
                                        id={`details-${card.id}`}
                                        className="mt-2 overflow-hidden"     
                                        variants={detailsVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        role="region"
                                    >
                                        <motion.div className="mb-4 text-zinc-600 text-sm" variants={detailsItem}>
                                            {card.description}
                                        </motion.div>
                                        <motion.div className="text-zinc-600 text-sm" variants={detailsItem}>
                                            <span className="font-semibold">Technologies:</span>{" "}
                                            {Array.isArray(card.technologies)
                                            ? card.technologies.join(", ")
                                            : card.technologies}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
);
};

export default Carousel;