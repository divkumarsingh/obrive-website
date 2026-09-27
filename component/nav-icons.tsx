

import { cn } from "@/lib/utils";
import React from "react";

type IconProps = {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
    disabled?: boolean;
    size: sizeVariants;
    className?: string
}

type sizeVariants = "sm" | "md" | "lg"



const sizeStyles: Record<sizeVariants, string> = {
    sm: "h-1 w-1 text-sm",
    md: "h-10 w-10 text-sm",
    lg: "h-3 w-3 text-sm"
}

export function NavIcon({
    children,
    className,
    href,
    onClick,
    disabled = false,
    size = "md"
}: IconProps) {
    const style = cn(className, sizeStyles[size], "bg-[##B5E2D1] rounded-[60px] p-1 items-center ")
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
