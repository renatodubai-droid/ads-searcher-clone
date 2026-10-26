import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import BrandTicker from "@/components/landing/BrandTicker";
import Features from "@/components/landing/Features";
import SearchPreview from "@/components/landing/SearchPreview";
import Steps from "@/components/landing/Steps";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandTicker />
      <Features />
      <SearchPreview />
      <Steps />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CtaBanner />
      <Footer />
    </main>
  );
}
