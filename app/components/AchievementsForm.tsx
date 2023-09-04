import React from 'react'
import Input from './inputs/Input'
import Upload from './inputs/Upload'

const AchievementsForm = () => {
  return (
    <div className="form flex flex-col gap-[30px] items-center md:items-start px-[25px] md:flex-row  justify-between mb-5">
      <div className="inputs flex flex-col gap-[15px] w-full md:w-[70%]">
        <span>Achievements Details</span>

        <Input placeholder="Name" primary />
        <Input placeholder="Father's Name" primary />
        <Input placeholder="Mull Niwas" primary />
        <Input placeholder="Designation" primary />
        <Input placeholder="Severath" primary />
        <Input placeholder="Mobile No" primary />

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

export default AchievementsForm