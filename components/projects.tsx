import Project from "@/components/project";
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section className="flex flex-col mb-40 w-full lg:w-[70%]">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-x-4 mt-10 items-center justify-center">
                {projects.map((project) => (
                    <Project key={project.name} {...project} />
                ))}
            </div>
        </section>
    )
};
