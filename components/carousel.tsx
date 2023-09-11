"use client";

import { Children } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

type Props = {
    children: React.ReactNode;
};

export default function Carousel({ children }: Props) {
    const slides = Children.toArray(children);
    const containerRef = useRef<HTMLDivElement | never>(null);

    const simulateKeyPress = (keyCode: number) => {
        const event = new KeyboardEvent("keydown", {
            keyCode,
            which: keyCode,
        });
        document.dispatchEvent(event);
    };

    function scrollRight() {
        console.log("scroll right");
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    }

    function scrollLeft() {
        console.log("scroll left");
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    }

    return (
        <div className="flex h-[400px] w-full flex-col items-center">
            <div className="relative flex h-full w-full flex-col items-center md:w-[600px]">
                <div className="absolute left-0 top-1/2 z-[99] -translate-y-1/2">
                    <button
                        onClick={scrollLeft}
                        className="rounded-full p-2 text-center text-zinc-500 shadow-md transition-all hover:text-teal-500"
                    >
                        <FaChevronLeft />
                    </button>
                </div>
                <div className="absolute right-0 top-1/2 z-[99] -translate-y-1/2">
                    <button
                        onClick={scrollRight}
                        className="rounded-full p-2 text-zinc-500 shadow-md transition-all hover:text-teal-500"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                <div className="mx-auto inline-block h-full w-[80%] md:w-[90%]">
                    <div
                        ref={containerRef}
                        className="no-scrollbar z-[10] flex snap-x snap-mandatory overflow-x-scroll"
                    >
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className="flex h-[420px] w-full flex-none snap-center flex-col items-center justify-center bg-transparent"
                            >
                                {slide}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
