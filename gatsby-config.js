/**
 * @type {import('gatsby').GatsbyConfig | { plugins?: Array<string | { resolve: string; options: Record<string, unknown> } | { resolve: 'gatsby-plugin-typegen'; options: import('gatsby-plugin-typegen/types').PluginOptions }> }}
 */
const config = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        language: 'typescript',
        outputPath: './src/gatsby-graphql-types.d.ts',
        emitSchema: {
          './src/gatsby-schema.graphql': true,
          './src/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          './src/gatsby-plugin-documents.graphql': true,
        },
      },
    },
  ],
};

module.exports = config;
