module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-idiomatic-order', 'stylelint-plugin-stylus/standard'],
  // plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'selector-pseudo-class-no-unknown': null,
    'color-hex-case': 'lower',
    'stylus/number-leading-zero': null,
    'stylus/selector-type-no-unknown': [
      true,
      {
        ignoreNamespaces: ['scroll-view'],
        ignoreTypes: ['scroll-view']
      }
    ],
    'stylus/selector-list-comma': ['always'],
    'stylus/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', '/apply/', 'variants', 'responsive', 'screen']
      }
    ],
    'stylus/semicolon': ['never'],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx']
      }
    ],
    'no-descending-specificity': null,
    'no-empty-source': null,
    'font-family-no-missing-generic-family-keyword': null
  }
}
