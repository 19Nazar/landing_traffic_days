"use client";

import { FormDataT, FormErrors } from "@/types";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import ButtonTicket from "../buttton/Buttons";
import submitForm from "@/service/submiit-form";

export default function ApplicationForm() {
    const [formData, setFormData] = useState<FormDataT>({
        name: "",
        phone: "",
        telegram: "",
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [errors, setErrors] = useState<FormErrors>({});
    const [phoneFocused, setPhoneFocused] = useState(false);

    const [gradient, setGradient] = useState("");

    useEffect(() => {
        const isDesktop = window.innerWidth >= 768;
        setGradient(
            isDesktop
                ? "linear-gradient(175.71deg, #FFFFFF 3.49%, #000000 74.99%)"
                : "linear-gradient(180deg, #FFFFFF 0%, #000000 150%)",
        );
    }, []);

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case "phone":
                const phoneRegex =
                    /^\+38\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
                if (!phoneRegex.test(value) && value.length > 0) {
                    return "Неправильний формат. Спробуй ще раз";
                }
                break;
            case "name":
                if (value.trim().length < 2 && value.length > 0) {
                    return "Будь ласка, введіть своє ім'я (мінімум 2 символи)";
                }
                break;
        }
        return undefined;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        if (name === "phone") {
            handlePhoneChange(value);
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
            const error = validateField(name, value);
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const handlePhoneChange = (value: string) => {
        let formattedValue = value;

        // Если поле пустое и начинаем вводить - добавляем +380
        if (formData.phone === "" && value.length === 1 && value !== "+") {
            formattedValue = "+380" + value;
        }
        // Если вводим не цифру в начале - добавляем +380
        else if (
            formData.phone === "" &&
            value.length > 0 &&
            !value.startsWith("+380")
        ) {
            // Убираем все нецифровые символы из начала
            const cleanValue = value.replace(/\D/g, "");
            if (cleanValue.length > 0) {
                formattedValue = "+380" + cleanValue;
            }
        }
        // Если удаляем символы и остается только +380, очищаем поле
        else if (value === "+380") {
            formattedValue = "";
        }
        // Если пытаемся удалить часть +380, но оставляем другие символы
        else if (
            value.startsWith("+38") &&
            value.length > 3 &&
            !value.startsWith("+380")
        ) {
            formattedValue = "+380" + value.slice(3);
        }
        // Если удаляем +380 но есть другие символы, оставляем только цифры после
        else if (
            !value.startsWith("+380") &&
            formData.phone.startsWith("+380")
        ) {
            const cleanValue = value.replace(/\D/g, "");
            formattedValue = cleanValue.length > 0 ? "+380" + cleanValue : "";
        }

        setFormData((prev) => ({ ...prev, phone: formattedValue }));

        const error = validateField("phone", formattedValue);
        setErrors((prev) => ({ ...prev, phone: error }));
    };

    const handlePhoneFocus = () => {
        setPhoneFocused(true);
    };

    const handlePhoneBlur = () => {
        setPhoneFocused(false);
    };

    const getPhonePlaceholder = () => {
        if (phoneFocused || formData.phone.length > 0) {
            return "";
        }
        return "Ваш номер телефону";
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();

        const newErrors: FormErrors = {};
        let hasErrors = false;

        if (!formData.name.trim()) {
            newErrors.name = "Будь ласка, введіть своє ім'я";
            hasErrors = true;
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Будь ласка, введіть номер телефону";
            hasErrors = true;
        }

        const phoneFormatError = validateField("phone", formData.phone);
        if (phoneFormatError) {
            newErrors.phone = phoneFormatError;
            hasErrors = true;
        }

        setErrors(newErrors);

        if (hasErrors) {
            console.log("Form has validation errors:", newErrors);
            return;
        }

        try {
            const response = await submitForm({
                name: formData.name,
                tell: formData.phone,
                telegram: formData.telegram,
            });

            window.location.assign(
                "https://secure.wayforpay.com/payment/s738df481d5a6",
            );
            setFormData({
                name: "",
                phone: "",
                telegram: "",
            });
        } catch (error) {
            // error instanceof Error ? error.message : "Unkown error"
            console.error("Submission error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full h-full overflow-hidden relative">
            <div
                className="absolute -bottom-9 md:-bottom-15 text-[110px] sm:text-[170px] md:text-[210px] lg:text-[250px] leading-[90%] uppercase text-center -tracking-[0.02rem] font-[Druk_Cyr] bg-gradient-to-b bg-clip-text text-transparent opacity-10 select-none pointer-events-none md:whitespace-nowrap"
                style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundImage: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Traffic Days
            </div>
            <div className="w-full max-w-[837px] mx-auto min-h-[530px] h-full p-6 flex flex-col gap-6 relative overflow-hidden justify-center">
                {/* Header */}
                <div className="flex-col w-full gap-2 flex text-center max-md:hidden">
                    <h2 className="uppercase font-[Halvar_Breitschrift] text-[50px] font-bold leading-[100%] w-full">
                        <span className="text-[#FFD71A] block">
                            заповніть анкету
                        </span>
                        <span className="block">для отримання квитків</span>
                    </h2>
                </div>

                <div className="flex-col w-full gap-2 flex text-center md:hidden">
                    <h2 className="uppercase font-[Druk_Cyr] text-[40px] font-bold leading-[100%] w-full">
                        <span className="text-[#FFD71A] block">
                            заповніть анкету
                        </span>
                        <span className="block">для отримання квитків</span>
                    </h2>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full max-w-[748px]"
                >
                    {/* Name Field */}
                    <div className="flex-col justify-start items-start gap-2 md:gap-3 flex w-full">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ваше імʼя"
                            required
                            className={twMerge(
                                `self-stretch h-12 md:h-14 xl:h-[60px] p-4 md:p-5 justify-center items-center gap-2.5 inline-flex text-[#5F5F5F] text-[16px] font-normal font-[Mabry_Pro] leading-[120%] focus:outline-none text-center`,
                                errors.name
                                    ? "border-red-600 border"
                                    : "border-b-[#5F5F5F] focus:border-[#5F5F5F] border-b focus:border ",
                            )}
                        />
                        {errors.name && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div className="flex-col justify-start items-start gap-2 md:gap-3 flex w-full">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={handlePhoneFocus}
                            onBlur={handlePhoneBlur}
                            placeholder={getPhonePlaceholder()}
                            required
                            className={twMerge(
                                `self-stretch h-12 md:h-14 xl:h-[60px] p-4 md:p-5 justify-center items-center gap-2.5 inline-flex text-[#5F5F5F] text-[16px] font-normal font-[Mabry_Pro] leading-[120%] focus:outline-none text-center`,
                                errors.phone
                                    ? "border-red-600 border"
                                    : "border-b-[#5F5F5F] focus:border-[#5F5F5F] border-b focus:border",
                            )}
                        />
                        {errors.phone && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Telegram Field */}
                    <div className="flex-col justify-start items-start gap-2 md:gap-3 flex w-full">
                        <input
                            type="text"
                            id="telegram"
                            name="telegram"
                            value={formData.telegram}
                            onChange={handleChange}
                            placeholder="Ваш Telegram"
                            className={twMerge(
                                `self-stretch h-12 md:h-14 xl:h-[60px] p-4 md:p-5 justify-center items-center gap-2.5 inline-flex text-[#5F5F5F] text-[16px] font-normal font-[Mabry_Pro] leading-[120%] focus:outline-none text-center`,
                                errors.telegram
                                    ? "border-red-600 border"
                                    : "border-b-[#5F5F5F] focus:border-[#5F5F5F] border-b focus:border ",
                            )}
                        />
                        {errors.telegram && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.telegram}
                            </p>
                        )}
                    </div>
                    <div className="mx-auto mt-10">
                        {/* Submit Button */}
                        <ButtonTicket
                            type="submit"
                            onClick={() => {}}
                            children={
                                isLoading ? "Завантаження..." : "Купити квиток"
                            }
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
