
import React from 'react'
import Upload from './inputs/Upload'
import Input from './inputs/Input'

const OrganisationForm = () => {
  return (
    <div className="form flex flex-col gap-[30px] items-center md:items-start px-[25px] md:flex-row  justify-between">
    <div className="inputs flex flex-col gap-[15px] w-full md:w-[70%]">
      <span>Organisation Details</span>

      <Input placeholder="Title" primary />
      <Input placeholder="Office" primary />
      <Input placeholder="Chairman" primary />
      <textarea
            className="rounded-[8px]
     outline-blue-500
     p-[15px]
    w-full 
    border
    resize-none
    "
            placeholder="Work"
            cols={10}
            rows={5}
          />

      <br />
      <button className="bg-[#B80433] text-white p-3 w-[100px] rounded-full">
        Upload
      </button>
    </div>

    <div className="md:mt-[38px] uploads h-fit shadow-md">
      <Upload />
    </div>
  </div>
  )
}

export default OrganisationForm