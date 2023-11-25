const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd())

/** @type {import('graphql-config').GraphQLConfig} */
const config = {
  schema: process.env.RAILWAY_API_URL,
  documents: "src/**/*.tsx",
  extensions: {
    codegen: {
      generates: {
        "src/gql/": {
          preset: "client",
          plugins: ['urql-introspection']
        }
      }
    }
  },
};

module.exports = config;
