import Container from "@/Container";
import React, { memo } from "react";
import { EventFeatures } from "../EventFeature/EventFeatures";
import { InfoPartnersCard } from "@/const/Features";

const InfoPartners: React.FC = ({}) => {
    return (
        <Container className="mx-auto md:mt-[100px] z-50">
            <div className="z-50">
                <EventFeatures
                    title="Інфопартнери Traffic Days"
                    type="info_partners"
                    cards={InfoPartnersCard}
                />
            </div>
        </Container>
    );
};

export default memo(InfoPartners);
