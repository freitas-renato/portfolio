"use client";

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
            <nav className="fixed top-3 sm:top-6 left-[50%] -translate-x-[50%] z-[999] flex min-h-3 w-auto px-2 md:px-8 py-2 rounded-full bg-gradient-to-t from-zinc-900/80 to-zinc-700/80 items-center justify-center backdrop-blur-lg transition-all">
                <ul className="flex items-center justify-center">
                    <NavLink>Home</NavLink>
                    <NavLink>Projects</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Resume</NavLink>
                </ul>
            </nav>
        </header>
    );
}
