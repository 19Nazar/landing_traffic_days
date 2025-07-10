import React from "react";
import { twMerge } from "tailwind-merge";
import { BlurredGlow, BlurredGlowProps } from "../blur_effect/BlurEffect";

export interface BackgroundEffectsProps {
    effects: BlurredGlowProps;
    className?: string;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
    effects,
    className,
}) => {
    return (
        <div className={twMerge("relative z-10 over", className)}>
            <BlurredGlow {...effects} />
        </div>
    );
};

// Preset effect configurations (keeping your original positioning)
export const backgroundEffectPresets = {
    redGlow: {
        color: "#C8101D",
        size: 594,
        blur: 285.95,
        blendMode: "plus-lighter" as const,
        left: -394, // Your original positioning
        opacity: 0.5,
    },
    purpleGlow: {
        color: "#4600DF",
        size: 400,
        blur: 200,
        blendMode: "plus-lighter" as const,
    },
    yellowGlow: {
        color: "#FFE605",
        size: 300,
        blur: 150,
        blendMode: "overlay" as const,
    },
};
