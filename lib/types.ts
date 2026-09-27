export type NavLink = {
    label: string;
    href: string;
};

export type NavSubsection = {
    title: string;
    links: NavLink[];
};

export type NavGroup = {
    title?: string;
    subsections: NavSubsection[];
};

export type Icons = {
    title: string
    src: string;
    href: string
}