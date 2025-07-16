// import React, { useState } from 'react'
import menu from "../assets/images/menu.png"
import greater from "../assets/images/greater-than.png"
import lesser from "../assets/images/less-than.png"

export default function Navbar({isOpen,setOpen,menuItems,isactive,setActive}) {

    

  return (
    <>
    <div className='main-container'>
        <div className="nav-items flex items-center justify-between xl:px-2 px-3 py-6 max-w-[1480px] m-auto">
            <div className="logo cursor-pointer md:ml-0 ml-3">
                <p className='text-4xl flex items-center'>
                  <img src={lesser} alt="" className='w-8 h-8'/> <span className="font-bold">Ayush</span> <img src={greater} alt="" className='w-8 h-8'/> 
                </p>
            </div>
            <div className="items show text-[20px] ">
                <ul className="flex gap-8 cursor-pointer">
                    {menuItems.map((item) => (
                        <li key={item} onClick={() => setActive(item)} className={`underline-animate transform transition duration-300 hover:scale-105 
                        ${isactive === item ? 'text-blue-400 underline rounded-1 underline-offset-5 decoration-[3px] after:scale-x-100' : 'hover:text-blue-500'}`}>
                        {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-show">
                <button className="relative overflow-hidden px-5 py-2 rounded-3xl bg-white font-semibold text-black group cursor-pointer">
                  <span className="relative z-10 transition duration-300 group-hover:text-white text-[18px]">
                    Hire Me
                  </span>
                  <span className="absolute inset-0 rounded-3xl bg-blue-500 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100 z-0" />
                </button>
            </div>
            <div className="ham-menu cursor-pointer mr-3 ">
              <span onClick={()=>setOpen(!isOpen)} className=''>
                <img src={menu} alt="menu" className='w-9 h-9'/>
              </span>
            </div>
        </div>
        
    </div>
    </>
  )
}
