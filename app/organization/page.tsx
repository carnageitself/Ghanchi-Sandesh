"use client"
import React, { useState } from "react";
import OrganisationFeed from "../components/OrganisationFeed";
import OrganisationForm from "../components/OrganisationForm";

const Organization = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className="organization w-full flex flex-col bg-gray-100 ">
       <h1 className="text-5xl font-medium text-[#B80433] mt-10 pl-10 bg-gray-100 mb-10">
        Social Institution
      </h1>
      <div className="flex flex-col content-center items-center">
     <OrganisationFeed/>
     <OrganisationFeed/>
     <OrganisationFeed/>
     </div>
     <div className="flex justify-center items-center mb-5 mt-4">
       {!open && <button className="bg-[#B80433] p-3 text-center text-white rounded-md" onClick={()=>setOpen(!open)}>
          Upload
        </button>}
      </div>
      {open && <OrganisationForm/>}
    </div>
  );
};

export default Organization;
