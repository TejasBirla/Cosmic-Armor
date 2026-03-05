// import React from "react";
// import bgImage from "../../assets/images/sec-2-img.png";
// import icon1 from "../../assets/icons/resource-icon-1.png";
// import icon2 from "../../assets/icons/resource-icon-2.png";
// import icon3 from "../../assets/icons/resource-icon-3.png";

// const resources = [
//   {
//     icon: icon1,
//     title: "Cloud Security Data Sheet",
//     desc: "Learn about our cloud security solutions and how they can protect your organization.",
//   },
//   {
//     icon: icon2,
//     title: "Runtime Protection Data Sheet",
//     desc: "Discover the features and benefits of Runtime Protection for your cloud infrastructure.",
//   },
//   {
//     icon: icon3,
//     title: "Application Security Data Sheet",
//     desc: "Get insights into securing your applications throughout the development lifecycle.",
//   },
// ];

// export default function Resources() {
//   return (
//       <section
//         className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-15"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* Section Header */}
//           <div className="border-l-[3px] border-brand-primary pl-4 mb-12">
//             <h2 className="text-white text-[24px] sm:text-[28px] md:text-[30px] font-bold mb-2 leading-tight">
//               Resources
//             </h2>
//             <p className="text-white text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-md">
//               Explore our comprehensive resources for Cloud Security,
//               CloudShield, and Application Security.
//             </p>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {resources.map((r, i) => (
//               <div
//                 key={i}
//                 className="
//                 group rounded-lg p-6 sm:p-7 border border-white/[0.08]
//                 bg-gray-500/20 backdrop-blur-md
//                 flex flex-col justify-between items-center
//                 transform transition-all duration-300
//                 hover:scale-105 hover:-translate-y-1
//                 hover:shadow-[0_8px_20px_rgba(0,255,0,0.15)]
//                 hover:bg-[#0D21119C]
//                 h-[340px] sm:h-[380px] md:h-[380px]
//                 "
//               >
//                 {/* Icon */}
//                 <img
//                   src={r.icon}
//                   alt={r.title}
//                   className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
//                 />

//                 {/* Title & Description */}
//                 <div className="flex flex-col items-center text-center mt-2 flex-1 justify-center">
//                   <h3 className="text-white text-[18px] sm:text-[20px] font-semibold leading-snug">
//                     {r.title}
//                   </h3>
//                   <p className="text-white text-[16px] leading-relaxed mt-6 max-w-[220px] sm:max-w-[240px] md:max-w-[260px] text-center">
//                     {r.desc}
//                   </p>
//                 </div>

//                 {/* Button */}
//                 <button className="mt-auto px-6 py-2 text-sm font-semibold rounded-sm bg-transparent text-white border border-white transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-black group-hover:border-transparent cursor-pointer">
//                   Download PDF
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//   );
// }


import React from "react";
import bgImage from "../../assets/images/sec-2-img.png";
import tickIcon from "../../assets/icons/tick-icon.png";

import icon1 from "../../assets/icons/resource-icon-1.png";
import icon2 from "../../assets/icons/resource-icon-2.png";
import icon3 from "../../assets/icons/resource-icon-3.png";

import icon_1 from "../../assets/icons/why-us-icon-1.png";
import icon_2 from "../../assets/icons/why-us-icon-2.png";
import icon_3 from "../../assets/icons/why-us-icon-3.png";

/* ---------------- CNAPP PORTFOLIO ---------------- */

const portfolioCards = [
  {
    title: "Runtime Protection",
    items: [
      "Continuous cloud infrastructure monitoring",
      "Real-time vulnerability scanning",
      "Behavioral anomaly detection",
      "Automated threat response",
      "Compliance enforcement",
    ],
  },
  {
    title: "Attack Path Analysis",
    items: [
      "Attack surface visualization",
      "Critical path identification",
      "Exposure risk scoring",
      "Predictive threat modeling",
      "Proactive vulnerability management",
    ],
  },
  {
    title: "Secure Development",
    items: [
      "SCM Posture Management for early risk detection",
      "IaC Security to validate infrastructure configurations",
      "SCA and SAST for comprehensive code analysis",
      "Secrets detection to prevent sensitive data exposure",
      "Container image scanning for runtime security",
    ],
  },
];

/* ---------------- RESOURCES ---------------- */

const resources = [
  {
    icon: icon1,
    title: "Cloud Security Data Sheet",
    desc: "Learn about our cloud security solutions and how they can protect your organization.",
  },
  {
    icon: icon2,
    title: "Runtime Protection Data Sheet",
    desc: "Discover the features and benefits of Runtime Protection for your cloud infrastructure.",
  },
  {
    icon: icon3,
    title: "Application Security Data Sheet",
    desc: "Get insights into securing your applications throughout the development lifecycle.",
  },
];

/* ---------------- WHY CHOOSE US ---------------- */

const cards = [
  {
    icon: icon_1,
    title: "Comprehensive Coverage",
    desc: "Protects your entire cloud infrastructure, from IaaS to PaaS and SaaS.",
  },
  {
    icon: icon_2,
    title: "Rapid Deployment",
    desc: "Get up and running in minutes with our easy-to-use platform.",
  },
  {
    icon: icon_3,
    title: "Enterprise-Grade Support",
    desc: "24/7 support from our team of cloud security experts.",
  },
];

export default function Resources() {
  return (
    <section
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ---------------- CNAPP PORTFOLIO ---------------- */}

        <div className="border-l-[3px] border-brand-primary pl-4 mb-12">
          <h2 className="text-white text-[26px] sm:text-[30px] font-bold leading-snug mb-2">
            Our Advanced CNAPP Portfolio with
            <br className="hidden sm:block" />
            hyperautomation security
          </h2>

          <p className="text-white text-[16px]">
            End-to-end protection for your cloud-native infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {portfolioCards.map((card, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200"
            >
              <div className="bg-[#AFCCAA] rounded-t-xl px-6 py-4">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {card.title}
                </h3>
              </div>

              <ul className="px-6 py-6 space-y-4">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <img src={tickIcon} alt="tick" className="w-5 h-5 mt-1" />
                    <span className="text-black text-[15px] sm:text-[16px] leading-[1.8]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---------------- RESOURCES ---------------- */}

        <div className="border-l-[3px] border-brand-primary pl-4 mb-12">
          <h2 className="text-white text-[26px] sm:text-[30px] font-bold mb-2">
            Resources
          </h2>

          <p className="text-white text-[16px] max-w-md">
            Explore our comprehensive resources for Cloud Security, CloudShield,
            and Application Security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {resources.map((r, i) => (
            <div
              key={i}
              className="group rounded-lg p-7 border border-white/[0.08]
              bg-gray-500/20 backdrop-blur-md flex flex-col justify-between items-center
              transition-all duration-300 hover:scale-105 hover:-translate-y-1
              hover:shadow-[0_8px_20px_rgba(0,255,0,0.15)]
              hover:bg-[#0D21119C] h-[360px]"
            >
              <img src={r.icon} alt={r.title} className="w-14 h-14" />

              <div className="flex flex-col items-center text-center flex-1 justify-center">
                <h3 className="text-white text-[20px] font-semibold">
                  {r.title}
                </h3>

                <p className="text-white text-[16px] mt-6 max-w-[240px]">
                  {r.desc}
                </p>
              </div>

              <button
                className="mt-auto px-6 py-2 text-sm font-semibold rounded-sm
                bg-transparent text-white border border-white transition-colors
                duration-300 group-hover:bg-brand-primary group-hover:text-black
                group-hover:border-transparent cursor-pointer"
              >
                Download PDF
              </button>
            </div>
          ))}
        </div>

        {/* ---------------- WHY CHOOSE US ---------------- */}

        <div className="border-l-[3px] border-brand-primary pl-4 mb-12">
          <h2 className="text-white md:text-[32px] font-bold">
            Why Choose Cosmic Armor?
          </h2>

          <p className="text-white text-[17px] mt-2 max-w-md">
            Explore our comprehensive resources for Cloud Security, CloudShield,
            and Application Security
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#E9FFD8] rounded-xl px-7 py-7
              transition-transform duration-300 hover:scale-105"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-12 h-12 mb-5"
              />

              <h3 className="text-black text-[22px] font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-black text-[16px] leading-relaxed max-w-80">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
