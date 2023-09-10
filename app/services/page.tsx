"use client"
import React, { useState } from "react";
import ServicesFeed from "../components/ServiceFeed";
import Link from "next/link";

const Services = () => {

  return (
    <>


      <div className="container my-12 mx-auto px-4">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 text-white bg-[hsl(344,96%,37%)] rounded-full active" aria-current="page">समाज भवन</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">समाज छात्रावास</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">एम्बुलेंस सेवा</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">समाज के मंदिर</a>
          </li>

        </ul>
      </div>
      <div className="flex flex-wrap p-2 w-full lg:-mx-4 services__overflow justify-center">

        <ServicesFeed />
        <ServicesFeed />
        <ServicesFeed />
      </div>
      <div className="flex justify-center items-center mb-5 mt-4">
        <Link href="/servicelist">
       <button className="bg-[#B80433] p-3 text-center text-white rounded-md">
          Upload
        </button>
        </Link>
      </div>
    
    </>

  );
};

export default Services;
