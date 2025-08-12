
import { motion } from "motion/react";


const TimelineItem = ({position, title, date, description, isLast, isFirst}) => {
    const isLeft = position === 'left';

    return (
        <div className="grid grid-cols-[1fr_32px_1fr] min-h-24 relative">

            {/* Left Text Content */}
            <div className={`${isLeft ? 'pr-4 text-left' : ''} text-zinc-800`}>
            {isLeft &&
                <div className={`flex flex-col gap-2 w-full ml-2 `}>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <span className="text-sm text-zinc-500">{date}</span>
                </div> }
            </div>


            {/* Timeline point asset */}

            <div className='relative flex flex-col items-center'>

                <span className={`w-5 h-5 rounded-full border-2
                 ${isLeft ? 'border-rose-300' : 'border-emerald-300'} flex items-center justify-center `}></span>
                {!isLast && <span className={`w-0.5 h-full ${isLeft ? 'bg-rose-300' : 'bg-emerald-300'}`}></span>}
            </div>



            {/* Right Text Content */}
            <div className={`${!isLeft ? 'pl-4 text-left' : ''} text-zinc-800`}>
            {!isLeft &&
                <div className={`flex flex-col gap-2 w-full ml-2 `}>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <span className="text-sm text-zinc-500">{date}</span>
                </div> 
            }
            </div>

        </div>
    )

}

export default TimelineItem;