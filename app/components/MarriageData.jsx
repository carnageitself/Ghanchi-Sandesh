import React from "react";
import Img from "/public/santhaye-2.jpeg";
import MarriageSearch from "./MarriageSearch";
import Image from "next/image";

const MarriageData = () => {
  return (
    <>
    <div className="flex flex-col items-center overflow-hidden">
      <div className="w-full min-h-[70vh] bg-gray-100 flex flex-col items-center">
        <div className=" img-div  w-full  h-[400px]  overflow-hidden ">
          <Image src={Img} alt="image" className="w-full" />
        </div>
        <div className=" w-full max-w-[750px]  relative bottom-[30px] ">
          <MarriageSearch />
        </div>
        
       
      </div>
    </div>
    <div className="pl-8 text-[32px] font-bold">Upload details</div>
    </>
  );
};

export default MarriageData;
