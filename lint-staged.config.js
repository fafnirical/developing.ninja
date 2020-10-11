/**
 * @type {import('@schemastore/lintstagedrc.schema').BasicConfig}
 */
module.exports = {
  // Text
  '*.{json,md,yaml,yml}': 'prettier --write',

  // JavaScript/TypeScript
  '*.{js,jsx,ts,tsx}': [
    'eslint --cache --cache-location node_modules/.cache/eslint --fix',
    () => 'tsc --project tsconfig.json --noEmit',
  ],
};
