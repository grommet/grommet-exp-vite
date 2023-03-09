import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import image from '@rollup/plugin-image';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [image(), react(), vanillaExtractPlugin()],
})
