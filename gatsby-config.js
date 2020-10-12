require('dotenv-safe').config();

/**
 * @type {import('gatsby').GatsbyConfig
 *   & {
 *     plugins?: Array<
 *       import('gatsby').PluginRef |
 *       {
 *         resolve: 'gatsby-plugin-typegen';
 *         options: import('gatsby-plugin-typegen/types').PluginOptions
 *       }
 *     >
 *   }
 * }
 */
module.exports = {
  plugins: [
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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        useNameForId: false,
      },
    },
  ],
};
