"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

import { useActiveSectionInView, useInViewThreshold } from "@/lib/hooks";

function textEmphasis(text: string) {
    return <span className="text-zinc-100 font-bold">{text}</span>;
}

export default function About() {
    const threshold = useInViewThreshold(0.7, 0.3);
    const { ref } = useActiveSectionInView("About", threshold);

    return (
        <motion.section
            ref={ref}
            id="about"
            className="flex flex-col mb-20 lg:mb-44 w-full lg:w-[70%] md:leading-8 scroll-mt-48"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className="text-4xl font-bold py-10">About Me</h2>
            <p className="text-lg text-zinc-400 py-3 text-justify ">
                I&apos;m a Software Engineer born in Brazil, and currently
                living in {textEmphasis("New York City")}. I have a bachelors
                degree in {textEmphasis("Electrical and Computer Engineeing")}{" "}
                from the{" "}
                <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/University_of_S%C3%A3o_Paulo"
                    className="font-semibold underline"
                >
                    University of São Paulo. <HiMiniArrowUpRight className="inline-block"/>
                </a>
            </p>
            <p className="text-lg text-zinc-400 py-3 text-justify ">
                Most of my professional experience consisists of developing and
                maintaining software for a variety of embedded systems. Skilled
                mainly in {textEmphasis("C and C++ programming")}, with a strong
                understanding of microcontroller architectures, peripheral
                interfaces and comunication protocols. I also have experience
                developing web applications in {textEmphasis("JavaScript")},
                having worked on IoT projects that involved developing{" "}
                {textEmphasis("web apps for data visualization")} and control,
                as well as backend infrastructure for data storage and
                processing, using{" "}
                {textEmphasis("React, Node.js, MySQL, InfluxDB and AWS")}.
            </p>
            <p className="text-lg text-zinc-400 py-3 text-justify ">
                Strong problem-solving skills and ability to work well in a team
                environment. Excited to continue growing and building cool
                projects.
            </p>

            {/* <Link
                href="/about"
                className="flex max-w-fit items-center gap-3 group text-teal-400 font-semibold underline py-2"
            >
                Read More{" "}
                <BsArrowRight className="group-hover:translate-x-2 transition-all" />
            </Link> */}
        </motion.section>
    );
}
