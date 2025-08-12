

const Button = ({ text, onClick, width }) => {

    return (

        <button 
        className={`inline-flex justify-center items-center gap-2.5 font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2  border-zinc-900 border-2 text-zinc-900 hover:text-white hover:bg-zinc-900 focus:ring-zinc-500 px-6 py-2 text-sm rounded-xl  cursor-pointer`} 
        onClick={onClick}
        >
            {text}
        </button>
    )

}

export default Button;