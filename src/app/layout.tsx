import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const halvar = localFont({
    src: "../../public/fonts/HalvarBreit-Lt/HalvarBreit-Lt.woff2",
    variable: "--font-halvar",
    style: "normal",
    display: "swap",
});

const mabry = localFont({
    src: [
        {
            path: "../../public/fonts/Mabry-Pro/MabryPro-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Mabry-Pro/MabryPro-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Mabry-Pro/MabryPro-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-mabry",
    display: "swap",
});

const goodVibes = localFont({
    src: "../../public/fonts/Good-Vibes-Pro/GoodVibesPro.woff2",
    variable: "--font-goodVibes",
    style: "normal",
    display: "swap",
});

const drukCyr = localFont({
    src: [
        {
            path: "../../public/fonts/Druk-Cyr/DrukCyr-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Druk-Cyr/DrukCyr-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/fonts/Druk-Cyr/DrukCyr-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Druk-Cyr/DrukCyr-BoldItalic.woff2",
            weight: "700",
            style: "italic",
        },
        {
            path: "../../public/fonts/Druk-Cyr/DrukCyr-Heavy.woff2",
            weight: "900",
            style: "normal",
        },
        {
            path: "../../public/fonts/Druk-Cyr/DrukCyr-HeavyItalic.woff2",
            weight: "900",
            style: "italic",
        },
        {
            path: "../../public/fonts/Druk-Cyr/DrukCyr-Super.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Druk-Cyr/DrukCyr-SuperItalic.woff2",
            weight: "400",
            style: "italic",
        },
    ],
    variable: "--font-druk-cyr",
    display: "swap",
});

export const metadata: Metadata = {
    title: "ArbitrageUp",
    description: "ArbitrageUp - ",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body
                className={`${halvar.variable} ${mabry.variable} ${goodVibes.variable} ${drukCyr.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
