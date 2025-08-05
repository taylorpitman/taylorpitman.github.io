import { MdOutlineArrowOutward } from "react-icons/md";

const Card = ({ img, title, description, link, technologies }) => {

    const colors = [
        "bg-rose-300",
        "bg-green-300",
        "bg-orange-300",
        "bg-emerald-300",
    ]
  return (
    <div className="relative  
                    aspect-[3/2] w-full rounded-2xl  
                    m-2 p-4 
                    flex flex-col items-center justify-center 
                    group overflow-hidden
                    bg-[url(img)] bg-cover bg-center
                    hover:shadow-xl transition-shadow duration-300
                    ">

    <img
        src={img}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
    />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />

      {/* Text content */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-12 flex flex-col gap-2 items-center justify-center text-white text-center px-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm px-8 py-2 mb-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((technology, index) => (
            <span key={technology} className={`text-xs ${colors[index % colors.length]} px-2 py-1 rounded-md text-zinc-900 hover:scale-110 transition-transform duration-300 cursor-pointer`}>
              {technology}
            </span>
          ))}
        </div>
      </div>

        {/*link CTA button */}
        <div className="absolute z-15 
                    flex justify-center items-center 
                    -bottom-1 -right-1 
                    rounded-tl-[50%]
                    aspect-square w-1/5
                    bg-zinc-50">
            {/*Circle with arrow icon */}
            <a href={link} 
            target="_blank"
            className="flex justify-center items-center 
                            w-3/5 aspect-square rounded-full 
                            hover:scale-110 transition-transform duration-300 cursor-pointer
                            bg-zinc-900">

                {/* make arrow responsive size  */}
                <MdOutlineArrowOutward size={36} className=" text-white" />
            </a>
      </div>
    </div>
  );
};

export default Card;
