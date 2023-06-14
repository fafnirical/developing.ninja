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
    'prettier',
  ],
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
    {
      files: [
        '**/.*.ts',
        '**/*.ts',
        '**/.*.cts',
        '**/*.cts',
        '**/.*.mts',
        '**/*.mts',
        '**/*.tsx',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier',
      ],
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      settings: {
        'import/resolver': {
          typescript: true,
        },
      },
    },
  ],
};
