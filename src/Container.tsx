import { twMerge } from "tailwind-merge";

export default function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={twMerge(
                "flex flex-col px-0 max-w-[1200px] w-full overflow-hidden",
                className,
            )}
        >
            {children}
        </div>
    );
}
