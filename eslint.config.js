import js from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import react from '@eslint-react/eslint-plugin';
import gitignore from 'eslint-config-flat-gitignore';
import prettier from 'eslint-config-prettier';
import * as oxcResolver from 'eslint-import-resolver-oxc';
import imports from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import { configs as typescriptConfigs } from 'typescript-eslint';

/**
 * @type {Array<
 *   | import('eslint').Linter.Config
 *   | import('@typescript-eslint/utils').TSESLint.FlatConfig.Config
 * >}
 */
const config = [
  gitignore(),
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  js.configs.recommended,
  comments.recommended,
  imports.flatConfigs.recommended,
  {
    settings: {
      'import-x/resolver': {
        name: 'oxc',
        resolver: oxcResolver,
      },
    },
  },
  ...typescriptConfigs.strictTypeChecked,
  ...typescriptConfigs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  imports.flatConfigs.typescript,
  react.configs.recommended,
  react.configs['recommended-type-checked'],

  perfectionist.configs['recommended-natural'],
  {
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      '@typescript-eslint/sort-type-constituents': 'off',
      'eslint-plugin-import/order': 'off',
      'eslint-plugin-import-x/order': 'off',
      'react/jsx-sort-props': 'off',
      'sort-imports': 'off',
      'sort-keys': 'off',
    },
  },
  {
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: ['#*', '#*/**'],
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },

  prettier,
];

export default config;
