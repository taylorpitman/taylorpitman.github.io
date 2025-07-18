import plant from '../../assets/hero/plant.png';
import lamp from '../../assets/hero/lamp.png';
import headshot from '../../assets/headshots/headshot.jpg';


const Hero = () => {
  return (
    <div className="relative max-w-2xl sm:mt-27 mt-0 mx-auto justify-center flex px-3 sm:px-8 border-2 md:px-6 ">
        <img src={plant} alt="Plant" className=" hidden sm:block relative translate-y-10 md:translate-y-0 self-end  h-90 sm:h-sm md:h-md lg:h-lg z-4 " />
        <div className="flex items-center justify-center mt-15 sm:mt-30 ">
            <div className="flex flex-col  sm:mt-5  gap-2 text-zinc-900 relative z-0  ">
                    <h1 className ="text-zinc-900 text-xl sm:text-3xl  font-bold ">Hello, I'm Taylor. <br/> Front-end Developer.</h1>
                    <span className="sm:px-2 w-4/5 text-sm sm:text-md  "> 
                        I thrive in the code space and I'm currently
                        diving into UI/UX and graphic design to 
                        bridge the gap between design and development
                    </span>
            </div>
        </div>

        <div className = "flex flex-col gap-4 min-h-full border justify-start  ">
            <img src={lamp} alt="Lamp" className=" h-sm sm:h-md md:h-lg " />
            <img src={headshot} alt="Headshot" className="w-sm sm:w-md rounded-full shadow-lg" />
            <button className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors 
            focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 
            focus:ring-zinc-500 p-2 text-xs  rounded-xl w-full cursor-pointer">
                Download CV
            </button>
        </div>
    </div>
  );
}
export default Hero;