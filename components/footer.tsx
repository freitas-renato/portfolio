function link(text: string, href: string) {
    return (
        <a
            className="text-zinc-400 font-semibold hover:underline"
            target="_blank"
            href={href}
        >
            {text}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="flex flex-col items-center text-center gap-4 justify-center w-full h-32 border-t border-zinc-800 px-4">
            <p className="text-zinc-500 text-sm font-medium">
                Designed & Built by Renato Freitas
            </p>
            <p className="text-zinc-500 text-xs">
                Developed using {link("Next.js", "https://nextjs.org/")} and{" "}
                {link("Tailwind CSS", "https://tailwindcss.com/")}. Deployed
                with {link("Vercel", "https://vercel.com/")}.
            </p>
        </footer>
    );
}
