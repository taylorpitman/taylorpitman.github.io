import { MdOutlineArrowOutward } from "react-icons/md";

const Card = ({ title, description, link }) => {
  return (
    <div className="relative p-4 bg-stone-200 aspect-[3/2] w-full rounded-xl  m-2 flex flex-col items-center justify-center group overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10" />

      {/* Text content */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm mb-2">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="italic hover:underline"
          >
            Link to repo
          </a>
        )}
      </div>

        <div className="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center -bottom-1 -right-1 rounded-tl-[50%] z-0 aspect-square w-32 h-32 rounded-xl bg-white ">
            <div className="flex justify-center items-center w-24 h-24 bg-stone-200 rounded-full z-20 hover:scale-101 transition-transform duration-300">
                <MdOutlineArrowOutward size={50} className="text-zinc-700" />
            </div>
      </div>
    </div>
  );
};

export default Card;
