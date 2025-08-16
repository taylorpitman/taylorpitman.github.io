import { motion } from "motion/react";

{/* Motion Variants */}

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2, delay: 0.2 } },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const leftTextVariants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const rightTextVariants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

const TimelineItem = ({ position, title, date, company, description, isLast }) => {
  const isLeft = position === "left";

  return (
    <motion.div
      className="grid grid-cols-[1fr_32px_1fr] min-h-24 relative group"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Text */}
      <motion.div
        className={`${isLeft ? "pr-4 text-left" : ""} text-zinc-800`}
        variants={leftTextVariants}
      >
        {isLeft && (
          <div className="flex flex-col gap-1 w-full ml-2 relative">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-sm text-zinc-600">{company}</span>
            <span className="text-sm text-zinc-500">{date}</span>
          </div>
        )}
      </motion.div>

      {/* Center Dot / Line */}
      <motion.div className="relative flex flex-col items-center" variants={lineVariants}>
        <span
          className={`w-5 h-5 rounded-full border-2 ${
            isLeft ? "border-rose-300" : "border-emerald-300"
          } flex items-center justify-center`}
        />
        {!isLast && (
          <span
            className={`w-0.5 h-full ${isLeft ? "bg-rose-300" : "bg-emerald-300"}`}
          />
        )}
      </motion.div>

      {/* Right Text */}
      <motion.div
        className={`${!isLeft ? "pl-4 text-left" : ""} text-zinc-800`}
        variants={rightTextVariants}
      >
        {!isLeft && (
        <div className="">
            <div className="flex flex-col gap-1 w-full ml-2 relative">
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-sm text-zinc-700">{company}</span>
                <span className="text-sm text-zinc-500">{date}</span>

            </div>

          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
