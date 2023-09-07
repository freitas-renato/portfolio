"use client";

import Project from "@/components/project";
import { projects } from "@/lib/data";
import {motion} from "framer-motion";

export default function Projects() {
    return (
        <motion.section 
            id="projects"
            className="flex flex-col mb-40 w-full lg:w-[70%] scroll-mt-32"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.1}}
        >
            <h2 className="text-4xl font-bold py-10">Projects</h2>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 mt-10 items-center justify-center">
                {projects.map((project) => (
                    <Project key={project.name} {...project} />
                ))}
            </div>
        </motion.section>
    )
};
