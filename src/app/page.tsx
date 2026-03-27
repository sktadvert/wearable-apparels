import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
// import Services from "@/components/Services";
import Customization from "@/components/Customization";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import PaymentOptions from "@/components/PaymentOptions";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/marketing/SmoothScroll";
import RFQBanner from "@/components/marketing/RFQBanner";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Navbar />
        <Hero />
        <TrustBar />
        <Categories />
        {/* <Services /> */}
        <Customization />
        <Process />
        <Portfolio />
        <Testimonials />
        {/* <About /> */}
        <PaymentOptions />
        {/* <FAQ /> */}
        <CTASection />
        <Footer />
        <RFQBanner />
      </main>
    </SmoothScroll>
  );
}
