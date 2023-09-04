"use client";

import React, { useState, useEffect } from "react";
import { useUserDetails } from "../..//hooks/useUserDetails";
import { useUserUpdateDetails } from "../..//hooks/useUserUpdateDetails";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");

  const { userDetails: userDetailsFromHook } = useUserDetails();
  const { updateUserDetails,userData,loading,error } = useUserUpdateDetails();


  // Update input values when userDetailsFromHook changes
  useEffect(() => {
    if (userDetailsFromHook) {
      setFullName(userDetailsFromHook.fullName || "");
      setCurrentAddress(userDetailsFromHook.currentAddress || "");
      setPermanentAddress(userDetailsFromHook.permanentAddress || "");
      setMobile(userDetailsFromHook.mobile || "");
      setEmail(userDetailsFromHook.email || "");
      setProfession(userDetailsFromHook.profession || "");
      setGender(userDetailsFromHook.gender || "");
    }
  }, [userDetailsFromHook]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "currentAddress":
        setCurrentAddress(value);
        break;
      case "permanentAddress":
        setPermanentAddress(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "profession":
        setProfession(value);
        break;
      case "gender":
        setGender(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleUpdateClick = async() => {
    // Save the updated user details data and image (You can send them to a server here)
    const newItem={
      id:userDetailsFromHook?._id,
      fullName,
      email,
      currentAddress,
      gender,
      permanentAddress,
      mobile,
      profession
    }
    
 await updateUserDetails(newItem);
    
    setIsEditing(false);
    
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        {isEditing ? (
          <div>
            <h2 className="text-xl font-semibold">Edit Profile</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border rounded-md p-2 mb-2"
            />
            {newImage && (
              <img
                src={URL.createObjectURL(newImage)}
                alt="New Profile Picture"
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
            )}
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="currentAddress"
              value={currentAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Current Address"
            />
            <input
              type="text"
              name="permanentAddress"
              value={permanentAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Permanent Address"
            />
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Mobile"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Email"
            />
            <input
              type="text"
              name="profession"
              value={profession}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Profession"
            />
            <input
              type="text"
              name="gender"
              value={gender}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Gender"
            />
            <button
              onClick={handleUpdateClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold">Profile Information</h2>
            <img
              src={userDetailsFromHook?.img_url}
              alt="Profile Picture"
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />
            <h1 className="text-2xl font-semibold text-center mt-4">
              {userDetailsFromHook?.fullName}
            </h1>
            <p>Current Address: {userDetailsFromHook?.currentAddress}</p>
            <p>Permanent Address: {userDetailsFromHook?.permanentAddress}</p>
            <p>Mobile: {userDetailsFromHook?.mobile}</p>
            <p>Email: {userDetailsFromHook?.email}</p>
            <p>Profession: {userDetailsFromHook?.profession}</p>
            <p>Gender: {userDetailsFromHook?.gender}</p>
            <button
              onClick={handleEditClick}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
