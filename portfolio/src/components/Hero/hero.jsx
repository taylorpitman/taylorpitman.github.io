import plant from '../../assets/hero/plant.png';
import lamp from '../../assets/hero/lamp.png';


const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        {/*anime profile picture, that turns to my headshot */}
        <img src={lamp} alt="Lamp" className="w-md " />
        {/*Hello! I'm Taylor. Engineer & Aspiring Designer. */}
        <img src={plant} alt="Plant" className="w-md" />

        {/*tagline*/}

        {/*Download CV Button*/} {/*Contact me Button*/}

    </div>
  );
}
export default Hero;