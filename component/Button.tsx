import { cn } from "@/lib/utils";
import { isHmrRefresh } from "next/dist/server/app-render/work-unit-async-storage.external";

type ButtonVariant = "primary" | "secondary" | "submit";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
    children: React.ReactNode,
    variant?: ButtonVariant,
    size?: ButtonSize,
    className?: string,
    href: string,
    onClick?: () => void,
    "aria-label"?: string
}

const variantStyles: Record<ButtonVariant, string> = {
    "primary": "bg-gradient-to-r from-[#1A817F] to-[#59D0B5] text-white",
    "secondary": "bg-white text-[#1A817F]",
    "submit": "bg-white text-black"
}

const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-sm font-medium",
    md: "h-11 px-10 text-sm font-medium",
    lg: "h-14 px-8 text-base font-medium"
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    className,
    onClick,
    "aria-label": ariaLabel
}: ButtonProps) {
    const styles = cn(className, "rounded-[40px] items-center justify-center focus-visible:outline-none cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],

    )
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={styles}
        >
            {children}
        </button>
    )
}
