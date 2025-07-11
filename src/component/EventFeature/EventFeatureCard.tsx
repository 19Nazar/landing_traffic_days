import React from "react";
import { twMerge } from "tailwind-merge";

export interface EventFeatureCardProps {
    image: string;
    title?: string;
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
}) => {
    return (
        <div
            className={twMerge(
                "w-full max-w-[285px] flex-shrink-0 z-500 overflow-hidden",
                type === "sponsore"
                    ? "h-[300px] min-w-[280px]"
                    : type === "info_partners"
                      ? "h-[120px]"
                      : "h-[401px] min-w-[280px]",
                className,
            )}
        >
            {/* Card Background */}
            <div
                className={twMerge(
                    "w-full h-[401px] flex-shrink-0 rounded-[20px] relative flex flex-col bg-[#171717]",
                    type === "sponsore"
                        ? "h-[300px]"
                        : type === "info_partners"
                          ? "h-[120px]"
                          : "h-[401px]",
                )}
            >
                {/* Image Container with Mask */}
                <div className="w-full h-auto flex-shrink-0 p-3.5">
                    {type === "sponsore" ? (
                        <div className="w-full h-[120px] flex-shrink-0 flex justify-center items-center content-center rounded-[12px] overflow-hidden">
                            <div className="w-full h-[120px] flex-shrink-0 flex justify-center items-center content-center rounded-[12px] overflow-hidden">
                                <img
                                    src={image}
                                    alt={imageAlt}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>
                    ) : type === "info_partners" ? (
                        <div className="w-full h-[80px] flex-shrink-0 flex justify-center items-center content-center rounded-[12px] overflow-hidden">
                            <div className="w-full h-[80px] flex-shrink-0 flex justify-center items-center content-center rounded-[12px] overflow-hidden">
                                <img
                                    src={image}
                                    alt={imageAlt}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-[205px] flex-shrink-0 rounded-[12px] overflow-hidden">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="object-cover"
                                style={{
                                    width: "auto",
                                    height: "auto",
                                    minWidth: "100%",
                                    minHeight: "100%",
                                }}
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
            </div>
        </div>
    );
};
