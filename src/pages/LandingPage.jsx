import React from "react";
import Navbar from "../components/landing/Navbar.jsx";
import Hero from "../components/landing/Hero.jsx";
import AdvancedCapabilities from "../components/Landing/AdvancedCapabilities.jsx";
import CloudSecurity from "../components/Landing/CloudSecurity.jsx";
// import CNAPPPortfolio from "../components/Landing/CNAPPPortfolio.jsx";
import Resources from "../components/Landing/Resources.jsx";
import CTASection from "../components/Landing/CTASection.jsx";
// import WhyChooseUs from "../components/Landing/WhyChooseUs.jsx";
import AboutSection from "../components/Landing/AboutSection.jsx";
import Footer from "../components/Landing/Footer.jsx";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="features">
        <AdvancedCapabilities />
      </section>

      <CloudSecurity />
      {/* <CNAPPPortfolio /> */}
      <Resources />
      {/* <WhyChooseUs /> */}
      <CTASection />

      <section id="about">
        <AboutSection />
      </section>

      <section id="solutions">
        <Footer />
      </section>

      <section id="contact"></section>
    </>
  );
}
