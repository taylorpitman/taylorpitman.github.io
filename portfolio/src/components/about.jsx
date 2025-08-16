




const About = () => {
    return (
        <section 
        aria-labelledby="about-heading"
        className="flex-col max-w-2xl mt-20 mx-auto justify-center flex px-8 md:px-6 gap-4 text-zinc-900">
            <h1 className="text-2xl font-semibold">About Me</h1>
            <div className="flex flex-col gap-4 text-zinc-600">
                   <p>I’m Taylor Pitman, <strong>a front-end developer</strong> with a growing passion for <strong>clean code, sharp UI, and seamless UX.</strong> </p>

                   <p>
                    With a Computer Science degree and <strong>hands-on experience</strong> building and deploying web applications, I know how to ship functional, responsive websites.
                    But now, in post-grad life, I’m focused on <strong>standing out through aesthetics and design.</strong>
                   </p>

                    <p>
                    I’m diving into the UI/UX world to bridge the gap between clean code and great user experiences. My goal is to create projects that aren’t 
                    just technically solid, but visually impactful from start to finish.
                    </p>

                    <p>Outside of code & design, you’ll find me lifting at the gym, reading fantasy novels, or knitting my wardrobe.</p>

                    <strong>I don’t just build websites. I build web experiences that work.</strong>
            </div>  
        </section>
    )

}

export default About;