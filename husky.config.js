/**
 * @type {import('@schemastore/huskyrc').HuskyConfiguration}
 */
module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
