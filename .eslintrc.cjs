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
    'airbnb-base',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:import/typescript',
    'prettier',
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
  rules: {
    '@eslint-community/eslint-comments/no-unused-disable': 'error',
  },
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
};
