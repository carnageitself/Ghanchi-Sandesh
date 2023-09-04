"use client";

import React, { useState, useEffect } from "react";
import { useUserDetails } from "../hooks/useUserDetails";
import { useUserUpdateDetails } from "../hooks/useUserUpdateDetails";
import UserProfile from "../components/user/UserProfile";

const page = () => {
  return <>
    <UserProfile />
  </>;
};

export default page;
