import TimelineItem  from "./timelineItem.jsx";
import {motion} from 'motion/react'

export const timelineItems = [
  {
    id: 1,
    position: "left",
    title: "Freelance Web Developer",
    company: "NYS ACE Women's Network",
    date: "Nov 2024 - May 2025",
    description: `Developed a fully custom WordPress theme from scratch, ensuring seamless functionality 
                  and adherence to modern web development standards.
                  Collaborated with a graphic design student to bring UI/UX designs to life, improving 
                  website usability and engagement.
                  Rapidly learned and implemented WordPress development within 2 months, demonstrating 
                  adaptability to new technologies.`,
  },
  {
    id: 2,
    position: "right",
    title: "Computer Science Lab Assistant",
    company: "SUNY at New Paltz",
    date: "Aug 2024 - May 2025",
    description: `Designed and launched an interactive React-based website to enhance student access to 
                  lab resources, increasing engagement.
                  Implemented a responsive UI with Tailwind CSS, optimizing accessibility and user experience.
                  Provided rapid technical support to students and faculty, improving efficiency and 
                  troubleshooting issues in real time.`,
  },
  {
    id: 3,
    position: "left",
    title: "Computer Science & Math Tutor",
    company: "Onondaga Community College",
    date: "Aug 2022 - May 2023",
    description: `Conducted 5+ problem-solving sessions per week, helping students grasp complex programming 
                  and math concepts.
                  Developed engaging, hands-on teaching methods that simplified object-oriented programming, 
                  leading to a 70% student return rate.`,
    isLast: true,
  },
];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

const Timeline= () => {

    return (
        <div>
            <div className="hidden sm:flex flex-col justify-center items-center h-full ">
            {timelineItems.map(item => (
                <TimelineItem
                    key={item.id}
                    position={item.position}
                    title={item.title}
                    company={item.company}
                    date={item.date}
                    description={item.description}
                    isLast={item.isLast}
                />
                ))}
            </div>

            {/* Mobile Timeline */}
            <motion.div className="flex flex-col gap-3 sm:hidden"
                variants={container}
                      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}>
                {timelineItems.map(item => (

                    <motion.div key={item.id} className="flex flex-col"
                        variants={childVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}>
                        <div className="flex items-center mb-1">
                            <h3 className="text-lg text-zinc-800 font-semibold">{item.title}</h3>
                        </div>
                        <span className="text-sm text-zinc-700">{item.company}</span>
                        <span className="text-sm text-zinc-500 mb-2">{item.date}</span>
                    </motion.div>

                ))}

                {/*Download CV Button */}
                <motion.div className="flex justify-center"
                variants={childVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.a href="/PitmanResume.pdf" download="TaylorPitman_Resume.pdf"
                        aria-label = "Download my Resume as a PDF"
                        className="w-full">
                        <button 
                        className='inline-flex w-full justify-center items-center gap-2.5 font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2  border-zinc-900 border-2 text-zinc-900 hover:text-white hover:bg-zinc-900 focus:ring-zinc-500 px-6 py-2 text-sm rounded-xl  cursor-pointer' 
                        >
                            Download CV
                        </button>
                    </motion.a>
                </motion.div>
            </motion.div>


            </div>
            )
        }

export default Timeline;