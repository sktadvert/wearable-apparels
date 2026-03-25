import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/marketing/SmoothScroll";
import RFQBanner from "@/components/marketing/RFQBanner";
import LoadingScreen from "@/components/marketing/LoadingScreen";

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <main className="grain">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <RFQBanner />
      </main>
    </SmoothScroll>
  );
}
