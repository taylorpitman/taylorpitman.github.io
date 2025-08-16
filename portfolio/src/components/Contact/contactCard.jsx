
const ContactCard = () => {

    return (
        <section 
        aria-labelledby="hire-me-heading"
        className='max-w-2xl mt-20 mb-20 w-full mx-auto flex flex-col gap-3 px-8 md:px-6 text-zinc-900'>
                <h1 className='text-2xl font-bold'>Hire Me</h1>
                <p className='text-md text-zinc-600'>Need an end-to-end builder who’s flexible, fast, and passionate 
                    about craft? I turn ideas into responsive, production-ready experiences and love collaborating to 
                    iterate. Reach out!</p>

                {/* CTA Button + Availability status  */}
                <div className='flex items-center gap-4 '>
                    <a href="mailto:taylordianebusiness@gmail.com"
                       className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white border-2 border-transparent hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 focus:ring-zinc-500 px-6 py-2 text-sm rounded-xl cursor-pointer"
                     aria-label="Email Taylor at taylordianebusiness@gmail.com"
                    >
                        Email Me
                    </a>

                    <div className='flex items-center bg-emerald-100 rounded-3xl p-4 gap-2'>
                        <span className="relative h-2 w-2 flex items-center" aria-hidden="true">
                            <span className="motion-safe:absolute motion-safe:inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 ring-2 ring-emerald-200"></span>
                        </span>
                        <p className=' hidden sm:block text-sm text-zinc-600'>Open to opportunities</p>
                        <p className=' sm:hidden text-sm text-zinc-600'>Available</p>
                    </div>
                </div>
        </section>

    )

}

export default ContactCard;