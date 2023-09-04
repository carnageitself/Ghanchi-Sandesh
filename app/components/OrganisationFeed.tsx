"use client";
import Image from "next/image";
import React, { useState } from "react";
import Img from "/public/engineer.jpeg";
import { data } from "../data/OrganizationData";

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
    <>
      <div className="container mx-auto p-4 bg-white shadow-md mb-10">
      <div className="bg-white rounded-lg  lg:flex items-center">
          {/* <!-- Left Image --> */}
          <div className="lg:w-1/2">
            <Image
              src={Img}
              // width={420}
              // height={320}
              alt="Achivment_page"
              className=" sm:w-11/12 md:w-2/4 lg:w-10/12 rounded-lg lg:rounded-l-lg lg:rounded-t-none"

            />
          </div>

          {/* <!-- Right Content --> */}
          <div className="lg:w-1/2 p-4 ">
            <div className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Title:</span> {title}{" "}
            </div>
            <div className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Office :</span>{" "}
              {office}{" "}
            </div>
            <div className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Chairman :</span>{" "}
              {chairman}{" "}
            </div>
            <div className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Work :</span> {work}{" "}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between ">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={Img}
                alt="Achivment_page"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={Img}
                alt="Achivment_page"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={Img}
                alt="Achivment_page"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </>

    //     <div className="cursor-pointer  mt-3">
    //       <PiDotsThreeOutlineVertical size={25} />
    //       {open1 && (
    //         <div className="options absolute top-[765px] right-6 ml-10 my-5 bg-white border flex flex-col w-[200px] font-normal rounded-xl">
    //           <span className="link hover:bg-gray-100 p-3 hover:rounded-tl-xl text-base font-medium">
    //             edit
    //           </span>
    //           <span className="link hover:bg-gray-100 p-3 hover:rounded-bl-xl text-base font-medium">
    //             delete
    //           </span>
    //         </div>
    //       )}
    //       {open2 && (
    //         <div className="options absolute top-[1165px] right-6 ml-10 my-5 bg-white border flex flex-col w-[200px] font-normal rounded-xl">
    //           <span className="link hover:bg-gray-100 p-3 hover:rounded-tl-xl text-base font-medium">
    //             edit
    //           </span>
    //           <span className="link hover:bg-gray-100 p-3 hover:rounded-bl-xl text-base font-medium">
    //             delete
    //           </span>
    //         </div>
    //       )}
    //       {open3 && (
    //         <div className="options absolute top-[1565px] right-6 ml-10 my-5 bg-white border flex flex-col w-[200px] font-normal rounded-xl">
    //           <span className="link hover:bg-gray-100 p-3 hover:rounded-tl-xl text-base font-medium">
    //             edit
    //           </span>
    //           <span className="link hover:bg-gray-100 p-3 hover:rounded-bl-xl text-base font-medium">
    //             delete
    //           </span>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default OrganisationFeed;
