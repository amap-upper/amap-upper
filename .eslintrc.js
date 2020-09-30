module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    "ecmaVersion": 6
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
  },
  "globals": {
    AMap: false, // false 不允许被重写
  },
  parser: 'babel-eslint',
  // extends: ['elemefe']

};