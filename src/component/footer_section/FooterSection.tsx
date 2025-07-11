import React, { memo } from "react";
import Image from "next/image";
import FooterMain from "./FooterMain";
import FooterContactForPartner from "./FooterContactForPartner";
import FooterFooter from "./FooterFooter";

const FooterSection: React.FC = ({}) => {
    return (
        <section
            id="footerSection"
            className="w-full flex-col items-center md:mt-10 -z-10"
        >
            <div className="w-full h-full relative p-0 overflow-x-hidden">
                <div className="absolute inset-0 h-full max-h-[1282px] min-h-[708px] object-top overflow-hidden">
                    <Image
                        src="/image/footer/footer_main.png"
                        alt="main_head_img"
                        width={1920}
                        height={800}
                        className="w-full h-full object-cover -z-10"
                    />
                </div>

                {/* Контент поверх изображения */}
                <div className="relative z-10 w-full h-auto flex flex-col mx-auto gap-70 pb-8">
                    <FooterMain />
                    <div className="flex flex-col gap-10 md:gap-30">
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
