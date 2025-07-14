import React from "react";
import { EventTitle } from "./EventTitle";
import { EventFeatureCard, EventFeatureCardProps } from "./EventFeatureCard";
import ButtonTicket from "@/component/buttton/Buttons";
import { twMerge } from "tailwind-merge";

export interface EventFeaturesProps {
    title?: string;
    className?: string;
    cards: EventFeatureCardProps[];
    type?: "sponsore" | "info_partners" | "other";
}

export const EventFeatures: React.FC<EventFeaturesProps> = ({
    title,
    className,
    cards,
    type,
}) => {
    return (
        <section
            className={`w-full mx-auto box-border z-200 ${className || ""}`}
        >
            {/* Container with relative positioning for absolute elements */}
            <div className="relative w-full flex flex-col items-center gap-10 mx-auto max-xl:hidden">
                <EventTitle title={title} />
                <div className="flex gap-[20px] w-full flex-wrap">
                    {cards.map((feature, index) => (
                        <EventFeatureCard
                            key={"feature_desktop" + type + index}
                            {...feature}
                            type={type}
                            imageAlt={"feature_" + type + index}
                        />
                    ))}
                </div>
                {type == undefined && (
                    <div className="flex justify-center">
                        <ButtonTicket />
                    </div>
                )}{" "}
            </div>

            {/* Responsive version for smaller screens */}
            <div className="flex flex-col items-center gap-5 xl:hidden px-4 py-8">
                <EventTitle title={title} className="mb-8" />

                <div
                    className={twMerge(
                        "grid gap-6 mb-8 grid-cols-1 lg:grid-cols-2",
                    )}
                >
                    {cards.map((feature, index) => (
                        <div key={index} className="flex justify-center">
                            <EventFeatureCard
                                key={"feature_mobile" + type + index}
                                {...feature}
                                type={type}
                                imageAlt={"feature" + type + index}
                            />
                        </div>
                    ))}
                </div>

                {type == undefined && (
                    <div className="flex justify-center">
                        <ButtonTicket />
                    </div>
                )}
            </div>
        </section>
    );
};
