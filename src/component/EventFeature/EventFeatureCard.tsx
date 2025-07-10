import React from "react";

export interface EventFeatureCardProps {
    image: string;
    title: string;
    description: string;
    imageAlt?: string;
    className?: string;
}

export const EventFeatureCard: React.FC<EventFeatureCardProps> = ({
    image,
    title,
    description,
    imageAlt = "Event feature",
    className,
}) => {
    return (
        <div
            className={`w-full min-w-[280px] max-w-[285px] h-[401px] flex-shrink-0 z-500 ${className || ""}`}
        >
            {/* Card Background */}
            <div className="w-full h-[401px] flex-shrink-0 rounded-[20px] bg-[#171717] relative flex flex-col gap-8">
                {/* Image Container with Mask */}
                <div className="w-full h-[205px] flex-shrink-0 p-3.5">
                    <div className="w-full h-[205px] flex-shrink-0 rounded-[12px] bg-[#D9D9D9] overflow-hidden">
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
                </div>

                {/* Title */}
                <div className="flex flex-col gap-3 px-3">
                    <h3
                        className="text-center leading-[100%] tracking-[-0.52px]"
                        style={{
                            color: "#FFD71A",
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
            </div>
        </div>
    );
};
