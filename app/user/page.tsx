"use client";

import React, { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState(null);
  // Replace with actual user data
  const initialUser = {
    fullName: "John Doe",
    profilePic:
      "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600",
    currentAddress: "123 Main St, City, Country",
    permanentAddress: "456 Secondary St, City, Country",
    mobile: "123-456-7890",
    email: "johndoe@example.com",
    profession: "Web Developer",
  };

  const [user, setUser] = useState({ ...initialUser });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleUpdateClick = () => {
    // Save the updated user data and image (You can send them to a server here)
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
              value={user.fullName}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="currentAddress"
              value={user.currentAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Current Address"
            />
            <input
              type="text"
              name="permanentAddress"
              value={user.permanentAddress}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Permanent Address"
            />
            <input
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Mobile"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Email"
            />
            <input
              type="text"
              name="profession"
              value={user.profession}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mb-2"
              placeholder="Profession"
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
              src={user.profilePic}
              alt="Profile Picture"
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />
            <h1 className="text-2xl font-semibold text-center mt-4">
              {user.fullName}
            </h1>
            <p>Current Address: {user.currentAddress}</p>
            <p>Permanent Address: {user.permanentAddress}</p>
            <p>Mobile: {user.mobile}</p>
            <p>Email: {user.email}</p>
            <p>Profession: {user.profession}</p>
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
