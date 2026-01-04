# API Integration Guide

## ✅ เสร็จแล้ว: Projects ดึงข้อมูลจาก Backend API

### 📁 ไฟล์ที่สร้าง/แก้ไข:

1. **src/types/project.ts** - TypeScript type definitions
2. **src/services/api.ts** - API service สำหรับดึงข้อมูล
3. **src/components/Project.tsx** - อัพเดทให้ดึงข้อมูลจาก API

### 🚀 วิธีใช้งาน:

#### 1. Start Backend Server (ต้องรันก่อน)
```bash
cd My-Personal-Backend
pnpm dev
```
Backend จะรันที่: http://localhost:3001

#### 2. Start Website
```bash
cd My-Personal-Website
npm run dev
```
Website จะรันที่: http://localhost:5173 (หรือ port ที่ Vite กำหนด)

#### 3. ดูผลลัพธ์
- เปิด browser ไปที่ website
- Scroll ลงไปที่ section "My Projects"
- จะเห็น projects ที่ดึงมาจาก database

### 🎨 Features:

✅ **Auto-refresh data**: ดึงข้อมูลทุกครั้งที่โหลดหน้า
✅ **Loading state**: แสดง "Loading projects..." ขณะกำลังดึงข้อมูล
✅ **Error handling**: แสดง error message และปุ่ม Retry
✅ **Empty state**: แสดงข้อความถ้าไม่มี project
✅ **Image fallback**: แสดง placeholder ถ้ารูปโหลดไม่ได้
✅ **Responsive**: รองรับ mobile (1 column) และ desktop (2 columns)
✅ **Hover effects**: แสดง title และ description เมื่อ hover

### 📊 ข้อมูลที่แสดง:

- **Project Image**: รูปจาก MinIO (หรือ base64 จาก database)
- **Project Name**: ชื่อ project
- **Description**: รายละเอียดของ project

### 🔧 การปรับแต่ง:

#### เปลี่ยน API URL:
แก้ไขในไฟล์ `src/services/api.ts`:
```typescript
const API_BASE_URL = 'http://localhost:3001/api';
```

#### ดึงเฉพาะ projects ของ user คนหนึ่ง:
แก้ไขในไฟล์ `src/components/Project.tsx`:
```typescript
const data = await getProjects(1); // ดึง projects ของ user ID 1
```

#### เปลี่ยนจำนวน columns:
แก้ไขใน className:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-5"> {/* 3 columns */}
```

### 🎯 Flow การทำงาน:

1. Component mount → เรียก `loadProjects()`
2. `loadProjects()` → เรียก API `getProjects()`
3. API request → Backend ที่ http://localhost:3001/api/projects
4. Backend query → PostgreSQL database
5. Response → Project data (รวม MinIO URLs)
6. แสดงผล → Project cards with images

### 🐛 Troubleshooting:

**ถ้า projects ไม่แสดง:**
1. ตรวจสอบ Backend รันอยู่ที่ port 3001
2. เปิด Browser Console (F12) ดู error messages
3. ตรวจสอบ CORS settings (ถ้ามี error CORS)
4. ตรวจสอบว่ามี projects ใน database

**ถ้ารูปไม่แสดง:**
1. ตรวจสอบ MinIO anonymous policy (รัน: `pnpm run minio:setup`)
2. ตรวจสอบ URL ของรูปใน Browser Console
3. ลอง upload รูปใหม่

### 📝 Next Steps:

- เพิ่ม Search functionality
- เพิ่ม Filter by category/tag
- เพิ่ม Pagination
- เพิ่ม Project detail page
- เพิ่ม Animation effects


