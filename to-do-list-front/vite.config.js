import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acesso via IP público e rede local
    port: 3000,      // Porta do frontend (altere se necessário)
    strictPort: true, // Não tenta outras portas automaticamente
  },
});
