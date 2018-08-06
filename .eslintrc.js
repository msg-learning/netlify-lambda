module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'space-in-parens': [
      'error',
      'always',
      { exceptions: [ 'empty' ] }
    ],
    semi: [ 'error', 'always' ],
    'padded-blocks': 'off',
    'no-return-assign': 'off',
    'indent': [ 'error', 4 ],
    'vue/html-indent': [
      'error',
      4
    ],
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/html-quotes': [
      'error',
      'double'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}