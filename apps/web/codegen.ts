import { loadEnvConfig } from '@next/env'
import type { CodegenConfig } from '@graphql-codegen/cli';

loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  schema: process.env.API_URL,
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ['urql-introspection']
    }
  }
};

export default config;
