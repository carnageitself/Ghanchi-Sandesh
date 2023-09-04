import { useEffect, useState } from 'react';
import API_URL from '../url';

interface UserDetails {
  id: string; // The user ID to fetch
  fullName: string;
  email: string;
  // Add other user properties as needed
}

interface UserDetailsState {
  userDetails: UserDetails | null;
  loading: boolean;
  error: Error | null;
}

export function useUserDetails(): UserDetailsState {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Get the userId from local storage
    const userId = localStorage.getItem('userId');

    if (!userId) {
      // Handle the case where userId is not available in local storage
      setError(new Error('User ID not found in local storage'));
      setLoading(false);
      return;
    }

    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/v1/user`, {
          method: 'POST', // Change the HTTP method to POST
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
          body: JSON.stringify({ id: userId }), // Send the id in the request body as JSON
        }); 

        if (response.ok) {
          const userData = await response.json();
          setUserDetails(userData?.user );
        } else {
          setError(new Error('Failed to fetch user details'));
        }

        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []); // No dependencies since we only read from local storage once

  return { userDetails, loading, error };
}
