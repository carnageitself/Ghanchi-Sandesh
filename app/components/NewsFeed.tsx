"use client"
import React, { useState } from "react";
import Image from "next/image";
import Img from "/public/engineer.jpeg";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { data } from "../data/NewsData";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

interface NewsData {
  title: string;
  description: string;
  location: string;
  img: string;
}

const NewsFeed: React.FC = () => {
  const { title, description, location, img } = data as NewsData;

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="newsfeed bg-gray-100 w-full h-80 flex justify-between mb-20">
      <div className="left flex flex-col mx-10 flex-1">
        <h1 className="text-[#B80433] text-5xl font-bold">{title}</h1>
        <p className="text-lg font-medium mt-5">{description}</p>
        <div className="flex items-center justify-between text-[#B80433] mt-16 text-base font-medium">
          <div className="flex items-center gap-3">
            <MdOutlineLocationOn size={25} />
            <span className="text-[#EC5D82]">{location}</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <BsShare size={25} />
            <span className="text-[#EC5D82]">Share</span>
          </div>
        </div>
      </div>
      <div className="right flex-1 flex justify-between mr-5">
        <Image src={Img} alt="logo" className="rounded-3xl w-[90%] h-full" />
        <div className="cursor-pointer mr-2 mt-3">
          <PiDotsThreeOutlineVertical size={25} />
          {open1 && (
          <div className="options absolute top-[765px] right-6 ml-10 my-5 bg-white border flex flex-col w-[200px] font-normal rounded-xl">
            <span className="link hover:bg-gray-100 p-3 hover:rounded-tl-xl text-base font-medium">edit</span>
            <span className="link hover:bg-gray-100 p-3 hover:rounded-bl-xl text-base font-medium">delete</span>
          </div>
        )}
        {open2 && (
          <div className="options absolute top-[1165px] right-6 ml-10 my-5 bg-white border flex flex-col w-[200px] font-normal rounded-xl">
            <span className="link hover:bg-gray-100 p-3 hover:rounded-tl-xl text-base font-medium">edit</span>
            <span className="link hover:bg-gray-100 p-3 hover:rounded-bl-xl text-base font-medium">delete</span>
          </div>
        )}
        {open3 && (
          <div className="options absolute top-[1565px] right-6 ml-10 my-5 bg-white border flex flex-col w-[200px] font-normal rounded-xl">
            <span className="link hover:bg-gray-100 p-3 hover:rounded-tl-xl text-base font-medium">edit</span>
            <span className="link hover:bg-gray-100 p-3 hover:rounded-bl-xl text-base font-medium">delete</span>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
