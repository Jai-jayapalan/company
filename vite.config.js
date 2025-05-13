import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr'],
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../C-Backend/dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['axios']
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3500',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1')
      }
    },
    historyApiFallback: true
  },
  preview: {
    historyApiFallback: true
  }
})