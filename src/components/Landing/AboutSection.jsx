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
      className="bg-[#E9FFD8] py-14 sm:py-16 px-5 sm:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* TOP */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-[#182B28] text-[16px] sm:text-[18px] font-semibold tracking-widest mb-3">
            About Cosmic Armor
          </p>

          <h2 className="text-brand-primary text-lg sm:text-xl md:text-2xl font-semibold leading-snug mb-6">
            Pioneering the Future of Cloud and Application Security
            <br className="hidden sm:block" />
            for Three Years.
          </h2>

          <p className="text-[#182B28] text-[14px] sm:text-[16px] leading-[1.9] max-w-5xl mx-auto font-semibold">
            Forged in 2021, Cosmic Armor stands as a vanguard in cloud and
            application security, dedicated to fortifying enterprises against
            ever-evolving digital threats. Our journey is fueled by a passion
            for innovation and a commitment to providing cutting-edge solutions.
            We empower organizations to navigate the complexities of modern
            cloud environments with confidence. Our comprehensive CNAPP platform
            delivers unparalleled real-time threat detection, automated
            remediation, and end-to-end protection, ensuring your critical
            assets remain secure and resilient.
          </p>
        </div>

        {/* CONTACT + MAP */}
        <div className="relative mb-14">
          {/* WORLD MAP */}
          <img
            src={worldMap}
            alt="World Map"
            className="
            absolute 
            right-0 
            top-0 
            w-[80%] 
            sm:w-[65%] 
            lg:w-[55%] 
            h-full 
            object-contain 
            opacity-60 
            pointer-events-none 
            select-none 
            mix-blend-multiply
            "
          />

          {/* CONTACT CONTENT */}
          <div className="relative z-10 max-w-sm">
            <div className="border-l-[3px] border-brand-primary pl-4 mb-2">
              <h3 className="text-[#182B28] text-[22px] sm:text-[24px] font-bold mb-2">
                Contact Us
              </h3>

              <p className="text-[#182B28] text-[14px] sm:text-[16px] mb-8 font-semibold">
                Currently we are placed in:
              </p>
            </div>

            {/* INDIA HQ */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E8E7CB] flex items-center justify-center shadow-md flex-shrink-0">
                <img
                  src={indiaImg}
                  alt="India"
                  className="w-14 h-14 sm:w-18 sm:h-18 object-cover mt-3"
                />
              </div>

              <div>
                <p className="text-[#182B28] font-bold text-[16px] sm:text-[18px] mb-1">
                  India HQ
                </p>

                <p className="text-[#182B28] text-[14px] sm:text-[16px]">
                  Sector 19 Gurugram – 122016
                </p>
              </div>
            </div>
          </div>

          {/* SPACE FOR MAP */}
          <div className="h-24 sm:h-32 lg:h-40" />
        </div>

        {/* EXPANDING HORIZONS */}
        <div>
          <h3 className="text-[#182B28] text-[16px] sm:text-[18px] font-bold mb-1">
            Expanding Horizons
          </h3>

          <p className="text-[#182B28] text-[14px] sm:text-[16px] font-medium mb-8">
            We are expanding soon in these locations
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-8 sm:gap-10 flex-wrap">
            {expandingLocations.map((loc) => (
              <div key={loc.label} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E8E7CB] flex items-center justify-center shadow-md overflow-hidden">
                  <img
                    src={loc.flag}
                    alt={loc.label}
                    className="w-14 h-14 sm:w-18 sm:h-18 object-cover object-top"
                  />
                </div>

                <span className="text-[#182B28] text-[14px] sm:text-[16px] font-semibold">
                  {loc.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
