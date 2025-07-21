import React, { memo } from "react";
import Image from "next/image";
import FooterMain from "./FooterMain";
import FooterContactForPartner from "./FooterContactForPartner";
import FooterFooter from "./FooterFooter";

const FooterSection: React.FC = ({}) => {
    return (
        <section
            id="footerSection"
            className="w-full flex-col items-center md:mt-20 -z-10 bg-[#080706]"
        >
            <div className="w-full h-full relative p-0 overflow-hidden">
                <div className="absolute inset-0 h-[50vh] bg-gradient-to-b from-transparent to-[#080706] z-0" />
                <div className="absolute inset-0 min-h-[708px] object-top overflow-hidden z-0">
                    <Image
                        src="/image/footer/footer_main.png"
                        alt="main_head_img"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                <div className="absolute bottom-0 inset-x-0 h-[50vh] bg-gradient-to-b from-transparent to-black z-0" />

                <div className="relative z-10 w-full h-auto flex flex-col mx-auto gap-16 pb-8">
                    <div className="z-10"></div>
                    <FooterMain />
                    <div className="flex flex-col gap-10 md:gap-16">
                        <div className="w-full flex justify-center">
                            <FooterContactForPartner />
                        </div>
                        <div className="w-full flex justify-center">
                            <FooterFooter />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(FooterSection);
