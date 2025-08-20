// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

export default defineConfig(({ mode }) => ({      // ← ahora recibimos mode
  base: '/web/',                                  // GitHub Pages subcarpeta

  build: { sourcemap: true },                     // mapas de origen en prod

  server: {
    host: '0.0.0.0',                              // o true
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),  // solo en dev
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
