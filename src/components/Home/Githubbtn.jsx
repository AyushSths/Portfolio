import React from "react";
import github from "../../assets/images/github.png";
import github2 from "../../assets/images/github2.png";
import { Link } from "react-router-dom";

export default function Githubbtn() {
  return (
    <div className="group cursor-pointer transition-all duration-500 hover:rotate-[360deg] rounded-full p-2 inline-block relative md:w-11 md:h-11 w-8 h-8">
      <Link to="https://github.com/AyushSths">
        {/* Default Image */}
        <img
          src={github}
          alt="github"
          className="absolute inset-0 md:w-11 md:h-11 w-8 h-8 object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Hover Image */}
        <img
          src={github2}
          alt="github Hover"
          className="absolute inset-0 md:w-11 md:h-11 w-8 h-8 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </Link>
    </div>
  );
}
