const pkg = require('./package.json')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: pkg.dependencies.react
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',

    // place prettier at last
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    semi: ['error', 'never']
  }
}
