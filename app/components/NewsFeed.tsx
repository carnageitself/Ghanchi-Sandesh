"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img from "/public/engineer.jpeg";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { data } from "../data/NewsData";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";
import Summary from "../summary/page";

interface NewsData {
  title: string;
  description: string;
  location: string;
  img: string;
}

const NewsFeed: React.FC = () => {
  const { title, description, location, img } = data as NewsData;

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [openTab, setOpenTab] = useState(1);

  return (
    <>

<div className="home justify-center  flex flex-col  items-center">

<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-5 ml-10">
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 text-white bg-[hsl(344,96%,37%)] rounded-full active"
            aria-current="page"
            onClick={() => setOpenTab(1)}

          >
            टॉप न्यूज़
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(2)}
            >
            सामाजिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(3)}
            >
            धार्मिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(4)}
            >
            शेक्शनिक
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
            onClick={() => setOpenTab(5)}
            >
            अन्य
          </a>
        </li>
      </ul>
      <div className="pt-6 pb-12">
        {/* 1st card */}
        <div className={openTab === 1 ? "block" : "hidden"}>
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow  mt-4 w-100 mx-2"
            >
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <Link href="/summary">
                  <h1 className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                    {title}
                  </h1>
                  <p className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                    {description}
                  </p>
                </Link>
                <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                  <span className="flex text-[#EC5D82] text-md">
                    {" "}
                    <MdOutlineLocationOn size={20} /> {location}{" "}
                  </span>
                  <span className="flex text-[#EC5D82]">
                    <BsShare size={20} />{" "}
                    <span className="text-md ml-1">शेयर</span>
                  </span>
                </div>
              </div>
              <div className="h-auto  md:w-1/2">
                <Image
                  className="inset-0 h-full w-full object-cover object-center"
                  src={Img}
                  alt="News_feed_img"
                />
              </div>
              {/*   drop-drop Starts*/}
              <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                <div className="dropdown">
                  <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">
                      <AiFillEdit />
                    </span>
                  </button>
                  <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*   drop-drop end*/}
            </div>
          </div>

          {/* <!--/ card--> */}
        </div>
        {/* 1st end  */}

        {/* 2nd start */}
        <div className={openTab === 2 ? "block" : "hidden"}>
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow  mt-4 w-100 mx-2"
            >
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <Link href="/summary">
                  <h1 className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                    {title}
                  </h1>
                  <p className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                    {description}
                  </p>
                </Link>
                <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                  <span className="flex text-[#EC5D82] text-md">
                    {" "}
                    <MdOutlineLocationOn size={20} /> {location}{" "}
                  </span>
                  <span className="flex text-[#EC5D82]">
                    <BsShare size={20} />{" "}
                    <span className="text-md ml-1">शेयर</span>
                  </span>
                </div>
              </div>
              <div className="h-auto  md:w-1/2">
                <Image
                  className="inset-0 h-full w-full object-cover object-center"
                  src={Img}
                  alt="News_feed_img"
                />
              </div>
              {/*   drop-drop Starts*/}
              <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                <div className="dropdown">
                  <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">
                      <AiFillEdit />
                    </span>
                  </button>
                  <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*   drop-drop end*/}
            </div>
          </div>

          {/* <!--/ card--> */}
        </div>

        {/* 2nd ends */}

        {/* 3rd start  */}

        <div className={openTab === 3 ? "block" : "hidden"}>
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow  mt-4 w-100 mx-2"
            >
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <Link href="/summary">
                  <h1 className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                    {title}
                  </h1>
                  <p className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                    {description}
                  </p>
                </Link>
                <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                  <span className="flex text-[#EC5D82] text-md">
                    {" "}
                    <MdOutlineLocationOn size={20} /> {location}{" "}
                  </span>
                  <span className="flex text-[#EC5D82]">
                    <BsShare size={20} />{" "}
                    <span className="text-md ml-1">शेयर</span>
                  </span>
                </div>
              </div>
              <div className="h-auto  md:w-1/2">
                <Image
                  className="inset-0 h-full w-full object-cover object-center"
                  src={Img}
                  alt="News_feed_img"
                />
              </div>
              {/*   drop-drop Starts*/}
              <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                <div className="dropdown">
                  <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">
                      <AiFillEdit />
                    </span>
                  </button>
                  <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*   drop-drop end*/}
            </div>
          </div>

          {/* <!--/ card--> */}
        </div>
        {/* 3rd ends */}

        {/* 4th start  */}
        <div className={openTab === 4 ? "block" : "hidden"}>
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow  mt-4 w-100 mx-2"
            >
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <Link href="/summary">
                  <h1 className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                    {title}
                  </h1>
                  <p className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                    {description}
                  </p>
                </Link>
                <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                  <span className="flex text-[#EC5D82] text-md">
                    {" "}
                    <MdOutlineLocationOn size={20} /> {location}{" "}
                  </span>
                  <span className="flex text-[#EC5D82]">
                    <BsShare size={20} />{" "}
                    <span className="text-md ml-1">शेयर</span>
                  </span>
                </div>
              </div>
              <div className="h-auto  md:w-1/2">
                <Image
                  className="inset-0 h-full w-full object-cover object-center"
                  src={Img}
                  alt="News_feed_img"
                />
              </div>
              {/*   drop-drop Starts*/}
              <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                <div className="dropdown">
                  <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">
                      <AiFillEdit />
                    </span>
                  </button>
                  <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*   drop-drop end*/}
            </div>
          </div>

          {/* <!--/ card--> */}
        </div>

        {/* 4th ends */}


        {/* 5th starts  */}
        <div className={openTab === 5  ? "block" : "hidden"}>
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div
              v-for="card in cards"
              className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow  mt-4 w-100 mx-2"
            >
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <Link href="/summary">
                  <h1 className="font-semibold text-lg leading-tight truncate lg:text-5xl md:text-5xl text-[#B80433] max-w-[770px] pt-4">
                    {title}
                  </h1>
                  <p className="mt-2 text-lg text-[#434343] max-w-[770px] line-clamp-4">
                    {description}
                  </p>
                </Link>
                <div className="text-sm text-gray-700 uppercase flex items-center justify-between tracking-wide font-semibold mt-2">
                  <span className="flex text-[#EC5D82] text-md">
                    {" "}
                    <MdOutlineLocationOn size={20} /> {location}{" "}
                  </span>
                  <span className="flex text-[#EC5D82]">
                    <BsShare size={20} />{" "}
                    <span className="text-md ml-1">शेयर</span>
                  </span>
                </div>
              </div>
              <div className="h-auto  md:w-1/2">
                <Image
                  className="inset-0 h-full w-full object-cover object-center"
                  src={Img}
                  alt="News_feed_img"
                />
              </div>
              {/*   drop-drop Starts*/}
              <div className="cursor-pointer relative mt-3  h-6 w-auto right-[35px] bg-white rounded-lg">
                <div className="dropdown">
                  <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">
                      <AiFillEdit />
                    </span>
                  </button>
                  <ul className="dropdown-menu absolute right-1 hidden text-gray-700 ">
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*   drop-drop end*/}
            </div>
          </div>

          {/* <!--/ card--> */}
        </div>

        {/* 5th ends */}
        {/* <!--/ flex--> */}
      </div>
      {/* </div> */}
      </div>
    </>
  );
};

export default NewsFeed;
