import React from "react";
import ServicesFeed from "../components/ServiceFeed";

const Services = () => {
  return (
    <div className="services bg-gray-100 w-full">
      <div className="title">
        <h1 className="text-[#B80433] text-5xl font-bold my-10 ml-10">
          Social Works
        </h1>
      </div>
      <div className="links flex items-center justify-center gap-10">
        <h1 className="border border-[#C10A39] cursor-pointer text-[#C10A39] bg-white p-3 px-10 rounded-full text-2xl font-medium hover:bg-[#C10A39] hover:text-white">
          Samaj bhavan
        </h1>
        <h1 className="border  border-[#C10A39] cursor-pointer text-[#C10A39] bg-white p-3 px-10 rounded-full text-2xl font-medium hover:bg-[#C10A39] hover:text-white">
          Samaj bhavan
        </h1>
        <h1 className="border  border-[#C10A39] cursor-pointer text-[#C10A39] bg-white p-3 px-10 rounded-full text-2xl font-medium hover:bg-[#C10A39] hover:text-white">
          Samaj bhavan
        </h1>
        <h1 className="border  border-[#C10A39] cursor-pointer text-[#C10A39] bg-white p-3 px-10 rounded-full text-2xl font-medium hover:bg-[#C10A39] hover:text-white">
          Samaj bhavan
        </h1>
      </div>
      <ServicesFeed />
      <ServicesFeed />
      <ServicesFeed />
    </div>
  );
};

export default Services;
