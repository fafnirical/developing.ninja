const path = require('path');
const fs = require('fs');

/**
 * @type {Partial<import('eslint-plugin-graphql').RuleProperties>}
 */
const graphqlRuleConfig = {
  env: 'literal',
  schemaJsonFilepath: path.resolve(
    __dirname,
    './src/gatsby-introspection.json',
  ),
  tagName: 'graphql',
};

const graphqlSchemaExists = graphqlRuleConfig.schemaJsonFilepath
  ? fs.existsSync(graphqlRuleConfig.schemaJsonFilepath)
  : true;

/**
 * @type {import('eslint')
 *   .Linter.Config<
 *     import('eslint/rules').ESLintRules & import('eslint-plugin-graphql').Rules
 *   > &
 *     import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config
 * }
 */
module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['graphql'],
  rules: {
    ...(graphqlSchemaExists && {
      'graphql/template-strings': ['error', graphqlRuleConfig],
      'graphql/named-operations': ['error', graphqlRuleConfig],
      'graphql/capitalized-type-name': ['error', graphqlRuleConfig],
      'graphql/no-deprecated-fields': ['error', graphqlRuleConfig],
    }),
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.d.ts',
          '**/.eslintrc.js',
          '**/husky.config.js',
          '**/prettier.config.js',
          'apollo.config.js',
        ],
      },
    ],
    'eslint-comments/no-unused-disable': 'error',
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
        project: 'tsconfig.json',
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
