"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

type Props = {
    params: {
        slug: string;
    };
};

export default function ProjectPage({ params }: Props) {
    const { setActiveSection } = useActiveSectionContext();
    const router = useRouter();

    useEffect(() => {
        setActiveSection("Projects");
    }, [setActiveSection]);

    return (
        <main className="px-22 mt-40 flex flex-col items-center justify-between px-10 xl:px-24">
            <div className="grid w-full grid-cols-12 lg:w-[80%] 2xl:w-[60%]">
                <div className="col-span-12 mb-10 mr-10 flex max-h-12 w-full items-center md:col-span-2">
                    <button
                        onClick={() => router.back()}
                        className="inline-block text-xl font-semibold text-zinc-500 transition-all hover:text-teal-500 hover:underline"
                    >
                        <IoArrowBackOutline />
                    </button>
                </div>
                <div className="col-span-12 flex h-full w-full flex-col md:col-span-8">
                    <h1 className="mb-10 text-5xl font-semibold">
                        Project: {params.slug}
                    </h1>

                    <p className="text-md text-justify leading-relaxed text-zinc-300">
                        Developed for a client, a human body vibration analyzer
                        is an equipment that uses a 3-axis accelerometer to
                        measure vibration intensity on workers for work safety
                        purposes. This was the second iteration of a previous
                        project, redesigned for stability and cost reduction.
                        The first version was revised, changing
                        hardware/firmware architecture and replacing key
                        hardware components, which led to an 80%
                        bill-of-materials cost reduction and increased the
                        client’s profit margins
                    </p>
                </div>
            </div>
        </main>
    );
}
