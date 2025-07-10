"use client";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import Header from "../header/Header";
import { TrafficDaysEvent } from "../traffic_days_event/TrafficDaysEvent";
import { BackgroundEffects } from "../background_effects/BackgroundEffects";

const HeadSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // вызвать сразу
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full -z-10" id="HeadSection">
            <div className="w-full relative">
                {isMobile ? (
                    <Image
                        src="/image/header/head_mobile.png"
                        alt="main_head_img"
                        width={1920}
                        height={800}
                        priority
                        className="w-full h-auto -z-10"
                    />
                ) : (
                    <Image
                        src="/image/header/head.png"
                        alt="main_head_img"
                        width={1920}
                        height={800}
                        priority
                        className="w-full h-auto -z-10"
                    />
                )}

                {/* Контент поверх изображения */}
                <div className="absolute inset-0 flex flex-col justify-between max-w-[1200px] w-full mx-auto text-white pt-2">
                    <Header />
                    <TrafficDaysEvent />
                </div>
            </div>
        </div>
    );
};

export default memo(HeadSection);
