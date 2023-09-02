import React from "react";

import { FiSearch } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
// import {FiSearch} from 'react-icons/fi'
// import {FiSearch} from 'react-icons/fi'
// import {FiSearch} from 'react-icons/fi'
// import {FiSearch} from 'react-icons/fi'
// import {FiSearch} from 'react-icons/fi'

const Search = () => {
  return (
    <div className="min-w-[250x] w-full md:w-full md:max-w-[800px] flex items-center bg-white m-auto shadow-md  active:outline-blue-600 shadow-gray-400  rounded-md overflow-hidden">
      <div className="h-full bg-red-600 text-white p-5">
        <FiSearch />
      </div>
      <input
        type="text"
        placeholder="Search Name And Location"
        className="px-[15px] outline-none w-full"
      />
      <div className="location text-red-500 text-[20px] flex items-center gap-[10px] pr-[25px]">
        <MdLocationPin size={25} />
        <span>India</span>
      </div>
    </div>
  );
};

export default Search;
