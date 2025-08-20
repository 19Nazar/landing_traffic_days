"use client";
import React from "react";
import ButtonTicket from "@/component/buttton/Buttons";

export interface TrafficDaysEventProps {
    className?: string;
}

export const TrafficDaysEvent: React.FC<TrafficDaysEventProps> = ({
    className,
}) => {
    return (
        <div className={`w-full max-w-[685px] mx-auto top- ${className || ""}`}>
            {/* Main Content Container */}
            <div className="relative min-h-[350px] md:min-h-[320px] px-4 py-8 flex flex-col items-center justify-start md:gap-3">
                {/* Title Section */}
                <div className="relative w-full mb-6 md:mb-8">
                    {/* Background Blur Effect for Title */}
                    <div
                        className="absolute inset-0 w-full text-center uppercase leading-[90%] tracking-[-1.64px] text-drukCyr md:text-halvar"
                        style={{
                            filter: "blur(29.8px)",
                            fontSize: "clamp(50px, 8vw, 82px)",
                            fontWeight: 700,
                        }}
                    >
                        <span className="w-full" style={{ color: "#FFD71A" }}>
                            Traffic Days <br />
                        </span>
                        <span className="w-full" style={{ color: "#FFF" }}>
                            {" "}
                            x Sempro
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1
                        className="relative z-10 text-center uppercase leading-[90%] tracking-[-1.64px] w-full text-drukCyr md:text-halvar"
                        style={{
                            fontSize: "clamp(50px, 8vw, 82px)",
                            fontWeight: 700,
                        }}
                    >
                        <span className="w-full" style={{ color: "#FFD71A" }}>
                            Traffic Days
                            <br />
                        </span>
                        <span className="w-full" style={{ color: "#FFF" }}>
                            {" "}
                            x Sempro
                        </span>
                    </h1>

                    {/* Pre-party Blur Effect */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 text-center leading-[90%] text-nowrap w-full top-[50px] sm:top-[80px] md:top-[110px]"
                        style={{
                            width: "279px",
                            height: "70px",
                            filter: "blur(14.35px)",
                            fontSize: "clamp(50px, 6vw, 82px)",
                            fontFamily:
                                "Good Vibes Pro, cursive, -apple-system, Roboto, Helvetica, sans-serif",
                            fontWeight: 400,
                            color: "#F7001F",
                        }}
                    >
                        Pre-party
                    </div>

                    {/* Pre-party Main Text */}
                    <h1
                        className="absolute left-1/2 transform -translate-x-1/2 text-center leading-[90%] z-10 text-nowrap w-full top-[70px] sm:top-[80px] md:top-[110px]"
                        style={{
                            width: "279px",
                            height: "70px",
                            fontSize: "clamp(50px, 6vw, 82px)",
                            fontFamily:
                                "Good Vibes Pro, cursive, -apple-system, Roboto, Helvetica, sans-serif",
                            fontWeight: 400,
                            color: "#F7001F",
                        }}
                    >
                        Pre-party
                    </h1>
                </div>

                {/* Description */}
                <div className="w-full px-4 mb-8 md:mb-6 flex flex-col z-10 items-center gap-3 ">
                    <p
                        className="text-center leading-[120%] tracking-[-0.32px] opacity-90"
                        style={{
                            fontSize: "16px",
                            fontFamily:
                                "Mabry Pro, -apple-system, Roboto, Helvetica, sans-serif",
                            fontWeight: 400,
                            color: "#FFF",
                        }}
                    >
                        Networking, вайб, колаби і тусовка — не прогав головну
                        ніч літа.
                    </p>
                    <div className="flex gap-5 max-md:flex-col w-full md:w-[530px] items-center lg:min-w-[650px] justify-between">
                        <ButtonTicket
                            onClick={() =>
                                window.open(
                                    "https://6748a61b2be428-51263590.gallery.photo/gallery/traffic-days-by-arbitrage-up/",
                                    "_blank",
                                )
                            }
                        >
                            фотозвіт 1
                        </ButtonTicket>
                        <ButtonTicket
                            onClick={() =>
                                window.open(
                                    "https://photos.app.goo.gl/AfpWi9codKmPFzUR7",
                                    "_blank",
                                )
                            }
                        >
                            фотозвіт 2
                        </ButtonTicket>
                    </div>
                </div>
            </div>
        </div>
    );
};
