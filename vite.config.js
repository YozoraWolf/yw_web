import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'
import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), compression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@data': path.resolve(__dirname, '/src/data'),
      '@locales': path.resolve(__dirname, '/src/locales'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/vars.scss";`
      }
    }
  },
})
