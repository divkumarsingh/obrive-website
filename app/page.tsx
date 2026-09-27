import { Footer } from "@/component/footer";
import { HeroImage } from "@/component/hero-image";
import { NavBar } from "@/component/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroImage />
      <Footer />
    </>

  );
}
