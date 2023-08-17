import React from "react";
import Image from "next/image";
import Img from "/public/engineer.jpeg";
import {MdOutlineLocationOn} from "react-icons/md"
import {BsShare} from "react-icons/bs"

const NewsFeed = () => {
  return (
    <div className="newsfeed bg-gray-100 w-full h-80 flex justify-between mb-20">
      <div className="left flex flex-col mx-10 flex-1">
        <h1 className="text-[#B80433] text-5xl font-bold">Netra Chikitsa</h1>
        <p className="text-lg font-medium mt-5">
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra,
        </p>
        <div className="flex items-center justify-between text-[#B80433] mt-16 text-base font-medium">
        <div className="flex items-center gap-3">
          <MdOutlineLocationOn size={25}/>
          <span className="text-[#EC5D82]">Location</span>
        </div>
        <div className="flex items-center gap-3">
          <BsShare size={25}/>
          <span className="text-[#EC5D82] ">Share</span>
        </div>
        </div>
      </div>
      <div className="right flex-1">
        <Image
          src={Img}
          alt="logo"
          className="rounded-3xl w-[90%] h-full ml-5"
        ></Image>
      </div>
    </div>
  );
};

export default NewsFeed;