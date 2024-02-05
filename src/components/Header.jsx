import React from "react";
import { IoSearch } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center p-10  ">
      <div>
        <h1 className="text-lg sm:text-1xl lg:text-3xl px-3 font-sans hover:font-serif font-bold text-w text-blue-900 text-decoration: underline">
          Com Solutions
        </h1>
      </div>
      <div className="bg-white p-4 rounded-full flex items-center w-[200px] sm:w[300px] lg:w-[500px] lg:h-[50px]">
        <IoSearch size={30} className="mr-3" />
        <input className="bg-transparent p-2 focus:outline-none w-full "></input>
      </div>
      <div className="flex font-sans hover:font-serif ">
        <FaShoppingCart size={40} className="mr-5" />
        <RxAvatar size={40} className="mr-5" />
        <div className=" flex justify-center items-center text-xl font-semibold">
          Profile
        </div>
      </div>
    </div>
  );
};

export default Header;
