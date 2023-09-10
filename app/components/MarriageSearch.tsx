import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Img from "@/public/engineer.jpeg";
import "../marriage/style.css"
import Link from "next/link";
const MarriageSearch = () => {
  return (
    <>
      <div className="flex flex- gap-10 marriage__search__sm">    
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <Image
              src={Img}
              width={400}
              height={500}
              alt="img"
              className="rounded-t-lg p-4"
            />
          </a>
          <div className="p-5 relative">
            <input type="search " placeholder="दूल्हे की तलाश करो" className="p-1 w-[100%] outline-gray-200 rounded"/>
            <Link href="/groomlist">
            <span className="flex absolute top-7 right-7 cursor-pointer">
            <FiSearch/>
              
            </span>
            </Link>
          </div>
        </div>
         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <Image
              src={Img}
              width={400}
              height={500}
              alt="img"
              className="rounded-t-lg p-4"
            />
          </a>
          <div className="p-5 relative">
            <input type="search " placeholder="दुल्हन की तलाश करें" className="p-1 w-[100%] outline-gray-200 rounded"/>
            <Link href="/bridelist">
            <span className="flex absolute top-7 right-7 cursor-pointer" >
            <FiSearch/>
              
            </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarriageSearch;
