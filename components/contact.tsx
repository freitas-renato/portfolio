import { socials } from "@/lib/data";

export default function Contact() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center mb-36">
                <h2 className="text-5xl font-semibold mb-10">Get In Touch</h2>
                <p className="text-zinc-400 text-center mb-6 max-w-lg text-lg">
                    I&apos;m currently looking for new opportunities to work in
                    NYC or remote anywhere in the USA. Feel free to contact me
                    if you have any questions or just want to say hi!
                </p>
                <div className="flex items-center gap-4">
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
                </div>
            </div>
        </section>
    );
}
