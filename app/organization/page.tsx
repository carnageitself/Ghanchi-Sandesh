import React from "react";
import OrganisationFeed from "../components/OrganisationFeed";

const Organization = () => {
  return (
    <div className="organization w-full flex flex-col bg-gray-100">
       <h1 className="text-5xl font-medium text-[#B80433] mt-10 pl-10 bg-gray-100 mb-10">
        Social Institution
      </h1>
     <OrganisationFeed/>
     <OrganisationFeed/>
     <OrganisationFeed/>
     <OrganisationFeed/>
     <OrganisationFeed/>
     <OrganisationFeed/>
    </div>
  );
};

export default Organization;
