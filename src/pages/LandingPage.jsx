import React from "react";
import Navbar from "../components/Landing/Navbar.jsx";
import Hero from "../components/Landing/Hero.jsx";
import AdvancedCapabilities from "../components/Landing/AdvancedCapabilities.jsx";
import CloudSecurity from "../components/Landing/CloudSecurity.jsx";
import Resources from "../components/Landing/Resources.jsx";
import CTASection from "../components/Landing/CTASection.jsx";
import AboutSection from "../components/Landing/AboutSection.jsx";
import Footer from "../components/Landing/Footer.jsx";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AdvancedCapabilities />
      <CloudSecurity />
      <Resources />
      <CTASection />
      <AboutSection />
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
