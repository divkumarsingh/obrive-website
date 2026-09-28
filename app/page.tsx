import ServiceBar from "@/component/badge";

import { Footer } from "@/component/footer";
import { FutureSection } from "@/component/future";
import { HeroImage } from "@/component/hero-image";
import { NavBar } from "@/component/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroImage />
      <ServiceBar />
      <FutureSection />
      <Footer />
    </>

  );
}
