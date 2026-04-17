import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages serves this repo under /devport/, while Netlify serves at root.
  base: process.env.GITHUB_ACTIONS ? '/devport/' : '/',
  plugins: [react()],
})
