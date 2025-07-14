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
        left: -369,
    },
    yellowGlow: {
        color: "#FFB41E",
        right: -369,
    },
} as const;
