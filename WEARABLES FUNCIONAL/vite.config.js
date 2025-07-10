import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // <-- necesario si usas rutas relativas
  build: {
    outDir: 'dist', // Render espera el build aquí
  }
})
