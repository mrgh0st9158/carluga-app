import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
 plugins: [
   react(),
   VitePWA({
     registerType: 'autoUpdate',
     includeAssets: [
       'favicon.svg',
       'favicon.ico',
       'apple-touch-icon.png',
     ],
     manifest: {
       name: 'Aplicativo de aluguel de veículos',
       short_name: 'Carluga',
       description: 'Aplicativo utilizado para ser um meio entre o locador de locatário de aluguel',
       theme_color: '#F62440',
       background_color: '#FFE5BF',
       display: 'standalone',
       icons: [
         {
           src: 'icons/icon-192x192.png',
           sizes: '192x192',
           type: 'image/png',
         },
         {
           src: 'icons/icon-512x512.png',
           sizes: '512x512',
           type: 'image/png',
         },
       ],
     },
   }),
 ],
});




