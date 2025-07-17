import React from "react";
import close from "../../assets/images/close.png";

export default function HamMenu({
  isOpen,
  setOpen,
  menuItems,
  isactive,
  setActive,
}) {
  return (
    <>
      {/* Optional: blurred dark overlay behind menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sliding Menu Panel */}
      <div
        className={`fixed top-0 right-0 w-[75%] h-screen bg-slate-900 z-50 p-8 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="cursor-pointer flex justify-end">
          <button onClick={() => setOpen(false)}>
            <img src={close} alt="close" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center items-center mt-20">
          <span className="text-4xl font-bold text-white">Ayush.</span>
        </div>

        <ul className="mt-25 text-white text-center text-lg space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              className={`transition hover:scale-105 cursor-pointer ${
                isactive === item
                  ? "text-blue-500 underline underline-offset-4 decoration-2"
                  : "hover:text-blue-600"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
