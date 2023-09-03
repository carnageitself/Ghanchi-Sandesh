import Image from "next/image";
import React from "react";
import Img from "@/public/engineer.jpeg";
import { data } from "../data/Servicedata";

import { MdOutlineLocationOn } from "react-icons/md";
const ServiceCard = () => {
  return (
    <>
        {/* <!-- Column --> */}
        <div className="my-1 px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          {/* <!-- Article --> */}
          <article className="overflow-hidden rounded-lg shadow-lg">
            <div className="img__main__container  -pt-5">
              <div className="relative top-14  right-9 justify-end flex flex-row whitespace-nowrap items-center ">
                <MdOutlineLocationOn color="white" size="20" />
                <span className="font-bold text-md text-white ">location</span>
              </div>
              <a href="#" className="inline-flex">
                <Image
                  src={Img}
                  width={680}
                  height={500}
                  alt="logo"
                  className="block h-auto w-full p-5  img__radius"
                />
              </a>
            </div>
            <header className="flex gap-1.5 flex-col leading-tight p-2 md:p-4 mb-4">
              <h1 className="text-2xl">
                <a
                  className="no-underline hover:underline font-extrabold text-[#B80433]"
                  href="#"
                >
                  {data?.title}
                </a>
              </h1>
              <div className="wrapper flex align-baseline flex-row ">
                <h3 className="text-[#b80433] font-bold text-md">Address:</h3>
                <span className="text-dark-gray ">{data?.address}</span>
              </div>
              <div className="wrapper flex flex-row ">
                <h3 className="text-[#B80433]  text-md font-bold">Phone:</h3>
                <span className="text-dark-gray ">{data?.phone_number}</span>
              </div>
              <div className="wrapper flex flex-row ">
                <h3 className="text-[#B80433] text-md font-bold">
                  Helpline Number:
                </h3>
                <span className="text-dark-gray "> {data?.helpline_number}</span>
              </div>
         
            </header>
          </article>
          {/* <!-- END Article --> */}
        </div>
        {/* <!-- END Column --> */}
   
    </>
  );
};

export default ServiceCard;