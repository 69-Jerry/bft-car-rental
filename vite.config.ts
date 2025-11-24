import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteSitemapPlugin from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    ViteSitemapPlugin({
      hostname: 'https://mybftservice.com',
      outDir: 'dist',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/contact',
        '/team',
        '/sales',
        '/gallery',
        '/diaspora',
      ],
      changefreq: 'daily',
      priority: 1.0,
    }),
  ],
})
