import React, { memo } from "react";
import { PartnershipTitle } from "./PartnershipTitle";
import ContactCard from "./ContactCard";

export interface FooterContactForPartnerProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

const FooterContactForPartner: React.FC<FooterContactForPartnerProps> = ({
    title,
    subtitle,
    className,
}) => {
    const contacts = [
        {
            image: "/image/footer/contact/Nastya.png",
            name: "Настя, PRD",
            role: "PRD",
            telegram: "@pronepartners",
            email: "pronepartners@gmail.com",
        },
        {
            image: "/image/footer/contact/Andru.png",
            name: "Андрій, CEO",
            role: "CEO",
            telegram: "@andrii_arbitrageup",
            email: "njlskv@gmail.com",
        },
    ];

    return (
        <div className={`w-full max-w-[1029px] mx-auto ${className || ""}`}>
            <div className="relative flex flex-col gap-8 max-lg:hidden w-[1029px] h-[258px] mx-auto">
                {/* Title Section */}
                <div className="w-[1029px]">
                    <PartnershipTitle title={title} subtitle={subtitle} />
                </div>

                {/* Contact Cards */}
                <div className="w-[820px] h-[135px] flex justify-items-center mx-auto">
                    <div className="flex justify-items-center gap-[20px]">
                        {contacts.map((contact, index) => (
                            <ContactCard
                                key={index}
                                image={contact.image}
                                name={contact.name}
                                telegram={contact.telegram}
                                email={contact.email}
                                imageAlt={`${contact.name} profile`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Responsive version for smaller screens */}
            <div className="block lg:hidden px-4 py-8">
                <PartnershipTitle
                    title={title}
                    subtitle={subtitle}
                    className="mb-8"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                    {contacts.map((contact, index) => (
                        <ContactCard
                            key={index}
                            image={contact.image}
                            name={contact.name}
                            telegram={contact.telegram}
                            email={contact.email}
                            imageAlt={`${contact.name} profile`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(FooterContactForPartner);
