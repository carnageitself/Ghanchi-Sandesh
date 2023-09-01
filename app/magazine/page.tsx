import React from "react";
import MagazineData from "../components/MagazineData";
import {IoIosCall} from "react-icons/io"

const Magazine = () => {
  return (
    <div className="magazine w-full bg-gray-100">
      <div className="title">
        <h1 className="text-[#B80433] text-5xl font-bold my-10 ml-10">News</h1>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
      <MagazineData />
      <MagazineData />
      <MagazineData />
      <MagazineData />
      <MagazineData />
      <MagazineData />
      </div>
      </div>
      <div className="contact flex flex-col items-center w-full">
      <div className="container flex flex-col h-72 bg-white items-center justify-center gap-3">
       <h1 className="text-3xl font-semibold text-[#C10A39]">To advertise in ghanchi sandesh contact</h1>
       <h1 className="text-3xl font-semibold text-black">Dinesh Kumar</h1>
       <div className="flex items-center gap-2">
       <IoIosCall size={40}/>
         
       <h1 className="text-3xl font-medium text-black">+123456789</h1>
       </div>
      </div>
      </div>
    </div>
  );
};

export default Magazine;
