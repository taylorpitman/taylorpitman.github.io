import TimelineItem  from "./timelineItem.jsx";

const Timeline= () => {

    return (
        <div className="flex flex-col border-red-200 border-2 w-full h-full">
            
            <TimelineItem
                position="left"
                title="Software Engineer"
                date="Jan 2020 - Present"
                description="Working on various projects using React and Node.js"
            />
            <TimelineItem
                position="right"
                title="Web Developer"
                date="Jan 2018 - Dec 2019"
                description="Developed and maintained websites using HTML, CSS, and JavaScript"
            />
        </div>
    )

}

export default Timeline;