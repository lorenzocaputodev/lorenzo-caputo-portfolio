import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    ignores: ['dist/**', 'dist-ssr/**', 'playwright-report/**', 'test-results/**'],
  },
  js.configs.recommended,
  {
    files: ['*.config.js', 'scripts/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    // Playwright tests run in Node, but callbacks passed to evaluate() run in the browser.
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      // Content is a static, trusted object: prop-types add noise without catching real bugs here.
      'react/prop-types': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
]
