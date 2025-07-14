"use client";

import {
    backgroundEffectPresets,
    BackgroundEffects,
} from "@/component/background_effects/BackgroundEffects";
import ButtonTicket from "@/component/buttton/Buttons";
import MabryText from "@/component/typography/Mabry";
import { useRouter } from "next/navigation";
export default function SuccessPage() {
    const router = useRouter();

    const ExternalLinkIcon = () => (
        <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_744_8066)">
                <g clipPath="url(#clip1_744_8066)">
                    <path
                        opacity="0.5"
                        d="M1.8 1.8V2.5C1.8 2.6 1.85 2.7 1.93 2.78C2.01 2.86 2.11 2.9 2.22 2.9H10L0.1 12.8C0.04 12.86 0 12.95 0 13.05C0 13.15 0.04 13.24 0.1 13.3L0.65 13.85C0.8 14 1.04 14 1.2 13.85L11.1 3.95V11.1C11.1 11.2 11.15 11.3 11.23 11.38C11.31 11.46 11.41 11.5 11.52 11.5H12.2C12.3 11.5 12.4 11.46 12.48 11.38C12.56 11.3 12.6 11.2 12.6 11.1V1.8C12.6 1.7 12.56 1.6 12.48 1.52C12.4 1.44 12.3 1.4 12.2 1.4H2.22C2.11 1.4 2.01 1.44 1.93 1.52C1.85 1.6 1.8 1.7 1.8 1.8Z"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_744_8066">
                    <rect
                        width="14"
                        height="15"
                        fill="currentColor"
                        transform="translate(0 0.7)"
                    />
                </clipPath>
                <clipPath id="clip1_744_8066">
                    <rect
                        width="14"
                        height="15"
                        fill="currentColor"
                        transform="translate(0 0.7)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
    return (
        <main className="w-full flex items-center h-screen overflow-hidden">
            <div className="flex flex-col gap-7 w-full">
                <div className="-z-10">
                    <BackgroundEffects
                        effects={backgroundEffectPresets.yellowGlow}
                    />
                </div>

                <div className="flex flex-col items-center content-center gap-5">
                    <h2 className="text-halvar text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] font-bold tracking-[-1.2px] uppercase text-center">
                        Дякуємо, що залишили заявку!
                    </h2>
                    <MabryText className="text-[16px] md:text-[18px] font-semibold leading-[19px] md:leading-[21px] text-center">
                        Наш менеджер незабаром зв'яжеться з вами
                    </MabryText>
                    <ButtonTicket
                        onClick={() => {
                            router.push("/");
                        }}
                        className="p-3 flex justify-between w-full"
                    >
                        НА ГОЛОВНУ
                        <ExternalLinkIcon />
                    </ButtonTicket>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3.5">
                    <ButtonTicket
                        onClick={() => {
                            window.open(
                                "https://www.instagram.com/arbitrage.up/",
                                "_blank",
                            );
                        }}
                        className="p-3 flex justify-between w-full"
                    >
                        Instagram
                        <ExternalLinkIcon />
                    </ButtonTicket>
                    <ButtonTicket
                        onClick={() => {
                            window.open(
                                "https://t.me/+vfQ6ahB0kJQzMjNi",
                                "_blank",
                            );
                        }}
                        className="p-3 flex justify-between w-full"
                    >
                        Telegram
                        <ExternalLinkIcon />
                    </ButtonTicket>
                    <ButtonTicket
                        onClick={() => {
                            window.open(
                                "https://www.youtube.com/@arbitrageup/featured",
                                "_blank",
                            );
                        }}
                        className="p-3 flex justify-between w-full"
                    >
                        Youtube
                        <ExternalLinkIcon />
                    </ButtonTicket>
                </div>
                <div className="-z-10">
                    <BackgroundEffects
                        effects={backgroundEffectPresets.redGlow}
                    />
                </div>
            </div>
        </main>
    );
}
