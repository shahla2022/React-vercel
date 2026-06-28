import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/process_imgSetting': {
        target: 'http://172.16.110.117:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/api/face-match': {
        target: 'https://replit.com',
        changeOrigin: true,
        secure: true,
        rewrite: () => '//railway-deploy--garibishahla.replit.app/compare',
      
        
      },
    },
  },
})
// https://railway-deploy--garibishahla.replit.app
//'/@garibishahla/railway-deploy/compare'