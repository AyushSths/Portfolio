import React from "react";
import ldin from "../../assets/images/linkedin.png";
import ldin2 from "../../assets/images/linkedin2.png";
import { Link } from "react-router-dom";

export default function Linkedinbtn() {
  return (
    <div className="group cursor-pointer transition-all duration-500 hover:rotate-[360deg] rounded-full inline-block relative md:w-11 md:h-11 w-9 h-9">
      <Link to="https://www.linkedin.com/in/ayush-shrestha-933027278/">
        {/* Default Image */}
        <img
          src={ldin}
          alt="LinkedIn"
          className="absolute inset-0 md:w-11 md:h-11 w-9 h-9 object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {/* Hover Image */}
        <img
          src={ldin2}
          alt="LinkedIn Hover"
          className="absolute inset-0 md:w-11 md:h-11 w-9 h-9 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </Link>
    </div>
  );
}
