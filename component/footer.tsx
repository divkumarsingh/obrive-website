import { Container } from "./container";
import Image from "next/image";
import logoSvg from "../public/svg/OBPARK-footer-logo.svg";
import { Icon } from "./icon";
import phoneIcon from "../public/svg/phone-icon.svg";
import { footerColumns, NavButtomIcons } from "@/lib/landing-data";
import Link from "next/link";
import NewsletterForm from "./newsletterform";
export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#ACE3CA] to-[#1C8182] pt-20 pb-10 px-30 rounded-t-[60px] text-teal-950 mt-32">
            <div className="max-w-7xl mx-auto">
                <div className=" flex  justify-between items-center gap-x-80 ">
                    <div className="h-[49px] w-[313px]">
                        <Image
                            src={logoSvg}
                            alt="Company Logo"
                            priority
                        />
                    </div>
                    <div className="flex gap-1">
                        {NavButtomIcons.map((item) => (
                            <Icon
                                key={item.title || item.href}
                                variant="footer"
                                size="md"
                                href={item.href}
                                id={item.title}
                            >
                                <Image
                                    className="pt-1.5 pl-1"
                                    src={item.src}
                                    alt={item.title || "Icon"}
                                    width={24}
                                    height={24}
                                />
                            </Icon>
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-8 border-b border-white/30 w-full" />
            <div className="my-20 gap-30 p-2 flex">

                {footerColumns.map((item) => (
                    <div key={item.title} className="">
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <ul className="space-y-2  ">
                            {(item.links ?? []).map((link) => (
                                <li className="flex-row text-white" key={link.label}>
                                    <Link href={link.href} className="text-sm ">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className=" text-white font-bold">
                    <h2>Subscribe to our newsletter and claim your 15%  discount today</h2>
                    <NewsletterForm />
                </div>


            </div>
            <div className=" gap-0.5">
                <h2 className="text-white text-muted-foreground">Privacy Policy</h2>
                <h2 className="text-white text-muted-foreground">Legal & Compliance</h2>
                <h2 className="text-white text-muted-foreground">Cookie Policy</h2>

                <h2 className="text-white py-1">&copy; OBRIVE All right reserved.</h2>
            </div>
        </footer>
    )
}