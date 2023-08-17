import React from "react";
import Image from "next/image";
import Img from "/public/logo.png";

const Hero = () => {
  return (
    <div className="hero bg-gray-100 w-full h-[90vh]">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-[#D03E64] text-4xl font-medium mt-20 flex flex-col items-center justify-center gap-3">
          <span>
            <span className="font-bold">वेद, शास्त्र </span>और{" "}
            <span className="font-bold">पुराणों</span> में प्रसिद्ध है और Jagat जानता है{" "}
          </span>
          <span> कि सेवा बड़ा कठिन धर्म है।</span>
        </h1>
        <Image src={Img} alt="logo"></Image>
      </div>
    </div>
  );
};

export default Hero;
