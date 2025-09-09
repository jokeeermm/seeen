'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Users, 
  Settings, 
  Activity, 
  PieChart,
  Menu,
  X
} from 'lucide-react';

const navigation = [
  { name: 'نظرة عامة', href: '/admin/dashboard', icon: BarChart3 },
  { name: 'المستخدمين', href: '/admin/users', icon: Users },
  { name: 'التحليلات', href: '/admin/analytics', icon: PieChart },
  { name: 'النشاطات', href: '/admin/activities', icon: Activity },
  { name: 'الإعدادات', href: '/admin/settings', icon: Settings },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden fixed top-4 right-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 right-0 z-40 w-64 bg-white border-l border-slate-200 transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:inset-0",
        isOpen ? "translate-x-0" : "translate-x-full",
        className
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-slate-200">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="mr-3 text-lg font-semibold text-slate-900">لوحة التحكم</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 ml-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}