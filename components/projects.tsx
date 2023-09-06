import Project from "@/components/project";
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section className="flex flex-col mb-40 w-full lg:w-[70%]">
            <h2 className="text-4xl font-bold py-10">Projects</h2>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 2xl:gap-x-4 mt-10 items-center justify-center">
            {/* <div className="grid grid-cols-1 gap-10 mt-10 items-center justify-center"> */}
                {projects.map((project) => (
                    <Project key={project.name} {...project} />
                ))}
            </div>
        </section>
    )
};
