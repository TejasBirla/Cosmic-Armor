// import React from "react";
// import cloudsecImg from "../../assets/images/real-time-cloud-security-img.png";

// export default function CloudSecurity() {
//   return (
//     <section className="relative bg-black py-16 overflow-hidden w-full min-h-[500px]">
//       {/* Background Image on right */}
//       <div
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         style={{
//           backgroundImage: `url(${cloudsecImg})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "right center",
//           filter: "blur(3px) brightness(0.4)",
//         }}
//       ></div>

//       <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-16 flex flex-col z-10">
//         {/* Heading with green left border */}
//         <div className="border-l-[3px] border-brand-primary mb-6 sm:mb-8 w-full lg:w-11/12">
//           <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-snug pl-3 sm:pl-4 lg:pl-6">
//             Real-time cloud security – In this hyper connected world
//           </h2>
//         </div>

//         {/* Paragraph aligned with heading text */}
//         <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-8 sm:mb-10 w-full lg:w-11/12 pl-3 sm:pl-4 lg:pl-6 text-justify">
//           In today's hyperconnected world, real-time cloud security is essential
//           to protect businesses from evolving threats, data breaches, and
//           operational disruptions. Cosmic Armor offers advanced real-time
//           protection that adapts dynamically, ensuring continuous monitoring and
//           response across cloud infrastructures. Engineered for the dynamic
//           needs of modern cloud environments, this advanced cloud security
//           solution delivers automated, real-time policy enforcement across your
//           entire infrastructure. Leveraging cutting-edge Content Disarm and
//           Reconstruction (CDR) technology, it neutralizes threats instantly,
//           before they can cause harm by sanitizing files without disrupting
//           business workflows.
//         </p>

//         {/* Download PDF button at bottom-right of section */}
//         <div className="flex justify-end w-full lg:w-11/12">
//           <button className="cursor-pointer px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-bold text-black bg-brand-primary rounded-sm hover:shadow-lg transition-all duration-200">
//             Download PDF
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

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
          Reconstruction (CDR) technology, it neutralizes threats
          instantly before they can cause harm by sanitizing files without
          disrupting business workflows.
        </p>

        {/* Download PDF — bottom right */}
        <div className="flex justify-end mt-6 sm:mt-8 md:mt-10">
          <button
            className="cursor-pointer px-4 sm:px-5 md:px-6 py-2 md:py-2.5
                             text-xs sm:text-sm md:text-base font-bold text-black
                             bg-brand-primary rounded-sm"
          >
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}
