import React from "react";
import cloudsecImg from "../../assets/images/real-time-cloud-security-img.png";

export default function CloudSecurity() {
  return (
    <section className="relative bg-black py-16 overflow-hidden w-full min-h-[500px]">
      {/* Background Image on right */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${cloudsecImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          filter: "blur(3px) brightness(0.4)",
        }}
      ></div>

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-16 flex flex-col z-10">
        {/* Heading with green left border */}
        <div className="border-l-[3px] border-brand-primary mb-6 sm:mb-8 w-full lg:w-11/12">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-snug pl-3 sm:pl-4 lg:pl-6">
            Real-time cloud security – In this hyper connected world
          </h2>
        </div>

        {/* Paragraph aligned with heading text */}
        <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-8 sm:mb-10 w-full lg:w-11/12 pl-3 sm:pl-4 lg:pl-6 text-justify">
          In today's hyperconnected world, real-time cloud security is essential
          to protect businesses from evolving threats, data breaches, and
          operational disruptions. Cosmic Armor offers advanced real-time
          protection that adapts dynamically, ensuring continuous monitoring and
          response across cloud infrastructures. Engineered for the dynamic
          needs of modern cloud environments, this advanced cloud security
          solution delivers automated, real-time policy enforcement across your
          entire infrastructure. Leveraging cutting-edge Content Disarm and
          Reconstruction (CDR) technology, it neutralizes threats instantly,
          before they can cause harm by sanitizing files without disrupting
          business workflows.
        </p>

        {/* Download PDF button at bottom-right of section */}
        <div className="flex justify-end w-full lg:w-11/12">
          <button className="cursor-pointer px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-bold text-black bg-brand-primary rounded-sm hover:shadow-lg transition-all duration-200">
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}
