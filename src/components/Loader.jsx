import React from "react";

export default function Loader() {
  const bars = [" ", " ", " ", " ", " ", " "];

  return (
    <>
      <div className="bars-animation flex absolute w-[100%] h-[100%] -z-1">
        {bars.map((bar, index) => {
          return (
            <div
              key={index}
              className="bars bg-slate-900 w-[100%] h-[100%]"
              style={{ "--i": index }}
            ></div>
          );
        })}
      </div>
    </>
  );
}
