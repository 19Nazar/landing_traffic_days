"use client";
import Image from "next/image";
import { memo } from "react";
import Header from "../header/Header";
import { TrafficDaysEvent } from "../traffic_days_event/TrafficDaysEvent";

const HeadSection = () => {
    return (
        <div className="w-full " id="HeadSection">
            <div className="w-full relative">
                <Image
                    src="/image/header/head_mobile.png"
                    alt="main_head_img"
                    width={1920}
                    height={800}
                    priority
                    className="w-full h-full min-h-[320px] object-cover object-top  md:hidden"
                />

                <Image
                    src="/image/header/head.png"
                    alt="main_head_img"
                    width={1920}
                    height={800}
                    priority
                    className="w-full h-full min-h-[600px] object-cover object-top  max-md:hidden"
                />

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
