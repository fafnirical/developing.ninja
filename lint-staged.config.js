/**
 * @type {import('@schemastore/lintstagedrc.schema').BasicConfig}
 */
const config = {
  '*.{js,jsx,ts,tsx}': [
    () => ['tsc --noEmit'],
    'eslint --cache --cache-location node_modules/.cache/eslint --fix',
  ],

  'package.json': 'sort-package-json',
};

const prettier =
  'prettier --cache --cache-location node_modules/.cache/prettier --write --ignore-unknown';

module.exports = Object.fromEntries([
  // Add prettier to each linter task or task list.
  ...Object.entries(config).map(([pattern, linter]) => [
    pattern,
    [...(Array.isArray(linter) ? linter : [linter]), prettier],
  ]),

  // Format everything else with prettier.
  [
    [
      '*',
      Object.keys(config).map((pattern) =>
        pattern.split(', ').map((subpattern) => `!${subpattern}`),
      ),
    ]
      .flat(2)
      .join(', '),
    prettier,
  ],
]);
