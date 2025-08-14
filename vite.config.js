import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/Travelholic/',
    build: {
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [react()],
  "@tailwindcss/postcss": {},
})
