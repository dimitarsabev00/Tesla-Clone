import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import Tesla_Logo from "../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { logout } from "../store/slices/generalSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";

const Header = () => {
  const currentUser = useSelector(({ generalSlice }) => generalSlice.user);

  const [showAnotherMenu, setShowAnotherMenu] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOfApp = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="flex justify-between items-center font-bold px-12 p-4 text-sm fixed z-10 top-0 w-full bg-white rounded-b-lg 
     shadow-xl"
    >
      <div>
        <Link to="/">
          <img className="h-3" src={Tesla_Logo} alt="Tesla logo" />
        </Link>
      </div>
      <div className="hidden xl:inline ">
        <ul className="flex justify-center hover:cursor-pointer">
          <li
            className="py-1 px-3 hover:rounded hover:bg-black/5"
            onClick={() => scrollToSection("model-s")}
          >
            <a href="#">Model S</a>
          </li>
          <li
            className="py-1 px-3 hover:rounded hover:bg-black/5"
            onClick={() => scrollToSection("model-3")}
          >
            <a href="#">Model 3</a>
          </li>
          <li
            className="py-1 px-3 hover:rounded hover:bg-black/5"
            onClick={() => scrollToSection("model-x")}
          >
            <a href="#">Model X</a>
          </li>
          <li
            className="py-1 px-3 hover:rounded hover:bg-black/5"
            onClick={() => scrollToSection("model-y")}
          >
            <a href="#">Model Y</a>
          </li>
          <li
            className="py-1 px-3 hover:rounded hover:bg-black/5"
            onClick={() => scrollToSection("solar-panels")}
          >
            <a href="#">Solar Panels</a>
          </li>
          <li
            className="py-1 px-3 hover:rounded hover:bg-black/5"
            onClick={() => scrollToSection("solar-roof")}
          >
            <a href="#">Solar Roof</a>
          </li>
          <li
            className="py-1 px-3 hover:rounded hover:bg-black/5"
            onClick={() => scrollToSection("accessories")}
          >
            <a href="#">Accessories</a>
          </li>
        </ul>
      </div>
      <div className="hidden sm:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          {currentUser && (
            <li className="py-1.5 px-3 hover:rounded hover:bg-black/5">
              <IoCartOutline
                onClick={() => {
                  navigate("/shoppingCart");
                }}
              />
            </li>
          )}

          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <Link to="/shop">Shop</Link>
          </li>

          {currentUser && (
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <Link to="/account">Account</Link>
            </li>
          )}
          {currentUser ? (
            <li
              className="py-1 px-3 hover:rounded hover:bg-black/5"
              onClick={logoutOfApp}
            >
              <a href="#"></a>
              <Link>Sign Out</Link>
            </li>
          ) : (
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="#"></a>
              <Link to="/auth/sign-in">Sign In</Link>
            </li>
          )}

          <li
            onClick={handleOpenMenu}
            className="py-1 px-3 hover:rounded hover:bg-black/5 xl:hidden"
          >
            Menu
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <button
          onClick={() => {
            handleOpenMenu();
            setShowAnotherMenu(true);
          }}
          className="inline-flex items-center rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10"
        >
          Menu
        </button>
      </div>

      <div
        className={
          isOpenMenu
            ? " absolute right-0 top-0 w-80 h-full z-10 mt-[3.7rem]"
            : "fixed right-[-100%]"
        }
      >
        {/* <div className="flex justify-end pr-8 pt-8">
          
        </div> */}
        {showAnotherMenu ? (
          <ul className="pb-8 px-6 bg-white rounded-b-md shadow-2xl">
            <div className="flex justify-end pt-0 pr-0">
          <TfiClose
            onClick={handleOpenMenu}
            className="rounded p-1 hover:bg-black/5"
            size={28}
          />
        </div>
            <li
              className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
              onClick={() => {
                navigate("/shoppingCart");
                handleOpenMenu();
              }}
            >
              {currentUser && (
                <div
                  className="flex gap-3 items-center"
                  onClick={() => {
                  }}
                >
                  Shopping Cart{" "}
                  <li className="">
                    <IoCartOutline />
                  </li>
                </div>
              )}
            </li>
            <li
              className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
              onClick={() => {
                navigate("/shop");
                handleOpenMenu();
              }}
            >
              <div>Shop</div>
            </li>
            {currentUser && (
              <li
                className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
                onClick={() => {
                  navigate("/account");
                  handleOpenMenu();
                }}
              >
                <div>Account</div>
              </li>
            )}

            {currentUser ? (
              <li
                className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
                onClick={() => {
                  logoutOfApp();
                  handleOpenMenu();
                }}
              >
                <div>Sign Out</div>
              </li>
            ) : (
              <li
                className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
                onClick={() => {
                  navigate("/auth/sign-in");
                  handleOpenMenu();
                }}
              >
                <div>Sign In</div>
              </li>
            )}
          </ul>
        ) : (
          <ul className="py-8 px-6 bg-white rounded-b-md shadow-2xl">
            <div className="flex justify-end pt-0 pr-0">
          <TfiClose
            onClick={handleOpenMenu}
            className="rounded p-1 hover:bg-black/5"
            size={28}
          />
        </div>
            <li
              className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
              onClick={() => {
                scrollToSection("model-s");
                handleOpenMenu();
              }}
            >
              <div>Model S</div>
            </li>
            <li
              className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
              onClick={() => {
                scrollToSection("model-3");
                handleOpenMenu();
              }}
            >
              <div>Model 3</div>
            </li>
            <li
              className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
              onClick={() => {
                scrollToSection("model-y");
                handleOpenMenu();
              }}
            >
              <div>Model Y</div>
            </li>
            <li
              className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
              onClick={() => {
                scrollToSection("model-x");
                handleOpenMenu();
              }}
            >
              <div>Model X</div>
            </li>
            <li
              className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
              onClick={() => {
                scrollToSection("solar-panels");
                handleOpenMenu();
              }}
            >
              <div>Solar Panels</div>
            </li>
            <li
              className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
              onClick={() => {
                scrollToSection("solar-roof");
                handleOpenMenu();
              }}
            >
              <div>Solar Roof</div>
            </li>
            <li
              className="py-3 pl-3 hover:rounded hover:bg-black/5 cursor-pointer"
              onClick={() => {
                scrollToSection("accessories");
                handleOpenMenu();
              }}
            >
              <div>Accessories</div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
