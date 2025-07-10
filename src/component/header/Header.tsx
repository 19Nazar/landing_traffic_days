"use client";
import Container from "@/Container";
import Image from "next/image";
import MabryText from "../typography/Mabry";
import { HeaderSponsor } from "@/const/headerSponsor";
import { memo } from "react";

function Header() {
    return (
        <header className="w-full mt-[10px] md:mt-[50px] px-3">
            <Container className="flex flex-row w-full justify-center md:justify-between mx-auto">
                <div className=" max-md:w-full flex max-md:justify-around gap-3.5 ">
                    {HeaderSponsor.map((src, index) => (
                        <div
                            key={`header_image_${index}`}
                            className="relative h-7 w-auto"
                        >
                            <Image
                                src={src.src}
                                alt={`header_image_${index}`}
                                height={28}
                                width={0}
                                priority
                                sizes="200px"
                                className="w-auto h-7 object-contain"
                            />
                        </div>
                    ))}
                </div>
                <MabryText className="font-normal text-[16px] max-md:hidden">
                    Про подію
                </MabryText>
            </Container>
        </header>
    );
}

export default memo(Header);
