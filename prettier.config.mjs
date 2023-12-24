/**
 * @type {import('prettier').Config}
 */
const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  // endOfLine: 'lf', // Handled by EditorConfig.
  htmlWhitespaceSensitivity: 'ignore',
  insertPragma: false,
  jsxSingleQuote: false,
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
