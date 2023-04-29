/**
 * @type {import('eslint')
 *   .Linter.Config<
 *     import('eslint/rules').ESLintRules
 *   > &
 *     import('@typescript-eslint/utils').TSESLint.Linter.Config
 * }
 */
module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@eslint-community/eslint-comments/no-unused-disable': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: ['tsconfig.json'],
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: 'tsconfig.json',
          },
        },
      },
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],
        // Use TypeScript interfaces instead of prop-types.
        'react/prop-types': 'off',
      },
    },
  ],
};
