import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: __dirname, // المسار الجذري للمشروع (frontend/)
  publicDir: path.resolve(__dirname, 'public'),
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html')
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // اختصار لاستيراد الملفات من src/
    }
  },
  server: {
    port: 3000, // يمكنك تغيير المنفذ إذا لزم الأمر
    open: true // يفتح المتصفح تلقائياً عند بدء التشغيل
  }
})
