import React, { memo } from "react";

export interface ContactCardProps {
    image: string;
    name: string;
    telegram: string;
    email: string;
    imageAlt?: string;
    className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
    image,
    name,
    telegram,
    email,
    imageAlt = "Contact person",
    className,
}) => {
    return (
        <div
            className={`max-w-[400px] md:w-[400px] w-full h-[135px] flex-shrink-0  ${className || ""}`}
        >
            {/* Card Background */}
            <div className="max-md:max-w-[400px] md:w-[400px] h-[135px] flex-shrink-0 rounded-[20px] bg-[#171717] relative flex items-center content-center justify-start p-2 gap-4">
                {/* Profile Image with Yellow Background */}
                <div className="w-[119px] h-auto flex-shrink-0 relative flex justify-center">
                    <div className="w-[119px] h-[119px] flex-shrink-0 rounded-[20px] bg-[#FFD71A] overflow-hidden">
                        <img
                            loading="lazy"
                            src={image}
                            alt={imageAlt}
                            className=" object-cover"
                            style={{
                                width: "auto",
                                height: "auto",
                                minWidth: "100%",
                                minHeight: "100%",
                            }}
                        />
                    </div>
                </div>

                {/* Contact Information */}
                <div className="max-w-[209px] w-full h-[69px] flex-shrink-0 flex flex-col gap-4 items-start content-center">
                    {/* Name and Role */}
                    <div
                        className=" leading-[100%] tracking-[-0.6px]"
                        style={{
                            color: "#FFF",
                            fontFamily:
                                "Mabry Pro, -apple-system, Roboto, Helvetica, sans-serif",
                            fontSize: "20px",
                            fontWeight: 700,
                            lineHeight: "20px",
                        }}
                    >
                        {name}
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* Telegram Contact */}
                        <a
                            className="flex items-center cursor-pointer hover:opacity-30 transition-opacity duration-300"
                            href={`https://t.me/${telegram.slice(1)}`}
                            target="_blank"
                        >
                            <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-[14px] flex-shrink-0 mr-[14px]"
                            >
                                <path
                                    d="M1.09991 6.02689C5.39488 4.05119 8.2589 2.74867 9.69184 2.11936C13.7834 0.322542 14.6335 0.0104195 15.1877 0.000109655C15.3095 -0.00215454 15.5821 0.0297344 15.7586 0.180969C15.9076 0.308663 15.9486 0.481165 15.9683 0.602231C15.9879 0.723305 16.0123 0.999105 15.9929 1.2146C15.7712 3.67431 14.8118 9.64338 14.3237 12.3983C14.1172 13.564 13.7106 13.9548 13.3169 13.9931C12.4613 14.0762 11.8116 13.3961 10.9829 12.8226C9.68628 11.9251 8.95372 11.3664 7.69503 10.4906C6.24044 9.47858 7.1834 8.92229 8.01236 8.01324C8.22935 7.77533 11.999 4.15509 12.072 3.82668C12.081 3.78561 12.0896 3.63251 12.0034 3.55166C11.9173 3.47081 11.7901 3.49846 11.6984 3.52045C11.5683 3.55162 9.49679 4.9972 5.4839 7.85734C4.89591 8.28357 4.36334 8.49132 3.88617 8.48043C3.36012 8.46842 2.34822 8.16638 1.59598 7.90824C0.673329 7.59152 -0.059979 7.42412 0.00387622 6.88633C0.0371351 6.60624 0.40248 6.31976 1.09991 6.02689Z"
                                    fill="#FFD71A"
                                />
                            </svg>
                            <div
                                className="text-[14px] md:text-[16px] leading-[100%] tracking-[-0.48px]"
                                style={{
                                    color: "#FFF",
                                    fontFamily:
                                        "Mabry Pro, -apple-system, Roboto, Helvetica, sans-serif",
                                    fontWeight: 400,
                                    lineHeight: "16px",
                                }}
                            >
                                {telegram}
                            </div>
                        </a>

                        {/* Email Contact */}
                        <a
                            className="flex items-center cursor-pointer hover:opacity-30 transition-opacity duration-300"
                            href={`mailto:${email}`}
                            target="_blank"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[14px] h-[14px] flex-shrink-0 mr-[16px]"
                            >
                                <path
                                    d="M0.169981 4.01508L6.64265 0.100525C6.86434 -0.0335542 7.14133 -0.0335048 7.36295 0.100652L13.8301 4.01506C13.9355 4.07885 14 4.19372 14 4.31767V13.2941C14 13.684 13.6866 14 13.3 14H0.7C0.313404 14 0 13.684 0 13.2941V4.31775C0 4.19375 0.064526 4.07886 0.169981 4.01508ZM11.4419 4.99586L7.04242 8.83511L2.55305 4.99153L1.64695 6.0677L7.05117 10.6945L12.3581 6.06336L11.4419 4.99586Z"
                                    fill="#FFD71A"
                                />
                            </svg>
                            <div
                                className="text-[14px] md:text-[16px] leading-[100%] tracking-[-0.48px]"
                                style={{
                                    color: "#FFF",
                                    fontFamily:
                                        "Mabry Pro, -apple-system, Roboto, Helvetica, sans-serif",
                                    fontWeight: 400,
                                    lineHeight: "16px",
                                }}
                            >
                                {email}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ContactCard);
