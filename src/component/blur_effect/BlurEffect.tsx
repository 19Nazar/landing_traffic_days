export type BlurredGlowProps = {
    width: number;
    height: number;
    left?: number;
    right?: number;
    top?: number;
    color: string;
    blur: number;
    className?: string;
};

export const BlurredGlow = ({
    width,
    height,
    left,
    right,
    top,
    color = "#C8101D",
    blur = 285.95,
    className = "",
}: BlurredGlowProps) => {
    const glowStyle = {
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        right: `${right}px`,
        top: `${top}px`,
        backgroundColor: color,
        filter: `blur(${blur}px)`,
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
