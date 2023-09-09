"use client";

import React, { useEffect } from "react";
import Header from "@/components/header";
import { useActiveSectionContext } from "@/context/active-section-context";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

type Props = {
    children: React.ReactNode;
};

export default function ProjectLayout({ children }: Props) {
    const { setActiveSection } = useActiveSectionContext();
    const router = useRouter();

    useEffect(() => {
        setActiveSection("Projects");
    }, [setActiveSection]);

    return (
        <main className="px-22 mt-40 flex flex-col items-center justify-between px-10 xl:px-24">
            <Header />
            <div className="grid w-full grid-cols-12 lg:w-[80%] 2xl:w-[60%]">
                <div className="col-span-12 mb-10 mr-10 flex max-h-12 w-full items-center md:col-span-2">
                    <button
                        onClick={() => router.back()}
                        className="inline-block text-xl font-semibold text-zinc-500 transition-all hover:text-teal-500 hover:underline"
                    >
                        <IoArrowBackOutline />
                    </button>
                </div>
                {children}
            </div>
        </main>
    );
}
