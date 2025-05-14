export default defineConfig({
  root: path.resolve(__dirname, './'),
  publicDir: path.resolve(__dirname, './public'),
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, './public/index.html')
    }
  }
})
