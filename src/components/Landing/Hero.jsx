import React from "react";
import heroSection from "../../assets/images/Hero-SecImg.jpg";
import secureImg from "../../assets/icons/secure-system.png";
import startupBadge from "../../assets/images/rapidly-growing-badge.png";
import cloudIcon from "../../assets/icons/ACSC-icon-1.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden pt-20 md:pt-24">
      {/* Hero container split */}
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left content */}
        <div className="relative z-10 w-full md:w-3/5 px-6 md:px-16 py-20 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img src={secureImg} alt="SecureImg" className="h-5" />
              <span className="text-[14px] font-bold text-white">
                Secure System
              </span>
            </div>
            <img src={cloudIcon} alt="Cloud Icon" className="w-13 h-auto" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold leading-snug md:leading-tight mb-6">
            Unified <span className="text-brand-primary">Cloud Security</span>{" "}
            Platform <br className="hidden sm:block" />
            with <span className="text-brand-primary">run time</span> protection
          </h1>

          {/* Paragraph */}
          <p className="text-[16px] sm:text-base md:text-[17px] text-[#E2E2E2] leading-relaxed mb-8">
            Cosmic Armor provides cutting-edge runtime cloud security with
            real-time threat detection and remediation. Protect your cloud
            infrastructure with AI-powered security solutions designed for speed
            and efficiency.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4 items-start sm:items-center mb-8">
            <button className="cursor-pointer px-6 py-2.5 text-sm font-bold text-black bg-brand-primary rounded shadow-[0_0_22px_rgba(141,224,18,0.4)] hover:brightness-110 transition-all duration-200">
              Start Free Trial
            </button>

            <button className="cursor-pointer px-6 py-2.5 text-sm font-medium text-white border border-white/30 rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200">
              Schedule Demo
            </button>
          </div>

          {/* Startup Badge */}
          <div className="flex items-center gap-3">
            <img className="h-5" alt="startup badge" src={startupBadge} />
            <span className="font-bold tracking-wide">
              Rapidly Growing Startup
            </span>
          </div>
        </div>

        {/* Right hero image */}
        <div className="w-full md:w-2/5 relative hidden md:block">
          <img
            src={heroSection}
            alt="Hero image"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 g-linear-to-l from-black/80 via-black/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
