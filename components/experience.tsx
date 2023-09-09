"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useActiveSectionInView, useScreenWidth } from "@/lib/hooks";
import { HiMiniArrowUpRight } from "react-icons/hi2";

import { experiences } from "@/lib/data";

export default function Experience() {
    const { ref } = useActiveSectionInView("Experience");

    const screenWidth = useScreenWidth();
    const iconMarginLeft = screenWidth > 1170 ? "-12px" : "8px";
    const iconMarginTop = screenWidth > 1170 ? "20px" : "10px";
    return (
        <section
            id="experience"
            className="flex flex-col mb-20 lg:mb-32 w-full lg:w-[70%] md:leading-8 scroll-mt-48"
        >
            <h2 ref={ref} className="text-4xl font-bold text-zinc-100">
                Experience
            </h2>

            <div className="mt-10 grid grid-cols-12 w-full">
                <div className="col-span-12 w-full">
                    <VerticalTimeline
                        layout="2-columns"
                        lineColor="#0d9488"
                        className="!max-w-[1440px] !w-full"
                    >
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.url}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    backgroundColor: "transparent",
                                    borderColor: "rgb(82 82 91 / 0.3)",
                                    border: "1px solid rgb(82 82 91 / 0.3)",
                                    borderRadius: "10px",
                                    padding: "1.5rem",
                                    boxShadow: "none",
                                    color: "white",
                                }}
                                contentArrowStyle={{
                                    borderRight:
                                        "7px solid rgb(82 82 91 / 0.3)",
                                }}
                                date={experience.date}
                                iconStyle={{
                                    background: "rgb(9, 9, 11)",
                                    width: "25px",
                                    height: "25px",
                                    marginTop: `${iconMarginTop}`,
                                    marginLeft: `${iconMarginLeft}`,
                                    boxShadow: "none",
                                    border: "5px solid #0d9488",
                                }}
                            >
                                <a
                                    target="_blank"
                                    href={experience.url}
                                    className="text-2xl font-semibold mb-4 group hover:cursor-pointer"
                                >
                                    {experience.title} ·{" "}
                                    <span className="text-zinc-300 inline-block">
                                        {experience.company}
                                        <HiMiniArrowUpRight className="inline-block transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                </a>
                                <h4 className="vertical-timeline-element-subtitle text-zinc-500 font-semibold -mt-10">
                                    {experience.city}
                                </h4>
                                <p className="text-zinc-400">
                                    {experience.description}
                                </p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
}
