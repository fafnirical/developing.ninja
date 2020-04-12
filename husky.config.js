/**
 * @type {import('@schemastore/huskyrc').HuskyConfiguration}
 */
const config = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};

module.exports = config;
