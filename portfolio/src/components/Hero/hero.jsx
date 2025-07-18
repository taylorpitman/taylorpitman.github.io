import plant from '../../assets/hero/plant.png';
import lamp from '../../assets/hero/lamp.png';
import headshot from '../../assets/headshots/headshot.jpg';


const Hero = () => {
  return (
    <div className="relative flex-col sm:flex-row max-w-2xl sm:mt-27 mt-0 mx-auto justify-center flex px-3 sm:px-8 md:px-6 ">

                {/*Headshot */}
        <div className = " flex justify-center  w-full">
            <div className = "flex flex-col gap-4 justify-center items-center w-36 sm:min-h-full sm:justify-start">
                <img src={lamp} alt="Lamp" className='cursor-pointer hover:scale-105 transition-transform duration-200' />
                <img src={headshot} alt="Headshot" className="w-sm sm:w-md rounded-full shadow-lg" />
                <button className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors 
                focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 
                focus:ring-zinc-500 p-2 text-xs  rounded-xl w-full cursor-pointer">
                    Download CV
                </button>
            </div>
        </div>

        <div className="flex items-center justify-center mt-8 sm:mt-15 md:mt-30  ">
            <div className="flex flex-col items-center sm:items-baseline sm:mt-5 gap-2 text-zinc-900 relative z-0  ">
                    <h1 className ="text-zinc-900 text-4xl sm:text-3xl font-bold ">Hello, I'm Taylor. <br/> Front-end Developer.</h1>
                    <span className="text-center sm:text-left sm:px-2 text-lg sm:text-sm "> 
                        I thrive in the code space and I'm currently
                        diving into UI/UX and graphic design to 
                        bridge the gap between design and development
                    </span>
            </div>
        </div>

       <img src={plant} alt="Plant" className=" hidden scale-x-[-1] sm:block relative translate-y-11 -translate-x-5 self-end h-90  z-4 " />


    </div>
  );
}
export default Hero;