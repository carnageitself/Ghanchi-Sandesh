import React from 'react'
import Input from './inputs/Input'
import Upload from './inputs/Upload'

const ServicesForm = () => {
  return (
    <div className="form flex flex-col gap-[30px] items-center md:items-start px-[25px] md:flex-row  justify-between mb-5">
      <div className="inputs flex flex-col gap-[15px] w-full md:w-[70%]">
        <span>Service Details</span>

        <Input placeholder="Title" primary />
        <Input placeholder="Admin" primary />
        <Input placeholder="Phone No" primary />
        <Input placeholder="Helpline No" primary />
        <Input placeholder="Location" primary />
        <Input placeholder="Type" primary />
        <textarea
          className="rounded-[8px]
     outline-blue-500
     p-[15px]
    w-full 
    border
    resize-none
    "
          placeholder="Address"
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

export default ServicesForm