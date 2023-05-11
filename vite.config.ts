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
        dimensions: false,
        svgoConfig: {
          plugins: [
            // {
            //   removeAttrs: {
            //     attrs: 'path:stroke',
            //   },
            // },
            {
              name: 'removeAttrs',
              params: {
                attrs: 'path:stroke',
              },
            },
            // {
            //   name: "removeAttributesBySelector",
            //   params: {
            //     selector: "[stroke='#000']",
            //     attributes: ["stroke"],
            //   },
            // },
          ],
        },
      },
    }),
    image(),
    react(),
    vanillaExtractPlugin(),
  ],
});
