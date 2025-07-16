// import { useState } from 'react'
import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HamMenu from "./components/Navbar/HamMenu";
import Home from "./pages/Home";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isactive, setActive] = useState("Home");
  const menuItems = ["Home", "Skills", "Education", "Projects", "Contact"];

  return (
    <>
      <BrowserRouter>
        {/* <div className={`${isOpen == true?'blur-sm':''} transition duration-300`}>
        <Navbar isOpen={isOpen} setOpen={setOpen} menuItems={menuItems} isactive={isactive} setActive={setActive} />
      </div> */}
        <Navbar
          isOpen={isOpen}
          setOpen={setOpen}
          menuItems={menuItems}
          isactive={isactive}
          setActive={setActive}
        />
        <Home />
        <HamMenu
          isOpen={isOpen}
          setOpen={setOpen}
          menuItems={menuItems}
          isactive={isactive}
          setActive={setActive}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
