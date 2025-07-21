"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Modal from "../modal/modal";
import Forma from "../Forma/Forma";
import { useState } from "react";
import { createPortal } from "react-dom";

interface ButtonTicketProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    type?: "submit";
}

function ButtonTicket({
    onClick,
    children = "Купити квиток",
    className,
    style,
    type,
}: ButtonTicketProps) {
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(e);
        } else {
            setOpen(true);
        }
    };

    return (
        <>
            <motion.button
                type={type === "submit" ? "submit" : "button"}
                className={twMerge(
                    "relative cursor-pointer flex-shrink-0 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400",
                    className,
                )}
                style={{
                    ...style,
                    width: "260px",
                    height: "60px",
                    filter: "drop-shadow(0 0 25px rgba(255, 215, 26, 0.4))",
                }}
                onClick={handleClick}
                whileHover={{
                    filter: "drop-shadow(0 0 45px rgba(255, 215, 26, 0.8))",
                    scale: 1.12,
                }}
                whileTap={{
                    scale: 0.98,
                    filter: "drop-shadow(0 0 15px rgba(255, 215, 26, 0.4))",
                }}
                animate={{
                    scale: 1,
                    filter: [
                        "drop-shadow(0 0 25px rgba(255, 215, 26, 0.4))",
                        "drop-shadow(0 0 30px rgba(255, 215, 26, 0.5))",
                        "drop-shadow(0 0 25px rgba(255, 215, 26, 0.4))",
                    ],
                }}
                transition={{
                    filter: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    scale: {
                        duration: 0.3,
                        ease: "easeIn",
                    },
                }}
            >
                {/* Decorative SVG Border */}
                <svg
                    width="260"
                    height="60"
                    viewBox="0 0 260 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full "
                >
                    <g filter="url(#filter0_ii_ticket)">
                        <path
                            d="M260 56.8644C258.238 56.8644 256.806 55.4285 256.806 53.6533C256.806 51.8781 258.234 50.4422 260 50.4422L260 47.3922C258.238 47.3922 256.806 45.9563 256.806 44.1811C256.806 42.4059 258.234 40.97 260 40.97L260 37.9199C258.238 37.9199 256.806 36.484 256.806 34.7088C256.806 32.9336 258.234 31.4977 260 31.4977L260 28.4477C258.238 28.4477 256.806 27.0118 256.806 25.2366C256.806 23.4614 258.234 22.0255 260 22.0255L260 18.9755C258.238 18.9755 256.806 17.5395 256.806 15.7643C256.806 13.9892 258.234 12.5532 260 12.5532L260 9.50321C258.238 9.50321 256.806 8.06729 256.806 6.2921C256.806 4.51692 258.238 3.10842 260 3.10842L260 0.00012207L0 0.000115511L-1.35868e-07 3.10841C1.76245 3.10841 3.19421 4.54432 3.19421 6.31951C3.19421 8.0947 1.76584 9.53062 -4.16592e-07 9.53062L-5.49913e-07 12.5807C1.76245 12.5807 3.19421 14.0166 3.19421 15.7918C3.19421 17.5669 1.76584 19.0029 -8.30636e-07 19.0029L-9.63958e-07 22.0529C1.76245 22.0529 3.19421 23.4888 3.19421 25.264C3.19421 27.0392 1.76584 28.4751 -1.24468e-06 28.4751L-1.378e-06 31.5251C1.76245 31.5251 3.19421 32.961 3.19421 34.7362C3.19421 36.5114 1.76584 37.9473 -1.65873e-06 37.9473L-1.79205e-06 40.9974C1.76245 40.9974 3.19421 42.4333 3.19421 44.2085C3.19421 45.9837 1.76584 47.4196 -2.07277e-06 47.4196L-2.20609e-06 50.4696C1.76245 50.4696 3.19421 51.9055 3.19421 53.6807C3.19421 55.4559 1.76584 56.8918 -2.48682e-06 56.8918L-2.62268e-06 60.0001L260 60.0001L260 56.8918L260 56.8644Z"
                            fill="white"
                        />
                        <path
                            d="M260 56.8644C258.238 56.8644 256.806 55.4285 256.806 53.6533C256.806 51.8781 258.234 50.4422 260 50.4422L260 47.3922C258.238 47.3922 256.806 45.9563 256.806 44.1811C256.806 42.4059 258.234 40.97 260 40.97L260 37.9199C258.238 37.9199 256.806 36.484 256.806 34.7088C256.806 32.9336 258.234 31.4977 260 31.4977L260 28.4477C258.238 28.4477 256.806 27.0118 256.806 25.2366C256.806 23.4614 258.234 22.0255 260 22.0255L260 18.9755C258.238 18.9755 256.806 17.5395 256.806 15.7643C256.806 13.9892 258.234 12.5532 260 12.5532L260 9.50321C258.238 9.50321 256.806 8.06729 256.806 6.2921C256.806 4.51692 258.238 3.10842 260 3.10842L260 0.00012207L0 0.000115511L-1.35868e-07 3.10841C1.76245 3.10841 3.19421 4.54432 3.19421 6.31951C3.19421 8.0947 1.76584 9.53062 -4.16592e-07 9.53062L-5.49913e-07 12.5807C1.76245 12.5807 3.19421 14.0166 3.19421 15.7918C3.19421 17.5669 1.76584 19.0029 -8.30636e-07 19.0029L-9.63958e-07 22.0529C1.76245 22.0529 3.19421 23.4888 3.19421 25.264C3.19421 27.0392 1.76584 28.4751 -1.24468e-06 28.4751L-1.378e-06 31.5251C1.76245 31.5251 3.19421 32.961 3.19421 34.7362C3.19421 36.5114 1.76584 37.9473 -1.65873e-06 37.9473L-1.79205e-06 40.9974C1.76245 40.9974 3.19421 42.4333 3.19421 44.2085C3.19421 45.9837 1.76584 47.4196 -2.07277e-06 47.4196L-2.20609e-06 50.4696C1.76245 50.4696 3.19421 51.9055 3.19421 53.6807C3.19421 55.4559 1.76584 56.8918 -2.48682e-06 56.8918L-2.62268e-06 60.0001L260 60.0001L260 56.8918L260 56.8644Z"
                            fill="#FFD71A"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_ii_ticket"
                            x="0"
                            y="0.00012207"
                            width="260"
                            height="60"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="17.85" />
                            <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                            />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                            />
                            <feBlend
                                mode="overlay"
                                in2="shape"
                                result="effect1_innerShadow_ticket"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="17.85" />
                            <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                            />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                            />
                            <feBlend
                                mode="overlay"
                                in2="effect1_innerShadow_ticket"
                                result="effect2_innerShadow_ticket"
                            />
                        </filter>
                    </defs>
                </svg>

                {/* Button Text */}
                <div
                    className="absolute inset-0 flex gap-2 items-center justify-center w-full uppercase tracking-[-0.4px] text-center leading-[120%] "
                    style={{
                        fontSize: "clamp(16px, 2vw, 20px)",
                        fontFamily:
                            "Mabry Pro, -apple-system, Roboto, Helvetica, sans-serif",
                        fontWeight: 700,
                        color: "#000",
                    }}
                >
                    {children}
                </div>
            </motion.button>

            {isOpen &&
                typeof document !== "undefined" &&
                createPortal(
                    <Modal isOpen={isOpen} setIsOpen={setOpen}>
                        <Forma />
                    </Modal>,
                    document.body,
                )}
        </>
    );
}

export default ButtonTicket;
