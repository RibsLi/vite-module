import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    chunkSizeWarningLimit: 1000,
    // TODO:发布时删除 console, 设置 drop_console: true
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: false }
    }
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  plugins: [
    vue(),
    Unocss(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      dts: './auto-imports.d.ts', // Default `./auto-imports.d.ts`
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: 'readonly' // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
