"use client";
import { useEffect, useState } from "react";

export type BlurredGlowProps = {
    left?: number;
    right?: number;
    top?: number;
    color: string;
    className?: string;
};

export const BlurredGlow = ({
    left,
    right,
    top,
    color = "#C8101D",
    className = "",
}: BlurredGlowProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // вызвать сразу
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const glowStyle = {
        width: `584px`,
        height: `584px`,
        left: `${left}px`,
        right: `${right}px`,
        top: `${top}px`,
        backgroundColor: color,
        filter: `blur(${isMobile ? 198 : 285.95}px)`,
        borderRadius: "50%",
    };

    return (
        <div
            className={className}
            style={{
                position: "absolute",
                mixBlendMode: "plus-lighter",
                ...glowStyle,
            }}
        />
    );
};
