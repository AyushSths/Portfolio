import React from "react";

export default function Hirebtn() {
  return (
    <div className="flex-show">
      <button className="relative overflow-hidden px-5 py-2 rounded-3xl bg-white font-semibold text-black group cursor-pointer">
        <span className="relative z-10 transition duration-300 group-hover:text-white text-[18px]">
          Hire Me
        </span>
        <span className="absolute inset-0 rounded-3xl bg-blue-500 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-0" />
      </button>
    </div>
  );
}
