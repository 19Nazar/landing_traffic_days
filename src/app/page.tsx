"use client";
import { BackgroundEffects } from "@/component/background_effects/BackgroundEffects";
import { BlurredGlowProps } from "@/component/blur_effect/BlurEffect";
import { DecorativeVector } from "@/component/decorative-vector/DecorativeVector";
import HeadSection from "@/component/head_section/HeadSection";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

const SectionSkeleton = ({ height = "h-40" }) => (
    <div className={`animate-pulse bg-gray-100 ${height} rounded mb-4`} />
);

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
        <div className="overflow-hidden z-5">
            <HeadSection />
            <BackgroundEffects effects={lightm} />

            <Suspense fallback={<SectionSkeleton height="h-32" />}>
                <DecorativeVector>
                    <Suspense fallback={<SectionSkeleton height="h-32" />}>
                        <WhyShouldBeSection />
                    </Suspense>
                    <div className="z-10">
                        <BackgroundEffects effects={light2} />
                    </div>
                    <Suspense fallback={<SectionSkeleton height="h-32" />}>
                        <SponsorsSection />
                    </Suspense>
                    <div className="z-10">
                        <BackgroundEffects effects={lightm} />
                    </div>
                    <Suspense fallback={<SectionSkeleton height="h-32" />}>
                        <InfoPartners />
                    </Suspense>
                </DecorativeVector>
            </Suspense>
            <div className="z-10">
                <BackgroundEffects effects={lightm} />
            </div>
            <div className="z-10">
                <BackgroundEffects effects={light2} />
            </div>
            <Suspense fallback={<SectionSkeleton height="h-32" />}>
                <FooterSection />
            </Suspense>
        </div>
    );
}
