export const ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || 'admin@example.com',
  password: process.env.ADMIN_PASSWORD || 'admin123',
};

export const APP_CONFIG = {
  name: 'نظام الإدارة المتكامل',
  description: 'نظام إدارة حديث ومتطور مع واجهة مستخدم جميلة',
  version: '1.0.0',
  author: 'فريق التطوير',
};

export const ROUTES = {
  HOME: '/',
  ADMIN_LOGIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_SETTINGS: '/admin/settings',
};

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MODERATOR: 'moderator',
} as const;

export const ACTIVITY_TYPES = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  LOGIN: 'login',
} as const;