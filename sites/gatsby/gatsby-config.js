const { resolve } = require('path');

const rootDir = resolve(process.cwd(), '../..');

require('dotenv-safe').config({
  path: resolve(rootDir, '.env'),
  example: resolve(rootDir, '.env.example'),
});

/**
 * @type {import('gatsby').GatsbyConfig& {
 *   plugins: Array<
 *     | import('gatsby').PluginRef
 *     | {
 *         resolve: 'gatsby-plugin-typegen';
 *         options: import('gatsby-plugin-typegen/types').PluginOptions;
 *       }
 *   >;
 * }}
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
        },
        emitPluginDocuments: {
          './src/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
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
