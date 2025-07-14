import React, { memo } from "react";

export type DecorativeVectorProps = {
    children: React.ReactNode;
    opacity?: number;
    className?: string;
};

export const DecorativeVector = memo(
    ({ children, opacity = 0.03, className = "" }: DecorativeVectorProps) => {
        const gridStyles = {
            mobile: {
                backgroundSize: "25% 25%, 25% 25%, 100% 100%",
                backgroundPosition: "0 0, 0 25%, 0 0",
            },
            tablet: {
                backgroundSize: "16.67% 16.67%, 16.67% 16.67%, 100% 100%",
                backgroundPosition: "0 0, 0 16.67%, 0 0",
            },
            desktop: {
                backgroundSize: "12.5% 12.5%, 12.5% 12.5%, 100% 100%",
                backgroundPosition: "0 0, 0 12.5%, 0 0",
            },
            large: {
                backgroundSize: "9.09% 9.09%, 9.09% 9.09%, 100% 100%",
                backgroundPosition: "0 0, 0 9.09%, 0 0",
            },
        };

        return (
            <div className={`relative overflow-hidden ${className}`}>
                {/* Мобильная сетка */}
                <div
                    className="absolute inset-0 sm:hidden transition-all duration-300 -z-10"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,${opacity}) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,${opacity}) 1px, transparent 1px),
                        radial-gradient(77.36% 25.6% at 50% 50%, rgba(255,255,255,${opacity}) 0%, transparent 100%)
                    `,
                        ...gridStyles.mobile,
                    }}
                />

                {/* Планшетная сетка */}
                <div
                    className="absolute inset-0 hidden sm:block md:hidden transition-all duration-300 -z-10"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,${opacity}) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,${opacity}) 1px, transparent 1px),
                        radial-gradient(77.36% 25.6% at 50% 50%, rgba(255,255,255,${opacity}) 0%, transparent 100%)
                    `,
                        ...gridStyles.tablet,
                    }}
                />

                {/* Десктопная сетка */}
                <div
                    className="absolute inset-0 hidden md:block lg:hidden transition-all duration-300 -z-10"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,${opacity}) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,${opacity}) 1px, transparent 1px),
                        radial-gradient(77.36% 25.6% at 50% 50%, rgba(255,255,255,${opacity}) 0%, transparent 100%)
                    `,
                        ...gridStyles.desktop,
                    }}
                />

                {/* Большая десктопная сетка */}
                <div
                    className="absolute inset-0 hidden lg:block transition-all duration-300 -z-10"
                    style={{
                        backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,${opacity}) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,${opacity}) 1px, transparent 1px),
                        radial-gradient(77.36% 25.6% at 50% 50%, rgba(255,255,255,${opacity}) 0%, transparent 100%)
                    `,
                        ...gridStyles.large,
                    }}
                />

                {/* Контент */}
                <div className="relative">{children}</div>
            </div>
        );
    },
);

DecorativeVector.displayName = "DecorativeVector";
