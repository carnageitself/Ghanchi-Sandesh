"use client"
import Image from "next/image";
import React, { useState } from "react";
import Img from "/public/logo.png";
import { Divide as Hamburger } from 'hamburger-react'
import { IoIosCall } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar w-full max-w-[1400px]  text-[#D03E64] shadow-xl">
      <div className="h-[30px] bg-[#B80433] w-full text-white flex items-center justify-center">
      <div className="flex items-center gap-1">
          <IoIosCall size={22}/>
          <span>+91 9956124789</span>
        </div>
      </div>
      <div className="conatiner mx-auto flex items-center justify-between p-[20px] h-[72px] top-[30px]">
        <div className="logo flex items-center">
        <Image src={Img} className="" width={150} height={100} alt="logo" />
        </div>
        <div className="nav gap-12 flex items-center justify-between text-xl font-medium">
          <span className="cursor-pointer">टॉप न्यूज़</span>
          <Link href='/community' className="cursor-pointer">सामाजिक</Link>
          <span className="cursor-pointer">धार्मिक</span>
          <span className="cursor-pointer">शेक्शनिक</span>
          <span className="cursor-pointer">अन्य</span>
        </div>
        <div className="menu"><Hamburger size={22}/></div>
      </div>
    </div>
  )
}

export default Navbar;