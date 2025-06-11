import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Habilita acesso externo
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 3000, // Importante para evitar erros de WebSocket no EC2
    },
  },
});
