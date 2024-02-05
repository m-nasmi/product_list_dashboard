import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-start justify-start m-4 text-3xl font-sans hover:font-serif font-bold text-w text-blue-900">
          Com Solutions
        </div>
        <button className="flex items-start justify-start m-4 text-2xl font-semibold font-sans hover:font-serif text-cyan-500 ">
          Privacy Policy
        </button>
        <button className="flex items-start justify-start m-4 text-2xl font-semibold font-sans hover:font-serif text-cyan-500 ">
          Terms of Use
        </button>
      </div>
      <div className="flex justify-start items-start m-4 gap-6">
        <IoLogoInstagram className="cursor-pointer" size={20} />
        <RiTwitterXLine className="cursor-pointer" size={20} />
        <BiLogoFacebookCircle className="cursor-pointer" size={20} />
        <FaLinkedin className="cursor-pointer" size={20} />
      </div>
      <div className="flex justify-evenly items-baseline m-4 text-md font-semibold">
        © 2023 Muhammed Nasmi. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
