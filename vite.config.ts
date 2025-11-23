
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative base path so it works on any GitHub repo name (vivarman or Vivarman_newsite)
  base: './', 
  build: {
    outDir: 'dist',
  },
});
