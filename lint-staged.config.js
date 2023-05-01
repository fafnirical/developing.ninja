const prettier =
  'prettier --cache --cache-location node_modules/.cache/prettier --write';

/**
 * @type {import('@schemastore/lintstagedrc.schema').BasicConfig}
 */
module.exports = {
  '*, !*.{js,jsx,ts,tsx}': `${prettier} --ignore-unknown`,

  '*.{js,jsx,ts,tsx}': [
    () => ['tsc --noEmit'],
    'eslint --cache --cache-location node_modules/.cache/eslint --fix',
    prettier,
  ],
};
