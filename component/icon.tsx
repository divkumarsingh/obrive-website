

import { cn } from "@/lib/utils";
import React from "react";

type IconProps = {
    variant: IconVariant
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
    disabled?: boolean;
    size: sizeVariants;
    className?: string;
    id?: string;
}

type sizeVariants = "sm" | "md" | "lg"

type IconVariant = "header" | "footer";

const VariantStyles: Record<IconVariant, string> = {
    header: "bg-white",
    footer: "bg-[#B5E2D1]"
}

const sizeStyles: Record<sizeVariants, string> = {
    sm: "h-1 w-1 text-sm",
    md: "h-10 w-10 text-sm",
    lg: "h-3 w-3 text-sm"
}

export function Icon({
    children,
    variant,
    className,
    href,
    onClick,
    disabled = false,
    size = "md",
    id
}: IconProps) {
    const style = cn(className, sizeStyles[size], VariantStyles[variant], "rounded-[60px] p-1 items-center ")
    return (
        <span
            className={style}>
            <a
                href={href}>
                {children}
            </a>

        </span>
    )
}
