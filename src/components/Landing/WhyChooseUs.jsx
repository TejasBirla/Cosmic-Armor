// import React from "react";
// import bgImage from "../../assets/images/sec-2-img.png";
// import icon1 from "../../assets/icons/why-us-icon-1.png";
// import icon2 from "../../assets/icons/why-us-icon-2.png";
// import icon3 from "../../assets/icons/why-us-icon-3.png";

// const cards = [
//   {
//     icon: icon1,
//     title: "Comprehensive Coverage",
//     desc: "Protects your entire cloud infrastructure, from IaaS to PaaS and SaaS.",
//   },
//   {
//     icon: icon2,
//     title: "Rapid Deployment",
//     desc: "Get up and running in minutes with our easy-to-use platform.",
//   },
//   {
//     icon: icon3,
//     title: "Enterprise-Grade Support",
//     desc: "24/7 support from our team of cloud security experts.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section
//       className="relative py-20 px-6 sm:px-10 lg:px-16"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="border-l-[3px] border-[#7CFC00] pl-4 mb-2">
//           <h2 className="text-white md:text-[32px] font-bold">
//             Why Choose Cosmic Armor?
//           </h2>
//           <p className="text-white text-[17px] mb-12 mt-2 max-w-md">
//             Explore our comprehensive resources for Cloud Security,
//             <br className="hidden sm:block" /> CloudShield, and Application
//             Security
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
//           {cards.map((card, i) => (
//             <div
//               key={i}
//               className="bg-[#E9FFD8] rounded-xl px-7 py-7
//                          transition-transform duration-300 hover:scale-105 flex flex-col items-start"
//             >
//               {/* Icon */}
//               <img
//                 src={card.icon}
//                 alt={card.title}
//                 className="w-12 h-12 object-contain mb-5"
//               />

//               {/* Title */}
//               <h3 className="text-black text-[22px] font-semibold mb-3">
//                 {card.title}
//               </h3>

//               {/* Description */}
//               <p className="text-black text-[16px] leading-relaxed max-w-80">
//                 {card.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
