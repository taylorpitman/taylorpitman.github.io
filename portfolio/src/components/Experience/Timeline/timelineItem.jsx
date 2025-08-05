
import {colors} from '../../../constants/colors.js';
import { useMemo } from 'react';


const TimelineItem = ({position, title, date, description}) => {
    const isLeft = position === 'left';

    return (
        <div className="flex items-center  justify-center gap-2 relative w-full p-4">
            {/* Timeline point asset */}
            <div className='border'>
                <div className="w-5 h-5 aspect-auto rounded-full border-2 border-rose-300 flex items-center justify-center"></div>
                <div className="w-0.5 h-full bg-stone-300"></div>
            </div>

            {/* Text Content */}
            <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'} gap-2 w-full`}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-sm text-zinc-500">{date}</span>
            </div> 

        </div>
    )

}

export default TimelineItem;