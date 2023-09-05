"use client";

import { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const expertiseList = [
    "Embedded Systems.",
    "Web Applications.",
    "Desktop Applications.",
    "IoT Devices.",
] as const;

export default function Intro() {
    const [expertise, setExpertise] = useState("Embedded Systems");
    const [expertiseIndex, setExpertiseIndex] = useState(0);
    const [direction, setDirection] = useState<"forward" | "backward">(
        "backward"
    );
    const [pause, setPause] = useState(0);

    useEffect(() => {
        const backspace = () => {
            if (expertise.length === 0) {
                setExpertiseIndex((expertiseIndex + 1) % expertiseList.length);
                setDirection("forward");
                setPause(5);
            } else {
                const segment = expertise.slice(0, expertise.length - 1);
                setExpertise(segment);
            }
        };

        const type = () => {
            if (expertise.length < expertiseList[expertiseIndex].length) {
                const segment = expertiseList[expertiseIndex].slice(
                    0,
                    expertise.length + 1
                );
                setExpertise(segment);
            } else {
                setDirection("backward");
                setPause(30);
            }
        };

        const interval = setInterval(() => {
            if (pause > 0) {
                setPause((prev) => prev - 1);
                console.log("pause: ", pause);
                return;
            }
            direction === "forward" ? type() : backspace();
        }, 100);

        return () => clearInterval(interval);
    }, [expertise, expertiseIndex, direction, pause]);

    return (
        <section className="flex flex-col justify-center h-screen -mt-20 w-full lg:w-[60%] ">
            <h2 className="text-3xl font-medium text-gray-300">
                Hey 👋 I&apos;m
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mt-4">Renato Freitas</h1>
            <p className="text-xl font-base text-zinc-500 mt-6 max-w-[95%]">
                I&apos;m a Software Engineer with experience building{" "}
                <span className="font-semibold text-zinc-400">
                    {expertise} |{" "}
                </span>
            </p>

            <div className="flex items-center justify-start mt-10 gap-4">
                <a target="_blank" href="https://github.com/freitas-renato/"> <AiFillGithub className="text-3xl text-zinc-400 hover:text-zinc-300 transition-all cursor-pointer" /> </a>
                <a target="_blank" href="https://www.linkedin.com/in/renatooliveirafreitas/"> <AiFillLinkedin className="text-3xl text-zinc-400 hover:text-zinc-300 transition-all cursor-pointer" /></a>
                <a target="_blank" href="mailto:freitas-renato@outlook.com"> <HiMail className="text-3xl text-zinc-400 hover:text-zinc-300 transition-all cursor-pointer" /></a>
            </div>
        </section>
    );
}
