/**
 * @type {Partial<import('eslint-plugin-graphql').RuleProperties>}
 */
const graphqlRuleConfig = {
  env: 'literal',
  tagName: 'graphql',
};

/**
 * @type {import('eslint')
 *   .Linter.Config<
 *     import('eslint/rules').ESLintRules & import('eslint-plugin-graphql').Rules
 *   > &
 *     import('@typescript-eslint/utils').TSESLint.Linter.Config
 * }
 */
module.exports = {
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': ['error', graphqlRuleConfig],
    'graphql/named-operations': ['error', graphqlRuleConfig],
    'graphql/capitalized-type-name': ['error', graphqlRuleConfig],
    'graphql/no-deprecated-fields': ['error', graphqlRuleConfig],
  },
};
