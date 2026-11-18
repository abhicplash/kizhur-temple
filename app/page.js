import AboutTemple from "@/components/AboutTemple/AboutTemple";
import Festivals from "@/components/Festivals/Festivals";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import HomeGallery from "@/components/HomeGallery/HomeGallery";
import Navbar from "@/components/Navbar/Navbar";
import PoojaOfferings from "@/components/PoojaOfferings/PoojaOfferings";
import QuickLinks from "@/components/QuickLinks/QuickLinks";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <QuickLinks />
        <AboutTemple />
        <Festivals />
        <PoojaOfferings />
        <HomeGallery />

      </main>
      <Footer />
    </>
  );
}
