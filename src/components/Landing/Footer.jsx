import React from "react";
import logo from "../../assets/images/logo.png";
// import { Linkedin, Twitter, Github, Youtube, MapPin, Mail } from "lucide-react";
import { MapPin, Mail } from "lucide-react";

const solutions = [
  "Cloud Security (CSPM)",
  "Identity Management (CIEM)",
  "Kubernetes Security (KSPM)",
  "Attack Path Detection",
  "Application Security (AppSec)",
];

const company = ["About Us", "Careers", "Blog", "Partners", "Press"];

export default function Footer() {
  // const [email, setEmail] = useState("");

  return (
    <footer className="bg-black border-t border-white/[0.07]">
      {/* MAIN FOOTER */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 py-12 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT — 40% */}
          <div className="flex flex-col items-start w-full lg:w-[35%]">
            <img src={logo} alt="Cosmic Armor" className="h-8 w-auto mb-5" />
            <p className="text-white text-[16px] leading-[1.9] mb-7 pl-2 max-w-[300px]">
              Advanced cloud security solutions for the modern enterprise.
              Real-time threat detection and automated remediation.
            </p>
            {/* <div className="flex items-center gap-3">
              {[
                { icon: Linkedin },
                { icon: Twitter },
                { icon: Github },
                { icon: Youtube },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-primary transition-colors duration-300"
                  >
                    <Icon size={20} className="text-white" />
                  </a>
                );
              })}
            </div> */}
          </div>

          {/* RIGHT — 60% */}
          <div className="flex flex-col gap-8 w-full lg:w-[65%]">
            {/* NEWSLETTER */}
            {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe to our newsletter"
                className="flex-1 bg-[#F2F2F2] text-black text-sm px-5 py-3 outline-none rounded sm:rounded-none sm:rounded-l"
              />
              <button className="px-6 py-3 text-sm font-bold text-black bg-brand-primary whitespace-nowrap rounded sm:rounded-none sm:rounded-r hover:brightness-110 transition-all duration-200">
                Subscribe Us
              </button>
            </div> */}

            {/* LINKS — 3 equal columns within 60% */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* SOLUTIONS */}
              <div>
                <div className="border-l-[3px] border-brand-primary pl-3 mb-5">
                  <h4 className="text-white text-[18px] font-semibold">
                    Solutions
                  </h4>
                </div>
                <ul className="space-y-3">
                  {solutions.map((s) => (
                    <li key={s}>
                      <a
                        href="#"
                        className="text-white/60 text-[14px] hover:text-white transition-colors pl-3"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <div className="border-l-[3px] border-brand-primary pl-3 mb-5">
                  <h4 className="text-white text-[18px] font-semibold">
                    Company
                  </h4>
                </div>
                <ul className="space-y-3">
                  {company.map((c) => (
                    <li key={c}>
                      <a
                        href="#"
                        className="text-white/60 text-[14px] hover:text-white transition-colors pl-3"
                      >
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <div className="border-l-[3px] border-brand-primary pl-3 mb-5">
                  <h4 className="text-white text-[18px] font-semibold">
                    Contact
                  </h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 pl-3">
                    <div className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full shrink-0">
                      <MapPin size={14} className="text-white" />
                    </div>
                    <span className="text-white/60 text-[14px] leading-relaxed">
                      Sector 19 Gurugram – 122016
                    </span>
                  </li>
                  <li className="flex items-center gap-3 pl-3">
                    <div className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full shrink-0">
                      <Mail size={14} className="text-white" />
                    </div>
                    <a
                      href="mailto:sales@cosmic.com"
                      className="text-white/60 text-[14px] hover:text-white transition-colors"
                    >
                      sales@cosmic.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/[0.07] py-5 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20">
        <p className="text-center text-white/35 text-xs">
          © 2025 Cosmic Armor Technologies, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
