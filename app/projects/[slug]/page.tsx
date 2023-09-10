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
    if (!projects.find((project) => project === params.slug)) notFound();

    const project = await getProjectBySlug(params.slug);
    if (!project) notFound();

    return (
        <div className="flex-1 flex h-full w-full flex-col items-center md:col-span-11">
            <article className="prose lg:prose-xl prose-p:w-full prose-zinc prose-invert text-zinc-400">
                {project.content}
            </article>
        </div>
    );
}
