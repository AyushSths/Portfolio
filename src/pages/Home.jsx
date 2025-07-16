import React from 'react'
import { Link } from "react-router-dom";
import ldin from "../assets/images/linkedin.png"
import ldin2 from "../assets/images/linkedin2.png"
import github from "../assets/images/github.png"
import github2 from "../assets/images/github2.png"
import downloads from "../assets/images/downloads.png"
import photo from "../assets/images/photo-2.png"

export default function Home() {
  return (
    <div className='main-home max-w-[1480px] m-auto md:pt-75 pt-15 2xl:px-3 px-6'>
      <div className="home md:gap-x-[40px] gap-y-[10px]">
        <section className="l-section flex flex-col md:gap-y-6 gap-y-3 w-full">
            <div className="title">
                <div className="name">
                    <span className='lg:text-7xl md:text-5xl text-4xl font-bold'>Ayush Shrestha</span>
                </div>
                <div className='role md:mt-2 mt-1 flex'>
                    <p className='lg:text-5xl md:text-2xl text-xl font-bold inline-block'>I'm a <span className='text-transparent' style={{ "--i": 2 }} data-text="Web Developer">Web Developer</span><span className='text-transparent' style={{ "--i": 1 }} data-text="Frontend Developer">Frontend Developer</span>
                    </p>
                </div>
            </div>
            <div className="des">
                <p className='lg:text-lg md:text-base text-sm'>Aspiring web developer actively seeking internship or entry-level opportunities to begin my career in web development. Eager to apply my technical skills and passion for building user-friendly, responsive web 
                applications in a professional setting. Looking forward to gaining real-world experience and growing as a 
                developer through hands-on work and collaboration.
                </p>
            </div>
            <div className="btns flex lg:text-xl md:text-lg text-sm items-center gap-y-5 lg:gap-x-10">
                <div className="CV-btn inline-block">
                    <button className="group relative overflow-hidden px-5 py-2 rounded-3xl bg-blue-500 font-semibold text-black cursor-pointer border-2 border-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
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
                <div className="social-links flex gap-5 ">
                    {/* <div className="linkedi cursor-pointer transform transition-transform duration-400  hover:rotate-360">
                        <img src={linkedin} alt="" className='w-11'/>
                    </div>  */}
                    {/* <div className="github cursor-pointer  transform transition-transform duration-400  hover:rotate-360">
                        <img src={github} alt="" className='w-10'/>
                    </div> */}

                    <div className="group cursor-pointer transition-all duration-500 hover:rotate-[360deg] rounded-full p-2 inline-block relative md:w-11 md:h-11 w-9 h-9">
                        <Link to ='https://www.linkedin.com/in/ayush-shrestha-933027278/'>
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

                    <div className="group cursor-pointer transition-all duration-500 hover:rotate-[360deg] rounded-full p-2 inline-block relative md:w-11 md:h-11 w-8 h-8">
                        <Link to ='https://github.com/AyushSths'>
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

                    
                </div>
            </div>
        </section>
        <section className="r-section w-full">
            <div className="photo flex justify-center items-start relative lg:-top-45 -top-10">
                <div className='img-border border-blue-500 border-r-[8px] border-l-[8px] border-double rounded-full drop-shadow-[0_0_35px_rgba(59,130,246,0.6)] overflow-y-hidden absolute my-spin'>
                </div>
                <div className="img-sec flex items-center justify-center overflow-hidden rounded-full z-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                    <img
                        src={photo}
                        alt="Ayush"
                        className="object-cover relative top-10"
                    />
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}
