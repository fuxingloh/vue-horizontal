import {resolve} from "path";
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: 'dev',
  alias: {
    '@': resolve(__dirname, 'src')
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/VueHorizontal.ts'),
      name: 'VueHorizontal'
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: './dist',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
