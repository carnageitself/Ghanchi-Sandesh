import Image from 'next/image'
import React from 'react'
import { data } from "../data/Achivment";
import Img from "/public/engineer.jpeg"

interface achievementsProps {
  Name: string;
  Fathers_name: string;
  Mulya_Niwas: string;
  Designation: string;
  img: string;
  Sevarath: string,
  Mobile_number: number,
}

const Achievements: React.FC = () => {
  const { Name, Fathers_name, Mulya_Niwas, Designation, img, Sevarath, Mobile_number } = data as achievementsProps
  return (
    <>
      <div className='flex items-center justify-center mt-5'>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 text-white bg-[hsl(344,96%,37%)] rounded-full active" aria-current="page">Doctor</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">Engineer</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">Lawyer</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">News Reporter</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">Politician</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">Employee</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white">Teacher</a>
          </li>

        </ul>
      </div>
      <div className='w-100 max-w-full items-center justify-between mt-2 mb-5 p-10'>

        <div  className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
          <Image className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg" src={Img} alt="Achivment_page" width={320} height={240} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <span className="mb-2  font-bold tracking-tight text-xl"><span className='text-[hsl(344,96%,37%)] '>Name :</span> {Name} </span>
            <span className="mb-2  font-bold tracking-tight text-xl"><span className='text-[hsl(344,96%,37%)] '>Father's Name :</span> {Fathers_name} </span>
            <span className="mb-2  font-bold tracking-tight text-xl"><span className='text-[hsl(344,96%,37%)] '>Mulya Niwas :</span> {Mulya_Niwas} </span>
            <span className="mb-2  font-bold tracking-tight text-xl"><span className='text-[hsl(344,96%,37%)] '>Destination :</span> {Designation} </span>
            <span className="mb-2  font-bold tracking-tight text-xl"><span className='text-[hsl(344,96%,37%)] '>Sevarath :</span> {Sevarath} </span>
            <span className="mb-2  font-bold tracking-tight text-xl"><span className='text-[hsl(344,96%,37%)] '>Mobile Number :</span> {Mobile_number} </span>


          </div>
        </div>

      </div>

    </>
  )
}

export default Achievements