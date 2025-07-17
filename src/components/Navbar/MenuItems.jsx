import React from "react";

export default function MenuItems({ menuItems, isactive, setActive }) {
  return (
    <div className="items show text-[20px] ">
      <ul className="flex gap-8 cursor-pointer">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`underline-animate transform transition duration-300 hover:scale-105 
                        ${
                          isactive === item
                            ? "text-blue-500 underline rounded-1 underline-offset-5 decoration-[3px] after:scale-x-100"
                            : "hover:text-blue-600"
                        }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
