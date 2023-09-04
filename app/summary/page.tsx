import React from "react";
import Img from "@/public/engineer.jpeg";
import Image from "next/image";
import { BsShare } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const Summarypage = () => {
  return (
    <>
      <div className="bg-white m-5">
        <div className="container mx-auto p-4">
          {/* <!-- Responsive Image Container --> */}
          <div className="w-1/2 mx-auto relative">
            <Image
              src={Img}
              alt="Image"
              className="w-full h-auto block mx-auto"
            />
          </div>

          {/* <!-- Icons --> */}
          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <MdOutlineLocationOn />
            </div>
            <div className="flex items-center">
              <BsShare />
            </div>
          </div>

          {/* <!-- Content Div --> */}
          <div className="p-4 mt-4">
            {/* <!-- Place your content here --> */}
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Rem porro ratione ut et officiis nobis ipsum tenetur eum! Dolores
              labore ut quibusdam possimus quod eius mollitia nam consectetur
              dolorem suscipit.
            </p>
          </div>

          {/* <!-- Two Images with Responsive Layout --> */}
          <div className="mt-4 flex justify-between">
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

export default Summarypage;
