import { useState } from "react";
import Cookies from "js-cookie"; // Import the js-cookie library
import API_URL from "../url";
import { useAuth } from "./useAuth";

interface LoginState {
  loading: boolean;
  error: Error | null;
  login: (email: string, password: string) => Promise<void>;
}

/**
 * Custom hook to handle user login.
 * @returns {LoginState} An object containing loading, error, and login function.
 */
export function useLogin(): LoginState {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { authenticated } = useAuth();
  console.log(authenticated)
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      // Make an API request to perform login
      if (authenticated) {
        window.location.href = "/"; // Redirect to the home page
      } else {
        const response = await fetch(`http://localhost:3001/api/v1/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          // Handle successful login here
          const data = await response.json();

          // Set the user's ID in local storage
          localStorage.setItem("userId", data.user._id);

          // Set the token in cookies
          Cookies.set("token", data.token, { expires: 5 }); // Cookie expires in 1 day
          // Set 'token' cookie with the received token

          // Redirect to the home page or perform any other desired actions
          window.location.href = "/"; // Redirect to the home page
        } else {
          // Handle login failure here, e.g., set error state
          setError(new Error("Login failed"));
        }
      }
    } catch (err: any) {
      // Handle any network or other errors that occur during login
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, login };
}
