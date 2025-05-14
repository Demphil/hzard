import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'frontend'),  // تحديد المسار الصحيح
  publicDir: path.resolve(__dirname, 'frontend/public'),
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'frontend/public/index.html')
    }
  }
})
