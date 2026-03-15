// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if using React; otherwise import your framework plugin or omit
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),     // optional - remove if not using React
    tailwindcss(), // <<-- tailwind plugin
  ],
})
