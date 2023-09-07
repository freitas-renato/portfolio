"use client";

import { MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import {HiDownload} from "react-icons/hi";

import { motion } from "framer-motion";
import Link from "next/link";

import { socials } from "@/lib/data";

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
                return;
            }
            direction === "forward" ? type() : backspace();
        }, 100);

        return () => clearInterval(interval);
    }, [expertise, expertiseIndex, direction, pause]);

    return (
        <section id="home" className="flex flex-col justify-center min-h-screen w-full lg:w-[70%]">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <p className="text-3xl font-medium text-gray-300">
                    Hey 👋 I&apos;m
                </p>
                <h1 className="text-5xl md:text-7xl font-bold mt-4">
                    Renato Freitas
                </h1>
                <p className="text-xl font-base text-zinc-500 mt-6 max-w-[95%]">
                    I&apos;m a Software Engineer with experience building{" "}
                    <span className="font-semibold text-zinc-400">
                        {expertise} <span className="text-teal-400 animate-[pulse_1.5s_linear_infinite]">|</span>
                    </span>
                </p>
            </motion.div>
            <motion.div 
                className="flex items-center justify-start mt-10 gap-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                {socials.map((social) => (
                    <a
                        key={social.name}
                        target="_blank"
                        href={social.url}
                        className="text-4xl text-zinc-400 hover:text-zinc-300 transition-all cursor-pointer hover:scale-110 active:scale-105"
                    >
                        {social.icon}
                    </a>
                ))}

                {/* ToDo: Add resume link */}
                <a href="#" className="group flex items-center gap-4 rounded-full bg-gradient-to-br from-teal-500 to-teal-800 px-6 py-2 text-zinc-200 text-base transition-all hover:font-semibold hover:scale-110 active:scale-105">
                    Résumé <HiDownload className="opacity-70 group-hover:animate-bounce transition-all"/>
                </a>
            </motion.div>
        </section>
    );
}
