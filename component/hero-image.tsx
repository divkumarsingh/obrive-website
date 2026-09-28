import heroImage from "../public/images/main-hero-image.png";
import Image from "next/image";

export function HeroImage() {
    return (
        /* Outer Page Container */
        <div className="w-full p-2 sm:p-6 lg:p-8 min-h-screen">
            {/* Hero Card Container */}
            <div className="relative w-full max-w-[1360px] mx-auto min-h-[600px] rounded-[32px] overflow-hidden shadow-sm">
                {/* Background Image */}
                <Image
                    src={heroImage}
                    alt="Hero Background"
                    priority
                    fill
                    sizes="(max-width: 1360px) 100vw, 1360px"
                    className="object-cover object-center z-10"
                />
            </div>
        </div>
    );
}