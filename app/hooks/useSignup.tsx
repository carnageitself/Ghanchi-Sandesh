import { useState } from 'react';
import Cookies from 'js-cookie'; // Import the js-cookie library
import API_URL from '../url';

interface SignupState {
  loading: boolean;
  error: Error | null;
  signup: (fullName: string, email: string, password: string) => Promise<void>;
}

/**
 * Custom hook to handle user signup (registration).
 * @returns {SignupState} An object containing loading, error, and signup function.
 */
export function useSignup(): SignupState {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const signup = async (fullName: string, email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      // Make an API request to perform user registration (signup)
      const response = await fetch(`http://localhost:3001/api/v1/register`, {
        method: 'POST',
        body: JSON.stringify({ fullName, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Handle successful signup here
        // Set the token in cookies
        const data = await response.json();
        Cookies.set('token', data.token, { expires: 5 }); // Cookie expires in 1 day
        // Set 'token' cookie with the received token
        localStorage.setItem('userId', data.user._id);


        // Redirect to the login page or perform any other desired actions
      } else {
        // Handle signup failure here, e.g., set error state
        setError(new Error('Signup failed'));
      }
    } catch (err: any) {
      // Handle any network or other errors that occur during signup
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, signup };
}
