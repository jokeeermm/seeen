'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BarChart3, Users, Shield, Zap, Globe, Star, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: BarChart3,
      title: 'تحليلات متقدمة',
      description: 'احصل على رؤى عميقة حول أداء عملك مع لوحة تحكم تفاعلية'
    },
    {
      icon: Users,
      title: 'إدارة المستخدمين',
      description: 'نظام شامل لإدارة المستخدمين والصلاحيات بسهولة تامة'
    },
    {
      icon: Shield,
      title: 'أمان عالي',
      description: 'حماية متقدمة للبيانات مع أحدث معايير الأمان'
    },
    {
      icon: Zap,
      title: 'أداء سريع',
      description: 'تجربة مستخدم سريعة ومتجاوبة على جميع الأجهزة'
    },
    {
      icon: Globe,
      title: 'متعدد اللغات',
      description: 'دعم كامل للغة العربية والإنجليزية'
    },
    {
      icon: Star,
      title: 'تصميم حديث',
      description: 'واجهة مستخدم عصرية وسهلة الاستخدام'
    }
  ];

  const stats = [
    { number: '10K+', label: 'مستخدم نشط' },
    { number: '99.9%', label: 'وقت التشغيل' },
    { number: '24/7', label: 'دعم فني' },
    { number: '50+', label: 'ميزة متقدمة' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">نظام الإدارة</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">المميزات</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">حول النظام</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">تواصل معنا</a>
              <Link href="/admin">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  دخول الإدارة
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-slate-600">المميزات</a>
              <a href="#about" className="block py-2 text-slate-600">حول النظام</a>
              <a href="#contact" className="block py-2 text-slate-600">تواصل معنا</a>
              <Link href="/admin" className="block py-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  دخول الإدارة
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            الإصدار الجديد متاح الآن
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            نظام إدارة
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> متكامل</span>
            <br />
            لإدارة أعمالك بكفاءة
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            اكتشف قوة الإدارة الذكية مع نظامنا المتطور. واجهة سهلة الاستخدام، تحليلات متقدمة، 
            وأدوات قوية لتنمية أعمالك وتحقيق أهدافك.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/admin">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                ابدأ الآن مجاناً
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              شاهد العرض التوضيحي
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              مميزات استثنائية لإدارة متميزة
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              اكتشف الأدوات والمميزات التي تجعل من نظامنا الخيار الأمثل لإدارة أعمالك
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            جاهز لتطوير أعمالك؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            انضم إلى آلاف الشركات التي تثق في نظامنا لإدارة أعمالها بكفاءة ونجاح
          </p>
          <Link href="/admin">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-slate-900 hover:bg-slate-100">
              ابدأ رحلتك الآن
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">نظام الإدارة</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                نظام إدارة متكامل وحديث لتطوير أعمالك وتحقيق أهدافك بكفاءة عالية.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">المنتج</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">المميزات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسعار</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأمان</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">الشركة</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">المدونة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الوظائف</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">الدعم</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تواصل معنا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الحالة</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 نظام الإدارة المتكامل. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}