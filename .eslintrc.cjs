/**
 * @type {import('eslint')
 *   .Linter.Config<
 *     import('eslint/rules').ESLintRules
 *   > &
 *     import('@typescript-eslint/utils').TSESLint.Linter.Config
 * }
 */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // JS
    'eslint:recommended',
    'plugin:import/recommended',

    // React
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/react',
    'plugin:jsx-a11y/recommended',

    // TypeScript
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/typescript',

    // Stylistic
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:perfectionist/recommended-natural',
    'prettier',
  ],
  overrides: [
    {
      // This override acts only as a list of file extensions to lint.
      files: [
        '**/.*.js',
        '**/*.js',
        '**/.*.cjs',
        '**/*.cjs',
        '**/.*.mjs',
        '**/*.mjs',
        '**/*.jsx',
        '**/.*.ts',
        '**/*.ts',
        '**/.*.cts',
        '**/*.cts',
        '**/.*.mts',
        '**/*.mts',
        '**/*.tsx',
      ],
    },
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    // Report on unused disable directives.
    // This has the same effect as the `--report-unused-disable-directives` flag.
    '@eslint-community/eslint-comments/no-unused-disable': 'error',

    // Turn off rules that potentially conflict with eslint-plugin-perfectionist.
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/sort-type-constituents': 'off',
    'import/order': 'off',
    'react/jsx-sort-props': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
  },
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
    react: {
      linkComponents: [
        {
          linkAttribute: 'to',
          name: 'Link',
        },
        {
          linkAttribute: 'to',
          name: 'NavLink',
        },
      ],
    },
  },
};
