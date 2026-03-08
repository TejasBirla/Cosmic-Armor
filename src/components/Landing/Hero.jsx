import React from "react";
import heroSection from "../../assets/images/Hero-SecImg.jpg";
import secureImg from "../../assets/icons/secure-system.png";
import startupBadge from "../../assets/images/rapidly-growing-badge.png";

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden flex items-center pt-14 md:pt-16">
      <div className="flex flex-col md:flex-row w-full">
        {/* ── Left content ── */}
        <div
          className="relative z-10 w-full md:w-3/5 flex flex-col justify-center
                     px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20
                     py-10 sm:py-12 md:py-16 lg:py-20"
        >
          {/* Secure system badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
            <img src={secureImg} alt="Secure" className="h-3.5 sm:h-4 md:h-5" />
            <span className="text-[11px] sm:text-[12px] md:text-[14px] font-semibold text-white tracking-wide">
              Secure System
            </span>
          </div>

          {/* ── Heading — EXACTLY 2 lines on ALL devices ── */}
          <h1
            className="font-semibold leading-[1.2] mb-4 sm:mb-5 md:mb-6"
            style={{ fontSize: "clamp(1.25rem, 4.8vw, 2.85rem)" }}
          >
            <span className="block whitespace-nowrap">
              Unified <span className="text-brand-primary">cloud security</span>{" "}
              platform
            </span>
            <span className="block whitespace-nowrap">
              with <span className="text-brand-primary">run time</span>{" "}
              protection
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-white leading-relaxed mb-6 sm:mb-7 md:mb-8 max-w-[630px] text-[13px] sm:text-[15px] lg:text-[17px] text-justify">
            Cosmic Armor provides cutting-edge runtime cloud security with
            real-time threat detection and remediation. Protect your cloud
            infrastructure with AI-powered security solutions designed for speed
            and efficiency.
          </p>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap gap-3 items-center mb-6 sm:mb-7 md:mb-8">
            <a
              href="https://app.cosmicarmor.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-bold text-black bg-brand-primary rounded whitespace-nowrap w-fit hover:brightness-110 transition-all shadow-[0_0_20px_rgba(141,224,18,0.35)]">
                Start Free Trial
              </button>
            </a>

            <a
              href="https://calendly.com/ankit-cosmicarmor/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium text-white border border-white/30 rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200 whitespace-nowrap w-fit">
                Schedule Demo
              </button>
            </a>
          </div>

          {/* Startup Badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              className="h-4 sm:h-5 w-8"
              alt="startup badge"
              src={startupBadge}
            />
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              Rapidly Growing Startup
            </span>
          </div>
        </div>

        {/* ── Right hero image — hidden on mobile, visible md+ ── */}
        <div
          className="w-full md:w-2/5 relative hidden md:block"
          style={{ minHeight: "500px" }}
        >
          <img
            src={heroSection}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black/80" />
        </div>

        {/* ── Mobile background image overlay (subtle) ── */}
        <div
          className="absolute inset-0 md:hidden opacity-20"
          style={{
            backgroundImage: `url(${heroSection})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}
