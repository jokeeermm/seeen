'use client';

import { useState, useEffect } from 'react';
import { AuthUser, isAuthenticated, getCurrentUser, logout as authLogout } from '@/lib/auth';

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (isAuthenticated()) {
        const currentUser = getCurrentUser();
        setUser(currentUser);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const logout = () => {
    authLogout();
    setUser(null);
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    logout,
  };
};