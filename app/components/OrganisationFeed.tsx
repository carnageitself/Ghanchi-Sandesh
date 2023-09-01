"use client"
import Image from "next/image";
import React, { useState } from "react";
import Img from "/public/engineer.jpeg";
import { data } from "../data/OrganizationData";
// import { PiDotsThreeOutlineVertical } from "react-icons/pi";
// import { BsShare } from "react-icons/bs";
// import { MdOutlineLocationOn } from "react-icons/md";

interface OrganizationProps {
  title: string;
  office: string;
  chairman: string;
  work: string;
  img: string;
}

const OrganisationFeed: React.FC = () => {
  const { title, office, chairman, work, img } = data as OrganizationProps;

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className="container w-full  h-full mb-16">
      <div className="org bg-white rounded-2xl h-[800px] mx-10 flex flex-col  items-center  ">
        <div className="top flex-1">
          <div className="container flex justify-around ">
            <div className="left ">
              <Image
                src={Img}
                width={500}
                height={300}
                alt="logo"
                className="p-10 img object-fill "
              />
            </div>
            <div className="right flex-1 ml-5  flex flex-col">
              <div className="top">
                <h1 className="text-3xl text-[#B80433] pl-10 pr-10  text-center font-semibold mt-10 ">
                  {data?.title}
                </h1>
              </div>
              <div className="bottom flex flex-col  mt-14">
                <div className="office flex-row">
                <h1 className="text-2xl text-[#B80433] font-semibold">
                  Office:{" "}
                  <span className="text-xl font-medium text-[#636363]">
                    {data?.office}
                  </span>
                </h1>
                
                <h1 className="text-2xl text-[#B80433] font-semibold">
                  Chairman:{" "}
                  <span className="text-xl font-medium text-[#636363]">
                    {data?.chairman}
                  </span>
                </h1>
                <h1 className="text-2xl text-[#B80433] font-semibold">
                  Work:{" "}
                  <span className="text-xl font-medium text-[#636363]">
                    {data?.work}
                  </span>
                </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom flex-1 mt-5">
          <div className="container flex gap-4 p-1 justify-between items-center">
            <Image
              src={Img}
              width={380}
              height={300}
              alt="logo"
              className="rounded-xl"
            />
            <Image
              src={Img}
              width={380}
              height={300}
              alt="logo"
              className="rounded-xl"
            />
            <Image
              src={Img}
              width={380}
              height={300}
              alt="logo"
              className=" rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <h1 className="text-5xl text-[#B80433] pl-10 pr-10  text-center font-semibold mt-10">
          Other Works
        </h1>

      
      </div> */}
      {/* <div className="otherWork bg-gray-100 w-full h-80 flex justify-between  mb-20 mt-18">
          <div className="left flex flex-col sm:flex-shrink-0 mx-10 flex-1">
            <h1 className="text-[#B80433] lg:text-5xl md:text-5xl font-bold sm:text-3xl">
              Samajik Dharmsha
            </h1>
            <p className="lg:text-lg md:text-lg font-medium mt-5 sm:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              autem adipisci quia ab in ducimus hic quisquam sequi nulla?
              Molestiae nobis nemo, est veritatis quasi unde blanditiis natus
              dignissimos vel.
            </p>
            <div className="flex items-center justify-between text-[#B80433] mt-5 text-base font-medium">
              <div className="flex items-center gap-3">
                <MdOutlineLocationOn size={25} />
                <span className="text-[#EC5D82]">location</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer  sm:text-sm">
                <BsShare size={25} />
                <span className="text-[#EC5D82]">Share</span>
              </div>
            </div>
          </div>
          <div className="right sm:shrink-0 sm:flex-row flex-1 flex justify-between mr-2">
            <Image
              src={Img}
              alt="logo"
              className="rounded-3xl md:w-[90%] md:h-full sm:w-[80%]  sm:h-[70%]"
            />
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
        </div> */}
    </div>
  );
};

export default OrganisationFeed;
