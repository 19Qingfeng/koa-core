module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  globals: {
    ParamsException: true,
    HttpException: true,
    validateError: true,
  },
  rules: {
    'no-console': ['warn'],
  },
};
