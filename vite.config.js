import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import legacy from "@vitejs/plugin-legacy";
import polyfillNode from "rollup-plugin-polyfill-node";
import history from "vite-plugin-history";
import requireTransform from "vite-plugin-require-transform";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const __DEV__ = mode === "development";

  return defineConfig({
    plugins: [
      react(__DEV__ ? { jsxRuntime: "classic" } : ""),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
      history({
        rewrites: [
          {
            from: /^\/$/,
            to: "./index.html",
          },
        ],
      }),
      requireTransform({}),
    ],
    publicDir: "public",
    base: "./",
    assetsInclude: "",
    logLevel: "info",
    clearScreen: false,
    server: {
      host: "localhost",
      port: 3001,
      strictPort: false,
      base: "/",
      // https: true,
      open: "/",
      hmr: {
        overlay: false /* 为 false 可以禁用服务器错误遮罩层 */,
      },
      proxy: {
        "/api": {
          target: "https://ic0.app",
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        less: {},
      },
    },
    //打包配置
    build: {
      rollupOptions: {},
      target: "modules",
      outDir: "dist",
      assetsDir: "assets",
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      sourcemap: false,
      commonjsOptions: {
        include: /node_modules|libs/,
        exclude: [
          "node_modules/three/**",
          "node_modules/three/three/examples/jsm/libs/tween.module.min.js",
        ],
        defaultIsModuleExports: "auto",
        transformMixedEsModules: true,
      },
      manifest: false,
      // boolean | 'terser' | 'esbuild'
      minify: "terser", //terser
      terserOptions: {
        compress: {
          drop_console: !__DEV__,
          drop_debugger: !__DEV__,
        },
      },
      write: true,
      emptyOutDir: true,
      brotliSize: true,
      chunkSizeWarningLimit: 500,
    },
  });
};
