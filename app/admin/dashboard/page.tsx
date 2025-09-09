'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Bell,
  Settings,
  LogOut,
  BarChart3,
  PieChart,
  Calendar,
  Filter
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell } from 'recharts';
import Link from 'next/link';

const salesData = [
  { name: 'يناير', sales: 4000, orders: 240 },
  { name: 'فبراير', sales: 3000, orders: 198 },
  { name: 'مارس', sales: 5000, orders: 300 },
  { name: 'أبريل', sales: 4500, orders: 278 },
  { name: 'مايو', sales: 6000, orders: 389 },
  { name: 'يونيو', sales: 5500, orders: 349 },
];

const pieData = [
  { name: 'المنتجات', value: 400, color: '#3b82f6' },
  { name: 'الخدمات', value: 300, color: '#8b5cf6' },
  { name: 'الاستشارات', value: 200, color: '#06b6d4' },
  { name: 'أخرى', value: 100, color: '#10b981' },
];

const recentActivities = [
  { id: 1, action: 'تم إضافة مستخدم جديد', user: 'أحمد محمد', time: 'منذ 5 دقائق' },
  { id: 2, action: 'تم تحديث الإعدادات', user: 'سارة أحمد', time: 'منذ 15 دقيقة' },
  { id: 3, action: 'طلب جديد تم استلامه', user: 'محمد علي', time: 'منذ 30 دقيقة' },
  { id: 4, action: 'تم إنشاء تقرير جديد', user: 'فاطمة حسن', time: 'منذ ساعة' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'إجمالي المستخدمين',
      value: '12,345',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'إجمالي الطلبات',
      value: '8,765',
      change: '+8%',
      changeType: 'positive',
      icon: ShoppingCart,
      color: 'bg-green-500'
    },
    {
      title: 'إجمالي المبيعات',
      value: '$54,321',
      change: '+15%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      title: 'معدل النمو',
      value: '23.5%',
      change: '+3%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">لوحة التحكم</h1>
            </div>
            
            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <Badge 
                        variant={stat.changeType === 'positive' ? 'default' : 'destructive'}
                        className="text-xs"
                      >
                        {stat.change}
                      </Badge>
                      <span className="text-xs text-slate-500 mr-2">من الشهر الماضي</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
            <TabsTrigger value="users">المستخدمين</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sales Chart */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 ml-2" />
                    مبيعات الشهر
                  </CardTitle>
                  <CardDescription>
                    إحصائيات المبيعات والطلبات للأشهر الستة الماضية
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="orders" stroke="#8b5cf6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Pie Chart */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="w-5 h-5 ml-2" />
                    توزيع الإيرادات
                  </CardTitle>
                  <CardDescription>
                    توزيع الإيرادات حسب فئات المنتجات
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {pieData.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full ml-2"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-slate-600">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 ml-2" />
                  النشاطات الأخيرة
                </CardTitle>
                <CardDescription>
                  آخر النشاطات والتحديثات في النظام
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">{activity.action}</p>
                        <p className="text-sm text-slate-600">بواسطة {activity.user}</p>
                      </div>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>التحليلات المتقدمة</CardTitle>
                <CardDescription>
                  تحليلات مفصلة لأداء النظام والمستخدمين
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#3b82f6" />
                    <Bar dataKey="orders" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>إدارة المستخدمين</CardTitle>
                <CardDescription>
                  عرض وإدارة جميع المستخدمين في النظام
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Button>إضافة مستخدم جديد</Button>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 ml-2" />
                      تصفية
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="text-right p-4">الاسم</th>
                          <th className="text-right p-4">البريد الإلكتروني</th>
                          <th className="text-right p-4">الدور</th>
                          <th className="text-right p-4">تاريخ الانضمام</th>
                          <th className="text-right p-4">الإجراءات</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-4">أحمد محمد</td>
                          <td className="p-4">ahmed@example.com</td>
                          <td className="p-4">
                            <Badge>مدير</Badge>
                          </td>
                          <td className="p-4">2024-01-15</td>
                          <td className="p-4">
                            <Button variant="ghost" size="sm">تعديل</Button>
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-4">سارة أحمد</td>
                          <td className="p-4">sara@example.com</td>
                          <td className="p-4">
                            <Badge variant="secondary">مستخدم</Badge>
                          </td>
                          <td className="p-4">2024-01-20</td>
                          <td className="p-4">
                            <Button variant="ghost" size="sm">تعديل</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>إعدادات النظام</CardTitle>
                <CardDescription>
                  تحكم في إعدادات النظام العامة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">الإعدادات العامة</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">الإشعارات</p>
                          <p className="text-sm text-slate-600">تفعيل الإشعارات الفورية</p>
                        </div>
                        <Button variant="outline">تفعيل</Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">النسخ الاحتياطي</p>
                          <p className="text-sm text-slate-600">النسخ الاحتياطي التلقائي</p>
                        </div>
                        <Button variant="outline">إعداد</Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">الأمان</p>
                          <p className="text-sm text-slate-600">إعدادات الأمان والحماية</p>
                        </div>
                        <Button variant="outline">تكوين</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}