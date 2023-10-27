import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import Tesla_Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div className="flex justify-between items-center font-bold px-12 p-4 text-sm sticky z-10 top-0 left-0 right-0 bottom-0">
      <div>
        <Link to="/">
          <img className="h-3" src={Tesla_Logo} alt="Tesla logo" />
        </Link>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="#">Model S</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="#">Model 3</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="#">Model X</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="#">Model Y</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="#">Solar Roof</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="#">Solar Panels</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="#">Shop</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="#"></a>
            <Link to="/login">Login</Link>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <Link to="/account">Account</Link>
          </li>
          <li
            onClick={handleOpenMenu}
            className="py-1 px-3 hover:rounded hover:bg-black/5"
          >
            Menu
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={handleOpenMenu}
          className="inline-flex items-center rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10"
        >
          Menu
        </button>
      </div>

      <div
        className={
          isOpenMenu
            ? "bg-white absolute right-0 top-0 w-80 h-full z-10"
            : "fixed right-[-100%]"
        }
      >
        <div className="flex justify-end pr-8 pt-8">
          <TfiClose
            onClick={handleOpenMenu}
            className="rounded p-1 hover:bg-black/5"
            size={28}
          />
        </div>
        <ul className="pt-8 px-6">
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Model S</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Model 3</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Model X</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Model Y</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Solar Roof</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Solar Panels</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Existing Inventory</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Used Inventory</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Trade-In</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Test Drive</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Insurance</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="#">Powerwall</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
