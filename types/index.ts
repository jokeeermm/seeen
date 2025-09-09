export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface DashboardStats {
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  growthRate: number;
}

export interface SalesData {
  name: string;
  sales: number;
  orders: number;
}

export interface Activity {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  type: 'create' | 'update' | 'delete' | 'login';
}

export interface Settings {
  siteName: string;
  siteDescription: string;
  enableNotifications: boolean;
  enableBackup: boolean;
  maintenanceMode: boolean;
  theme: 'light' | 'dark' | 'auto';
}