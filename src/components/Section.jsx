/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="pt-[15vh] text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm p-2">{description}</p>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center text-sm lg:flex-row mb-[50px]">
          <a href="#">
            <button className="rounded-md bg-[#393c41] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white">
              {leftBtnText}
            </button>
          </a>
          {rightBtnText && (
            <button className="rounded-md bg-[#f4f4f4] w-96 lg:w-64 h-10 lg:mx-4 mt-2">
              {rightBtnText}
            </button>
          )}
        </div>
        <div className="flex justify-center animate-bounce mt-[20px] h-[40px]">
          <FiChevronDown size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Section;
