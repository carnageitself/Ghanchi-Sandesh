import React from 'react'
import Img from '/public/santhaye-2.jpeg'
import Search from './Search'
import Image from 'next/image'

const CommunityData = () => {
  return (
    <div className="flex    flex-col items-center overflow-hidden">
      <div className='w-[99.09vw] min-h-[70vh] bg-gray-100 flex    flex-col items-center'>
      <div className=" img-div  w-full  h-[400px]  overflow-hidden ">
<Image src={Img} alt='image' className='w-full' />
      </div>
      <div className=" w-full max-w-[750px] pxgit -[20px] relative bottom-[30px] ">

      <Search/>
      </div>
<span className='text-start text-[32px] font-bold'>Home Director</span>
      </div>
    </div>
  )
}

export default CommunityData