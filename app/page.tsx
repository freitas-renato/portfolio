import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-10 md:px-22 xl:px-24">
            <Intro />
            <About />

            <div className="w-full h-44 bg-zinc-900 opacity-50 mt-44 rounded-t-lg">

            </div>
        </main>
    );
}
