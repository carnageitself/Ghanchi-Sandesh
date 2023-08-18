"use client";
import React, { useState } from "react";
import { FcUpload } from "react-icons/fc";
import img from "/public/profile.jpg";
import Image from "next/image";

// interface UploaderProps {
//   onImageSelect: (file: File) => void;
// }

const Upload =  () => {
  const [selectedImage, setSelectedImage] = useState<File | null>();
console.log("selecated",selectedImage)
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
console.log("sel",selectedImage)
    
    }
  };

  return (
    <div className="relative flex flex-col items-center overflow-hidden w-[250px] h-[300px] bg-gray-100 rounded-md">
      <div className="image-show-here absolute inset-0 flex justify-center items-center">
          {!selectedImage && (
            <Image
              src={img}
              alt="Uploaded Preview"
              layout="fill" // Cover entire container
              objectFit="cover" // Scale image to cover
            />
          )}

{selectedImage && (
  <img
    src={URL.createObjectURL(selectedImage)}
    alt="Uploaded Preview"
    className="h-full w-full object-cover"
  />
)}

        </div>

      <div className="absolute bottom-[15px] w-full gap-[10px] flex items-center flex-col">
        <label className="w-[40px] cursor-pointer shadow-md flex items-center justify-center p-[10px] bg-white rounded-full">
          <FcUpload size={20} />
          <input
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
            type="file"
            accept="image/*"
            onChange={(event)=>handleImageChange(event)}
          />
        </label>
        <span className="text-center text-white text-sm">Upload your photo</span>
      </div>
    </div>
  );
};

export default Upload;
