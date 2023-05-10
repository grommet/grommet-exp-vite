import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import image from "@rollup/plugin-image";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        svgoConfig: {
          plugins: [
            {
              name: "removeViewBox",
              active: false,
            },
            "removeDimensions",
          ],
        },
      },
    }),
    image(),
    react(),
    vanillaExtractPlugin(),
  ],
});
