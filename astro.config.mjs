// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://carana08.github.io',
  base: '/Contacto_Personal',
  vite: {
    plugins: [tailwindcss()]
  }
});