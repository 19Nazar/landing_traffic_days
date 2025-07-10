import React from "react";
export type DecorativeVectorProps = {
    children: React.ReactNode;
};

export const DecorativeVector = ({ children }: DecorativeVectorProps) => {
    return (
        <div className="relative overflow-hidden z-10">
            <div className="absolute inset-0 grid grid-cols-11 grid-rows-11 gap-0">
                {Array(121)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            className="border border-t-0 border-l-0 border-[radial-gradient(77.36%_25.6%_at_50%_50%,_#FFFFFF_0%,_rgba(0,0,0,0)_100%)] "
                            style={{
                                opacity: 0.06,
                            }}
                        />
                    ))}
            </div>

            <div className="relative">{children}</div>
        </div>
    );
};
