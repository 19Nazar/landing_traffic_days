import Container from "@/Container";
import React, { memo } from "react";
import { EventFeatures } from "../EventFeature/EventFeatures";
import { Sponsors } from "@/const/Features";

const SponsorsSection: React.FC = ({}) => {
    return (
        <div>
            <div className="relative select-none">
                <div className="absolute inset-0 font-bold text-[674.16px] flex items-center justify-center">
                    <div
                        className="text-center -tracking-[2%] whitespace-nowrap opacity-5 uppercase"
                        style={{
                            fontFamily: "var(--font-drukCyr)",
                            background:
                                "linear-gradient(175.71deg, #FFFFFF 3.49%, #000000 74.99%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mixBlendMode: "screen",
                            transform: "scaleX(1.5)",
                        }}
                    >
                        Traffic Days
                    </div>
                </div>
            </div>
            <Container className="mx-auto md:mt-[100px] z-50">
                <div className="z-50">
                    <EventFeatures
                        title="спонсори Traffic Days"
                        type="sponsore"
                        cards={Sponsors}
                    />
                </div>
            </Container>
        </div>
    );
};

export default memo(SponsorsSection);
