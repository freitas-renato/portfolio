import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function TechnologyPill({ name }: { name: string }) {
    return (
        <div className="bg-teal-600 text-zinc-50 px-3 py-1 rounded-full border border-solid border-zinc-600 text-sm font-light">
            {name}
        </div>
    );
}

type ProjectProps = {
    name: string;
    description: string;
    technologies: string[];
    image?: string | StaticImport;
};

export default function Project({
    name,
    description,
    technologies,
    image,
}: ProjectProps) {
    return (
        <div className="group grid grid-cols-12 gap-4 h-full w-full items-center justify-center rounded-lg border border-zinc-600/30 hover:bg-zinc-700/30 transition-all hover:cursor-pointer hover:scale-105">
            <div className="flex flex-col col-span-12 md:col-span-8 xl:col-span-7 p-6 justify-between h-full">
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
            <div className="relative flex items-center col-span-12 md:col-span-4 xl:col-span-5 w-full h-[200px] md:w-[92%] md:h-[88%]">
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill={true}
                        className="object-cover border border-solid border-zinc-600 rounded-b-lg md:rounded-xl brightness-95 group-hover:brightness-100 transition-all group-hover:drop-shadow-lg group-hover:shadow-zinc-500"
                    />
                ) : (
                    <div className="rounded-b-lg md:rounded-lg overflow-clip h-full w-full bg-zinc-700" />
                )}
            </div>
        </div>
    );
}
