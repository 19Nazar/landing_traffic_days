import React from "react";

export interface PartnershipTitleProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

export const PartnershipTitle: React.FC<PartnershipTitleProps> = ({
    title = "Контакти для партнерства",
    subtitle = "Готові створити вигідну синергію. Пишіть нам — обговоримо колаборацію.",
    className,
}) => {
    return (
        <div className={`w-full text-center ${className || ""}`}>
            {/* Main Title */}
            <div
                className="uppercase tracking-[-1.8px] leading-[100%] mb-[30px]"
                style={{
                    color: "#FFF",
                    fontFamily:
                        "Halvar Breitschrift, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "clamp(32px, 5vw, 60px)",
                    fontWeight: 700,
                    lineHeight: "60px",
                }}
            >
                {title}
            </div>

            {/* Subtitle */}
            <div
                className="leading-[120%] tracking-[-0.32px] max-w-[523px] mx-auto"
                style={{
                    color: "#FFF",
                    fontFamily:
                        "Mabry Pro, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "19.2px",
                }}
            >
                {subtitle}
            </div>
        </div>
    );
};
