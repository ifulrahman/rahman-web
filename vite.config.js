import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://doa-doa-api-ahmadramadhan.fly.dev',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
