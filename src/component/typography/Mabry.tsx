"use client";

import { twMerge } from "tailwind-merge";

export default function MabryText({
    children,
    className,
    style,
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) {
    return (
        <p
            className={twMerge(`font-mabry`, className)}
            style={{
                fontFamily: "var(--font-mabry)",
                ...style,
            }}
        >
            {children}
        </p>
    );
}
