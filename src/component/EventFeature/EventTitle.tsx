import React from "react";

export interface EventTitleProps {
    title?: string;
    className?: string;
}

export const EventTitle: React.FC<EventTitleProps> = ({
    title = "Чому варто бути на Traffic Days x Sempro Pre-party",
    className,
}) => {
    return (
        <>
            <h2
                className={`max-md:hidden w-full text-center uppercase tracking-[-1.8px] leading-[100%] ${className || ""}`}
                style={{
                    color: "#FFF",
                    fontFamily:
                        "Halvar Breitschrift, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "clamp(50px, 5vw, 60px)",
                    fontWeight: 700,
                    lineHeight: "60px",
                    margin: "0 auto",
                }}
            >
                {title}
            </h2>
            <h2
                className={`md:hidden w-full text-center  leading-[90%] uppercase ${className || ""}`}
                style={{
                    color: "#FFF",
                    fontFamily: "var(--font-drukCyr)",
                    fontSize: "50px",
                    fontWeight: 700,
                    margin: "0 auto",
                }}
            >
                {title}
            </h2>
        </>
    );
};
