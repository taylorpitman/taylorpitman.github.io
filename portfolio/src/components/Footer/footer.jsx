

const Footer = () => {
  return (

    <section className= "flex-col max-w-2xl mt-20 mb-5 w-full mx-auto justify-center items-center flex px-8 md:px-6 gap-6 text-zinc-900">
        {/* Border */}
        <div className="border-t border-zinc-300 w-2/3 my-4" />

        {/* Text */}
<div className="flex flex-col items-center justify-end gap-1 text-sm text-zinc-500 w-full">
  <p className="font-medium text-zinc-600">📍 NYC Metropolitan Area</p>
  <p className="flex items-center gap-1">
    Made with <span className="text-emerald-300 font-semibold">React</span> & <span className="text-rose-300 font-semibold">Tailwind CSS</span>
  </p>
  <p className="text-xs tracking-wide">© {new Date().getFullYear()} Taylor Pitman</p>
</div>
    </section>
  )
}

export default Footer;