import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/marketing/SmoothScroll";
import RFQBanner from "@/components/marketing/RFQBanner";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Navbar />
        <Hero />
        <Categories />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
        <RFQBanner />
      </main>
    </SmoothScroll>
  );
}
