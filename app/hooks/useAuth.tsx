import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Import useRouter from Next.js for routing
import Cookies from 'js-cookie';
import API_URL from '../url';
import { useUserDetails } from './useUserDetails';

interface AuthState {
  authenticated: boolean | null;
  user: any | null; // Change the type to match your user data structure
  loading: boolean;
  error: Error | null;
}

export function useAuth(): AuthState {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<any | null>(null); // Change the type to match your user data structure
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const pathname = usePathname(); // Initialize the router instance

  const getMe = async () => {
    try {
      const token = Cookies.get('token');
      const user = Cookies.get('userId');

      if (!token && !user) {
        setAuthenticated(false);
        setLoading(false);
        return;
      } else {
        setAuthenticated(true);
        setLoading(false);

        
        // Check if the current route is the login or signup page
        if (pathname==='/login'||'/signup') {
          // Redirect to the home page ("/") if authenticated
          window.location.href = "/"; 
        }

        return;
      }

      setLoading(false);
    } catch (err: any) {
      setError(err);
      setAuthenticated(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return { authenticated, user, loading, error, getMe };
}