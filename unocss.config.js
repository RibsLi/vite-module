import { defineConfig, presetUno, presetAttributify, presetTagify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTagify({
      prefix: 'uno-'
    })
  ],
  rules: [],
  shortcuts: [],
  transformers: [],
  theme: {},
  safelist: [], // 安全名单
  layers: {
    components: -1,
    default: 1,
    utilities: 2
  }, // 优先级
  preflights: [
    {
      getCSS: () => `
        body {
          font-size: 16px;
          font-family: 'Source Han Sans CN, Source Han Sans CN-Normal';
          font-weight: 400;
        }
      `
    }
  ]
})
