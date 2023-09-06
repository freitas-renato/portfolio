function TechnologyPill({ name }: { name: string }) {
    return (
        <div className="bg-teal-600 text-zinc-100 px-3 py-1 rounded-full border border-solid border-zinc-600 text-sm font-light">
            {name}
        </div>
    );
}

type ProjectProps = {
    name: string;
    description: string;
    technologies: string[];
};

export default function Project({
    name,
    description,
    technologies,
}: ProjectProps) {
    return (
        <div className="grid grid-cols-3 gap-4 h-full w-full items-center justify-center rounded-lg border border-slate-700/30 hover:bg-slate-700/30 transition-all p-6 hover:cursor-pointer">
            <div className="flex flex-col col-span-2 justify-between h-full">
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                    <p className="text-zinc-400">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <TechnologyPill key={tech} name={tech} />
                    ))}
                </div>
            </div>
            <div className="flex items-center col-span-1 w-full h-[200px]">
                <div className="rounded-lg overflow-clip h-full w-full bg-slate-300"></div>
            </div>
        </div>
    );
}
