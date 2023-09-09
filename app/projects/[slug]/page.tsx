import { getAvailableProjects, getProjectBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    };
};

export default async function ProjectPage({ params }: Props) {
    const projects = getAvailableProjects();
    console.log(projects);

    // Check if the project exists
    if (!projects.find((project) => project === params.slug))
        notFound();

    const project = await getProjectBySlug(params.slug);
    if (!project) 
        notFound();

    return (
        <div className="col-span-12 flex h-full w-full flex-col md:col-span-8">
            <h1 className="mb-10 text-5xl font-semibold">
                {project.metadata.name}
            </h1>

            <article className="text-md text-justify leading-relaxed text-zinc-300">
                {project.content}
            </article>
        </div>
    );
}
