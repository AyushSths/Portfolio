import React from "react";

import CVbutton from "./CVbutton";
import Githubbtn from "./Githubbtn";
import { Link } from "react-router-dom";
import Linkedinbtn from "./Linkedinbtn";

export default function Lsection() {
  return (
    <section className="l-section flex flex-col md:gap-y-6 gap-y-3 w-full">
      <div className="title">
        <div className="name flex flex-col gap-y-2">
          <p className="font-bold lg:text-5xl  md:text-3xl text-2xl ">
            <span className="text-blue-600">Hello,</span> It's Me
          </p>
          <span className="lg:text-7xl md:text-5xl text-4xl font-bold">
            Ayush Shrestha
          </span>
        </div>
        <div className="role md:mt-4 mt-1 flex">
          <p className="lg:text-4xl md:text-2xl text-xl font-bold inline-block">
            And I'm a{" "}
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
         Hi, I'm an aspiring web developer with a strong passion for creating clean, responsive, and user-friendly websites. I'm actively seeking internship or entry-level opportunities where I can apply my skills, gain real-world experience, and grow as a developer through hands-on projects and collaborative work environments.
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
