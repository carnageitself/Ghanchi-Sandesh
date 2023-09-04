"use client"
import React, { useState } from "react";
import ServicesFeed from "../components/ServiceFeed";
import ServicesForm from "../components/ServicesForm";

const Services = () => {

const [open, setOpen] = useState(false);

  return (
    <>


      <div className="container my-12 mx-auto px-4">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 text-white bg-[hsl(344,96%,37%)] rounded-full active" aria-current="page">Samaj  bhavan</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">Society Hostel</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">Ambulance</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">Society Temple</a>
          </li>

        </ul>
      </div>
      <div className="flex flex-wrap p-2 w-full lg:-mx-4 services__overflow justify-center">

        <ServicesFeed />
        <ServicesFeed />
        <ServicesFeed />
      </div>
      <div className="flex justify-center items-center mb-5 mt-4">
       {!open && <button className="bg-[#B80433] p-3 text-center text-white rounded-md" onClick={()=>setOpen(!open)}>
          Upload
        </button>}
      </div>
      {open && <ServicesForm/>}
    </>

  );
};

export default Services;
