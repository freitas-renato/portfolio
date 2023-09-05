import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Renato | Personal Portfolio",
    description:
        "Renato is a Software Engineer with experience with Embedded Systems and Web Development",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} text-zinc-100 bg-zinc-950 relative`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
