import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import SectionDivider from "@/components/section-divider";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-10 md:px-22 xl:px-24">
            <Intro />
            <About />
            <Projects />
            <Experience />
        </main>
    );
}
