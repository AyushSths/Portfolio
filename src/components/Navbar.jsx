import menu from "../assets/images/menu.png";
import Hirebtn from "./Navbar/Hirebtn";
import Logo from "./Navbar/Logo";
import MenuItems from "./Navbar/MenuItems";

export default function Navbar({
  isOpen,
  setOpen,
  menuItems,
  isactive,
  setActive,
}) {
  return (
    <>
      <div className="main-container">
        <div className="nav-items flex items-center justify-between xl:px-2 px-3 py-6 max-w-[1480px] m-auto">
          <Logo />
          <MenuItems
            menuItems={menuItems}
            isactive={isactive}
            setActive={setActive}
          />
          <Hirebtn />
          <div className="ham-menu cursor-pointer mr-3 ">
            <span onClick={() => setOpen(!isOpen)} className="">
              <img src={menu} alt="menu" className="w-9 h-9" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
