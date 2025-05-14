import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'  // إذا أضفت vite-plugin-svgr

export default defineConfig({
  plugins: [
    react(),
    svgr()  // إذا أضفت vite-plugin-svgr
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
