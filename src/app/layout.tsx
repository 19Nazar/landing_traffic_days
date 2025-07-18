import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const title = "Traffic Days офлайн-зустрічі про трафік";
const description =
    "Офлайн-зустріч про трафік, арбітраж і нові можливості. Для новачків, профі та тих, хто хоче бути в темі. Виступи спікерів, нетворкінг, кейси практиків.";
const image = "https://www.trafficdays.net/logo.png";
const url = "https://www.trafficdays.net";

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
    openGraph: {
        title: title,
        description: description,
        url: url,
        siteName: "ArbitrageUp",
        images: [
            {
                url: image,
                width: 1800,
                height: 1600,
                alt: "ArbitrageUp Preview",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        images: [image],
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
                className={`${halvar.variable} ${mabry.variable} ${goodVibes.variable} ${drukCyr.variable} antialiased max-md:bg-[#080706]`}
            >
                {children}
            </body>
        </html>
    );
}
