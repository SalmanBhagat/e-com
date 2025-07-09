// components/Button.jsx

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  isShowIcon = true,
}) => {
  const baseStyle = "p-[2px] rounded-[60px] cursor-pointer transition-all duration-300 hover:bg-[#c56454] hover:scale-105 ";

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  };

  return (
    <button type={type} className={baseStyle + " " + variants[variant] + " flex justify-center items-center"}>
      {isShowIcon && 
      <span className="w-[52px] h-[52px] bg-white text-primary rounded-full flex justify-center items-center">
        <FaArrowRight size={18}/>
      </span>
      }
      <span className="pl-[39px] pr-[73px] text-[18px]">{children}</span>
      </button>
  );
};

export default Button;
