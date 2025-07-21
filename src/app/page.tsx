"use client";
import {
    backgroundEffectPresets,
    BackgroundEffects,
} from "@/component/background_effects/BackgroundEffects";
import { DecorativeVector } from "@/component/decorative-vector/DecorativeVector";
import Forma from "@/component/Forma/Forma";
import HeadSection from "@/component/head_section/HeadSection";
import Modal from "@/component/modal/modal";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

const SectionSkeleton = ({ height = "h-40" }) => (
    <div className={`animate-pulse bg-gray-100 ${height} rounded mb-4`} />
);

export default function Home() {

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
            <BackgroundEffects effects={backgroundEffectPresets.yellowGlow} />

            <Suspense fallback={<SectionSkeleton height="h-32" />}>
                <DecorativeVector className="-mt-15 min-[340px]:max-[358px]:-mt-20 min-[358px]:max-[415px]:-mt-30 min-[415px]:max-[517px]:-mt-50 min-[517px]:max-[639px]:-mt-80 sm:-mt-100 md:mt-15 max-[1500]:mt-15 2xl:-mt-20">
                    <Suspense fallback={<SectionSkeleton height="h-32" />}>
                        <WhyShouldBeSection />
                    </Suspense>
                    <div className="z-10">
                        <BackgroundEffects
                            effects={backgroundEffectPresets.redGlow}
                        />
                    </div>
                    <Suspense fallback={<SectionSkeleton height="h-32" />}>
                        <SponsorsSection />
                    </Suspense>
                    <div className="md:hidden z-10">
                        <BackgroundEffects
                            effects={backgroundEffectPresets.yellowGlow}
                        />
                    </div>
                    <Suspense fallback={<SectionSkeleton height="h-32" />}>
                        <InfoPartners />
                    </Suspense>

                    <div className="z-10">
                        <BackgroundEffects
                            effects={backgroundEffectPresets.redGlow}
                        />
                    </div>
                    <div className=" z-10">
                        <BackgroundEffects
                            effects={backgroundEffectPresets.yellowGlow}
                        />
                    </div>
                    <Suspense fallback={<SectionSkeleton height="h-32" />}>
                        <FooterSection />
                    </Suspense>
                </DecorativeVector>
            </Suspense>
            
        </div>
    );
}
