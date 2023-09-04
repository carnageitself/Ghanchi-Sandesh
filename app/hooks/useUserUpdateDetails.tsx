import { useEffect, useState } from "react";
import API_URL from "../url";

interface UserDetails {
  id: string;
  fullName: string;
  gender: string;
  currentAddress: string;
  permanentAddress: string;
  phoneNumber: Boolean;
  avatar: string;
  updateUserDetails:(()=>void);
  email: string;
  // Add other user properties as needed
}

interface UserDetailsState {
  userData: UserDetails | null;
  loading: boolean;
  error: Error | null;
}

export function useUserUpdateDetails(): UserDetailsState {
  const [userData, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const updateUserDetails = async (newItems: Partial<UserDetails>) => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId&&!token) {
        throw new Error("Not Logged In");
      }

      const response = await fetch(
        `http://localhost:3001/api/v1/upd/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newItems,token }),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUserDetails(userData?.user);
      } else {
        throw new Error("Failed to update user details");
      }
    } catch (err) {
      setError(err);
    }
  };

  return { userData, loading, error, updateUserDetails };
} // No dependencies since we only read from local storage once
