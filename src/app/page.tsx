import dynamic from "next/dynamic";
import { HeroMosaic } from "@/components/home/hero-mosaic/hero-mosaic";

const Philosophy = dynamic(() => import("@/components/home/philosophy").then((mod) => mod.Philosophy), {
  ssr: true,
});
const DoctorsPreview = dynamic(() => import("@/components/home/doctors-preview").then((mod) => mod.DoctorsPreview), {
  ssr: true,
});
const ServicesPreview = dynamic(() => import("@/components/home/services-preview").then((mod) => mod.ServicesPreview), {
  ssr: true,
});
const Testimonials = dynamic(() => import("@/components/home/testimonials").then((mod) => mod.Testimonials), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <HeroMosaic />
      <Philosophy />
      <DoctorsPreview />
      <ServicesPreview />
      <Testimonials />
    </>
  );
}
