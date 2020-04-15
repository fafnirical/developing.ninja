module.exports = {
  client: {
    name: 'developing.ninja',
    tagName: 'graphql',
    includes: ['./src/**/*.{ts,tsx}', './src/gatsby-plugin-documents.graphql'],
    service: {
      name: 'GatsbyJS',
      localSchemaFile: './src/gatsby-schema.graphql',
    },
  },
};
