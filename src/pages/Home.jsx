import React from "react";
import Lsection from "../components/Home/Lsection";
import Rsection from "../components/Home/Rsection";

export default function Home() {
  return (
    <div className="main-home max-w-[1480px] m-auto lg:pt-60 md:pt-25 pt-15 2xl:px-3 px-6">
      <div className="home md:gap-x-[80px] gap-y-[10px]">
        <Lsection />
        <Rsection />
      </div>
    </div>
  );
}
