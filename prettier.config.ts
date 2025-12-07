import type { Config } from 'prettier';

const config: Config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  // endOfLine: 'lf', // Handled by EditorConfig.
  htmlWhitespaceSensitivity: 'ignore',
  insertPragma: false,
  jsxSingleQuote: false,
  overrides: [
    {
      files: ['.github/**/speckit.*.md', '.specify/**/*.md', 'specs/**/*.md'],
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: true,
  // tabWidth: 2, // Handled by EditorConfig.
  trailingComma: 'all',
  // useTabs: false, // Handled by EditorConfig.
  vueIndentScriptAndStyle: false,
};

export default config;
