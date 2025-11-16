import type { Configuration, GenerateTask, TaskFunction } from 'lint-staged';

type Task =
  | (GenerateTask | string | TaskFunction)[]
  | GenerateTask
  | string
  | TaskFunction;

const baseConfig: Configuration = {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}': [
    () => 'tsc --noEmit',
    'eslint --cache --cache-location node_modules/.cache/eslint --fix',
  ],

  'package.json': 'sort-package-json',
};

const prettierTask: Task =
  'prettier --cache --cache-location node_modules/.cache/prettier --write --ignore-unknown';

const config = Object.fromEntries<Task>([
  // Add prettier to each linter task or task list.
  ...Object.entries(baseConfig).map<[string, Task]>(([pattern, linter]) => [
    pattern,
    [...(Array.isArray(linter) ? linter : [linter]), prettierTask],
  ]),

  // Format everything else with prettier.
  [`!(${Object.keys(baseConfig).join('|')})`, prettierTask],
]);

export default config;
