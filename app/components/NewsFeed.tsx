import React from "react";
import Image from "next/image";
import Img from "/public/engineer.jpeg";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { data } from "../data/NewsData";

interface NewsData {
  title: string;
  description: string;
  location: string;
  img: string;
}

const NewsFeed: React.FC = () => {
  const { title, description, location, img } = data as NewsData;

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
      <div className="right flex-1">
        <Image
          src={Img}
          alt="logo"
          className="rounded-3xl w-[90%] h-full ml-5"
        />
      </div>
    </div>
  );
};

export default NewsFeed;
