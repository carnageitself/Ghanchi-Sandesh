"use client";
import Image from "next/image";
import React from "react";
import { data } from "../data/Achivment";
import Img from "/public/engineer.jpeg";
import Link from "next/link";
import { useState } from "react";

interface achievementsProps {
  Name: string;
  Fathers_name: string;
  Mull_Nivas: string;
  Designation: string;
  img: string;
  Sevarath: string;
  Mobile_number: number;
}

const Achievements: React.FC = () => {
  const {
    Name,
    Fathers_name,
    Mull_Nivas,
    Designation,
    img,
    Sevarath,
    Mobile_number,
  } = data as achievementsProps;

  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex items-center justify-center mt-5 ml-5">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 text-white bg-[hsl(344,96%,37%)] rounded-full active"
              aria-current="page"
              onClick={() => setOpenTab(1)}
            >
              Doctor
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
              onClick={() => setOpenTab(2)}
            >
              Engineer
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
              onClick={() => setOpenTab(3)}
            >
              Lawyer
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
              onClick={() => setOpenTab(4)}
            >
              News Reporter
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
              onClick={() => setOpenTab(5)}
            >
              Politician
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
              onClick={() => setOpenTab(6)}
            >
              Employee
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-[hsl(344,96%,37%)] dark:hover:text-white"
              onClick={() => setOpenTab(7)}
            >
              Teacher
            </a>
          </li>
        </ul>
      </div>

      <div className="p-3 mt-6 bg-white border">
        {/* tab 1 start */}
        <div className={openTab === 1 ? "block" : "hidden"}>
          {" "}
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* tab 1 end */}

        {/* tab 2 start  */}
        <div className={openTab === 2 ? "block" : "hidden"}>
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* tAB 2 END */}

        {/* tab 3 start */}
        <div className={openTab === 3 ? "block" : "hidden"}>
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
          
        </div>      
        {/* tabs end 3 */}

        {/* tab 4 start */}

        <div className={openTab === 4 ? "block" : "hidden"}>
          {" "}
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

{/* tab 4 end */}

{/* tab 5 start */}

<div className={openTab === 5 ? "block" : "hidden"}>
          {" "}
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>


{/* tab 5 ends */}

{/* tab 6 start */}

<div className={openTab === 6 ? "block" : "hidden"}>
          {" "}
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
          
        </div>
{/* tab 6 ends */}

{/* tab 7 start  */}
<div className={openTab === 7 ? "block" : "hidden"}>
          {" "}
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
            <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
              <Image
                className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
                src={Img}
                alt="Achivment_page"
                width={320}
                height={240}
              />
              <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Name :</span>{" "}
                  {Name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Father &apos; s Name :
                  </span>{" "}
                  {Fathers_name}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mulya Niwas :
                  </span>{" "}
                  {Mull_Nivas}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Destination :
                  </span>{" "}
                  {Designation}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">Sevarath :</span>{" "}
                  {Sevarath}{" "}
                </span>
                <span className="mb-2  font-bold tracking-tight text-xl">
                  <span className="text-[hsl(344,96%,37%)] ">
                    Mobile Number :
                  </span>{" "}
                  {Mobile_number}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

{/* tab 7 ends */}


        <div className="flex justify-center items-center mb-5">
          <Link href="/achievementlist">
            <button className="bg-[#B80433] p-4 text-center text-white rounded-md">
              Upload
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Achievements;
