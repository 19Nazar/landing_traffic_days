import React from "react";
import { EventTitle } from "./EventTitle";
import { EventFeatureCard } from "./EventFeatureCard";
import ButtonTicket from "@/component/buttton/Buttons";
import { Features } from "@/const/Features";

export interface EventFeaturesProps {
    title?: string;
    onTicketClick?: () => void;
    className?: string;
}

export const EventFeatures: React.FC<EventFeaturesProps> = ({
    title,
    onTicketClick,
    className,
}) => {
    return (
        <div className={`w-full mx-auto box-border z-200 ${className || ""}`}>
            {/* Container with relative positioning for absolute elements */}
            <div className="relative w-full flex flex-col items-center gap-10 mx-auto max-xl:hidden">
                <EventTitle title={title} />

                <div className="flex gap-[20px] w-full">
                    {Features.map((feature, index) => (
                        <EventFeatureCard
                            key={index}
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                            imageAlt={`Event feature ${index + 1}`}
                        />
                    ))}
                </div>

                <ButtonTicket onClick={onTicketClick} />
            </div>

            {/* Responsive version for smaller screens */}
            <div className="block xl:hidden px-4 py-8">
                <EventTitle title={title} className="mb-8" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {Features.map((feature, index) => (
                        <div key={index} className="flex justify-center">
                            <EventFeatureCard
                                image={feature.image}
                                title={feature.title}
                                description={feature.description}
                                imageAlt={`Event feature ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <ButtonTicket onClick={onTicketClick} />
                </div>
            </div>
        </div>
    );
};
