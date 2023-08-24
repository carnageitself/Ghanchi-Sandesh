import Image from "next/image";
import React from "react";
import Img from "/public/engineer.jpeg";

const OrganisationFeed = () => {
  return (
    <div className="">
      <div className="container w-full h-full mb-16">
        <div className="org bg-white rounded-2xl h-[800px] mx-10 flex flex-col justify-between">
          <div className="top flex-1">
            <div className="container flex justify-around">
              <div className="left">
                <Image
                  src={Img}
                  width={500}
                  height={300}
                  alt="logo"
                  className="p-10 rounded-xl"
                />
              </div>
              <div className="right flex-1 flex flex-col">
                <div className="top">
                  <h1 className="text-3xl text-[#B80433] font-semibold mt-10">
                    Shree Sawlaji Sanstha, Ghanchi Samaj, Bheenmal
                  </h1>
                </div>
                <div className="bottom flex flex-col mt-14">
                  <h1 className="text-2xl text-[#B80433] font-semibold">
                    Office:{" "}
                    <p className="text-xl font-medium text-[#636363]">
                      Lorem ipsum hsgud oijdhsdhd ihdufgd bn
                    </p>
                  </h1>
                  <h1 className="text-2xl text-[#B80433] font-semibold">
                    Chairman:{" "}
                    <p className="text-xl font-medium text-[#636363]">
                      Lorem ipsum hsgud oijdhsdhd ihdufgd bn
                    </p>
                  </h1>
                  <h1 className="text-2xl text-[#B80433] font-semibold">
                    Work:{" "}
                    <p className="text-xl font-medium text-[#636363]">
                      Lorem ipsum hsgud oijdhsdhd ihdufgd bn
                    </p>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom flex-1 mt-5">
            <div className="container flex justify-between items-center">
            <Image
                  src={Img}
                 width={480}
                 height={400}
                  alt="logo"
                  className="p-5 rounded-xl"
                />
                  <Image
                  src={Img}
                  width={480}
                  height={400}
                  alt="logo"
                  className="p-5 rounded-xl"
                />
                  <Image
                  src={Img}
                  width={480}
                  height={400}
                  alt="logo"
                  className="p-5 rounded-xl"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationFeed;
