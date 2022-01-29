/**
 * @type {import('graphql-config').IGraphQLConfig}
 */
module.exports = {
  schema: './src/gatsby-schema.graphql',
  documents: ['./src/**/*.{ts,tsx}', './src/gatsby-plugin-documents.graphql'],
};
