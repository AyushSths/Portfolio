import React from 'react'
import photo from "../../assets/images/photo-2.png"

export default function Rsection() {
  return (
    <section className="r-section w-full">
            <div className="photo flex justify-center items-start relative lg:-top-30 -top-10">
                <div className='img-border border-blue-600 border-r-[8px] border-l-[8px] border-double rounded-full drop-shadow-[0_0_35px_rgba(59,130,246,0.6)] overflow-y-hidden absolute my-spin'>
                </div>
                <div className="img-sec flex items-center justify-center overflow-hidden rounded-full z-10 drop-shadow-[0_0_20px_rgba(30,64,175,0.6)]">
                    <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-b from-transparent to-slate-950 z-10 pointer-events-none rounded-b-full" />                          
                        {/* Image */}
                        <img
                            src={photo}
                            alt="Ayush"
                            className="object-cover relative z-0"
                        />
                </div>
            </div>
    </section>
  )
}
