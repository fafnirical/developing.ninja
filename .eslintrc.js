const path = require('path');

const graphqlRuleConfig = {
  env: 'literal',
  schemaJsonFilepath: path.resolve(
    __dirname,
    './src/gatsby-introspection.json',
  ),
  tagName: 'graphql',
};

/**
 * @type {import('eslint').Linter.Config & import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config}
 */
const config = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': ['error', graphqlRuleConfig],
    'graphql/named-operations': ['error', graphqlRuleConfig],
    'graphql/capitalized-type-name': ['error', graphqlRuleConfig],
    'graphql/no-deprecated-fields': ['error', graphqlRuleConfig],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
      ],
      parserOptions: {
        project: './tsconfig.json',
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

module.exports = config;
