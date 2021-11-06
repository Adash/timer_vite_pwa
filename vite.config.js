import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
    manifest: {
      name: 'Timer with PWA',
      short_name: 'TimerPWA',
      description: 'Description of your app',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'logo192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'logo512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'logo512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  })]
})
