import Container from "@/Container";
import React, { memo } from "react";
import { EventFeatures } from "../EventFeature/EventFeatures";
import { Features } from "@/const/Features";

const WhyShouldBeSection: React.FC = ({}) => {
    return (
        <Container className="mx-auto">
            <div className="z-50">
                <EventFeatures cards={Features} />
            </div>
        </Container>
    );
};

export default memo(WhyShouldBeSection);
