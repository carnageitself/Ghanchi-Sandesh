import Image from "next/image";
import React, { FC } from "react";
import Img from "@/public/engineer.jpeg";
import { data } from "../data/GroomData";
interface GroomProps {
  Name: string;
  Fathers_name: string;
  Mull_Nivas: string;
  Education: string;
  Birth_place: string;
  Phone_number: number;
  Email: string;
  Address: string;
}
const GroomList:React.FC = () => {
  const {
    Name,
    Fathers_name,
    Mull_Nivas,
    Education,
    Birth_place,
    Email,
    Phone_number,
    Address,
  } = data as GroomProps;

  return (
    <>
      <div className="w-100 max-w-full items-center justify-between mt-2 mb-5 p-8">
        <div className="flex flex-col items-center  bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-full p-10">
          <Image className="object-cover w-full rounded-t-lg h-auto md:h-60 md:w-60 md:rounded-none md:rounded-l-lg" src={Img} alt="Achivment_page" width={320} height={240} />
          <div className="flex flex-col justify-between p-6 mt-2 w-full  leading-normal cards__achievements">
            <span className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Name :</span> {Name}{" "}
            </span>
            <span className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Father's Name :</span>{" "}
              {Fathers_name}{" "}
            </span>
            <span className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Mulya Niwas :</span>{" "}
              {Mull_Nivas}{" "}
            </span>
            <span className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Education :</span>{" "}
              {Education}{" "}
            </span>
            <span className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Birth Place :</span>{" "}
              {Birth_place}{" "}
            </span>
            <span className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Email :</span>{" "}
              {Email}{" "}
            </span>
            
            <span className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Phone Number :</span>{" "}
              {Phone_number}{" "}
            </span>
            <span className="mb-2  font-bold tracking-tight text-xl">
              <span className="text-[hsl(344,96%,37%)] ">Address :</span>{" "}
              {Address}{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroomList;
