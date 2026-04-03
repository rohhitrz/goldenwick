import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import PaymentBanner from "@/components/PaymentBanner";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <HowItWorksSection />
        <PaymentBanner />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
