import Timeline from "./Timeline/timeline";
import Button from "../Buttons/button.jsx";



const Experience = () => {
    return (
        <div className="flex-col max-w-2xl mt-20 mb-20 w-full mx-auto justify-center flex px-8 md:px-6 gap-6 text-zinc-900">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">Work Experience</h1>
                <a href="/resume/TaylorPitmanResume.pdf" download="TaylorPitman_Resume.pdf">
                    <Button
                        text="Download CV"
                    />
                </a>
            </div>
            <Timeline />
        </div>
    )

}

export default Experience;