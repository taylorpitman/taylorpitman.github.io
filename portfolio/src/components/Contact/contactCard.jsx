import headshot from '../../assets/headshots/headshot.jpg';


const ContactCard = () => {

    return (
        <div className='max-w-2xl mt-20 mb-20 w-full mx-auto items-center justify-center flex px-8 md:px-6 gap-6 rounded-xl shadow-lg bg-white text-zinc-900'>
            <div className='flex-col p-4'>
                {/*Profile Picture */}
                <div>
                    <img src={headshot} alt="Profile" className="w-16 rounded-full shadow-md" />
                </div>

                {/*Title & Contact tagline */}
                <div className='flex flex-col items-center w-2/3 mt-4 text-center'>
                    <h2 className='text-2xl font-bold'>Hire me.</h2>
                    <p className='text-sm text-zinc-600'>Front-end Developer</p>
                    <div>
                        <p className='text-sm text-zinc-600'>Email: taylor@example.com</p>
                        <p className='text-sm text-zinc-600'>LinkedIn: linkedin.com/in/taylor</p>
                    </div>
                </div>

                {/*open to opportunities */}
                <div className='text-sm text-zinc-600'>
                    <p>Open to new opportunities</p>
                </div>
            </div>
        </div>

    )

}

export default ContactCard;