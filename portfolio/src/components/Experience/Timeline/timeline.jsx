import TimelineItem  from "./timelineItem.jsx";

const Timeline= () => {

    return (
        <div className="flex flex-col justify-center items-center h-full ">
            
            <TimelineItem
                position="left"
                title="Freelance Web Developer"
                company= "NYS ACE Women's Network"
                date="Nov 2024 - May 2025"
                description="Developed a fully custom WordPress theme from scratch, ensuring seamless functionality and adherence
                            to modern web development standards.
                            Collaborated with a graphic design student to bring UI/UX designs to life, improving website usability and
                            engagement.
                            Rapidly learned and implemented WordPress development within 2 months, demonstrating adaptability
                            to new technologies."
            />
            <TimelineItem
                position="right"
                title="Computer Science Lab Assistant"
                company="SUNY at New Paltz"
                date="Aug 2024 - May 2025"
                description="Designed and launched an interactive React-based website to enhance student access to lab resources,
                            increasing engagement.
                            Implemented a responsive UI with Tailwind CSS, optimizing accessibility and user experience.
                            Provided rapid technical support to students and faculty, improving efficiency and troubleshooting issues
                            in real time."
            />
            <TimelineItem
                position="left"
                title="Computer Science & Math Tutor"
                company="Onondaga Community College"
                date="Aug 2022 - May 2023"
                description="Conducted 5+ problem-solving sessions per week, helping students grasp complex programming and
                            math concepts.
                            Developed engaging, hands-on teaching methods that simplified object-oriented programming, leading
                            to a 70% student return rate."
                isLast={true}
            />

        </div>
    )

}

export default Timeline;