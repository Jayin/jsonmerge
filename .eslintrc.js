module.exports = {
  root: true,
  extends: ['fritx', 'fritx/node', 'fritx/es5-loose'],
  ignorePatterns: [
    // third-party libraries
    'strip-json-comments/**/*.js'
  ],
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    'es5/no-block-scoping': 0,
    'object-curly-spacing': 0,
    'padded-blocks': 0,
    camelcase: 0
  }
}
