import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import react from '@eslint-react/eslint-plugin';
import eslint from '@eslint/js';
import gitignore from 'eslint-config-flat-gitignore';
import prettier from 'eslint-config-prettier/flat';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';
import { configs as typescript } from 'typescript-eslint';

export default defineConfig(
  gitignore(),

  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },

  comments.recommended,

  eslint.configs.recommended,

  typescript.strictTypeChecked,
  typescript.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver(),
        createNodeResolver(),
      ],
    },
  },

  react.configs['recommended-type-checked'],

  perfectionist.configs['recommended-natural'],
  {
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      '@typescript-eslint/sort-type-constituents': 'off',
      'eslint-plugin-import-x/order': 'off',
      'eslint-plugin-import/order': 'off',
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
          internalPattern: ['^#.+'],
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },

  prettier,
);
