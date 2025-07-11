"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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
    const glowStyle = {
        width: `584px`,
        height: `584px`,
        left: `${left}px`,
        right: `${right}px`,
        top: `${top}px`,
        backgroundColor: color,
        borderRadius: "50%",
    };

    return (
        <div
            className={twMerge("blur-[198px] md:blur-[286px]", className)}
            style={{
                position: "absolute",
                mixBlendMode: "plus-lighter",
                ...glowStyle,
            }}
        />
    );
};
