import React from "react";
import downloads from "../../assets/images/downloads.png";

export default function CVbutton() {
  return (
    <div className="CV-btn inline-block">
      <button className="group relative overflow-hidden px-5 py-2 rounded-3xl bg-blue-600 font-semibold text-black cursor-pointer border-2 border-blue-600 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
        <a href="Ayush Resume.pdf" download="Ayush-Shrestha-CV.pdf">
          {/* Text fades out on hover */}
          <span className="relative z-10 transition duration-300 group-hover:opacity-0">
            Download CV
          </span>
          {/* Download icon slides in from the top */}
          <span className="absolute z-10 opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 inset-0 flex items-center justify-center">
            <img src={downloads} alt="download icon" className="md:w-5 w-3" />
          </span>
          {/* Background fill animation */}
          <span className="absolute inset-0 rounded-3xl bg-[#172132] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-0" />
        </a>
      </button>
    </div>
  );
}
