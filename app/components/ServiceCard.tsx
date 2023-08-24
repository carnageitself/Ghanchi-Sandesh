import Image from 'next/image'
import React from 'react'
import Img from "/public/engineer.jpeg";
import { data } from '../data/OrganizationData';

const ServiceCard = () => {
  return (
    <div className="servicesfeed mt-10 w-[50%] h-full bg-white flex flex-col mb-10 rounded-3xl">
        <div className="top flex items-center justify-center h-[50vh]">
        <Image
                  src={Img}
                 width={680}
                 height={500}
                  alt="logo"
                  className="px-10 pt-28 rounded-xl"
                />
        </div>
       <div className="bottom flex flex-col mt-20">
       <div className="top mx-10">
                  <h1 className="text-3xl text-[#B80433] font-semibold mt-10">
                   {data?.title}
                  </h1>
                </div>
                <div className="bottom flex flex-col mt-10 mx-10 mb-10">
                  <h1 className="text-2xl text-[#B80433] font-semibold">
                    Admin:{" "}
                    <p className="text-xl font-medium text-[#636363]">
                     {data?.office}
                    </p>
                  </h1>
                  <h1 className="text-2xl text-[#B80433] font-semibold">
                    Address:{" "}
                    <p className="text-xl font-medium text-[#636363]">
                      {data?.chairman}
                    </p>
                  </h1>
                  <h1 className="text-2xl text-[#B80433] font-semibold">
                    Phone Number:{" "}
                    <p className="text-xl font-medium text-[#636363]">
                     {data?.work}
                    </p>
                  </h1>
                  <h1 className="text-2xl text-[#B80433] font-semibold">
                    Helpline Number:{" "}
                    <p className="text-xl font-medium text-[#636363]">
                     {data?.work}
                    </p>
                  </h1>
                </div>
       </div>
    </div>
  )
}

export default ServiceCard