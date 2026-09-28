"use client"
import Image from "next/image";
import Logo from "../public/images/logo.png";
import { topNavLinks } from "@/lib/landing-data";
import Link from "next/link";
import { Button } from "./Button";
import { Icon } from "./icon";
import phoneIcon from "../public/svg/phone-icon.svg";
import buyIcon from "../public/svg/buy-icon.svg";

export function NavBar({ }) {
    return (
        <header className="sticky top-[38px]  font-obritron z-50 bg-gradient-to-b from-[#59D0B5] to-[#CAEDE5] rounded-[60px] mx-[30px]">
            <div className="flex items-center justify-between px-[30px]">
                <Link href="/">
                    <Image className="w-20 h-20 p-4 " src={Logo} alt="obrive-technology logo " />
                </Link>

                <nav className="hidden items-center md:flex gap-4">
                    {topNavLinks.map((item) => (
                        <Link key={item.href || item.label} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-1">
                    <Button className="px-2" children={<>GET APP</>} href="/app" onClick={() => { }} />
                    <Icon variant="header" size="md" href="/phonecall"><Image className="pt-1.5 pl-1" src={phoneIcon} alt="phoneIcon"></Image></Icon>
                    <Icon variant="header" size="md" href="/buy"><Image className="" src={buyIcon} alt="buyIcon"></Image></Icon>
                </div>
            </div>
        </header>
    );
}