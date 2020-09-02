module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'always',
    }],
    'linebreak-style': 0,
    'global-require': 0,
    'no-undef': 0,
  }
}
