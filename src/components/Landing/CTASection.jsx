import React from "react";
import sectionImg from "../../assets/images/ctaSection.png";
import secureImg from "../../assets/icons/secure-system.png";

export default function CTASection() {
  return (
    <section
      className="bg-black py-12 sm:py-14 md:py-16
                        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20
                        border-t border-white/[0.06]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* LEFT — Text content */}
        <div className="flex-1 min-w-0">
          <div className="border-l-[3px] border-brand-primary pl-3 mb-6 sm:mb-8">
            <h2
              className="text-white font-bold leading-snug mb-2
                           text-[22px] sm:text-[24px] md:text-[28px] lg:text-[30px]"
            >
              Ready to Secure Your Cloud Infrastructure?
            </h2>
            <p
              className="text-white leading-relaxed
                          text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]
                          max-w-full sm:max-w-lg md:max-w-[605px]"
            >
              Join thousands of enterprises who trust Cosmic Armor for real-time
              cloud security and threat protection. Start your free 14-day trial
              today.
            </p>
          </div>

          {/* Secure system badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3 pl-3">
            <img
              src={secureImg}
              alt="Secure System"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
            <span className="text-white text-[12px] sm:text-[13px] md:text-[14px] tracking-widest font-bold">
              Secure System
            </span>
          </div>

          {/* No credit card line */}
          <p
            className="text-brand-primary font-semibold mb-6 sm:mb-7
                        text-[13px] sm:text-[15px] md:text-[16px] pl-3"
          >
            No credit card required · Full platform access
          </p>
          <a
            href="https://app.cosmicarmor.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="cursor-pointer px-5 sm:px-6 md:px-7 py-2 sm:py-2.5
            text-xs sm:text-sm md:text-base font-semibold text-black
            bg-brand-primary rounded-sm ml-3 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(141,224,18,0.35)]"
            >
              Start Free Trial
            </button>
          </a>
        </div>

        {/* RIGHT — Cloud image */}
        <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] flex-shrink-0">
          <img
            src={sectionImg}
            alt="Cloud Infrastructure"
            className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(0,200,150,0.2)]"
          />
        </div>
      </div>
    </section>
  );
}
