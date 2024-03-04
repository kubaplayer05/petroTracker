import type {Metadata} from "next";
import {Lato} from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar";

const lato = Lato({subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
    title: "Petro Tracker",
    description: "Website about petrology things!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={lato.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
