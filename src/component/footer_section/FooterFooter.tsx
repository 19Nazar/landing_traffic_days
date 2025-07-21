import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ButtonTicket from "../buttton/Buttons";

interface FooterFooterProps {
    className?: string;
}

const FooterFooter = ({ className = "" }: FooterFooterProps) => {
    return (
        <footer
            className={twMerge(
                `text-white max-w-[1205px] w-full mx-auto max-md:px-4`,
                className,
            )}
        >
            {/* Top Section */}
            <div className="flex lg:items-start lg:justify-between w-full mb-8 lg:mb-12">
                {/* Left Side */}
                <div className="flex flex-col lg:flex-row w-full lg:gap-15 mb-8 lg:mb-0">
                    {/* Logo */}
                    <div className="mb-6 lg:mb-0 md:p-2">
                        <Image
                            src="/logo_white.png"
                            height={72}
                            width={72}
                            alt="ArbitrageUp Logo"
                            className="w-[72px] h-[52px]"
                        />
                    </div>

                    {/* Partnership */}
                    <div className=" max-md:hidden flex flex-col gap-4 mb-8 lg:mb-12 box-border">
                        <h3 className="text-white font-bold text-[13px] md:text-[17px] font-mabry p-0 m-0 ">
                            Співпраця
                        </h3>
                        {/* Phone Number */}
                        <div className="text-white font-bold text-[clamp(2rem,8vw,4.5rem)] font-mabry leading-none lg:text-[65px] md:-tracking-[1px]">
                            +38 (073) 37 26 489
                        </div>
                    </div>
                </div>

                {/* Right Side - Social Media */}
                <div className="flex flex-col gap-[24px] md:gap-[30px]">
                    <h3 className="text-white font-bold text-[13px] md:text-[17px] font-mabry">
                        Стеж за нами в соц. мережах
                    </h3>
                    <div className="flex items-center gap-4 lg:gap-8">
                        {/* YouTube */}
                        <a
                            href="https://www.youtube.com/@arbitrageup/featured"
                            target="_blank"
                            className="block w-10 h-10 lg:w-[61px] lg:h-[61px] hover:opacity-80 transition-opacity"
                        >
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 61 62"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_2565_594)">
                                    <path
                                        d="M26.2349 36.285L34.684 31.383L26.2349 26.457V36.285Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M30.4618 0.90918C24.437 0.90918 18.5476 2.69573 13.5381 6.04292C8.52873 9.3901 4.62436 14.1476 2.31878 19.7138C0.0131985 25.2799 -0.590047 31.4048 0.585329 37.3138C1.7607 43.2228 4.66191 48.6506 8.92207 52.9107C13.1822 57.1709 18.61 60.0721 24.519 61.2475C30.428 62.4228 36.5529 61.8196 42.119 59.514C47.6852 57.2084 52.4427 53.3041 55.7899 48.2946C59.1371 43.2852 60.9236 37.3957 60.9236 31.371C60.9236 23.292 57.7142 15.5439 52.0016 9.83123C46.2889 4.11854 38.5408 0.90918 30.4618 0.90918ZM46.4943 36.7619C46.4949 37.5586 46.3384 38.3476 46.0339 39.0839C45.7293 39.8201 45.2827 40.4891 44.7196 41.0526C44.1564 41.6162 43.4877 42.0632 42.7517 42.3682C42.0156 42.6732 41.2267 42.8302 40.43 42.8302H20.4936C19.6969 42.8302 18.908 42.6732 18.172 42.3682C17.4359 42.0632 16.7672 41.6162 16.2041 41.0526C15.6409 40.4891 15.1943 39.8201 14.8898 39.0839C14.5852 38.3476 14.4288 37.5586 14.4293 36.7619V25.98C14.4288 25.1833 14.5852 24.3943 14.8898 23.6581C15.1943 22.9219 15.6409 22.2529 16.2041 21.6893C16.7672 21.1258 17.4359 20.6787 18.172 20.3737C18.908 20.0687 19.6969 19.9117 20.4936 19.9117H40.43C41.2267 19.9117 42.0156 20.0687 42.7517 20.3737C43.4877 20.6787 44.1564 21.1258 44.7196 21.6893C45.2827 22.2529 45.7293 22.9219 46.0339 23.6581C46.3384 24.3943 46.4949 25.1833 46.4943 25.98V36.7619Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2565_594">
                                        <rect
                                            width="60.9236"
                                            height="60.9236"
                                            fill="white"
                                            transform="translate(0 0.90918)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/arbitrage.up/"
                            target="_blank"
                            className="block w-10 h-10 lg:w-[61px] lg:h-[61px] hover:opacity-80 transition-opacity"
                        >
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 62 62"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_2565_589)">
                                    <ellipse
                                        cx="31.1828"
                                        cy="30.314"
                                        rx="25.1448"
                                        ry="24.9006"
                                        fill="black"
                                    />
                                    <path
                                        d="M31.1767 36.8892C34.6437 36.8892 37.4544 34.0786 37.4544 30.6115C37.4544 27.1444 34.6437 24.3337 31.1767 24.3337C27.7096 24.3337 24.8989 27.1444 24.8989 30.6115C24.8989 34.0786 27.7096 36.8892 31.1767 36.8892Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M31.1796 0.717529C14.6696 0.717529 1.28564 14.1015 1.28564 30.6115C1.28564 47.1214 14.6696 60.5054 31.1796 60.5054C47.6895 60.5054 61.0735 47.1214 61.0735 30.6115C61.0735 14.1015 47.6895 0.717529 31.1796 0.717529ZM49.649 38.2093C49.5055 41.0514 48.7069 43.854 46.6357 45.9032C44.5444 47.9718 41.7285 48.7426 38.8591 48.8847H23.5002C20.6304 48.7426 17.8148 47.9723 15.7236 45.9032C13.6523 43.854 12.8538 41.0514 12.7103 38.2093V23.0136C12.8538 20.1715 13.6524 17.3689 15.7236 15.3196C17.8148 13.251 20.6307 12.4802 23.5002 12.3383H38.859C41.7288 12.4802 44.5443 13.2506 46.6356 15.3196C48.7069 17.3689 49.5054 20.1715 49.6489 23.0136L49.649 38.2093Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M38.6641 15.8008C34.9231 15.6982 27.4352 15.6982 23.6942 15.8008C21.7474 15.8543 19.5404 16.3389 18.1533 17.8205C16.7119 19.3605 16.1672 21.2211 16.112 23.3025C16.0149 26.9558 16.112 37.9209 16.112 37.9209C16.1753 40.0021 16.7119 41.8629 18.1533 43.403C19.5404 44.885 21.7474 45.3691 23.6942 45.4226C27.4352 45.5252 34.9231 45.5252 38.6641 45.4226C40.6109 45.3691 42.8179 44.8845 44.205 43.403C45.6464 41.8629 46.191 40.0023 46.2463 37.9209V23.3025C46.191 21.2211 45.6464 19.3605 44.205 17.8205C42.8174 16.3384 40.6104 15.8543 38.6641 15.8008V15.8008ZM31.1787 40.3422C29.2542 40.3422 27.3729 39.7715 25.7727 38.7023C24.1725 37.6331 22.9254 36.1134 22.1889 34.3354C21.4524 32.5574 21.2597 30.6009 21.6352 28.7134C22.0106 26.8259 22.9373 25.0921 24.2982 23.7312C25.659 22.3704 27.3928 21.4437 29.2803 21.0682C31.1679 20.6928 33.1243 20.8854 34.9023 21.6219C36.6804 22.3584 38.2001 23.6056 39.2692 25.2057C40.3384 26.8059 40.9091 28.6872 40.9091 30.6117C40.9091 33.1924 39.884 35.6674 38.0591 37.4922C36.2343 39.317 33.7593 40.3422 31.1787 40.3422V40.3422ZM40.9505 22.8897C40.5656 22.8897 40.1894 22.7754 39.8694 22.5615C39.5495 22.3476 39.3001 22.0437 39.1529 21.6881C39.0057 21.3325 38.9672 20.9412 39.0423 20.5637C39.1175 20.1862 39.3029 19.8395 39.5751 19.5674C39.8472 19.2953 40.194 19.11 40.5715 19.0349C40.949 18.9599 41.3403 18.9984 41.6958 19.1457C42.0514 19.2931 42.3553 19.5425 42.5691 19.8625C42.783 20.1825 42.8971 20.5588 42.8971 20.9437C42.8971 21.1993 42.8467 21.4524 42.7489 21.6885C42.6511 21.9246 42.5077 22.1392 42.3269 22.3199C42.1461 22.5006 41.9316 22.644 41.6954 22.7417C41.4592 22.8395 41.2061 22.8898 40.9505 22.8897Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2565_589">
                                        <rect
                                            width="61.2228"
                                            height="61.2228"
                                            fill="white"
                                            transform="translate(0.570312)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        {/* Telegram */}
                        <a
                            href="https://t.me/+vfQ6ahB0kJQzMjNi"
                            target="_blank"
                            className="block w-10 h-10 lg:w-[61px] lg:h-[61px] hover:opacity-80 transition-opacity"
                        >
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 62 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_2565_586)">
                                    <ellipse
                                        cx="31.0418"
                                        cy="30.3135"
                                        rx="22.5799"
                                        ry="22.3607"
                                        fill="black"
                                    />
                                    <path
                                        d="M31.0455 60.6284C47.9557 60.6284 61.6568 47.0602 61.6568 30.3142C61.6568 13.5681 47.9557 0 31.0455 0C14.1352 0 0.434082 13.5681 0.434082 30.3142C0.434082 47.0602 14.1352 60.6284 31.0455 60.6284ZM14.4413 29.6574L43.9558 18.3881C45.3257 17.898 46.5221 18.719 46.0782 20.7703L46.0807 20.7677L41.0554 44.2132C40.6829 45.8755 39.6855 46.2796 38.2902 45.4965L30.6373 39.9111L26.9461 43.4326C26.5379 43.8368 26.1936 44.1779 25.4028 44.1779L25.9461 36.4654L40.1294 23.7764C40.7467 23.2383 39.9916 22.9352 39.1779 23.4708L21.6503 34.399L14.0944 32.0648C12.4541 31.5495 12.4184 30.4405 14.4413 29.6574V29.6574Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2565_586">
                                        <rect
                                            width="61.2228"
                                            height="60.6284"
                                            fill="white"
                                            transform="translate(0.4375)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="md:hidden flex flex-col gap-4 mb-8 lg:mb-12 box-border">
                <h3 className="text-white font-bold text-lg font-mabry p-0 m-0">
                    Співпраця
                </h3>
                {/* Phone Number */}
                <div className="text-white font-bold text-[clamp(2rem,8vw,4.5rem)] font-mabry leading-none lg:text-[65px] md:-tracking-[1px]">
                    +38 (073) 37 26 489
                </div>
            </div>

            {/* Separator Line */}
            <div className="w-full h-px bg-[#3E3E3E] mb-6" />

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="text-[#3E3E3E] text-sm lg:text-lg font-mabry order-2 lg:order-1">
                    © All Rights Reserved 2025 Arbitrage Up
                </div>

                <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 order-1 lg:order-2">
                    <a
                        href="https://arbitrageup.net/oferta"
                        target="_blank"
                        className="flex items-center gap-2 text-[#3E3E3E] text-sm lg:text-lg font-mabry hover:text-gray-300 transition-colors"
                    >
                        Договір публічної оферти
                        <span className="rotate-[-45deg] text-[#3E3E3E]">
                            →
                        </span>
                    </a>
                    <a
                        href="https://arbitrageup.net/policy"
                        target="_blank"
                        className="flex items-center gap-2 text-[#3E3E3E] text-sm lg:text-lg font-mabry hover:text-gray-300 transition-colors"
                    >
                        Політика конфіденційності
                        <span className="rotate-[-45deg] text-[#3E3E3E]">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default FooterFooter;
