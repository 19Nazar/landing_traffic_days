import type { ReactNode } from "react";

const Modal = ({
    isOpen,
    setIsOpen,
    children,
}: {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    children: ReactNode;
}) => {
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            {/* Main modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 flex justify-center items-center w-full h-full"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        backdropFilter: "blur(3px)",
                        zIndex: "9999",
                    }}
                    onClick={closeModal}
                >
                    <div
                        className="relative p-4 w-full max-w-[1200px] max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal content */}
                        <div className="relative bg-black flex rounded-[20px] shadow-lg overflow-hidden">
                            <button
                                className="absolute top-4 right-4 cursor-pointer hover:opacity-70 transition-opacity duration-300 z-10"
                                onClick={closeModal}
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 1L1.375 13M1 1L12.625 13"
                                        stroke="white"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
