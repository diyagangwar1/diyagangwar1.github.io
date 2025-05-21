import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/diyagangwar1.github.io/',
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.webp', '**/*.svg'],
  server: {
    hmr: {
      overlay: false
    }
  }
})
