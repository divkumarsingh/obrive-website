import { Icons, NavGroup, NavLink, NavSubsection } from "./types";
import facebookSvg from "../public/svg/facebook.svg";
import linkedInSvg from "../public/svg/linkedin.svg";
import instaSvg from "../public/svg/instagram.svg";
import moreSvg from "../public/svg/more.svg";
import xSvg from "../public/svg/x.svg";
export const topNavLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solution" },
    { label: "Resources", href: "#resources" },
];

export const footerColumns: NavSubsection[] = [
    {
        "title": "About",
        links: [
            { label: "Our Story", href: "/story" },
            { label: "My Account", href: "/my-account" },
            { label: "Shop Now", href: "/shop-now" },
            { label: "Obrive", href: "/obrive" }
        ]
    }, {
        "title": "Support",
        links: [
            { label: "Faqs", href: "/faqs" },
            { label: "Platform Policy", href: "/platform-policy" },
            { label: "Buisness & Partner Policy", href: "/buisness-patner-policy" },
            { label: "Payment Gateway & Compliance", href: "/payment-gatway-compliance" },
            { label: "Enterprise & Regulatory", href: "/enterprise-and-regulatory" },
        ]
    },
    {
        "title": "Resource",
        links: [
            { label: "OB HelpCenter", href: "ob-help-center" },
            { label: "OB Product FAQ", href: "ob-help-center" },
            { label: "OB Service FAQ", href: "ob-service-faq" },
            { label: "Community Forum", href: "community-forum" },

        ]
    }
]

export const NavButtomIcons: Icons[] = [
    {
        title: "linkedin",
        src: linkedInSvg,
        href: "/linkedin"
    },
    {
        title: "instagram",
        src: instaSvg,
        href: "/instagram"
    },
    {
        title: "facebook",
        src: facebookSvg,
        href: "/facebook"
    },
    {
        title: "x",
        src: xSvg,
        href: "/x"
    },
    {
        title: "more",
        src: moreSvg,
        href: "/more"
    }
]