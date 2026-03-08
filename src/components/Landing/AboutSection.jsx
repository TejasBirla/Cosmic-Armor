import React from "react";
import worldMap from "../../assets/images/contact-us-right-side-img.png";
import indiaImg from "../../assets/images/India-img.png";
import canadaImg from "../../assets/images/canada-img.png";
import signaporeImg from "../../assets/images/singapore-img.png";
import uaeImg from "../../assets/images/UAE-img.png";

const expandingLocations = [
  { flag: canadaImg, label: "CANADA" },
  { flag: uaeImg, label: "UAE" },
  { flag: signaporeImg, label: "SINGAPORE" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#E9FFD8] py-12 sm:py-14 md:py-16 lg:py-20
                 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20"
    >
      {/* ── TOP — centered text ── */}
      <div className="text-center mb-10 sm:mb-12 md:mb-14">
        <p
          className="text-[#182B28] font-semibold tracking-widest mb-3
                      text-[14px] sm:text-[16px] md:text-[18px]"
        >
          About Cosmic Armor
        </p>

        <h2
          className="text-brand-primary font-semibold leading-snug mb-5
                       text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]"
        >
          Pioneering the Future of Cloud and Application Security
          <br className="hidden sm:block" />
          for Three Years.
        </h2>

        <p
          className="text-[#182B28] leading-[1.9] font-semibold mx-auto
                      text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]
                      max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        >
          Forged in 2021, Cosmic Armor stands as a vanguard in cloud and
          application security, dedicated to fortifying enterprises against
          ever-evolving digital threats. Our journey is fueled by a passion for
          innovation and a commitment to providing cutting-edge solutions. We
          empower organizations to navigate the complexities of modern cloud
          environments with confidence. Our comprehensive CNAPP platform
          delivers unparalleled real-time threat detection, automated
          remediation, and end-to-end protection, ensuring your critical assets
          remain secure and resilient.
        </p>
      </div>

      {/* ── CONTACT + MAP ── */}
      <div className="relative mb-12 sm:mb-14">
        {/* World map — absolute right */}
        <img
          src={worldMap}
          alt="World Map"
          className="absolute right-0 top-0 h-full object-contain opacity-60
                     pointer-events-none select-none mix-blend-multiply
                     w-[85%] sm:w-[70%] md:w-[60%] lg:w-[55%]"
        />

        {/* Contact content */}
        <div className="relative z-10 max-w-xs sm:max-w-sm">
          <div className="border-l-[3px] border-brand-primary pl-4 mb-4">
            <h3
              className="text-[#182B28] font-bold mb-2
                           text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
            >
              Contact Us
            </h3>
            <p
              className="text-[#182B28] font-semibold
                          text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]"
            >
              Currently we are placed in:
            </p>
          </div>

          {/* India HQ */}
          <div className="flex items-center gap-4 sm:gap-5 mt-6">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#E8E7CB]
                            flex items-center justify-center shadow-md flex-shrink-0"
            >
              <img
                src={indiaImg}
                alt="India"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover mt-3"
              />
            </div>
            <div>
              <p
                className="text-[#182B28] font-bold mb-1
                            text-[15px] sm:text-[16px] md:text-[18px]"
              >
                India HQ
              </p>
              <p className="text-[#182B28] text-[13px] sm:text-[14px] md:text-[15px]">
                Sector 19 Gurugram – 122016
              </p>
            </div>
          </div>
        </div>

        {/* Spacer for map */}
        <div className="h-16 sm:h-20 md:h-24 lg:h-28" />
      </div>

      {/* ── EXPANDING HORIZONS ── */}
      <div>
        <h3
          className="text-[#182B28] font-bold mb-1
                       text-[15px] sm:text-[16px] md:text-[18px]"
        >
          Expanding Horizons
        </h3>
        <p
          className="text-[#182B28] font-medium mb-6 sm:mb-8
                      text-[13px] sm:text-[14px] md:text-[15px]"
        >
          We are expanding soon in these locations
        </p>

        <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-8 md:gap-10 flex-wrap">
          {expandingLocations.map((loc) => (
            <div key={loc.label} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#E8E7CB]
                              flex items-center justify-center shadow-md overflow-hidden"
              >
                <img
                  src={loc.flag}
                  alt={loc.label}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-cover object-top"
                />
              </div>
              <span
                className="text-[#182B28] font-semibold
                               text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]"
              >
                {loc.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
