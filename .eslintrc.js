/**
 * @type {Partial<import('eslint-plugin-graphql').RuleProperties>}
 */
const graphqlRuleConfig = {
  env: 'literal',
  tagName: 'graphql',
};

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
    'prettier/react',
  ],
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': ['error', graphqlRuleConfig],
    'graphql/named-operations': ['error', graphqlRuleConfig],
    'graphql/capitalized-type-name': ['error', graphqlRuleConfig],
    'graphql/no-deprecated-fields': ['error', graphqlRuleConfig],
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
      files: ['**/*.js', '**/*.ts'],
      excludedFiles: ['src/**/*'],
      extends: ['plugin:node/recommended'],
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
      ],
      parserOptions: {
        project: 'tsconfig.json',
      },
      settings: {
        'import/parser': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import-resolver': {
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
    {
      files: ['**/*.d.ts'],
      rules: {
        'node/no-unpublished-import': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
      },
    },
  ],
};
