import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {loadEnv} from 'vite';
import {resolve} from 'path';
import {visualizer} from 'rollup-plugin-visualizer';
import legacy from '@vitejs/plugin-legacy'
import polyfillNode from 'rollup-plugin-polyfill-node';
import viteImagemin from 'vite-plugin-imagemin'
import history from 'vite-plugin-history'

// https://vitejs.dev/config/
export default ({mode}) => {
    const __DEV__ = mode === 'development'

    return defineConfig({
        plugins: [
            react(__DEV__ ? {jsxRuntime: 'classic'} : ""),
            legacy({
                targets: ['defaults', 'not IE 11']
            }),
            history({
                rewrites: [{
                    from: /^\/$/,
                    to: './index.html'
                }]
            }),
            viteImagemin({
                gifsicle: {
                    optimizationLevel: 7,
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 7,
                },
                mozjpeg: {
                    quality: 50,
                },
                pngquant: {
                    quality: [0.8, 0.9],
                    speed: 4,
                },
                svgo: {
                    plugins: [
                        {
                            name: 'removeViewBox',
                        },
                        {
                            name: 'removeEmptyAttrs',
                            active: false,
                        },
                    ],
                },
            }),
        ],
        publicDir: "public",
        base: './',
        assetsInclude: "",
        logLevel: "info",
        clearScreen: false,
        server: {
            "host": 'localhost',
            "port": 3001,
            "strictPort": false,
            base: '/',
            // https: true,
            "open": '/',
            "hmr": {
                "overlay": false, /* 为 false 可以禁用服务器错误遮罩层 */
            },
            proxy: {
                '/api': {
                    target: 'https://ic0.app',
                    changeOrigin: true,
                }
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        css: {
            preprocessorOptions: {
                less: {}
            }
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
                    'node_modules/three/**',
                    'node_modules/three/three/examples/jsm/libs/tween.module.min.js'
                ],
                defaultIsModuleExports: 'auto',
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
            chunkSizeWarningLimit: 500
        }
    })
}