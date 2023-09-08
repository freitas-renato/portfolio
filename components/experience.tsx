"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
    return (
        <section
            id="experience"
            className="flex flex-col mb-20 lg:mb-44 w-full lg:w-[70%] md:leading-8 scroll-mt-48"
        >
            <h2 className="text-4xl font-bold text-zinc-100">Experience</h2>

            <div className="mt-10 grid grid-cols-12 w-full">
                <div className="col-span-12 w-full">
                    <VerticalTimeline
                        layout="2-columns"
                        lineColor="#0d9488"
                    >
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                backgroundColor: "transparent",
                                borderColor: "rgb(82 82 91 / 0.3)",
                                border: "1px solid rgb(82 82 91 / 0.3)",
                                borderRadius: "10px",
                                padding: "1.5rem 1.5rem 0 1.5rem",
                                boxShadow: "none",
                                color: "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid rgb(82 82 91 / 0.3)",
                            }}
                            date="2019 - 2023"
                            iconStyle={{
                                background: "white",
                            }}
                            icon=""
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                Embedded Systems Engineer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-zinc-400">
                                São Paulo, Brazil
                            </h4>
                            <p>
                                Creative Direction, User Experience, Visual
                                Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                backgroundColor: "transparent",
                                borderColor: "rgb(82 82 91 / 0.3)",
                                border: "1px solid rgb(82 82 91 / 0.3)",
                                borderRadius: "10px",
                                padding: "1.5rem 1.5rem 0 1.5rem",
                                boxShadow: "none",
                                color: "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid rgb(82 82 91 / 0.3)",
                            }}
                            date="2019 - 2023"
                            iconStyle={{
                                background: "white",
                            }}
                            icon=""
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                Embedded Systems Engineer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-zinc-400">
                                São Paulo, Brazil
                            </h4>
                            <p>
                                Creative Direction, User Experience, Visual
                                Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                backgroundColor: "transparent",
                                borderColor: "rgb(82 82 91 / 0.3)",
                                border: "1px solid rgb(82 82 91 / 0.3)",
                                borderRadius: "10px",
                                padding: "1.5rem 1.5rem 0 1.5rem",
                                boxShadow: "none",
                                color: "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid rgb(82 82 91 / 0.3)",
                            }}
                            date="2019 - 2023"
                            iconStyle={{
                                background: "white",
                            }}
                            icon=""
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                Embedded Systems Engineer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-zinc-400">
                                São Paulo, Brazil
                            </h4>
                            <p>
                                Creative Direction, User Experience, Visual
                                Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                backgroundColor: "transparent",
                                borderColor: "rgb(82 82 91 / 0.3)",
                                border: "1px solid rgb(82 82 91 / 0.3)",
                                borderRadius: "10px",
                                padding: "1.5rem 1.5rem 0 1.5rem",
                                boxShadow: "none",
                                color: "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid rgb(82 82 91 / 0.3)",
                            }}
                            date="2019 - 2023"
                            iconStyle={{
                                background: "white",
                            }}
                            icon=""
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                Embedded Systems Engineer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-zinc-400">
                                São Paulo, Brazil
                            </h4>
                            <p>
                                Creative Direction, User Experience, Visual
                                Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                backgroundColor: "transparent",
                                borderColor: "rgb(82 82 91 / 0.3)",
                                border: "1px solid rgb(82 82 91 / 0.3)",
                                borderRadius: "10px",
                                padding: "1.5rem 1.5rem 0 1.5rem",
                                boxShadow: "none",
                                color: "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid rgb(82 82 91 / 0.3)",
                            }}
                            date="2019 - 2023"
                            iconStyle={{
                                background: "white",
                            }}
                            icon=""
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                Embedded Systems Engineer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-zinc-400">
                                São Paulo, Brazil
                            </h4>
                            <p>
                                Creative Direction, User Experience, Visual
                                Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
}
