import React from "react";
import Img from "@/public/engineer.jpeg";
import Image from "next/image";
import { BsShare } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const summary = () => {
  return (
    <>
      <div className="bg-[#C01D47] h-[50vh] flex justify-center items-center w-full">
        <h1 className="text-5xl text-white text-center relative -top-7  ">Heading of news</h1>{" "}
      </div>
      <div className="bg-[#EEEEEF] ">
        <div className="w-9/12 mx-auto p-4">
          {/* <!-- Responsive Image Container --> */}
          <div className="w-full mx-auto -top-32 relative">
            <Image
              src={Img}
              alt="Image"
              className="w-full h-auto block mx-auto"
            />
          </div>

          {/* <!-- Icons --> */}
          <div className="flex justify-between mt-4 relative -top-28">
            <div className="flex items-center">
              <span className="text-[#EC5D82]">Location</span>
              <MdOutlineLocationOn size="20" />
            </div>
            <div className="flex items-center">
              <span className="text-[#EC5D82] pr-2">Share</span>
              <BsShare size="20" />
            </div>
          </div>

          {/* <!-- Content Div --> */}
          <div className="mt-4 relative -top-28">
            {/* <!-- Place your content here --> */}
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Rem porro ratione ut et officiis nobis ipsum tenetur eum! Dolores
              labore ut quibusdam possimus quod eius mollitia nam consectetur
              dolorem suscipit.
            </p>
          </div>

          {/* <!-- Two Images with Responsive Layout --> */}
          <div className="mt-4 flex gap-4 justify-between relative -top-28">
            <div className="w-1/2">
              <Image src={Img} alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="w-1/2">
              <Image src={Img} alt="Image 3" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default summary;
