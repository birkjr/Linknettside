import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), imagetools()],

  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@mui/icons-material', '@mui/material'],
          supabase: ['@supabase/supabase-js'],
          // Admin components (larger bundle)
          admin: [
            './src/components/Admin/AdminEvents.tsx',
            './src/components/Admin/AdminJobs.tsx',
            './src/components/Admin/AdminNews.tsx',
            './src/components/Admin/AdminBoard.tsx',
            './src/components/Admin/AdminPartners.tsx',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase limit slightly
  },
  base: '/',
});
