"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { motion } from "framer-motion";

export interface EventFeatureCardProps {
    image: string;
    title?: string;
    url?: string;
    description?: string;
    imageAlt?: string;
    className?: string;
    type?: string;
}

export const EventFeatureCard: React.FC<EventFeatureCardProps> = ({
    image,
    title,
    description,
    imageAlt = "Event feature",
    className,
    type,
    url,
}) => {
    return (
        <motion.div
            className={twMerge(
                "w-full max-w-[285px] flex-shrink-0 z-500 overflow-hidden",
                type === "sponsore"
                    ? "h-[330px] min-w-[280px]"
                    : type === "info_partners"
                      ? "h-[120px] min-w-[280px]"
                      : "h-[401px] min-w-[280px]",
                url ? "cursor-pointer" : "",
                className,
            )}
            whileHover={{
                scale: 1.03,
                transition: { duration: 0.2, ease: "easeOut" },
            }}
            initial={{ scale: 1 }}
            onClick={() => {
                if (url) window.open(url, "_blank");
            }}
        >
            {/* Card Background */}
            <motion.div
                className={twMerge(
                    "w-full flex-shrink-0 rounded-[20px] relative flex flex-col bg-[#171717]",
                    type === "sponsore"
                        ? "h-[330px]"
                        : type === "info_partners"
                          ? "h-[120px]"
                          : "h-[401px]",
                )}
                whileHover={{
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)",
                    transition: { duration: 0.2, ease: "easeOut" },
                }}
                initial={{
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                }}
            >
                {/* Image Container with Mask */}
                <div
                    className={twMerge(
                        "w-full flex-shrink-0",
                        type === "info_partners" ? "p-5" : "p-3.5",
                    )}
                >
                    {type === "sponsore" ? (
                        <div className="w-full h-[120px] flex-shrink-0 flex justify-center items-center content-center rounded-[12px] overflow-hidden">
                            <div className="w-full h-[80px] flex-shrink-0 flex justify-center items-center content-center rounded-[12px] overflow-hidden relative">
                                <Image
                                    src={image}
                                    alt={imageAlt}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    ) : type === "info_partners" ? (
                        <div className="w-full h-[80px] flex-shrink-0 flex justify-center items-center content-center rounded-[12px] overflow-hidden relative">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                                loading="lazy"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-[205px] flex-shrink-0 rounded-[12px] overflow-hidden relative">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    )}
                </div>

                {/* Title */}
                {type != "info_partners" && (
                    <div className="flex flex-col gap-3 px-3">
                        <h3
                            className="text-center leading-[100%] tracking-[-0.52px]"
                            style={{
                                color:
                                    type === "sponsore" ? "#ffffff" : "#FFD71A",
                                fontFamily:
                                    "Mabry Pro, -apple-system, Roboto, Helvetica, sans-serif",
                                fontSize: "26px",
                                fontWeight: 400,
                                lineHeight: "26px",
                            }}
                        >
                            {title}
                        </h3>

                        {/* Description */}
                        <p
                            className="w-full text-center leading-[120%] tracking-[-0.36px] "
                            style={{
                                color: "#FFF",
                                fontFamily:
                                    "Mabry Pro, -apple-system, Roboto, Helvetica, sans-serif",
                                fontSize: "18px",
                                fontWeight: 400,
                            }}
                        >
                            {description}
                        </p>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};
