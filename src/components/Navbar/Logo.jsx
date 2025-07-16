import React from "react";
import greater from "../../assets/images/greater-than.png";
import lesser from "../../assets/images/less-than.png";

export default function Logo() {
  return (
    <div className="logo cursor-pointer md:ml-0 ml-3">
      <p className="text-4xl flex items-center">
        <img src={lesser} alt="" className="w-8 h-8" />{" "}
        <span className="font-bold">Ayush</span>{" "}
        <img src={greater} alt="" className="w-8 h-8" />
      </p>
    </div>
  );
}
