require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:vue-pug/vue3-recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaFeatures: {
      // 支持装饰器
      legacyDecorators: true
    }
  },
  globals: {
    getCurrentPages: false,
    $ref: true
  },
  rules: {
    'no-console': [
      1,
      {
        allow: ['info', 'warn', 'error']
      }
    ],
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0
  }
}
