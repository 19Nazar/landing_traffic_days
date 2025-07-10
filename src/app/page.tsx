import { BackgroundEffects } from "@/component/background_effects/BackgroundEffects";
import { BlurredGlowProps } from "@/component/blur_effect/BlurEffect";
import { DecorativeVector } from "@/component/decorative-vector/DecorativeVector";
import { EventFeatures } from "@/component/EventFeature/EventFeatures";
import HeadSection from "@/component/head_section/HeadSection";
import Container from "@/Container";

export default function Home() {
    const light: BlurredGlowProps = {
        width: 584,
        height: 584,
        color: "#FFB41E",
        blur: 285.95,
        right: -369, // Less negative positioning
    };
    const light2: BlurredGlowProps = {
        width: 571,
        height: 571,
        color: "#C8101D",
        blur: 285.95,
        left: -369, // Less negative positioning
    };
    return (
        <div className="overflow-hidden">
            <HeadSection />
            <div className="z-10">
                <BackgroundEffects effects={light} />
            </div>
            <DecorativeVector>
                <Container className="mx-auto">
                    <div className="z-50">
                        <EventFeatures />
                    </div>
                </Container>
                <div className="z-10">
                    <BackgroundEffects effects={light2} />
                </div>
            </DecorativeVector>
        </div>
    );
}
