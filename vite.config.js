import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'public/about.html'),
        kpis: resolve(__dirname, 'public/kpis.html'),
        knowledgebase: resolve(__dirname, 'public/knowledgebase.html'),
      },
    },
  },
  // Ensure assets are properly processed
  assetsInclude: ['**/*.md'],
  // Ensure public directory is properly handled
  publicDir: 'public',
});
