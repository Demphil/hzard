import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, './src'), // المسار إلى ملفات المصدر
  publicDir: path.resolve(__dirname, './public'), // المسار إلى المجلد العام
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, './index.html') // المسار إلى ملف HTML الرئيسي
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // إنشاء alias للمسارات
    }
  }
})
