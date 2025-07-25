

const Button = ({ text, onClick, width }) => {

    return (

        <button 
        className={`inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-500 px-6 py-3.5 text-sm rounded-xl lg:text-base w-full md:w-[155px] cursor-pointer ${width}`} 
        onClick={onClick}
        >
            {text}
        </button>
    )

}

export default Button;