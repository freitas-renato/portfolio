"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

type NavLinkProps = {
    children: React.ReactNode;
};

function NavLink({ children }: NavLinkProps) {
    return (
        <li className="text-base sm:text-lg font-medium cursor-pointer text-zinc-400 hover:text-zinc-200 rounded-full px-3 sm:px-6 py-1 xl:py-2 transition-all">
            {children}
        </li>
    );
}

export default function Header() {
    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-3 sm:top-6 left-[50%] -translate-x-[50%] z-[999] flex min-h-3 w-auto px-2 md:px-8 py-2 rounded-full bg-gradient-to-t from-zinc-900/80 to-zinc-700/80 items-center justify-center backdrop-blur-lg"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <nav>
                    <ul className="flex items-center justify-center">
                        {links.map(link => (
                            <li key={link.hash} className="text-base sm:text-lg font-medium cursor-pointer text-zinc-400 hover:text-zinc-200 rounded-full px-3 sm:px-6 py-1 xl:py-2 transition-all">
                                <Link href={link.hash} >
                                    {link.name}
                                </Link>
                            </li>
                        )) }
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
}
