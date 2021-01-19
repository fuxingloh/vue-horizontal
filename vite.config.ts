import {resolve} from "path";
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  plugins: [vue(), commonjs()],
  root: 'dev',
  alias: {
    '@': resolve(__dirname, 'src')
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/entry.ts'),
      name: 'VueHorizontal'
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})
