
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vivarman/', // CHANGE THIS TO YOUR REPO NAME IF DIFFERENT
  build: {
    outDir: 'dist',
  },
});
