/**
 * @type {import('@schemastore/lintstagedrc.schema').BasicConfig}
 */
module.exports = {
  // Text
  '*.{json,md,yaml,yml}': 'prettier --write',

  // JavaScript/TypeScript
  '*.{js,jsx,ts,tsx}': 'eslint --cache --fix',
};
