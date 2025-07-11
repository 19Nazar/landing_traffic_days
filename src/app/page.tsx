"use client";
import { BackgroundEffects } from "@/component/background_effects/BackgroundEffects";
import { BlurredGlowProps } from "@/component/blur_effect/BlurEffect";
import { DecorativeVector } from "@/component/decorative-vector/DecorativeVector";
import HeadSection from "@/component/head_section/HeadSection";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // вызвать сразу
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const lightm: BlurredGlowProps = {
        color: "#FFB41E",
        right: -369, // Less negative positioning
    };
    const light2: BlurredGlowProps = {
        color: "#C8101D",
        left: -369, // Less negative positioning
    };

    const WhyShouldBeSection = dynamic(
        () => import("@/component/why_should_be_section/WhyShouldBeSection"),
    );
    const SponsorsSection = dynamic(
        () => import("@/component/sponsors_section/SponsorsSection"),
    );

    const InfoPartners = dynamic(
        () => import("@/component/Info_partners/InfoPartners"),
    );

    const FooterSection = dynamic(
        () => import("@/component/footer_section/FooterSection"),
    );

    return (
        <div className="overflow-hidden">
            <HeadSection />
            <BackgroundEffects effects={lightm} />
            <DecorativeVector>
                <WhyShouldBeSection />
                <div className="z-10">
                    <BackgroundEffects effects={light2} />
                </div>

                <SponsorsSection />
                <div className="z-10">
                    <BackgroundEffects effects={lightm} />
                </div>

                <InfoPartners />
                <div className="z-10">
                    <BackgroundEffects effects={light2} />
                </div>
            </DecorativeVector>
            <FooterSection />
        </div>
    );
}
