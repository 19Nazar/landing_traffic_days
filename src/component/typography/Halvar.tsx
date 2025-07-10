"use client";

import { twMerge } from "tailwind-merge";

export default function HalvarText({
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
            className={twMerge(
                `font-halvar text-[14px] tracking-[-0.56px] font-medium leading-[18px]`,
                className,
            )}
            style={{
                fontFamily: "var(--font-halvar)", // Принудительно задаем шрифт
                ...style,
            }}
        >
            {children}
        </p>
    );
}
