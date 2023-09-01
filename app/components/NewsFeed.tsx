"use client";
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
    <>
      <div className="pt-6 pb-12">
        <div className="">
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow  mt-4 w-100 mx-2"
            >
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h1 className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl">
                  {title}
                </h1>
                <p className="mt-2 text-lg">{description}</p>
                <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                  <span className="flex text-[#EC5D82] text-md">
                    {" "}
                    <MdOutlineLocationOn size={20} /> {location}{" "}
                  </span>
                  <span className="flex text-[#EC5D82]">
                    <BsShare size={20} />{" "}
                    <span className="text-md ml-1">Share </span>
                  </span>
                </div>
              </div>
              <div className="h-auto w-auto md:w-1/2">
                <Image
                  className="inset-0 h-full w-full object-cover object-center"
                  src={Img}
                  alt="News_feed_img"
                />
              </div>
              <div className="cursor-pointer  mt-3">
                <PiDotsThreeOutlineVertical size={25} />
                {open1 && (
                  <div className="options absolute top-[765px] right-6 ml-10 my-5 bg-white border flex flex-col w-[200px] font-normal rounded-xl">
                    <span className="link hover:bg-gray-100 p-3 hover:rounded-tl-xl text-base font-medium">
                      edit
                    </span>
                    <span className="link hover:bg-gray-100 p-3 hover:rounded-bl-xl text-base font-medium">
                      delete
                    </span>
                  </div>
                )}
                {open2 && (
                  <div className="options absolute top-[1165px] right-6 ml-10 my-5 bg-white border flex flex-col w-[200px] font-normal rounded-xl">
                    <span className="link hover:bg-gray-100 p-3 hover:rounded-tl-xl text-base font-medium">
                      edit
                    </span>
                    <span className="link hover:bg-gray-100 p-3 hover:rounded-bl-xl text-base font-medium">
                      delete
                    </span>
                  </div>
                )}
                {open3 && (
                  <div className="options absolute top-[1565px] right-6 ml-10 my-5 bg-white border flex flex-col w-[200px] font-normal rounded-xl">
                    <span className="link hover:bg-gray-100 p-3 hover:rounded-tl-xl text-base font-medium">
                      edit
                    </span>
                    <span className="link hover:bg-gray-100 p-3 hover:rounded-bl-xl text-base font-medium">
                      delete
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* <!--/ card--> */}
        </div>
        {/* <!--/ flex--> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default NewsFeed;
