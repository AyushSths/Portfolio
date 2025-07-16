import React from "react";

import CVbutton from "./CVbutton";
import Githubbtn from "./Githubbtn";
import { Link } from "react-router-dom";
import Linkedinbtn from "./Linkedinbtn";

export default function Lsection() {
  return (
    <section className="l-section flex flex-col md:gap-y-6 gap-y-3 w-full">
      <div className="title">
        <div className="name">
          <span className="lg:text-7xl md:text-5xl text-4xl font-bold">
            Ayush Shrestha
          </span>
        </div>
        <div className="role md:mt-2 mt-1 flex">
          <p className="lg:text-5xl md:text-2xl text-xl font-bold inline-block">
            I'm a{" "}
            <span
              className="text-transparent"
              style={{ "--i": 2 }}
              data-text="Web Developer"
            >
              Web Developer
            </span>
            <span
              className="text-transparent"
              style={{ "--i": 1 }}
              data-text="Frontend Developer"
            >
              Frontend Developer
            </span>
          </p>
        </div>
      </div>
      <div className="des">
        <p className="lg:text-lg md:text-base text-sm">
          Aspiring web developer actively seeking internship or entry-level
          opportunities to begin my career in web development. Eager to apply my
          technical skills and passion for building user-friendly, responsive
          web applications in a professional setting. Looking forward to gaining
          real-world experience and growing as a developer through hands-on work
          and collaboration.
        </p>
      </div>
      <div className="btns flex lg:text-xl md:text-lg text-sm items-center gap-y-5 lg:gap-x-10">
        <CVbutton />
        <div className="social-links flex gap-5 ">
          {/* <div className="linkedi cursor-pointer transform transition-transform duration-400  hover:rotate-360">
                        <img src={linkedin} alt="" className='w-11'/>
                    </div>  */}
          {/* <div className="github cursor-pointer  transform transition-transform duration-400  hover:rotate-360">
                        <img src={github} alt="" className='w-10'/>
                    </div> */}

          <Linkedinbtn />
          <Githubbtn />
        </div>
      </div>
    </section>
  );
}
