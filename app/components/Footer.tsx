import Image from "next/image";
import React from "react";
import Img from "/public/logo.png";
import { IoIosCall } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="relative bg-[#EC5D82] min-h-[200px] text-white text-[15px] p-[20px] py-[50px] justify-between  max-w-[1400px] m-auto flex flex-col md:flex-row items-center gap-[30px] md:items-start w-full ">
      <div className=" flex flex-col items-center md:items-start gap-[5px]">
        <span className="logo">
          <Image src={Img} className="" width={150} height={100} alt="logo" />
        </span>
        <p className="text-[15px] max-w-[350px]">
          Address: orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          eu turpis molestie
        </p>
        <div className="flex gap-[15px] items-center text-[15px]">
          <IoIosCall />
          <span>+91 9956124789</span>
        </div>
      </div>
      <div className="flex items-center md:items-end flex-col gap-[25px]">
        <div className="flex gap-[25px]">
          <span className="cursor-pointer hover:opacity-80" >About</span>
          <span className="cursor-pointer hover:opacity-80">Contacts</span>
          <span className="cursor-pointer hover:opacity-80">Careers</span>
          <span className="cursor-pointer hover:opacity-80">Coupons</span>
        </div>
        <div className="flex gap-[25px] justify-end items-center">
          <BsLinkedin size={25}   className="cursor-pointer hover:opacity-80"  />
          <AiOutlineTwitter size={28} className="cursor-pointer hover:opacity-80"   />
          <GrInstagram size={25}    className="cursor-pointer hover:opacity-80"  />
          <BsFacebook size={25}       className="cursor-pointer hover:opacity-80"  />
        </div>
      </div>
      <span className="text-center bottom-[10px] absolute left-0 right-0 mx-auto">
        Privacy Policy Do not sell my personal info Terms of Service
      </span>
    </div>
  );
};

export default Footer;
