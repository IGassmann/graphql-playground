const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

/** @type {import('graphql-config').IGraphQLConfig} */
const config = {
  schema: process.env.API_URL,
  documents: 'src/**/*.tsx',
  extensions: {
    codegen: {
      generates: {
        'src/gql/': {
          preset: 'client',
          plugins: ['urql-introspection'],
        },
      },
    },
  },
};

module.exports = config;
