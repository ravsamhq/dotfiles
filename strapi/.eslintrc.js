module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
    },
    sourceType: 'module',
  },
  globals: {
    strapi: true,
  },
  rules: {
    'no-unused-vars': ['off'],
  },
}
