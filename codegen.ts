import { loadEnvConfig } from '@next/env'
import type { CodegenConfig } from '@graphql-codegen/cli';

loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  schema: process.env.RAILWAY_API_URL,
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": { preset: "client" }
  }
};

export default config;
