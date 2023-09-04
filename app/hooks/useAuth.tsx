import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import API_URL from '../url';
import { useUserDetails } from './useUserDetails';

interface AuthState {
  authenticated: boolean | null;
  user: any | null;
  loading: boolean;
  error: Error | null;
}

export function useAuth(): AuthState {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const pathname = usePathname();

  const getMe = async () => {
    try {
      // Check if localStorage is available
      if (typeof localStorage !== 'undefined') {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');


        if (!token || !userId) {
          setAuthenticated(false);
        } else {
          setAuthenticated(true);

          if (pathname === '/login' || pathname === '/signup') {
            // Redirect to the home page ("/") if authenticated
            window.location.href = '/';
            return; // Return early to avoid the code below running
          }
        }
      } else {
        // Handle the case where localStorage is not available
        console.error('localStorage is not available in this environment.');
      }

      setLoading(false);
    } catch (err) {
      setError(err);
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return { authenticated, user, loading, error, getMe };
}
