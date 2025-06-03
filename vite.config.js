import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  base: '/',
  plugins: [react()],
  // server:
  //   process.env.NODE_ENV === 'development'
  //     ? {
  //         https: {
  //           key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
  //           cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
  //         },
  //       }
  //     : {},
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@public': path.resolve(__dirname, 'public'),
    },
  },
});
