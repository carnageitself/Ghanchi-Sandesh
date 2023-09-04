import React from "react";
import Upload from "./inputs/Upload";
import Input from "./inputs/Input";

const HomeForm = () => {
  return (
    <div className="form flex flex-col gap-[30px] items-center md:items-start px-[25px] md:flex-row  justify-between mb-5">
      <div className="inputs flex flex-col gap-[15px] w-full md:w-[70%]">
        <span>Home Details</span>

        <Input placeholder="Title" primary />
        <Input placeholder="Description" primary />
        <Input placeholder="Location" primary />

        <br />
        <button className="bg-[#B80433] text-white p-3 w-[100px] rounded-full">
          Upload
        </button>
      </div>

      <div className="md:mt-[38px] uploads h-fit shadow-md">
        <Upload />
      </div>
    </div>
  );
};

export default HomeForm;
