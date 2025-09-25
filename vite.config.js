import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://abderrahmaneBouzemlal.github.io/dashbord-tailwind-svelte/',
  plugins: [
    svelte(),
    tailwindcss(),
  ],
})
