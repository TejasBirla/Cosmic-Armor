// import React from "react";
// import bgImage from "../../assets/images/sec-2-img.png";
// import tickIcon from "../../assets/icons/tick-icon.png";

// const portfolioCards = [
//   {
//     title: "Runtime Protection",
//     items: [
//       "Continuous cloud infrastructure monitoring",
//       "Real-time vulnerability scanning",
//       "Behavioral anomaly detection",
//       "Automated threat response",
//       "Compliance enforcement",
//     ],
//   },
//   {
//     title: "Attack Path Analysis",
//     items: [
//       "Attack surface visualization",
//       "Critical path identification",
//       "Exposure risk scoring",
//       "Predictive threat modeling",
//       "Proactive vulnerability management",
//     ],
//   },
//   {
//     title: "Secure Development",
//     items: [
//       "SCM Posture Management for early risk detection",
//       "IaC Security to validate infrastructure configurations",
//       "SCA and SAST for comprehensive code analysis",
//       "Secrets detection to prevent sensitive data exposure",
//       "Container image scanning for runtime security",
//     ],
//   },
// ];

// export default function CNAPPPortfolio() {
//   return (
//     <section
//       className="relative py-20 px-6 sm:px-10 lg:px-16 min-h-[700px]"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>

//       <div className="relative max-w-7xl mx-auto z-10">
//         {/* Section Header */}
//         <div className="border-l-[3px] border-[#7CFC00] pl-4 mb-3">
//           <h2 className="text-white text-2xl sm:text-[28px] md:text-[30px] font-bold leading-snug mb-3">
//             Our Advanced CNAPP Portfolio with <br className="hidden sm:block" />
//             hyperautomation security
//           </h2>
//           <p className="text-white text-[16px] sm:text-base mb-12">
//             End-to-end protection for your cloud-native infrastructure
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {portfolioCards.map((card, i) => (
//             <div
//               key={i}
//               className="bg-white/90 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 relative z-10"
//             >
//               {/* Card Heading */}
//               <div className="bg-[#AFCCAA] rounded-t-xl px-6 py-4">
//                 <h3 className="text-lg sm:text-xl font-semibold">
//                   {card.title}
//                 </h3>
//               </div>

//               {/* List items */}
//               <ul className="px-6 py-6 space-y-4">
//                 {card.items.map((item, j) => (
//                   <li key={j} className="flex items-start gap-3">
//                     <span className="mt-1 shrink-0 w-5 h-5 flex items-center justify-center">
//                       <img src={tickIcon} alt="Tick icon" className="w-5 h-5" />
//                     </span>
//                     <span className="text-black text-[15px] sm:text-[16px] leading-[1.8]">
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
