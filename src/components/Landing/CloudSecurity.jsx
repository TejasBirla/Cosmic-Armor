import React from "react";
import cloudsecImg from "../../assets/images/real-time-cloud-security-img.png";

export default function CloudSecurity() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(${cloudsecImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div
        className="relative z-10 w-full
                   px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20
                   py-10 sm:py-12 md:py-16 lg:py-20"
      >
        {/* Heading */}
        <div
          className="border-l-[3px] border-brand-primary pl-4 mb-5 sm:mb-6 md:mb-8
                        w-full md:w-[60%] lg:w-[50%]"
        >
          <h2
            className="text-white font-bold leading-snug
                         text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] max-w-[510px]"
          >
            Real-time cloud security – In this hyper connected world
          </h2>
        </div>

        {/* Paragraph */}
        <p
          className="text-white leading-relaxed text-justify pl-4
                      text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]
                      w-full md:w-[65%] lg:w-[72%]"
        >
          In today's hyperconnected world, real-time cloud security is essential
          to protect businesses from evolving threats, data breaches, and
          operational disruptions. Cosmic Armor offers advanced real-time
          protection that adapts dynamically, ensuring continuous monitoring and
          response across cloud infrastructures. Engineered for the dynamic
          needs of modern cloud environments, this advanced cloud security
          solution delivers automated, real-time policy enforcement across your
          entire infrastructure. Leveraging cutting-edge Content Disarm and
          Reconstruction (CDR) technology, it neutralizes threats instantly
          before they can cause harm by sanitizing files without disrupting
          business workflows.
        </p>
        <div className="flex justify-end mt-6 sm:mt-8 md:mt-10 pr-8 sm:pr-12 md:pr-16 lg:pr-24">
          <a
            href="/pdfs/ca-real-time-sec.pdf"
            download
            className="cursor-pointer px-4 sm:px-5 md:px-6 py-2 md:py-2.5
                       text-xs sm:text-sm md:text-base font-bold text-black
                       bg-brand-primary rounded-sm hover:brightness-110
                       transition-all duration-200"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
