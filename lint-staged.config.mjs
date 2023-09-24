/**
 * @typedef {string | string[]} Task
 * @typedef {(filenames: string[]) => Task | Promise<Task>} FunctionTask
 * @typedef {Record<string, Task | FunctionTask | (Task | FunctionTask)[]> | FunctionTask} Config
 */

/**
 * @type {Config}
 */
const baseConfig = {
  '*.{js,jsx,ts,tsx}': [
    () => ['tsc --noEmit'],
    'eslint --cache --cache-location node_modules/.cache/eslint --fix',
  ],

  'package.json': 'sort-package-json',
};

const prettier =
  'prettier --cache --cache-location node_modules/.cache/prettier --write --ignore-unknown';

/**
 * @type {Config}
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const config = Object.fromEntries([
  // Add prettier to each linter task or task list.
  ...Object.entries(baseConfig).map(([pattern, linter]) => [
    pattern,
    [...(Array.isArray(linter) ? linter : [linter]), prettier],
  ]),

  // Format everything else with prettier.
  [
    [
      '*',
      Object.keys(baseConfig).map((pattern) =>
        pattern.split(', ').map((subpattern) => `!${subpattern}`),
      ),
    ]
      .flat(2)
      .join(', '),
    prettier,
  ],
]);

export default config;
