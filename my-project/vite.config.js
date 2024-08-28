import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Travel_new/', // This should match the path in GitHub Pages
  plugins: [react()],
});
///