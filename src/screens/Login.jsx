/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { auth } from "../configs/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/generalSlice";
import Tesla_Logo from "../assets/images/logo.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        toast.success("Successful login to your account!");
        navigate("/account");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className=" p-[25px] pt-[15px] h-screen flex flex-col gap-[70px]">
      <div className="flex items-center justify-between sticky top-[0px]">
        <div>
          <Link to="/">
            {" "}
            <img
              src={Tesla_Logo}
              alt="Tesla Clone Logo"
              className="object-contain w-[90px]"
            />
          </Link>
        </div>
        <div className="flex gap-[10px] items-center cursor-pointer px-[5px] py-[10px] rounded-full text-base transition duration-200 hover:bg-opacity-50">
          <GrLanguage />
          <span className="font-medium">EN</span>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] min-w-[330px] mx-auto">
        <h1 className="font-medium text-3xl ml-[-10px]">Sign In</h1>
        <form className="flex flex-col">
          <label
            htmlFor="email"
            className="text-gray-700 font-medium text-base pl-[5px] pb-[5px]"
          >
            Email Address
          </label>
          <input
            className="mb-[30px] bg-gray-100 border border-gray-100 focus:border-gray-200 outline-none rounded-full 
            py-[12px] px-[20px] text-gray-800 font-semibold"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="password"
            className="text-gray-700 font-medium text-base pl-[5px] pb-[5px]"
          >
            Password
          </label>
          <input
            className="mb-[30px] bg-gray-100 border border-gray-100 focus:border-gray-200 outline-none rounded-full 
            py-[12px] px-[20px] text-gray-800 font-semibold"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-600 border-none py-[12px] px-[40px] rounded-full text-white uppercase font-bold cursor-pointer outline-none mb-[30px] transition duration-400 transform hover:bg-blue-500"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mb-[20px]">
          <hr className="w-[40%] h-0 opacity-30" />{" "}
          <span className="font-medium text-gray-700 mt-[-10px]">OR</span>
          <hr className="w-[40%] h-0 opacity-30" />
        </div>
        <Link to="/auth/sign-up">
          <button className="border-[3px] border-black w-full py-[10px] px-[40px] rounded-full uppercase text-black font-semibold cursor-pointer transition duration-200 ease-in-out outline-none hover:bg-black hover:text-white">
            Create account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
