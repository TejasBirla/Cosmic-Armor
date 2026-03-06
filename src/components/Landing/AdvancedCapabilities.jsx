// import React from "react";
// import bgImage from "../../assets/images/sections-background.png";
// import icon1 from "../../assets/icons/ACSC-icon-1.png";
// import icon2 from "../../assets/icons/ACSC-icon-2.png";
// import icon3 from "../../assets/icons/ACSC-icon-3.png";
// import icon4 from "../../assets/icons/ACSC-icon-4.png";
// import icon5 from "../../assets/icons/ACSC-icon-5.png";
// import icon6 from "../../assets/icons/ACSC-icon-6.png";

// const cards = [
//   {
//     icon: icon1,
//     title: "Automated Remediation",
//     desc: "Automatically resolve security issues with customizable policy enforcement that reduce response time from hours to seconds.",
//   },
//   {
//     icon: icon2,
//     title: "CSPM",
//     desc: "Cloud Security Posture Management continuously monitors and assesses your cloud infrastructure for misconfigurations and compliance violations, making enterprises audit ready.",
//   },
//   {
//     icon: icon3,
//     title: "KSPM",
//     desc: "Kubernetes Security Posture Management provides visibility into misconfigurations and compliance across cloud and hybrid infrastructure.",
//   },
//   {
//     icon: icon4,
//     title: "CIEM",
//     desc: "Cloud Infrastructure Entitlement Management provides granular visibility and control over identities, permissions, and access policies across multi-cloud environments.",
//   },
//   {
//     icon: icon5,
//     title: "Attack Path Detection",
//     desc: "Real-time visualization of potential attack paths to proactively mitigate risks and secure your cloud environment.",
//   },
//   {
//     icon: icon6,
//     title: "Application Security",
//     desc: "Comprehensive protection for your applications throughout the software development lifecycle.",
//   },
// ];

// export default function AdvancedCapabilities() {
//   return (
//     <section
//       id="features"
//       className="relative py-14 sm:py-20 px-4 sm:px-8 lg:px-15 bg-black"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-0"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="border-l-[3px] border-brand-primary pl-4 mb-12">
//           <h2 className="text-white text-[24px] sm:text-[28px] md:text-[30px] font-bold mb-2 leading-tight">
//             Advanced Cloud Security Capabilities
//           </h2>
//           <p className="text-white text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-md">
//             Our comprehensive security platform protects your cloud
//             infrastructure at every layer
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {cards.map((card, i) => (
//             <div
//               key={i}
//               className="rounded-lg p-6 sm:p-7 border border-white/40 bg-white/4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,255,0,0.15)] cursor-pointer flex flex-col justify-start"
//             >
//               <img
//                 src={card.icon}
//                 alt={card.title}
//                 className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-4"
//               />
//               <h3 className="text-white text-[18px] sm:text-[20px] font-semibold mb-4 leading-snug">
//                 {card.title}
//               </h3>
//               <p className="text-white text-[13px] sm:text-[14px] leading-relaxed">
//                 {card.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import bgImage from "../../assets/images/sections-background.png";
import icon1 from "../../assets/icons/ACSC-icon-1.png";
import icon2 from "../../assets/icons/ACSC-icon-2.png";
import icon3 from "../../assets/icons/ACSC-icon-3.png";
import icon4 from "../../assets/icons/ACSC-icon-4.png";
import icon5 from "../../assets/icons/ACSC-icon-5.png";
import icon6 from "../../assets/icons/ACSC-icon-6.png";

const cards = [
  {
    icon: icon1,
    title: "Automated Remediation",
    desc: "Automatically resolve security issues with customizable policy enforcement that reduce response time from hours to seconds.",
  },
  {
    icon: icon2,
    title: "CSPM",
    desc: "Cloud Security Posture Management continuously monitors and assesses your cloud infrastructure for misconfigurations and compliance violations, making enterprises audit ready.",
  },
  {
    icon: icon3,
    title: "KSPM",
    desc: "Kubernetes Security Posture Management provides visibility into misconfigurations and compliance across cloud and hybrid infrastructure.",
  },
  {
    icon: icon4,
    title: "CIEM",
    desc: "Cloud Infrastructure Entitlement Management provides granular visibility and control over identities, permissions, and access policies across multi-cloud environments.",
  },
  {
    icon: icon5,
    title: "Attack Path Detection",
    desc: "Real-time visualization of potential attack paths to proactively mitigate risks and secure your cloud environment.",
  },
  {
    icon: icon6,
    title: "Application Security",
    desc: "Comprehensive protection for your applications throughout the software development lifecycle.",
  },
];

export default function AdvancedCapabilities() {
  return (
    <section
      id="features"
      className="relative py-14 sm:py-20 bg-black
                 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="border-l-[3px] border-brand-primary pl-4 mb-12">
          <h2 className="text-white text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold mb-2 leading-tight">
            Advanced Cloud Security Capabilities
          </h2>
          <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed max-w-md">
            Our comprehensive security platform protects your cloud
            infrastructure at every layer
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-lg p-6 sm:p-7 border border-white/40 bg-white/4 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,255,0,0.15)] cursor-pointer flex flex-col justify-start"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-4"
              />
              <h3 className="text-white text-[17px] sm:text-[19px] md:text-[20px] lg:text-[22px] font-semibold mb-4 leading-snug">
                {card.title}
              </h3>
              <p className="text-white text-[13px] sm:text-[14px] lg:text-[16px] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
