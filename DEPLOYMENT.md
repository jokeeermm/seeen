# دليل النشر

## نشر المشروع على منصات مختلفة

### 1. Vercel (الأسهل والأسرع)

```bash
# تثبيت Vercel CLI
npm install -g vercel

# تسجيل الدخول
vercel login

# نشر المشروع
vercel

# للنشر في الإنتاج
vercel --prod
```

### 2. Netlify

```bash
# بناء المشروع
npm run build

# رفع مجلد out/ إلى Netlify
# أو استخدام Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

### 3. GitHub Pages

```bash
# إضافة إعدادات GitHub Pages في next.config.js
# تم إعدادها مسبقاً

# بناء المشروع
npm run build

# رفع المجلد out/ إلى فرع gh-pages
```

### 4. Docker

```dockerfile
# إنشاء Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# بناء الصورة
docker build -t admin-dashboard .

# تشغيل الحاوية
docker run -p 3000:3000 admin-dashboard
```

## متغيرات البيئة للإنتاج

```bash
# .env.production
NODE_ENV=production
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your-production-secret
DATABASE_URL=your-production-database-url
```

## نصائح للنشر

1. **تأكد من متغيرات البيئة**: قم بإعداد جميع متغيرات البيئة المطلوبة
2. **اختبر البناء محلياً**: `npm run build` قبل النشر
3. **تحقق من الأمان**: غيّر كلمات المرور الافتراضية
4. **مراقبة الأداء**: استخدم أدوات مراقبة الأداء
5. **النسخ الاحتياطي**: قم بعمل نسخ احتياطية منتظمة

## استكشاف الأخطاء

### مشاكل شائعة:
- **خطأ في البناء**: تحقق من TypeScript errors
- **مشاكل الصور**: تأكد من إعداد `images.unoptimized: true`
- **مسارات خاطئة**: تحقق من `basePath` في next.config.js