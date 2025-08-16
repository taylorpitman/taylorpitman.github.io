
const ContactCard = () => {

    return (
        <div className='max-w-2xl mt-20 mb-20 w-full mx-auto flex flex-col gap-3 px-8 md:px-6 text-zinc-900'>
                <h1 className='text-2xl font-bold'>Hire Me</h1>
                <p className='text-md text-zinc-600'>Need an end-to-end builder who’s flexible, fast, and passionate about craft? I turn ideas into responsive, production-ready experiences and love collaborating to iterate. Reach out!</p>

                {/* CTA Button, and Open to opportunities */}
                <div className='flex items-center gap-4 '>
                    <button className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900  border-zinc-900 border-2 text-white hover:text-zinc-900 hover:bg-zinc-50 focus:ring-zinc-500 px-6 py-2 text-sm rounded-xl  cursor-pointer">
                    Contact Me</button>

                    <div className='flex items-center bg-emerald-100 rounded-3xl p-4 gap-2'>
                        <span class="relative h-2.5 w-2.5 flex items-center" aria-hidden="true">
                            <span class="motion-safe:absolute motion-safe:inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600 ring-2 ring-emerald-200"></span>
                        </span>
                        <p className=' text-sm text-zinc-600'>Open to opportunities</p>
                    </div>
                </div>
        </div>

    )

}

export default ContactCard;