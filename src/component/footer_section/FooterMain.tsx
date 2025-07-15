"use client";
import React, { memo } from "react";
import ButtonTicket from "@/component/buttton/Buttons";
import MabryText from "../typography/Mabry";

const FooterMain: React.FC = ({}) => {
    return (
        <div className="flex flex-col mx-auto px-0 max-w-[1200px] w-full">
            <div className={`w-full max-w-[685px] mx-auto`}>
                {/* Main Content Container */}
                <div className="relative px-4 py-4 flex flex-col items-center justify-start gap-6">
                    {/* Description */}
                    <div className="w-full px-4 mb-8 md:mb-6 flex flex-col items-center gap-3 md:gap-5 ">
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
                            Networking, вайб, колаби і тусовка — не прогав
                            головну ніч літа.
                        </p>
                    </div>

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
                            <span
                                className="w-full"
                                style={{ color: "#FFD71A" }}
                            >
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
                            <span
                                className="w-full"
                                style={{ color: "#FFD71A" }}
                            >
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

                    <div className="max-md:hidden flex gap-10">
                        <div className=" flex items-center gap-3">
                            <div className="h-[26px] w-[26px] bg-[#FFD71A] rounded-[5px] overflow-hidden flex items-center justify-center">
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.57143 0V1.42857H0.714286C0.3198 1.42857 0 1.74837 0 2.14286V13.5714C0 13.9659 0.3198 14.2857 0.714286 14.2857H6.25329C5.46909 13.3074 5 12.0656 5 10.7143C5 7.55836 7.55836 5 10.7143 5C12.0656 5 13.3074 5.46909 14.2857 6.25331V2.14286C14.2857 1.74837 13.9659 1.42857 13.5714 1.42857H10.7143V0H9.28571V1.42857H5V0H3.57143ZM15 10.7143C15 13.0812 13.0812 15 10.7143 15C8.34736 15 6.42857 13.0812 6.42857 10.7143C6.42857 8.34736 8.34736 6.42857 10.7143 6.42857C13.0812 6.42857 15 8.34736 15 10.7143ZM10 7.85714V11.0101L11.6378 12.6479L12.6479 11.6378L11.4286 10.4184V7.85714H10Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <MabryText className="font-normal text-[21px] -tracking-[2%]">
                                7 серпня о 17:00
                            </MabryText>
                        </div>
                        <div className=" flex items-center gap-3">
                            <div className="h-[26px] w-[26px] bg-[#FFD71A] rounded-[5px] overflow-hidden flex items-center justify-center">
                                <svg
                                    width="10"
                                    height="14"
                                    viewBox="0 0 10 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.53558 8.69075L5.00001 12.2905L1.46447 8.69075C-0.488157 6.70263 -0.488157 3.47922 1.46447 1.4911C3.41709 -0.497032 6.58295 -0.497032 8.53558 1.4911C10.4881 3.47922 10.4881 6.70263 8.53558 8.69075ZM0.625001 12.7273H9.37501V14H0.625001V12.7273Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <MabryText className="font-normal text-[21px] -tracking-[2%]">
                                Місто Київ
                            </MabryText>
                        </div>
                    </div>

                    <ButtonTicket />
                </div>
            </div>
        </div>
    );
};

export default memo(FooterMain);
