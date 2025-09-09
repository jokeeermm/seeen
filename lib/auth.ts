import { ADMIN_CREDENTIALS } from './constants';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export const authenticateUser = async (email: string, password: string): Promise<AuthUser | null> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    return {
      id: '1',
      email: email,
      name: 'المدير العام',
      role: 'admin',
    };
  }
  
  return null;
};

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const login = (user: AuthUser): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('user', JSON.stringify(user));
};

export const logout = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('user');
};

export const getCurrentUser = (): AuthUser | null => {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};