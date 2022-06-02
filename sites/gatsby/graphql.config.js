const { existsSync } = require('fs');

const gatsbySchemaPath = './src/gatsby-schema.graphql';

/**
 * @type {import('graphql-config').IGraphQLConfig}
 */
module.exports = {
  schema: existsSync(gatsbySchemaPath) ? gatsbySchemaPath : undefined,
  documents: ['./src/**/*.{ts,tsx}', './src/gatsby-plugin-documents.graphql'],
};
