/**
 * @type {import('@schemastore/huskyrc').HuskyConfiguration}
 */
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
